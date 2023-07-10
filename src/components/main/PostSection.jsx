import TopOfHome from "./TopOfHome";
// import Content from "./contents";
import CreateContent from "./createcontents";
import UserContent from "./UserContents";
import { LOAD_POSTS } from "../../store/type.json";
import { useStore } from "../../store/store";
import { useState, useEffect, useRef } from "react";
// import useInfiniteScroll from "../../hooks/useInfiniteScroll";

export default function PostSection() {
   const [isFetching, setIsFetching] = useState(false);
   const [postList, setPostList] = useState([]);
   const [store, dispatch] = useStore(true);
   const postRef = useRef(null);

   const handleScroll = () => {
      if (!postRef.current) {
         return;
      }

      const scrolledToBottom =
         window.innerHeight + window.scrollY >=
         postRef.current.offsetTop + postRef.current.clientHeight;

      if (!isFetching && scrolledToBottom) {
         setIsFetching(true);
         fetchCollback();
      }
   };

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, [handleScroll]);


   // const fetchInitialRequest = async () => {
   //    try {
   //       await dispatch(LOAD_POSTS, setPostList);
   //    } catch (err) {
   //       console.error(err);
   //    }
   // };

   useEffect(() => {
      const waitForResponse = async () => {
         try {
            await dispatch(LOAD_POSTS, setPostList);
         } catch (err) {
            console.error(err);
         };
      };
      waitForResponse();
   }, []);

   const fetchCollback = () => {
      const listLen = postList.length;
      if(listLen >= store.posts.length) {
         return;
      }
      setPostList(postList => postList.concat(store.posts.slice(listLen, listLen+5)));
      setIsFetching(false);
   }

   useEffect(() => {
      if (isFetching) {
         setIsFetching(false);
      }
   }, [isFetching]);
   // const fetchScrollPosts = useCallback(fetchCollback, []);

   // const [isFetching, setIsFetching] = useInfiniteScroll(fetchScrollPosts, postRef);

   return (
      <div
         ref={postRef}
         className="shrink flex flex-col space-y-4 px-8 w-[680px]"
      >
         <TopOfHome />
         <CreateContent />
         {postList.map((post, index) => (
            <UserContent key={index} post={post} />
         ))}
         {isFetching && "Fetching..."}
      </div>
   );
}
