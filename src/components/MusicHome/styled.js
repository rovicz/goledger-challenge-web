import styled from "styled-components";

export const MusicMenuContainer = styled.div`
  display: flex;
  height: calc(95vh - 80px);
  padding: 20px;
  gap: 1rem;
  color: #fff;

  @media (max-width: 550px) {
    flex-direction: column;
    padding-top: 0;
  }
`;

export const NewMusicMenuSectionBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  @media (max-height: 768px) {
    width: 70%;
  }

  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const NewMusicMenuBannerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
  border-radius: 10px;
  background: #fff;
  flex-direction: column;
  justify-content: space-between;

  @media (max-height: 768px) {
    height: auto;
  }
`;

export const NewMusicMenuBannerBox = styled.div`
  height: 100%;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${(props) => props.BackgroundImage});
  background-repeat: no-repeat;
  background-position: right;

  @media (max-height: 768px) {
    background-size: 420px;
  }

  @media (max-width: 550px) {
    gap: 3rem;
    background-size: 240px;
    background-position: bottom right;
  }
`;

export const NewMusicMenuBannerTypeTitle = styled.h3`
  color: #000;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
`;

export const NewMusicMenuBannerDataBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45%;

  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const NewMusicMenuBannerTitle = styled.h1`
  color: #000;
  font-size: 3rem;
  font-weight: 600;

  &::selection {
    color: #fff;
    background: #000;
  }
`;

export const NewMusicMenuBannerSubTitle = styled.p`
  color: #000;
  font-size: 0.9rem;
`;

export const NewMusicMenuBannerKnowMoreButton = styled.button`
  background: transparent;
  border: 0.5px solid #000;
  color: #000;
  padding: 5px 15px;
  width: 120px;
  border-radius: 4px;
  font-family: Poppins;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #000;
    color: #fff;
    border: 0.5px solid #ffff;
  }
`;

export const RecentAlbumsSectionTitle = styled.h1`
  font-size: 1.25rem;
  color: #fff;
  font-weight: bold;
  margin-top: 15px;
  text-transform: uppercase;
`;

export const RecentAlbumsBox = styled.div`
  display: grid;
  width: 100%;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 10px;
  height: calc(50% - 20px);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffffff80;
    border-radius: 20px;
    display: ${(props) => (props.OnInactiveScroll ? "block" : "none")};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #00aaff;
  }

  @media (max-height: 768px) {
    height: 35%;
    gap: 0.3rem;
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
    height: 420px;
  }
`;

export const RecentAlbumsItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
  transition: 0.3s;
  padding: 7.5px;

  &:hover {
    background: #ffffff30;
    border-radius: 4px;
  }

  .albumCover:hover {
    height: 195px;
    transition: 0.5s;
  }

  @media (max-width: 550px) {
    .albumCover:hover {
      height: 140px !important;
    }
  }
`;

export const RecentAlbumsCoverImage = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 200px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-height: 768px) {
    height: 140px;
  }
`;

export const RecentAlbumsDataBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const RecentAlbumsTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  text-align: left;
`;

export const RecentAlbumsArtistName = styled.h3`
  font-size: 0.7rem;
  color: #fff;
  text-align: left;
`;

export const NewArtistsAndMoreSectionBox = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-height: 768px) {
    width: 30%;
  }

  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const MerchandiseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
  height: 30%;

  @media (max-height: 768px) {
    height: auto;
  }
`;

export const MerchandiseSectionTitle = styled.h1`
  font-size: 1.25rem;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`;

export const MerchandiseBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  gap: 1rem;
  border-radius: 10px;
  padding: 10px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: #ffffff20;
  }
`;

export const MerchandiseImageBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const MerchandiseImageSpan = styled.span`
  font-size: 0.8rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  width: 30px;
`;

export const MerchandiseImage = styled.img`
  display: flex;
  width: 80px;
  border-radius: 10px;
`;

export const MerchandiseOtherArtistsImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  border-radius: 10px;
  background: #fff;
  height: 100%;

  svg {
    color: #000;
    height: 35px;
    width: 35px;
  }
`;

export const MerchandiseDataBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MerchandiseTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: 600;
`;

export const MerchandiseSubTitle = styled.p`
  font-size: 0.7rem;
`;

export const MerchandiseArea = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 550px) {
    height: 80px;
  }
`;

export const MerchandiseGoVisitArrowBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    cursor: pointer;
    padding: 3px;
    transition: 0.3s;
    width: 30px;
    height: 30px;
  }
`;

export const ArtistsSpacingBox = styled.div`
  display: grid;
  width: 100%;
  gap: 1rem;
  grid-template-columns: repeat(1, 1fr);
  margin-top: 10px;
  height: 42%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffffff80;
    border-radius: 20px;
    display: ${(props) => (props.OnInactiveScroll ? "block" : "none")};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #00aaff;
  }

  @media (max-height: 768px) {
    height: 20%;
  }

  @media (max-width: 550px) {
    height: 420px;
    display: flex;
    flex-direction: column;
  }
`;

export const ArtistsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 550px) {
    margin-bottom: 90px;
  }
`;

export const ArtistsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  border-radius: 10px;
`;

export const ArtistsSectionTitle = styled.h1`
  font-size: 1.25rem;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`;

export const ArtistsImageBox = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ArtistsImageSpan = styled.span`
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 600;
`;

export const ArtistsImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  border-radius: 10px;
  background: #fff;
  height: 100%;

  svg {
    color: #000;
    height: 35px;
    width: 35px;
  }
`;

export const Loading = styled.img`
  width: 200px;
  margin: 0 auto;
  filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%)
    hue-rotate(223deg) brightness(103%) contrast(103%);
`;
