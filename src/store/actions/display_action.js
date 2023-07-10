import { useEffect } from "react";
import { initStore } from "../store";
import actionType from "../type.json";
import api from "../../config/api.json";
import axios from "axios";

// sticky 컴포넌트 동적 높이 구하는 용도
const NAVIGATION_ID = "navigation";

export default function displayAction() {
   const actions = {
      [actionType.GET_DISPLAY_HEIGHT]: (_, setHeight) => {
         useEffect(() => {
            const handleResize = () => {
               const navbarHeight =
                  document.getElementById(NAVIGATION_ID).offsetHeight;
               const windowHeight = window.innerHeight;
               const contentHeight = windowHeight - navbarHeight;

               console.log(windowHeight, navbarHeight, contentHeight);

               setHeight(() => {
                  return {
                     height: contentHeight + "px",
                     top: navbarHeight + "px",
                  };
               });
            };

            // 처음 로딩 시 화면 높이 계산
            handleResize();

            // 창 크기가 변경될 때마다 화면 높이 다시 계산
            window.addEventListener("resize", handleResize);
            return () => {
               window.removeEventListener("resize", handleResize);
            };
         }, []);
      },
      [actionType.LOAD_POSTS]: async (_, setPostList) => {
         console.log("display_action/LOAD_POSTS");

         try {
            const res = await axios.get(api.POST_URL);
            const newPosts = res.data;
            setPostList(() => newPosts.slice(0, 5));
            console.dir(newPosts);
            return { posts: newPosts };
         } catch (err) {
            console.error(err);
         }
      },
      [actionType.UPLOAD_REPLY]: async (store, payload) => {
         console.log("display_action/UPLOAD_REPLY");

         const idx = store.posts.findIndex((el) => el.id === payload.id);
         store.posts[idx].reply_list.push(payload.reply);

         try {
            await axios.post(api.REPLY_URL, {
               post: payload.id,
               comment: payload.reply.comment,
            });
            return { posts: store.posts };
         } catch (err) {
            console.error(err);
         }
      },
      [actionType.REPLY_LIKE]: async (store, payload) => {
         console.log("display_action/REPLY_LIKE");

         const LIKE_URL = api.LIKE_URL.replace("{id}", payload.id);
         const idx = store.posts.findIndex((el) => el.id === payload.id);
         const likeCount = store.posts[idx].like + 1;

         try {
            const res = await axios.patch(LIKE_URL, {
               like: likeCount,
            });
            [store.posts[idx].like] = [res.data.like];
         } catch (err) {
            console.error(err);
         }
      },
   };
   initStore(actions, { posts: [], reply: [] });
}
