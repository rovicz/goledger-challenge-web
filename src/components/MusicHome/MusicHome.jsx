import { useEffect, useRef, useState } from "react";

import { BiAlbum } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";

import BackgroundImage from "../../assets/imgs/kendrick-image.png";
import loading from "../../assets/imgs/loadingPage.svg";
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
  MerchandiseOtherArtistsImage,
  ArtistsSectionContainer,
  ArtistsSectionTitle,
  ArtistsImageBox,
  ArtistsImageSpan,
  ArtistsItem,
  ArtistsImage,
  ArtistsSpacingBox,
  Loading,
} from "./styled";

export default () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScrollInactive, setIsScrollInactive] = useState({
    albums: false,
    artists: false,
  });
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const recentAlbumsRef = useRef(null);
  const artistsRef = useRef(null);

  const getAllAlbums = async () => {
    const resAlbums = await apiRoutes.getAllAlbums();
    const allAlbums = resAlbums.data.result;

    allAlbums.map(async (item) => {
      const resArtistName = await apiRoutes.getArtist(item?.artist["@key"]);

      if (resArtistName.status === 200) {
        if (resArtistName.data.result[0]["@key"] === item?.artist["@key"]) {
          item.artist.artistName = resArtistName.data?.result[0]?.name;
        }

        setTimeout(() => {
          setAlbums(allAlbums);
          setIsLoaded(true);
        }, 500);
      }
    });
  };

  const getAllArtists = async () => {
    const resArtists = await apiRoutes.getAllArtists();
    const allArtists = resArtists.data.result;

    if (allArtists) {
      setArtists(allArtists);
    }
  };

  useEffect(() => {
    getAllAlbums();
    getAllArtists();
  }, []);

  useEffect(() => {
    if (recentAlbumsRef && recentAlbumsRef.current) {
      recentAlbumsRef.current.addEventListener("scroll", () => {
        setIsScrollInactive({
          albums: true,
        });
      });

      recentAlbumsRef.current.addEventListener("scrollend", () => {
        setIsScrollInactive({
          albums: false,
        });
      });
    }

    if (artistsRef && artistsRef.current) {
      artistsRef.current.addEventListener("scroll", () => {
        setIsScrollInactive({
          artists: true,
        });
      });

      artistsRef.current.addEventListener("scrollend", () => {
        setIsScrollInactive({
          artists: false,
        });
      });
    }
  }, [recentAlbumsRef, artistsRef]);

  return (
    <MusicMenuContainer>
      {!isLoaded && <Loading src={loading} />}
      {isLoaded && (
        <>
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
                    hyper-local sixth album arrives after a year of
                    unimpeachable victories. The question is, how much do you
                    enjoy watching him take lap after lap?
                  </NewMusicMenuBannerSubTitle>
                </NewMusicMenuBannerDataBox>

                <NewMusicMenuBannerKnowMoreButton
                  onClick={() => window.startMusic()}
                >
                  Listen Now
                </NewMusicMenuBannerKnowMoreButton>
              </NewMusicMenuBannerBox>
            </NewMusicMenuBannerContainer>

            <RecentAlbumsSectionTitle>Recent Albums</RecentAlbumsSectionTitle>

            <RecentAlbumsBox
              ref={recentAlbumsRef}
              OnInactiveScroll={isScrollInactive.albums}
            >
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

              <MerchandiseBox
                onClick={() =>
                  window.open(
                    "https://www.umusicstore.com/kendrick-lamar",
                    "_blank",
                  )
                }
              >
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

              <MerchandiseBox
                onClick={() =>
                  window.open("https://www.umusicstore.com/artistas", "_blank")
                }
              >
                <MerchandiseArea>
                  <MerchandiseImageBox>
                    <MerchandiseImageSpan>New</MerchandiseImageSpan>
                    <MerchandiseOtherArtistsImage>
                      <IoPersonOutline />
                    </MerchandiseOtherArtistsImage>
                  </MerchandiseImageBox>

                  <MerchandiseDataBox>
                    <MerchandiseTitle>
                      Other Artirts Merchandise
                    </MerchandiseTitle>
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

            <ArtistsSectionContainer>
              <ArtistsSectionTitle>Artists</ArtistsSectionTitle>

              <ArtistsSpacingBox
                ref={artistsRef}
                OnInactiveScroll={isScrollInactive.artists}
              >
                {artists.map((item, index) => (
                  <MerchandiseBox>
                    <MerchandiseArea>
                      <MerchandiseImageBox>
                        <MerchandiseImageSpan>{index + 1}</MerchandiseImageSpan>
                        <MerchandiseOtherArtistsImage>
                          <IoPersonOutline />
                        </MerchandiseOtherArtistsImage>
                      </MerchandiseImageBox>

                      <MerchandiseDataBox>
                        <MerchandiseTitle>{item?.name}</MerchandiseTitle>
                        <MerchandiseSubTitle>
                          {item?.country}
                        </MerchandiseSubTitle>
                      </MerchandiseDataBox>
                    </MerchandiseArea>
                    <MerchandiseGoVisitArrowBox>
                      <MdKeyboardArrowRight />
                    </MerchandiseGoVisitArrowBox>
                  </MerchandiseBox>
                ))}
              </ArtistsSpacingBox>
            </ArtistsSectionContainer>
          </NewArtistsAndMoreSectionBox>
        </>
      )}
    </MusicMenuContainer>
  );
};
