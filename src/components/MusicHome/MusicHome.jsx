import { useEffect, useRef, useState } from "react";

import BackgroundImage from "../../assets/imgs/kendrick-image.png";
import { apiRoutes } from "../../services/apiRoutes";

import {
  MusicMenuContainer,
  NewMusicMenuBannerBox,
  NewMusicMenuBannerContainer,
  NewMusicMenuBannerDataBox,
  NewMusicMenuBannerKnowMoreButton,
  NewMusicMenuBannerSubTitle,
  NewMusicMenuBannerTitle,
  NewMusicMenuBannerTypeTitle,
  NewMusicMenuSectionBox,
  RecentAlbumsArtistName,
  RecentAlbumsBox,
  RecentAlbumsCoverImage,
  RecentAlbumsDataBox,
  RecentAlbumsItem,
  RecentAlbumsTitle,
} from "./styled";

export default () => {
  const [isScrollInactive, setIsScrollInactive] = useState(false);
  const [albums, setAlbums] = useState([]);
  const scrollRef = useRef(null);

  const getAllAlbums = async () => {
    const resAlbums = await apiRoutes.getAllAlbums();

    console.log(resAlbums.data.result);
    const allAlbums = resAlbums.data.result;

    allAlbums.map(async (item) => {
      const resArtistName = await apiRoutes.getArtist(item?.artist["@key"]);

      if (resArtistName.status === 200) {
        if (resArtistName.data.result[0]["@key"] === item?.artist["@key"]) {
          item.artist.artistName = resArtistName.data?.result[0]?.name;
        }

        setTimeout(() => {
          setAlbums(allAlbums);
        }, 500);
      }
    });
  };

  useEffect(() => {
    getAllAlbums();
  }, []);

  const getArtistName = async (artist_key) => {
    const resArtistName = await apiRoutes.getArtist(artist_key);

    console.log(resArtistName);
  };

  useEffect(() => {
    if (scrollRef && scrollRef.current) {
      scrollRef.current.addEventListener("scroll", () => {
        setIsScrollInactive(true);
      });

      scrollRef.current.addEventListener("scrollend", () => {
        setIsScrollInactive(false);
      });
    }
  }, [scrollRef]);

  return (
    <MusicMenuContainer>
      <NewMusicMenuSectionBox>
        <NewMusicMenuBannerContainer>
          <NewMusicMenuBannerBox BackgroundImage={BackgroundImage}>
            <NewMusicMenuBannerTypeTitle>
              new album on charts
            </NewMusicMenuBannerTypeTitle>

            <NewMusicMenuBannerDataBox className="data-box">
              <NewMusicMenuBannerTitle>GNX</NewMusicMenuBannerTitle>
              <NewMusicMenuBannerSubTitle>
                A new album by Kendrick Lamar. <br /> Kendrick’s glossy,
                hyper-local sixth album arrives after a year of unimpeachable
                victories. The question is, how much do you enjoy watching him
                take lap after lap?
              </NewMusicMenuBannerSubTitle>
            </NewMusicMenuBannerDataBox>

            <NewMusicMenuBannerKnowMoreButton>
              Listen Now
            </NewMusicMenuBannerKnowMoreButton>
          </NewMusicMenuBannerBox>
        </NewMusicMenuBannerContainer>

        <RecentAlbumsBox ref={scrollRef} OnInactiveScroll={isScrollInactive}>
          {albums.map((item) => (
            <RecentAlbumsItem
              key={item["@key"]}
              onClick={() => console.log(item)}
            >
              <RecentAlbumsCoverImage src="https://i.scdn.co/image/ab67616d00001e02d9985092cd88bffd97653b58" />

              <RecentAlbumsDataBox>
                <RecentAlbumsTitle
                  onClick={() => console.log(item.artist.artistName)}
                >
                  {item?.name}
                </RecentAlbumsTitle>
                <RecentAlbumsArtistName>
                  {item.artist?.artistName}
                </RecentAlbumsArtistName>
              </RecentAlbumsDataBox>
            </RecentAlbumsItem>
          ))}
        </RecentAlbumsBox>
      </NewMusicMenuSectionBox>
    </MusicMenuContainer>
  );
};
