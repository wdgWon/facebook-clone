import { useEffect } from "react";
import { initStore } from "../store";
import actionType from "../type.json";
import api from "../../api/api.json";
import axios from "axios";

// sticky 컴포넌트 동적 높이 구하는 용도
const NAVIGATION_ID = "navigation";

export default function displayAction() {
   const findIndexOfPostId = (state, postId) => {
      return state.findIndex((el) => el.id === postId);
   };

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
      [actionType.LOAD_POSTS]: async (_, postsLen) => {
         console.log("display_action/LOAD_POSTS");

         try {
            const res = await axios.get(api.POST_URL);
            const newPosts = res.data;
            console.dir(newPosts);
            return { posts: newPosts, postsLen: postsLen };
         } catch (err) {
            console.error(err);
         }
      },
      [actionType.UPLOAD_REPLY]: async (store, payload) => {
         console.log("display_action/UPLOAD_REPLY");

         try {
            const res = await axios.post(api.REPLY_URL, {
               post: payload.id,
               comment: payload.reply,
            });
            console.dir(res);
            const idx = findIndexOfPostId(store.posts, payload.id);
            const updatedReplyList = [...store.posts[idx].reply_list, res.data];
            const updatedReplyOfPost = {
               ...store.posts[idx],
               reply_list: updatedReplyList,
            };
            const updatedPosts = [...store.posts];
            updatedPosts[idx] = { ...updatedReplyOfPost };
            return { posts: updatedPosts };
         } catch (err) {
            console.error(err);
         }
      },
      [actionType.POST_LIKE]: async (store, payload) => {
         console.log("display_action/REPLY_LIKE");

         const LIKE_URL = api.LIKE_URL.replace("{id}", payload.id);
         const RETRIEVE_URL = api.POST_RETRIEVE_URL.replace("{id}", payload.id);
         const idx = findIndexOfPostId(store.posts, payload.id);

         try {
            await axios.patch(LIKE_URL);
            const res = await axios.get(RETRIEVE_URL);
            const updatedLikeOfPost = {
               ...store.posts[idx],
               like: res.data.like,
               like_people: res.data.like_people,
            };
            const updatedPosts = [...store.posts];
            updatedPosts[idx] = { ...updatedLikeOfPost };
            return { posts: updatedPosts };
         } catch (err) {
            console.error(err);
         }
      },
      [actionType.POST_CREATE]: async (store, content) => {
         console.log("display_action/POST_CREATE");

         try {
            await axios.post(api.POST_URL, {
               title: content,
               content: content,
            });
            const res = await axios.get(api.POST_URL);
            return {
               posts: res.data,
               postsLen: store.postsLen + 1,
            };
         } catch (err) {
            console.error(err);
         }
      },
      [actionType.SET_POSTLISTS_LENGTH]: (store, increaseLength) => {
         console.log("display_action/SET_POSTLISTS_LENGTH");

         return { postsLen: store.postsLen + increaseLength };
      },
   };
   initStore(actions, { posts: [], reply: [], postsLen: 0 });
}
