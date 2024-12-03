import React from "react";

import { IoMdSearch } from "react-icons/io";

import {
  HeaderContainer,
  SearchMusicInput,
  SearchMusicInputBox,
} from "./styled";

export default () => {
  return (
    <HeaderContainer>
      <SearchMusicInputBox>
        <IoMdSearch />
        <SearchMusicInput placeholder="Search by artists, songs or albums" />
      </SearchMusicInputBox>
    </HeaderContainer>
  );
};
