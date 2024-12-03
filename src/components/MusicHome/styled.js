import styled from "styled-components";

export const MusicMenuContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 20px;
  color: #fff;
`;

export const NewMusicMenuSectionBox = styled.div`
  display: flex;
  width: 60%;
`;

export const NewMusicMenuBannerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  border-radius: 10px;
  padding: 60px;
  background: #fff;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${(props) => props.BackgroundImage});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
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
  width: 50%;
`;

export const NewMusicMenuBannerTitle = styled.h1`
  color: #000;
  font-size: 3rem;
  font-weight: 600;
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
