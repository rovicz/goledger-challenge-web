import { useState } from "react";

import { HiOutlineVolumeUp } from "react-icons/hi";
import { VscDebugRestart } from "react-icons/vsc";
import { TiArrowShuffle } from "react-icons/ti";
import { MdFullscreen } from "react-icons/md";
import {
  IoIosSkipBackward,
  IoIosSkipForward,
  IoIosPlayCircle,
} from "react-icons/io";

import {
  ActualMusicPlayingArtistName,
  ActualMusicPlayingBox,
  ActualMusicPlayingDataBox,
  ActualMusicPlayingImage,
  ActualMusicPlayingMoreOptionsBox,
  ActualMusicPlayingMusicName,
  ActualMusicPlayingOptionsContainer,
  ActualMusicPlayingOptionsVolumeBox,
  ActualMusicPlayingSpacing,
  ActualMusicPlayingTime,
  ActualMusicPlayingTimerInitialAndFinalBox,
  ActualMusicPlayingTimingBar,
  ActualMusicPlayingTimingBox,
  MenuBarSpacing,
  MusicBarBox,
  MusicBarContainer,
  ProgressBarAndTimingBox,
  SkipForwardBackWardAndPlayBox,
} from "./styled";

export default () => {
  return (
    <MusicBarContainer>
      <MusicBarBox>
        <ActualMusicPlayingSpacing>
          <ActualMusicPlayingBox>
            <ActualMusicPlayingImage src="https://i.scdn.co/image/ab67616d00001e02d9985092cd88bffd97653b58" />
            <ActualMusicPlayingDataBox>
              <ActualMusicPlayingMusicName>
                luther (ft. sza)
              </ActualMusicPlayingMusicName>

              <ActualMusicPlayingArtistName>
                Kendrick Lamar
              </ActualMusicPlayingArtistName>
            </ActualMusicPlayingDataBox>
          </ActualMusicPlayingBox>

          <ActualMusicPlayingTimingBox>
            <SkipForwardBackWardAndPlayBox>
              <IoIosSkipBackward
                style={{ width: 20, height: 20, color: "#ffffff30" }}
                className="skipButton"
              />{" "}
              <IoIosPlayCircle
                style={{ width: 40, height: 40, color: "#ffffff" }}
              />{" "}
              <IoIosSkipForward
                style={{ width: 20, height: 20, color: "#ffffff30" }}
                className="skipButton"
              />
            </SkipForwardBackWardAndPlayBox>

            <ProgressBarAndTimingBox>
              <ActualMusicPlayingTime>00:00</ActualMusicPlayingTime>
              <ActualMusicPlayingTimingBar />

              <ActualMusicPlayingTime>03:20</ActualMusicPlayingTime>
            </ProgressBarAndTimingBox>
          </ActualMusicPlayingTimingBox>

          <ActualMusicPlayingOptionsContainer>
            <ActualMusicPlayingOptionsVolumeBox>
              <HiOutlineVolumeUp
                style={{ width: 22, height: 22, color: "#ffffff60" }}
              />

              <ActualMusicPlayingTimingBar />
            </ActualMusicPlayingOptionsVolumeBox>

            <ActualMusicPlayingMoreOptionsBox>
              <TiArrowShuffle
                style={{ width: 22, height: 22, color: "#ffffff60" }}
              />
              <VscDebugRestart
                style={{ width: 20, height: 20, color: "#ffffff60" }}
              />
              <MdFullscreen
                style={{ width: 22, height: 22, color: "#ffffff60" }}
              />
            </ActualMusicPlayingMoreOptionsBox>
          </ActualMusicPlayingOptionsContainer>
        </ActualMusicPlayingSpacing>
      </MusicBarBox>
    </MusicBarContainer>
  );
};
