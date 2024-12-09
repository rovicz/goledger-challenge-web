import { useEffect, useState } from "react";

import Logo from "../../assets/imgs/goLedger-Logo.svg";
import loading from "../../assets/imgs/loadingPage.svg";

import {
  IoHomeOutline,
  IoMusicalNoteOutline,
  IoCalendarOutline,
} from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BiAlbum } from "react-icons/bi";
import { GoDot } from "react-icons/go";

import {
  BrowseMusicMenuBox,
  BrowseMusicMenuItem,
  BrowseMusicMenuList,
  BrowseMusicMenuTitle,
  HeaderContainer,
  Loading,
  LogoBox,
  LogoImage,
} from "./styled";
import { apiRoutes } from "../../services/apiRoutes";

export default () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [playlists, setPlaylists] = useState([]);

  const getAllPlaylists = async () => {
    const resPlaylists = await apiRoutes.getAllPlaylists();

    if (resPlaylists.status === 200) {
      const playlists = resPlaylists.data.result;
      setPlaylists(playlists);
      setIsLoaded(true);
      console.log(resPlaylists.data.result);
    }
  };

  useEffect(() => {
    getAllPlaylists();
  }, []);

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
            <IoCalendarOutline style={{ width: 20, height: 20 }} />
            History
          </BrowseMusicMenuItem>
        </BrowseMusicMenuList>
      </BrowseMusicMenuBox>

      <BrowseMusicMenuBox>
        <BrowseMusicMenuTitle>Your Playlists</BrowseMusicMenuTitle>

        <BrowseMusicMenuList>
          {!isLoaded && <Loading src={loading} />}

          {isLoaded && (
            <>
              {playlists.map((item) => (
                <BrowseMusicMenuItem key={item["@key"]}>
                  <GoDot style={{ width: 20, height: 20, color: "#7BFFFB" }} />
                  {item?.name}
                </BrowseMusicMenuItem>
              ))}
            </>
          )}
        </BrowseMusicMenuList>
      </BrowseMusicMenuBox>
    </HeaderContainer>
  );
};
