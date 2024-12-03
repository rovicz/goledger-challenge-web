import styled from "styled-components";

export const HeaderContainer = styled.div`
  max-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const SearchMusicInputContainer = styled.div`
  position: relative;
  width: 20%;
  max-width: 560px;
`;

export const SearchMusicInputBox = styled.div`
  position: relative;
  width: 100%;

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
  border: 1px solid transparent;
  transition: 0.2s;

  &:focus {
    border: 1px solid #ffffff80;
  }
`;

export const MainOptionsBox = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const MainOptionsItem = styled.a`
  display: flex;
  align-items: center;
  color: #fff;
  gap: 1rem;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 10px;
  cursor: pointer;
  transition: 0.2s;
  border-radius: 4px;

  &:hover {
    background: #1e1e1e;
  }
`;

export const UserContainer = styled.div`
  display: flex;
`;

export const UserBox = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    background: #1e1e1e;
    padding: 10px;
    color: #ffffff80;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const UserName = styled.p`
  display: flex;
  align-items: center;
  font-size: 0.95rem;
  color: #fff;
`;
