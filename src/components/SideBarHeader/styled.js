import styled from "styled-components";

export const HeaderContainer = styled.div`
  min-width: 200px;
  //background: #3c3d37;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 0 10px 10px 0;

  @media (max-width: 550px) {
    display: none;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 100%;
  max-width: 180px;
  filter: invert(100%) sepia(6%) saturate(0%) hue-rotate(115deg)
    brightness(108%) contrast(108%);
`;

export const BrowseMusicMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin-top: 40px;
`;

export const BrowseMusicMenuTitle = styled.h2`
  font-size: 0.8rem;
  color: #fff;
  font-weight: bold;
  padding-left: 10px;
  margin-bottom: 10px;
`;

export const BrowseMusicMenuList = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  gap: 0.2rem;

  .selected a {
    background: #1e1e1e;
  }
`;

export const BrowseMusicMenuItem = styled.a`
  display: flex;
  align-items: center;
  color: #fff;
  gap: 1rem;
  font-size: 1.025rem;
  font-weight: 600;
  padding: 10px;
  cursor: pointer;
  transition: 0.2s;
  border-radius: 4px;

  &:hover {
    background: #1e1e1e;
  }
`;

export const Loading = styled.img`
  width: 40px;
  margin-left: 7px;
  filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%)
    hue-rotate(223deg) brightness(103%) contrast(103%);
`;
