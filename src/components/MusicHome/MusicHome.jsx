import { useState } from "react";
import {
  MusicMenuContainer,
  NewMusicMenuBannerContainer,
  NewMusicMenuBannerDataBox,
  NewMusicMenuBannerKnowMoreButton,
  NewMusicMenuBannerSubTitle,
  NewMusicMenuBannerTitle,
  NewMusicMenuBannerTypeTitle,
  NewMusicMenuSectionBox,
} from "./styled";

import BackgroundImage from "../../assets/imgs/kendrick-image.png";

export default () => {
  return (
    <MusicMenuContainer>
      <NewMusicMenuSectionBox>
        <NewMusicMenuBannerContainer BackgroundImage={BackgroundImage}>
          <NewMusicMenuBannerTypeTitle>
            new album on charts
          </NewMusicMenuBannerTypeTitle>

          <NewMusicMenuBannerDataBox className="data-box">
            <NewMusicMenuBannerTitle>GNX</NewMusicMenuBannerTitle>
            <NewMusicMenuBannerSubTitle>
              A new album by Kendrick Lamar. <br /> Kendrick’s glossy,
              hyper-local sixth album arrives after a year of unimpeachable
              victories. The question is, how much do you enjoy watching him
              take lap after lap?
            </NewMusicMenuBannerSubTitle>
          </NewMusicMenuBannerDataBox>

          <NewMusicMenuBannerKnowMoreButton>
            Listen Now
          </NewMusicMenuBannerKnowMoreButton>
        </NewMusicMenuBannerContainer>
      </NewMusicMenuSectionBox>
    </MusicMenuContainer>
  );
};
