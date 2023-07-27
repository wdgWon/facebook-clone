import { useState } from "react";
import profile_img5 from "../../img/profile_img5.png";

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
    <li className="h-[200px] w-[112.5px] border border-black/20 rounded-lg shadow flex flex-col items-center justify-center cursor-pointer">
      {children}
    </li>
  );
};

export default function TopOfHome() {
  const [state, setState] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0); // 현재 보여지는 릴스
  const handleSlideNext = () => {
    setActiveIndex((prevIndex) => prevIndex + 3);
  };
  const handleSlidePrev = () => {
    setActiveIndex((prevIndex) => prevIndex - 3);
  };
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
      <div
        role="tray"
        className="w-full min-h-fit flex p-4 space-x-5 items-center"
      >
        {state ? (
          <ul className="flex space-x-5 items-center">
            <Tile>
              <span className="text-black text-xl relative ">
                <img
                  className="pb-[90px] rounded-lg filter brightness-75"
                  src={profile_img5}
                />
                <i className="w-[40px] h-[40px] bg-white rounded-full absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                <i className="w-[30px] h-[30px] bg-blue-700 rounded-full absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center" />
                <b className="absolute top-[54%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center text-white">
                  +
                </b>
                <span className="absolute top-[75%] left-[10%] flex justify-center items-center text-sm">
                  스토리 만들기
                </span>
              </span>
            </Tile>
            <ul className="flex flex-col space-y-5">
              <li>친구 및 가족과 모든 일상을 공유해보세요.</li>
              <li>스토리는 24시간 후에 사라집니다.</li>
              <li>답장 및 공감은 공개되지 않습니다.</li>
            </ul>
          </ul>
        ) : (
          <>
            <div className="relative flex items-center overflow-hidden">
              {activeIndex > 0 && (
                <button
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
                  onClick={handleSlidePrev}
                >
                  ⬅️
                </button>
              )}
              {activeIndex < 3 && (
                <button
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
                  onClick={handleSlideNext}
                >
                  ➡️
                </button>
              )}
              <ul
                className="flex transition-transform duration-300 justify-evenly space-x-5 "
                style={{
                  transform: `translateX(-${activeIndex * 112.5}px)`,
                  width: `${8 * 112.5}px`,
                }}
              >
                <Tile>
                  <div className="relative rounded-lg bg-gradient-to-t from-blue-500 via-purple-500 to-pink-500 h-full w-full flex justify-center">
                    <span className="text-white flex justify-center items-center">
                      릴스 만들기
                    </span>
                  </div>
                </Tile>

                {[1, 2, 3, 4, 5, "더보기"].map((index) => (
                  <Tile key={index}>
                    <span className="">릴스{index}</span>
                  </Tile>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
