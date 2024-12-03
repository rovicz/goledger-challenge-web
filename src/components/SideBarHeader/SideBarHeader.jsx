import { useState } from "react";

import Logo from "../../assets/imgs/goLedger-Logo.svg";
import { IoHomeOutline, IoMusicalNoteOutline } from "react-icons/io5";
import { FaRegHeart, FaRegCalendarAlt } from "react-icons/fa";
import { BiAlbum } from "react-icons/bi";
import { GoDot } from "react-icons/go";

import {
  BrowseMusicMenuBox,
  BrowseMusicMenuItem,
  BrowseMusicMenuList,
  BrowseMusicMenuTitle,
  HeaderContainer,
  LogoBox,
  LogoImage,
} from "./styled";

export default () => {
  return (
    <HeaderContainer>
      <LogoBox>
        <LogoImage src={Logo} />
      </LogoBox>

      <BrowseMusicMenuBox>
        <BrowseMusicMenuTitle>Browse Music</BrowseMusicMenuTitle>

        <BrowseMusicMenuList>
          <BrowseMusicMenuItem>
            <IoHomeOutline style={{ width: 20, height: 20 }} /> Home
          </BrowseMusicMenuItem>

          <BrowseMusicMenuItem>
            <BiAlbum style={{ width: 20, height: 20 }} />
            Albums
          </BrowseMusicMenuItem>

          <BrowseMusicMenuItem>
            <IoMusicalNoteOutline style={{ width: 20, height: 20 }} />
            Genres
          </BrowseMusicMenuItem>
        </BrowseMusicMenuList>
      </BrowseMusicMenuBox>

      <BrowseMusicMenuBox>
        <BrowseMusicMenuTitle>Your Music</BrowseMusicMenuTitle>

        <BrowseMusicMenuList>
          <BrowseMusicMenuItem>
            <FaRegHeart style={{ width: 20, height: 20 }} />
            Favourites
          </BrowseMusicMenuItem>

          <BrowseMusicMenuItem>
            <FaRegCalendarAlt style={{ width: 20, height: 20 }} />
            History
          </BrowseMusicMenuItem>
        </BrowseMusicMenuList>
      </BrowseMusicMenuBox>

      <BrowseMusicMenuBox>
        <BrowseMusicMenuTitle>Your Playlists</BrowseMusicMenuTitle>

        <BrowseMusicMenuList>
          <BrowseMusicMenuItem>
            <GoDot style={{ width: 20, height: 20, color: "#7BFFFB" }} />
            Playlist 1
          </BrowseMusicMenuItem>

          <BrowseMusicMenuItem>
            <GoDot style={{ width: 20, height: 20, color: "#7BFFFB" }} />
            Playlist 2
          </BrowseMusicMenuItem>
        </BrowseMusicMenuList>
      </BrowseMusicMenuBox>
    </HeaderContainer>
  );
};
