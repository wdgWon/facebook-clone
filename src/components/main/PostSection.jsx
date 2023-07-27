// import TopOfHome from "./TopOfHome";
// import CreateContent from "./createcontents";
import UserContent from "./UserContents";
import actionType from "../../store/type.json";
import { useStore } from "../../store/store";
import { useState, useEffect, useRef, useCallback } from "react";

const NUMBER_OF_ADD_LISTS = 5;

export default function PostSection({ children }) {
   const [isFetching, setIsFetching] = useState(false);
   const [store, dispatch] = useStore(true);
   const postRef = useRef(null);

   const setPostsListLength = useCallback(() => {
      if (store.postsLen >= store.posts.length) {
         return;
      }
      dispatch(actionType.SET_POSTLISTS_LENGTH, NUMBER_OF_ADD_LISTS);
      setIsFetching(false);
   }, [dispatch, store.postsLen, store.posts.length]);

   const handleScroll = useCallback(() => {
      if (!postRef.current) {
         return;
      }

      const scrolledToBottom =
         window.innerHeight + window.scrollY >=
         postRef.current.offsetTop + postRef.current.clientHeight;

      if (!isFetching && scrolledToBottom) {
         setIsFetching(true);
         setPostsListLength();
      }
   }, [postRef, setIsFetching, setPostsListLength, isFetching]);

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, [handleScroll]);

   useEffect(() => {
      const fetchInitialPosts = async () => {
         try {
            await dispatch(actionType.LOAD_POSTS, NUMBER_OF_ADD_LISTS);
         } catch (err) {
            console.error(err);
         }
      };
      fetchInitialPosts();
   }, []);

   useEffect(() => {
      if (isFetching) {
         setIsFetching(false);
      }
   }, [isFetching]);

   return (
      <div
         ref={postRef}
         className="shrink flex flex-col space-y-4 px-8 w-[680px]"
      >
         {children}
         {store.posts.slice(0, store.postsLen).map((post, index) => (
            <UserContent key={index} post={post} index={index} />
         ))}
         {isFetching && "Fetching..."}
      </div>
   );
}
