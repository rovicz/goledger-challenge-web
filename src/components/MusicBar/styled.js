import styled from "styled-components";

export const MusicBarContainer = styled.footer`
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 1);
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;

  @media (max-width: 550px) {
    position: fixed;
  }
`;

export const MusicBarBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const MenuBarSpacing = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 30px;
  color: #fff;
`;

export const ActualMusicPlayingSpacing = styled.div`
  display: flex;
  width: 100%;
  padding: 0 15px;
  justify-content: space-between;
`;

export const ActualMusicPlayingBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  max-width: 15%;

  @media (max-width: 550px) {
    max-width: 45%;
  }
`;

export const ActualMusicPlayingImage = styled.img`
  width: 40px;
  border-radius: 4px;
`;

export const ActualMusicPlayingDataBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ActualMusicPlayingMusicName = styled.h3`
  font-size: 0.85rem;
  color: #fff;
`;

export const ActualMusicPlayingArtistName = styled.p`
  font-size: 0.6rem;
  color: #fff;
`;

export const ActualMusicPlayingTimingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;

  @media (max-width: 550px) {
    width: 55%;
  }
`;

export const ActualMusicPlayingTimingBar = styled.progress`
  width: 100%;
  height: 3.5px;
  appearance: none;
  border: none;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
  z-index: 1;

  &::-webkit-progress-bar {
    background-color: #ffffff40;
  }

  &::-webkit-progress-value {
    background-color: #ffffff;
  }
`;

export const ActualMusicPlayingTimerInitialAndFinalBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ActualMusicPlayingTime = styled.span`
  font-size: 0.7rem;
  color: #fff;
`;

export const ActualMusicPlayingOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 550px) {
    display: none;
  }
`;

export const ActualMusicPlayingOptionsVolumeBox = styled.div`
  min-width: 160px;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    cursor: pointer;
    padding: 3px;
    transition: 0.3s;
  }

  svg:hover {
    background: #ffffff30;
    color: #ffffff !important;
    border-radius: 4px;
  }
`;

export const ActualMusicPlayingMoreOptionsBox = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    cursor: pointer;
    padding: 3px;
    transition: 0.3s;
  }

  svg:hover {
    background: #ffffff30;
    color: #ffffff !important;
    border-radius: 4px;
  }
`;

export const SkipForwardBackWardAndPlayBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  .skipButton {
    cursor: pointer;
    padding: 3px;
    transition: 0.3s;
  }

  .skipButton:hover {
    background: #ffffff30;
    color: #ffffff !important;
    border-radius: 4px;
  }

  svg {
    cursor: pointer;
  }

  @media (max-width: 550px) {
    display: flex;
  }
`;

export const ProgressBarAndTimingBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.3rem;
`;
