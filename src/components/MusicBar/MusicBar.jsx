import { useEffect, useRef, useState } from "react";

import luther from "../../assets/audio/luther.gnx.mp3";

import { VscDebugRestart } from "react-icons/vsc";
import { TiArrowShuffle } from "react-icons/ti";
import { MdFullscreen } from "react-icons/md";
import { IoPauseCircle } from "react-icons/io5";
import { HiOutlineVolumeUp, HiOutlineVolumeOff } from "react-icons/hi";
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
  Audio,
  MenuBarSpacing,
  MusicBarBox,
  MusicBarContainer,
  ProgressBarAndTimingBox,
  SkipForwardBackWardAndPlayBox,
} from "./styled";
import { audioHelper } from "./helper/helper";

export default () => {
  const [isPaused, setIsPaused] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [durationFormated, setDurationFormated] = useState("");
  const [currentTimeFormated, setCurrentTimeFormated] = useState("");
  const [audioRawData, setAudioRawData] = useState({
    currentTime: 0,
    duration: 0,
  });
  const progressBarRef = useRef();
  const audioRef = useRef();
  const volumeRef = useRef();

  const handleProgress = () => {
    if (audioRef && audioRef.current) {
      setDurationFormated(audioHelper.formatTime(audioRef.current.duration));
      setCurrentTimeFormated(
        audioHelper.formatTime(audioRef.current.currentTime),
      );

      setAudioRawData({
        currentTime: audioRef.current.currentTime,
        duration: audioRef.current.duration,
        volume: 1.0,
      });
    }
  };

  const handlePlayPause = () => {
    if (audioRef && audioRef.current) {
      const audioPlayer = audioRef.current;

      if (audioPlayer.paused) {
        audioPlayer.play();
        setIsPaused(false);
      } else {
        audioPlayer.pause();
        setIsPaused(true);
      }
    }
  };

  const handleSeek = (e) => {
    let pos = e.pageX - progressBarRef.current.getBoundingClientRect().left;
    let percent = pos / progressBarRef.current.getBoundingClientRect().width;

    audioRef.current.currentTime = percent * audioRef.current.duration;
    progressBarRef.current.value = percent / 100;
  };

  const handleMuteOrUnmute = () => {
    if (audioRef && audioRef.current) {
      const audioPlayer = audioRef.current;

      if (audioPlayer.muted) {
        audioPlayer.muted = false;
        setIsMuted(false);
      } else {
        audioPlayer.muted = true;
        setIsMuted(true);
      }
    }
  };

  const handleChangeVolume = (e) => {
    let pos = e.pageX - volumeRef.current.getBoundingClientRect().left;
    let percent = pos / volumeRef.current.getBoundingClientRect().width;
    const audioPlayer = audioRef.current;

    audioPlayer.volume = percent;
    volumeRef.current.value = percent;
  };

  const handleRestartAudio = () => {
    if (audioRef && audioRef.current) {
      const audioPlayer = audioRef.current;

      audioPlayer.currentTime = 0;
    }
  };

  window.startMusic = function () {
    audioRef.current.play();
  };

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
              {isPaused ? (
                <IoIosPlayCircle
                  onClick={handlePlayPause}
                  style={{ width: 40, height: 40, color: "#ffffff" }}
                />
              ) : (
                <IoPauseCircle
                  onClick={handlePlayPause}
                  style={{ width: 40, height: 40, color: "#ffffff" }}
                />
              )}
              <IoIosSkipForward
                style={{ width: 20, height: 20, color: "#ffffff30" }}
                className="skipButton"
              />
            </SkipForwardBackWardAndPlayBox>

            <ProgressBarAndTimingBox>
              <ActualMusicPlayingTime>
                {currentTimeFormated}
              </ActualMusicPlayingTime>
              <ActualMusicPlayingTimingBar
                ref={progressBarRef}
                value={audioRawData.currentTime}
                max={audioRawData.duration}
                onClick={handleSeek}
              />

              <ActualMusicPlayingTime>
                {durationFormated}
              </ActualMusicPlayingTime>
            </ProgressBarAndTimingBox>
          </ActualMusicPlayingTimingBox>

          <ActualMusicPlayingOptionsContainer>
            <ActualMusicPlayingOptionsVolumeBox>
              {isMuted ? (
                <HiOutlineVolumeOff
                  onClick={handleMuteOrUnmute}
                  style={{ width: 22, height: 22, color: "#ffffff60" }}
                />
              ) : (
                <HiOutlineVolumeUp
                  onClick={handleMuteOrUnmute}
                  style={{ width: 22, height: 22, color: "#ffffff60" }}
                />
              )}

              <ActualMusicPlayingTimingBar
                ref={volumeRef}
                onClick={handleChangeVolume}
                value={1.0}
                max={1.0}
              />
            </ActualMusicPlayingOptionsVolumeBox>

            <ActualMusicPlayingMoreOptionsBox>
              <TiArrowShuffle
                style={{ width: 22, height: 22, color: "#ffffff60" }}
              />
              <VscDebugRestart
                onClick={handleRestartAudio}
                style={{ width: 20, height: 20, color: "#ffffff60" }}
              />
              <MdFullscreen
                style={{ width: 22, height: 22, color: "#ffffff60" }}
              />
            </ActualMusicPlayingMoreOptionsBox>

            <Audio
              onTimeUpdate={handleProgress}
              className="audio"
              ref={audioRef}
              src={luther}
            />
          </ActualMusicPlayingOptionsContainer>
        </ActualMusicPlayingSpacing>
      </MusicBarBox>
    </MusicBarContainer>
  );
};
