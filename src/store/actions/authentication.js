import axios from "axios";
import { AUTHENTICATION_URL, REFRESH_TOKEN_URL } from "../../config/api.json";
import { AUTHENTICATION_ACCESS, AUTHENTICATION_REFRESH } from "../type.json";
import Cookies from "js-cookie";
import { initStore } from "../store";

export default async function authentication() {
   const actions = {
      [AUTHENTICATION_ACCESS]: async () => {
         console.log("AUTHENTICATION_ACCESS");

         try {
            const res = await axios.get(AUTHENTICATION_URL);
            const user = res.data;

            console.log("인증 성공 : " + res.status);
            console.dir(user);
            return { user: user };
         } catch (err) {
            console.log("인증 실패");
            throw err;
         }
      },
      [AUTHENTICATION_REFRESH]: async (store) => {
         console.log("AUTHENTICATION_REFRESH");

         try {
            // refresh 토큰으로 재발급
            const refreshToken = Cookies.get("refresh_token");
            const newAccessToken = await axios.post(REFRESH_TOKEN_URL, {
               refresh: refreshToken,
            });
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
      },
   };

   initStore(actions);
}
