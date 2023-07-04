import { useState, useEffect } from "react";
import Axios from "axios";
import backEndServer from "../../config";

export const useAuthentication = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(false);
  console.log(userInfo + " user info");

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = () => {
    Axios.get(backEndServer + "/auth/check", { withCredentials: true })
      .then((response) => {
        setIsLoggedIn(true);
        console.log(response);
        setUserInfo(response.data.name);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return { isLoggedIn, userInfo };
};
