import { useState } from "react";
import { HeaderContainer, LogoBox, LogoImage } from "./styled";
import Logo from "../assets/goLedger-Logo.svg";

export default () => {
  return (
    <HeaderContainer>
      <LogoBox>
        <LogoImage src={Logo} />
      </LogoBox>
    </HeaderContainer>
  );
};
