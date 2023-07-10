import { useState, useEffect } from "react";

export default function useInfiniteScroll(callback, elementRef) {
   const [isFetching, setIsFetching] = useState(false);

   const handleScroll = () => {
      if (!elementRef.current) {
         return;
      }

      const scrolledToBottom =
         window.innerHeight + window.scrollY >=
         elementRef.current.offsetTop + elementRef.current.clientHeight;

      if (!isFetching && scrolledToBottom) {
         setIsFetching(true);
         callback();
      }
   };

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, [handleScroll]);

   useEffect(() => {
      if (isFetching) {
         setIsFetching(false);
      }
   }, [isFetching]);

   return [isFetching, setIsFetching];
}
