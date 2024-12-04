import React from "react";
import SideBarHeader from "../../components/SideBarHeader/SideBarHeader";
import Header from "../../components/Header/Header";
import MusicHome from "../../components/MusicHome/MusicHome";
import MusicBar from "../../components/MusicBar/MusicBar";
import { ContentArea } from "./styled";

export default () => {
  return (
    <>
      <SideBarHeader />
      <ContentArea>
        <Header />
        <MusicHome />
      </ContentArea>

      <MusicBar />
    </>
  );
};
