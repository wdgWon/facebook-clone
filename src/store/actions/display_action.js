import { useEffect } from "react";
import { initStore } from "../store";
import { GET_DISPLAY_HEIGHT } from "../type.json";

// sticky 컴포넌트 동적 높이 구하는 용도
const NAVIGATION_ID = "navigation";

export default function displayAction() {
   const actions = {
      [GET_DISPLAY_HEIGHT]: (_, setHeight) => {
         
         useEffect(() => {
            const handleResize = () => {
               const navbarHeight =
                  document.getElementById(NAVIGATION_ID).offsetHeight;
               const windowHeight = window.innerHeight;
               const contentHeight = windowHeight - navbarHeight;
   
               console.log(windowHeight, navbarHeight, contentHeight);
   
               setHeight(() => {
                  return {
                     height : contentHeight + "px",
                     top : navbarHeight + "px",
                  }
               })
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
   };
   initStore(actions);
}
