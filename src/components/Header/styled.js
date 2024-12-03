import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  max-height: 50px;
  display: flex;
  align-items: center;
  padding: 20px;
`;

export const SearchMusicInputBox = styled.div`
  position: relative;
  width: 30%;
  max-width: 560px;

  svg {
    position: absolute;
    width: 20px;
    height: 20px;
    color: #ffffff80;
    left: 10px;
    top: 25%;
  }
`;

export const SearchMusicInput = styled.input`
  display: flex;
  background: #1e1e1e;
  border-radius: 8px;
  width: 100%;
  color: #ffffff90;
  outline: none;
  border: none;
  padding: 12px 35px;
`;
