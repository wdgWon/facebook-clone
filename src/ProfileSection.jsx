import { useState } from "react";
import profile_img5 from "./img/profile_img5.png";
const ProfileSection = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <section
        className="
      w-[1186px] 
      bg-neutral-200 
      h-full 
      mt-[7px] 
      my-0 
      mx-auto 
      pt-[20px] 
      flex 
      justify-between
      "
      >
        <div
          className="
        w-[490px] 
        rounded-md 
        ml-[20px] 
        "
        >
          <div
            className="
          w-full 
          h-[280px] 
          pt-[15px] 
          bg-white 
          rounded-md 
          flex 
          flex-col 
          justify-center 
          pl-[15px]
          mb-[20px]
          "
          >
            <span
              className="
              text-xl font-bold
              "
            >
              소개
            </span>
            <div
              className="
            w-[458px]
            h-[36px]
            border-t-[1px]
            bg-neutral-300
            mt-[15px]
            rounded-md
            flex
            justify-center
            items-center
            cursor-pointer
            "
            >
              소개 추가
            </div>
            <div
              className="
            w-[458px]
            h-[36px]
            border-t-[1px]
            bg-neutral-300
            mt-[15px]
            rounded-md
            flex
            justify-center
            items-center
            cursor-pointer
            "
            >
              상세 정보 수정
            </div>
            <div
              className="
            w-[458px]
            h-[36px]
            border-t-[1px]
            bg-neutral-300
            mt-[15px]
            rounded-md
            flex
            justify-center
            items-center
            cursor-pointer
            "
            >
              취미 추가
            </div>
            <div
              className="
            w-[458px]
            h-[36px]
            border-t-[1px]
            bg-neutral-300
            mt-[15px]
            rounded-md
            flex
            justify-center
            items-center
            cursor-pointer
            "
            >
              대표 사진 추가
            </div>
          </div>
          <div
            className="
          w-full 
          h-[534px]  
          pt-[15px] 
          bg-white 
          rounded-md 
          flex 
          flex-col 
          justify-center
          mb-[20px]
          
          "
          >
            <div
              className="
              flex
              items-center
              justify-between
              ml-[15px]
            "
            >
              <span
                className="
              text-xl 
              font-bold

              "
              >
                사진
              </span>
              <span
                className="
              text-blue-600 
              pr-[15px] 
              cursor-pointer
              
              "
              >
                사진 모두 보기
              </span>
            </div>
            <div
              className="
              w-[458px] 
              h-[458px] 
              flex 
              flex-wrap 
              justify-between 
              items-center
              ml-[15px]
              "
            >
              <span className="block w-[140px] h-[140px] bg-neutral-300 rounded-lg"></span>
              <span className="block w-[140px] h-[140px] bg-neutral-300 rounded-lg"></span>
              <span className="block w-[140px] h-[140px] bg-neutral-300 rounded-lg"></span>
              <span className="block w-[140px] h-[140px] bg-neutral-300 rounded-lg"></span>
              <span className="block w-[140px] h-[140px] bg-neutral-300 rounded-lg"></span>
              <span className="block w-[140px] h-[140px] bg-neutral-300 rounded-lg"></span>
              <span className="block w-[140px] h-[140px] bg-neutral-300 rounded-lg"></span>
              <span className="block w-[140px] h-[140px] bg-neutral-300 rounded-lg"></span>
              <span className="block w-[140px] h-[140px] bg-neutral-300 rounded-lg"></span>
            </div>
          </div>
          <div
            className="
          w-full 
          h-[534px]  
          pt-[15px] 
          bg-white 
          rounded-md 
          flex 
          flex-col 
          justify-center
          
          "
          >
            <div
              className="
              flex
              items-center
              justify-between
              ml-[15px]
            "
            >
              <span
                className="
              text-xl 
              font-bold

              "
              >
                친구
              </span>
              <span
                className="
              text-blue-600 
              pr-[15px] 
              cursor-pointer
              
              "
              >
                모든 친구 보기
              </span>
            </div>
            <div>
              <span className="ml-[15px]">user friend 00명</span>
            </div>
            <div
              className="
              w-[458px] 
              h-[458px] 
              flex 
              flex-wrap 
              justify-between 
              items-center
              ml-[15px]
              "
            >
              <span className="block w-[140px] h-[140px] bg-neutral-300 rounded-lg"></span>
              <span className="block w-[140px] h-[140px] bg-neutral-300 rounded-lg"></span>
              <span className="block w-[140px] h-[140px] bg-neutral-300 rounded-lg"></span>
              <span className="block w-[140px] h-[140px] bg-neutral-300 rounded-lg"></span>
              <span className="block w-[140px] h-[140px] bg-neutral-300 rounded-lg"></span>
              <span className="block w-[140px] h-[140px] bg-neutral-300 rounded-lg"></span>
              <span className="block w-[140px] h-[140px] bg-neutral-300 rounded-lg"></span>
              <span className="block w-[140px] h-[140px] bg-neutral-300 rounded-lg"></span>
              <span className="block w-[140px] h-[140px] bg-neutral-300 rounded-lg"></span>
            </div>
          </div>
        </div>
        <div className="mr-[20px] ">
          <div className="w-[637px] h-[173px] bg-white rounded-md mb-[15px] ">
            <div className="flex items-center justify-center ">
              <div className="flex-col mt-[15px]">
                <div className="flex items-center mb-[30px]">
                  <img
                    className="
              rounded-full
              cursor-pointer hover:brightness-[90%]
              w-[40px]
              h-[40px]
              mr-[10px]
              "
                    alt="profile"
                    src={profile_img5}
                  />
                  <div
                    className="
              w-[560px] h-[40px]
              flex items-center
              bg-neutral-200 
              rounded-full 
              pl-[15px] 
              cursor-pointer
              hover:brightness-[95%]
              "
                  >
                    무슨 생각을 하고 계신가요?
                  </div>
                </div>
                <hr className="w-full border-t-[1px] border-slate-500 pb-[30px]" />
                <div className="flex justify-between">
                  <button
                    className="
                  w-[160px] 
                  h-[40px]  
                  bg-neutral-300 
                  rounded-md 
                  top-80 
                  right-11 
                  hover:brightness-[92%] 
                  mx-[5px] 
                  text-black
                  "
                  >
                    🎥라이브방송
                  </button>
                  <button
                    className="
                  w-[160px] 
                  h-[40px]  
                  bg-neutral-300 
                  rounded-md 
                  top-80 
                  right-11 
                  hover:brightness-[92%] 
                  mx-[5px] 
                  text-black
                  "
                  >
                    🤳사진/동영상
                  </button>
                  <button
                    className="
                  w-[160px] 
                  h-[40px]  
                  bg-neutral-300 
                  rounded-md top-80 
                  right-11 
                  hover:brightness-[92%] 
                  mx-[5px] 
                  text-black
                  "
                  >
                    🏳️‍🌈중요이벤트
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[637px] h-[173px] bg-white rounded-md ">
            <div className="flex items-center justify-center">
              <div className="flex-col mt-[15px] ">
                <div className="flex items-center ">
                  <div className="flex-1">
                    <span className=" text-xl font-bold">게시물</span>
                  </div>
                  <div className="">
                    <button
                      className="
                    w-[80px] 
                    h-[40px]  
                    bg-neutral-300 
                    rounded-md 
                    top-80 
                    right-11 
                    hover:brightness-[92%] 
                    mx-[5px] 
                    text-black
                    "
                    >
                      🖋️필터
                    </button>
                    <button
                      className="
                    w-[130px] h-[40px]  
                    bg-neutral-300 
                    rounded-md 
                    top-80 
                    right-11 
                    hover:brightness-[92%] 
                    mx-[5px] 
                    text-black
                    "
                    >
                      ⚙️게시물관리
                    </button>
                  </div>
                </div>
                <hr
                  className="
                w-full 
                border-t-[1px] 
                border-slate-500 
                pb-[30px] 
                mt-[40px]
                "
                />
                <div className="flex justify-between items-center">
                  <div
                    className="
                    text-blue-600 font-bold underline
                      underline-offset-[20px]
                      decoration-2
                      w-[310px]
                      h-[40px]
                      flex
                      justify-center
                      items-center
                      cursor-pointer
                      "
                  >
                    ▤리스트보기
                  </div>
                  <div
                    className="
                    w-[310px] h-[40px] 
                    bg-white 
                    rounded-md 
                    top-80 right-11 
                    hover:brightness-[92%]
                    flex
                    justify-center
                    items-center
                    cursor-pointer
                  "
                  >
                    ▒그리드보기
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ProfileSection;
