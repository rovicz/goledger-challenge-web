import { useState } from "react";
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

import BackgroundImage from "../../assets/imgs/kendrick-image.png";

export default () => {
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

        <RecentAlbumsBox>
          <RecentAlbumsItem>
            <RecentAlbumsCoverImage src="https://i.scdn.co/image/ab67616d00001e02d9985092cd88bffd97653b58" />

            <RecentAlbumsDataBox>
              <RecentAlbumsTitle>gnX</RecentAlbumsTitle>
              <RecentAlbumsArtistName>Kendrick Lamar</RecentAlbumsArtistName>
            </RecentAlbumsDataBox>
          </RecentAlbumsItem>

          <RecentAlbumsItem>
            <RecentAlbumsCoverImage src="https://i.scdn.co/image/ab67616d00001e02d9985092cd88bffd97653b58" />

            <RecentAlbumsDataBox>
              <RecentAlbumsTitle>gnX</RecentAlbumsTitle>
              <RecentAlbumsArtistName>Kendrick Lamar</RecentAlbumsArtistName>
            </RecentAlbumsDataBox>
          </RecentAlbumsItem>

          <RecentAlbumsItem>
            <RecentAlbumsCoverImage src="https://i.scdn.co/image/ab67616d00001e02d9985092cd88bffd97653b58" />

            <RecentAlbumsDataBox>
              <RecentAlbumsTitle>gnX</RecentAlbumsTitle>
              <RecentAlbumsArtistName>Kendrick Lamar</RecentAlbumsArtistName>
            </RecentAlbumsDataBox>
          </RecentAlbumsItem>

          <RecentAlbumsItem>
            <RecentAlbumsCoverImage src="https://i.scdn.co/image/ab67616d00001e02d9985092cd88bffd97653b58" />

            <RecentAlbumsDataBox>
              <RecentAlbumsTitle>gnX</RecentAlbumsTitle>
              <RecentAlbumsArtistName>Kendrick Lamar</RecentAlbumsArtistName>
            </RecentAlbumsDataBox>
          </RecentAlbumsItem>

          <RecentAlbumsItem>
            <RecentAlbumsCoverImage src="https://i.scdn.co/image/ab67616d00001e02d9985092cd88bffd97653b58" />
            <RecentAlbumsDataBox>
              <RecentAlbumsTitle>gnX</RecentAlbumsTitle>
              <RecentAlbumsArtistName>Kendrick Lamar</RecentAlbumsArtistName>
            </RecentAlbumsDataBox>
          </RecentAlbumsItem>

          <RecentAlbumsItem>
            <RecentAlbumsCoverImage src="https://i.scdn.co/image/ab67616d00001e02d9985092cd88bffd97653b58" />
            <RecentAlbumsDataBox>
              <RecentAlbumsTitle>gnX</RecentAlbumsTitle>
              <RecentAlbumsArtistName>Kendrick Lamar</RecentAlbumsArtistName>
            </RecentAlbumsDataBox>
          </RecentAlbumsItem>

          <RecentAlbumsItem>
            <RecentAlbumsCoverImage src="https://i.scdn.co/image/ab67616d00001e02d9985092cd88bffd97653b58" />
            <RecentAlbumsDataBox>
              <RecentAlbumsTitle>gnX</RecentAlbumsTitle>
              <RecentAlbumsArtistName>Kendrick Lamar</RecentAlbumsArtistName>
            </RecentAlbumsDataBox>
          </RecentAlbumsItem>

          <RecentAlbumsItem>
            <RecentAlbumsCoverImage src="https://i.scdn.co/image/ab67616d00001e02d9985092cd88bffd97653b58" />
            <RecentAlbumsDataBox>
              <RecentAlbumsTitle>gnX</RecentAlbumsTitle>
              <RecentAlbumsArtistName>Kendrick Lamar</RecentAlbumsArtistName>
            </RecentAlbumsDataBox>
          </RecentAlbumsItem>

          <RecentAlbumsItem>
            <RecentAlbumsCoverImage src="https://i.scdn.co/image/ab67616d00001e02d9985092cd88bffd97653b58" />
            <RecentAlbumsDataBox>
              <RecentAlbumsTitle>gnX</RecentAlbumsTitle>
              <RecentAlbumsArtistName>Kendrick Lamar</RecentAlbumsArtistName>
            </RecentAlbumsDataBox>
          </RecentAlbumsItem>

          <RecentAlbumsItem>
            <RecentAlbumsCoverImage src="https://i.scdn.co/image/ab67616d00001e02d9985092cd88bffd97653b58" />
            <RecentAlbumsDataBox>
              <RecentAlbumsTitle>gnX</RecentAlbumsTitle>
              <RecentAlbumsArtistName>Kendrick Lamar</RecentAlbumsArtistName>
            </RecentAlbumsDataBox>
          </RecentAlbumsItem>

          <RecentAlbumsItem>
            <RecentAlbumsCoverImage src="https://i.scdn.co/image/ab67616d00001e02d9985092cd88bffd97653b58" />
            <RecentAlbumsDataBox>
              <RecentAlbumsTitle>gnX</RecentAlbumsTitle>
              <RecentAlbumsArtistName>Kendrick Lamar</RecentAlbumsArtistName>
            </RecentAlbumsDataBox>
          </RecentAlbumsItem>

          <RecentAlbumsItem>
            <RecentAlbumsCoverImage src="https://i.scdn.co/image/ab67616d00001e02d9985092cd88bffd97653b58" />
            <RecentAlbumsDataBox>
              <RecentAlbumsTitle>gnX</RecentAlbumsTitle>
              <RecentAlbumsArtistName>Kendrick Lamar</RecentAlbumsArtistName>
            </RecentAlbumsDataBox>
          </RecentAlbumsItem>
        </RecentAlbumsBox>
      </NewMusicMenuSectionBox>
    </MusicMenuContainer>
  );
};
