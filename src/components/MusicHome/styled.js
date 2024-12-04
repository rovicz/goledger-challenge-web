import styled from "styled-components";

export const MusicMenuContainer = styled.div`
  display: flex;
  height: 100%;
  max-height: 100%;
  padding: 20px;
  color: #fff;
`;

export const NewMusicMenuSectionBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const NewMusicMenuBannerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  border-radius: 10px;
  background: #fff;
  flex-direction: column;
  justify-content: space-between;
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

export const RecentAlbumsBox = styled.div`
  display: grid;
  width: 100%;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 15px;
  max-height: calc(560px - 120px);
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
`;

export const RecentAlbumsItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
  transition: 0.35s;

  &:hover {
    background: #ffffff30;
    border-radius: 4px;
    padding: 7.5px;
  }
`;

export const RecentAlbumsCoverImage = styled.img`
  border-radius: 10px;
  width: 100%;
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
