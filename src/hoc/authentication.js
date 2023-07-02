import axios from "axios";
import { AUTHENTICATION_URL, REFRESH_TOKEN_URL } from "../config/api.json";
import Cookies from "js-cookie";

const acess = async () => {
   try {
      // access 토큰으로 인증
      const accessResponse = await axios.get(AUTHENTICATION_URL);
      console.log("인증 성공 : " + accessResponse.status);
   } catch (err) {
      console.log("인증 실패");
      throw err;
   }
   return;
};

const refresh = async () => {
   try {
      // refresh 토큰으로 재발급
      const refreshToken = Cookies.get("refresh_token");
      const newAccessToken = await axios.post(REFRESH_TOKEN_URL, refreshToken);
      Cookies.set(
         "access_token",
         newAccessToken.data.access,
         newAccessToken.data.access_expiration
      );
      console.log("토큰 재발급");
   } catch (err) {
      console.log("토큰 재발급 실패");
      throw err;
   }
   return;
};

export default async function authentication() {
   console.log("authentication.js");
   const token = Cookies.get("access_token");

   try {
      token ? await acess().catch(async () => await refresh()) : await refresh();
      return true;
   } catch (err) {
      // 인증 실패
      console.error(err);
   }

   return false;
}
