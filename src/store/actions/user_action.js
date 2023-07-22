import axios from "axios";
import api from "../../api/api.json";
import { initStore } from "../store";
import actionType from "../type.json";

export default function userAction() {
   const actions = {
      [actionType.USER_LOGIN]: async (_, formData) => {
         console.log("user_action.js/USER_LOGIN");

         try {
            const res = await axios.post(api.LOGIN_URL, formData);
            const user = res.data.user;
            console.log("로그인 성공");
            console.dir(user);
            return { user: user, auth: true };
         } catch (err) {
            alert("로그인 중 에러가 발생했습니다.\nerror code : " + err);
            throw err;
         }
      },
      [actionType.GET_PROFILE]: async () => {
         console.log("user_action.js/GET_PROFILE");
         try {
            const res = await axios.get(api.MY_PROFILES_URL);
            const profile = res.data;
            console.log("프로필 정보");
            console.dir(profile);
            return { profile: profile };
         } catch (err) {
            alert("프로필 정보를 가져오는중 에러가 발생했습니다.");
            throw err;
         }
      },
      [actionType.PUT_PROFILE]: async (_, updatedPorfile) => {
         console.log("user_action.js/PUT_PROFILE");

         try {
            const res = await axios.put(api.MY_PROFILES_URL, updatedPorfile);
            const updated = res.date;
            console.log("프로필 업데이트 성공");
            return { profile: updated };
         } catch (err) {
            alert("프로필 업데이트 중 문제가 발생했습니다.");
            throw err;
         }
      },
      [actionType.USER_LOGOUT]: async () => {
         console.log("user_action.js/USER_LOGOUT");

         if (confirm("로그아웃 하시겠습니까?")) {
            try {
               await axios.post(api.LOGOUT_URL);
            } catch (err) {
               // if(err.sta)
               console.log("로그아웃");
               if (err.response.status === 401)
                  return { user: "", auth: false };
               throw err;
            }
         }
      },
      [actionType.REGISTER_SIGNUP]: async (_, registerInfo) => {
         console.log("user_action.js/REGISTER_SIGNUP");

         try {
            await axios.post(api.SIGNUP_URL, registerInfo);
         } catch (err) {
            console.error(err);
            throw err;
         }
      },
      [actionType.GET_FRIEND_REQUESTS_LIST]: async (store) => {
         console.log("user_action.js/GET_FRIEND_REQUESTS_LIST");
         const hash = new Set();

         try {
            const res = await axios.get(api.FRIEND_REQUESTS_LIST_URL);
            const newFriendRequests = res.data;
            console.dir(newFriendRequests);

            // 친구인 상태에서도 요청은 남아있음
            // 현재 친구인 사람의 요청은 걸러주는 작업
            for (const req of newFriendRequests) {
               hash.add(req.sender_id);
            }

            for (const friend of Object.keys(store.profile.friends)) {
               if (hash.has(friend)) {
                  hash.delete(friend);
               }
            }
            console.dir(hash);

            const filterRequests = newFriendRequests.filter((req) =>
               hash.has(req.sender_id)
            );
            console.dir(filterRequests);
            return { friendRequests: filterRequests };
         } catch (err) {
            console.error(err);
            throw err;
         }
      },
      [actionType.ACCEPT_FRIEND_REQUEST]: async (_, payload) => {
         console.log("user_action.js/ACCEPT_FRIEND_REQUEST");

         const ACCEPT_URL = api.ACCEPT_FRIEND_URL.replace("{id}", payload.id);

         try {
            const res = await axios.get(ACCEPT_URL);
            const newFriend = res.data;
            console.dir(newFriend);
         } catch (err) {
            console.error(err);
            throw err;
         }
      },
      [actionType.DELETE_FRIEND_REQUEST]: async (store, payload) => {
         console.log("user_action.js/DELETE_FRIEND_REQUEST");

         const DELETE_URL = api.DELETE_FRIEND_REQUEST_URL.replace(
            "{id}",
            payload.id
         );

         try {
            await axios.delete(DELETE_URL);
            return {
               friendRequests: store.friendRequests.filter(
                  (req) => req.id !== payload.id
               ),
            };
         } catch (err) {
            console.error(err);
         }
      },
   };

   initStore(actions);
}
