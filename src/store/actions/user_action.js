import axios from "axios";
import { LOGIN_URL, MY_PROFILES_URL } from '../../config/api.json'
import { initStore } from "../store";
import { USER_LOGIN, GET_PROFILE } from "../type.json";
import Cookies from "js-cookie";

export default function userAction() {
   const actions = {
      [USER_LOGIN]: async (_, formData) => {
         console.log("user_action.js/USER_LOGIN");
         const userCookie = Cookies.get("user");
         const accessToken = Cookies.get("access_token");

         if(!userCookie || !accessToken) {
            try {
               const res = await axios.post(LOGIN_URL, formData);
               const user = res.data.user;
               const date = new Date();
               date.setMinutes(date.getMinutes() + 60);
               Cookies.set("user", JSON.stringify(user), { expires: date });
               console.log("로그인 성공");
               console.dir(user);
            }
            catch (err) {
               alert("로그인 중 에러가 발생했습니다.\nerror code : " + err)
            }
         } 
         return;
      },
      [GET_PROFILE]: async () => {
         console.log("user_action.js/GET_PROFILE");
         const profileCookie = Cookies.get("profile")
         const accessToken = Cookies.get("access_token");

         if(!profileCookie || !accessToken) {
            try {
               const res = await axios.get(MY_PROFILES_URL);
               const profile = res.data;
               const date = new Date();
               date.setMinutes(date.getMinutes() + 60);
               Cookies.set("profile", JSON.stringify(profile),{expires: date})
               console.log("프로필 정보");
               console.dir(profile);
            } catch (err) {
               alert(
                  "프로필 정보를 가져오는중 에러가 발생했습니다.\nerror code : " +
                     err.status
               );
            }
            return;
         }
      },
   };

   initStore(actions);
}
