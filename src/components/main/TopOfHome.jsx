import { useState } from "react";

const TopOfHomeButtonStyle = ({ state, setState, children }) => {
   const BUTTON_STYLE =
      "flex flex-1 py-4 border-b-[3px] items-center justify-center cursor-pointer text-sm font-semibold";

   const handleOnFlip = () => {
      if (state !== true) setState((currentState) => !currentState);
   };

   return (
      <button
         type="button"
         onClick={handleOnFlip}
         className={
            state
               ? `${BUTTON_STYLE} border-[#1b74e4] text-[#1876f2]`
               : `${BUTTON_STYLE} border-white rounded-md hover:bg-gray-300/50 text-[#65676b]`
         }
      >
         {children}
      </button>
   );
};

const StoryPath = () => {
   return (
      <span className="flex justify-center items-center">
         <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            width="1em"
            height="1em"
            className="text-lg mr-2"
         >
            <g fillRule="evenodd" transform="translate(-446 -350)">
               <path d="M457 368.832a.5.5 0 0 0 .883.323l1.12-1.332a.876.876 0 0 1 .679-.323h3.522a2.793 2.793 0 0 0 2.796-2.784v-10.931a2.793 2.793 0 0 0-2.796-2.785h-3.454a2.75 2.75 0 0 0-2.75 2.75v15.082zm-1.5 0a.5.5 0 0 1-.883.323l-1.12-1.332a.876.876 0 0 0-.679-.323h-3.522a2.793 2.793 0 0 1-2.796-2.784v-10.931a2.793 2.793 0 0 1 2.796-2.785h3.454a2.75 2.75 0 0 1 2.75 2.75v15.082z"></path>
            </g>
         </svg>
         스토리
      </span>
   );
};

const ReelsPath = () => {
   return (
      <span className="flex justify-center items-center">
         <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            width="1em"
            height="1em"
            className="text-lg mr-2"
         >
            <g fillRule="evenodd" transform="translate(-446 -350)">
               <path d="M454.59 355h4.18l-2.4-4h-3.28c-.22 0-.423.008-.624.017L454.59 355zm6.514 0h3.695c-.226-1.031-.65-1.79-1.326-2.489-1.061-1.025-2.248-1.488-4.392-1.511h-.379l2.401 4zm-8.78 0-1.942-3.64c-.73.247-1.315.63-1.868 1.165-.668.69-1.09 1.445-1.315 2.475h5.125zm7.043 7.989a.711.711 0 0 1-.22.202l-4.573 2.671-.05.027a.713.713 0 0 1-1.024-.643v-5.343l.002-.056a.714.714 0 0 1 1.072-.56l4.572 2.67.054.036a.714.714 0 0 1 .167.996zm-12.366-5.99V363.083l.001.03v.112l.005.048h.001c.05 2.02.513 3.176 1.506 4.203 1.102 1.066 2.324 1.525 4.577 1.525h5.99c2.144-.023 3.331-.486 4.392-1.511 1.005-1.04 1.467-2.198 1.517-4.217h.003c.003-.1.005-.1.006-.204l.001-.156V357h-18z"></path>
            </g>
         </svg>
         릴스
      </span>
   );
};

const Tile = ({ children }) => {
   return (
      <div className="h-[200px] w-[112.5px] border border-black/20 rounded-lg shadow flex flex-col items-center justify-center cursor-pointer">
         {children}
      </div>
   );
};

export default function TopOfHome() {
   const [state, setState] = useState(true);

   return (
      <div
         datapagelet="TopOfHome"
         className="flex flex-col justify-center mt-4 rounded-md shadow bg-white"
      >
         <div
            role="tablist"
            className="flex mb-1 space-x-1 pt-1 px-4 border-b border-b-gray-300/90"
         >
            <TopOfHomeButtonStyle state={state} setState={setState}>
               <StoryPath />
            </TopOfHomeButtonStyle>
            <TopOfHomeButtonStyle state={!state} setState={setState}>
               <ReelsPath />
            </TopOfHomeButtonStyle>
         </div>
         <div role="tray" className="w-full min-h-fit flex p-4">
            {state ? (
               <Tile>
                  <span className="text-black text-xl">Story</span>
               </Tile>
            ) : (
               <Tile>
                  <span className="text-black text-xl">Reels</span>
               </Tile>
            )}
         </div>
      </div>
   );
}
