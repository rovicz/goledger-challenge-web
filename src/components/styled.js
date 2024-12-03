import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 100%;
  min-width: 200px;
  background: #3c3d37;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 0 10px 10px 0;
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
