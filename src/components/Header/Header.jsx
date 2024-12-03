import React from "react";

import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

import {
  HeaderContainer,
  MainOptionsBox,
  MainOptionsItem,
  SearchMusicInput,
  SearchMusicInputBox,
  SearchMusicInputContainer,
  UserBox,
  UserContainer,
  UserName,
} from "./styled";
import DropDownMenu from "./DropDownMenu/DropDownMenu";

export default () => {
  return (
    <HeaderContainer>
      <SearchMusicInputContainer>
        <SearchMusicInputBox>
          <IoMdSearch />
          <SearchMusicInput placeholder="Search by artists, songs or albums" />
        </SearchMusicInputBox>
      </SearchMusicInputContainer>

      <MainOptionsBox>
        <MainOptionsItem>New Releases</MainOptionsItem>
        <MainOptionsItem>News Feed</MainOptionsItem>
        <MainOptionsItem>Shuffle Play</MainOptionsItem>
      </MainOptionsBox>

      <UserContainer>
        <UserBox>
          {/* <FaRegUser /> */}

          <UserName>Victor Fernandes</UserName>

          <DropDownMenu />
        </UserBox>
      </UserContainer>
    </HeaderContainer>
  );
};
