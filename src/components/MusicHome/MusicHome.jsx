import { useEffect, useRef, useState } from "react";

import { BiAlbum } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";

import BackgroundImage from "../../assets/imgs/kendrick-image.png";
import { apiRoutes } from "../../services/apiRoutes";

import {
  MusicMenuContainer,
  MerchandiseSectionTitle,
  NewArtistsAndMoreSectionBox,
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
  RecentAlbumsSectionTitle,
  RecentAlbumsTitle,
  MerchandiseBox,
  MerchandiseImage,
  MerchandiseContainer,
  MerchandiseImageBox,
  MerchandiseImageSpan,
  MerchandiseTitle,
  MerchandiseSubTitle,
  MerchandiseDataBox,
  MerchandiseGoVisitArrowBox,
  MerchandiseArea,
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

        <RecentAlbumsSectionTitle>Recent Albums</RecentAlbumsSectionTitle>

        <RecentAlbumsBox ref={scrollRef} OnInactiveScroll={isScrollInactive}>
          {albums.map((item) => (
            <RecentAlbumsItem
              key={item["@key"]}
              onClick={() => console.log(item)}
            >
              <RecentAlbumsCoverImage className="albumCover">
                <BiAlbum style={{ width: 80, height: 80, color: "#000" }} />
              </RecentAlbumsCoverImage>

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

      <NewArtistsAndMoreSectionBox>
        <MerchandiseContainer>
          <MerchandiseSectionTitle>Merchandise</MerchandiseSectionTitle>

          <MerchandiseBox>
            <MerchandiseArea>
              <MerchandiseImageBox>
                <MerchandiseImageSpan>New</MerchandiseImageSpan>
                <MerchandiseImage src="https://universalmusic.vtexassets.com/arquivos/ids/189080-800-800?v=638681556258030000&width=800&height=800&aspect=true" />
              </MerchandiseImageBox>

              <MerchandiseDataBox>
                <MerchandiseTitle>GNX Album Merchandise</MerchandiseTitle>
                <MerchandiseSubTitle>
                  LP's, T-shirts, Hoodies & more.
                </MerchandiseSubTitle>
              </MerchandiseDataBox>
            </MerchandiseArea>
            <MerchandiseGoVisitArrowBox>
              <MdKeyboardArrowRight />
            </MerchandiseGoVisitArrowBox>
          </MerchandiseBox>
        </MerchandiseContainer>
      </NewArtistsAndMoreSectionBox>
    </MusicMenuContainer>
  );
};
