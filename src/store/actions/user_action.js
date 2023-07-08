import axios from "axios";
import { LOGIN_URL, MY_PROFILES_URL, LOGOUT_URL } from "../../config/api.json";
import { initStore } from "../store";
import { USER_LOGIN, GET_PROFILE, USER_LOGOUT } from "../type.json";

export default function userAction() {
   const actions = {
      [USER_LOGIN]: async (_, formData) => {
         console.log("user_action.js/USER_LOGIN");

         try {
            const res = await axios.post(LOGIN_URL, formData);
            const user = res.data.user;
            // const date = new Date();
            // date.setMinutes(date.getMinutes() + 60);
            // Cookies.set("user", JSON.stringify(user), { expires: date });
            console.log("로그인 성공");
            console.dir(user);
            return { user: user, auth: true };
         } catch (err) {
            alert("로그인 중 에러가 발생했습니다.\nerror code : " + err);
            throw err;
         }
      },
      [GET_PROFILE]: async () => {
         console.log("user_action.js/GET_PROFILE");
         try {
            const res = await axios.get(MY_PROFILES_URL);
            const profile = res.data;
            console.log("프로필 정보");
            console.dir(profile);
            return { profile: profile };
         } catch (err) {
            alert("프로필 정보를 가져오는중 에러가 발생했습니다.");
            throw err;
         }
      },
      [USER_LOGOUT]: async () => {
         console.log("user_action.js/USER_LOGOUT");

         if(confirm("로그아웃 하시겠습니까?")) {
            let success = false;

            try {
               await axios.post(LOGOUT_URL, {});
            }
            catch(err) {
               // if(err.sta)
               console.log("로그아웃");
               success = true;
               throw(err);
            }
            finally {
               return success ? {user: "", auth: false} : {};
            }
         }
      }
   };

   initStore(actions);
}
