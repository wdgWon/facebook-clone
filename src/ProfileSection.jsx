import { useStore } from "./store/store";
import { PUT_PROFILE } from "./store/type.json";
// import axios from "axios";
import { useState } from "react";
import profile_img5 from "./img/profile_img5.png";
import Modal from "./components/profile/Modal";
import HobbyModal from "../src/components/profile/HobbyModal";

const ProfileSection = () => {
  const dispatch = useStore()[1];

  const [isEdit, setIsEdit] = useState(false);
  const [content, setContent] = useState("");
  const [previousContent, setPreviousContent] = useState("");

  const toggleMenu = () => setIsEdit(!isEdit);

  const maxLength = 101;
  const onChange = (e) => {
    if (content.length < maxLength || /\b/.test(e.target.value.at(-1))) {
      setContent(e.target.value);
    }
  };

  const onClick = () => {
    toggleMenu();
    setContent(content);
  };
  const onClickAboutUpdate = async () => {
    if (content === previousContent) {
      setIsEdit(false);
    }
    setPreviousContent(content);
    try {
      await dispatch(PUT_PROFILE, { about: content });
    } catch (err) {
      console.error(err); //dispatch문에서도 오류가 생길 수 있어서 써줌
    }

    setIsEdit(false);

    // getDate();
  };
  const handleCloseEdit = () => {
    setIsEdit(false);
    setContent(previousContent);
  };
  // async function getDate() {
  //   // let body = {
  //   //   email: "same666@naver.com",
  //   //   password: "asdf1234!",
  //   // };

  //   try {
  //     const response = await axios.get(`/api/profiles/`);
  //     console.log(JSON.stringify(response));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  const [modal, setModal] = useState(false);
  const [hobbyModal, setHobbyModal] = useState(false);

  return (
    <div className=" h-full bg-neutral-200 ">
      {modal === true ? <Modal setModal={setModal} /> : null}
      {hobbyModal === true ? (
        <HobbyModal setHobbyModal={setHobbyModal} />
      ) : null}

      <section className="w-[1186px] h-full mt-[7px] my-0 mx-auto pt-[20px] flex justify-between">
        <div className="w-[490px] rounded-md  ">
          <div className="w-full h-[430px] pt-[15px] bg-white rounded-md flex flex-col justify-center pl-[15px] mb-[20px]">
            <span className="text-xl font-bold">소개</span>
            <div className="content">
              {isEdit ? (
                <>
                  <textarea
                    className="w-[458px] h-[50px] outline-none border-blue-600 bg-neutral-300 mt-[15px] rounded-md pt-[13px] text-center hover:brightness-[92%]"
                    placeholder="회원님에 대해 소개해주세요"
                    name="content"
                    value={content}
                    onChange={onChange}
                    maxLength={maxLength}
                  />
                </>
              ) : (
                <>{content}</>
              )}
            </div>

            {isEdit ? (
              <div className="flex flex-col">
                <span className="text-right mr-[15px] text-xs">
                  {`${maxLength - content.length}자 남음`}
                </span>
                <div className="flex justify-end mr-[15px]">
                  <button
                    className="w-[40px] h-[40px] bg-neutral-300 rounded-md  hover:brightness-[92%] mr-[5px]"
                    onClick={handleCloseEdit}
                  >
                    취소
                  </button>
                  <button
                    className="w-[40px] h-[40px] bg-neutral-300 rounded-md hover:brightness-[92%]"
                    onClick={onClickAboutUpdate}
                    disabled={content === previousContent}
                  >
                    저장
                  </button>
                </div>
              </div>
            ) : (
              <button
                className="w-[458px] h-[36px] border-t-[1px] bg-neutral-300 mt-[15px] rounded-md flex justify-center items-center"
                value={content}
                onClick={onClick}
              >
                소개 추가
              </button>
            )}

            <div className="w-[458px] h-[36px] border-t-[1px] bg-neutral-300 mt-[15px] rounded-md flex justify-center items-center cursor-pointer">
              <button
                onClick={() => {
                  setModal(true);
                }}
              >
                상세 정보 추가
              </button>
            </div>
            <div
              className="
              w-[458px] h-[36px] border-t-[1px] bg-neutral-300 mt-[15px] rounded-md flex justify-center items-center cursor-pointer"
              onClick={() => {
                setHobbyModal(true);
              }}
            >
              취미 추가
            </div>
            <div className="w-[458px] h-[36px] border-t-[1px] bg-neutral-300 mt-[15px] rounded-md flex justify-center items-center cursor-pointer">
              대표 사진 추가
            </div>
          </div>
          <div className="w-full h-[534px] pt-[15px] bg-white rounded-md flex flex-col justify-center mb-[20px]">
            <div className="flex items-center justify-between ml-[15px]">
              <span className="text-xl font-bold">사진</span>
              <span className="text-blue-600 pr-[15px] cursor-pointer">
                사진 모두 보기
              </span>
            </div>
            <div className="w-[458px] h-[458px] flex flex-wrap justify-between items-center ml-[15px]">
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
          <div className="w-full h-[534px] pt-[15px] bg-white rounded-md flex flex-col justify-center">
            <div className="flex items-center justify-between ml-[15px]">
              <span className="text-xl font-bold">친구</span>
              <span className="text-blue-600 pr-[15px] cursor-pointer">
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
                    className="rounded-full cursor-pointer hover:brightness-[90%] w-[40px] h-[40px] mr-[10px]"
                    alt="profile"
                    src={profile_img5}
                  />
                  <div className="w-[560px] h-[40px] flex items-center bg-neutral-200 rounded-full pl-[15px] cursor-pointer hover:brightness-[95%]">
                    무슨 생각을 하고 계신가요?
                  </div>
                </div>
                <hr className="w-full border-t-[1px] border-slate-500 pb-[30px]" />
                <div className="flex justify-between">
                  <button
                    className="
                w-[160px] h-[40px] bg-neutral-300 rounded-md top-80 right-11 hover:brightness-[92%] mx-[5px] text-black"
                  >
                    🎥라이브방송
                  </button>
                  <button className="w-[160px] h-[40px]  bg-neutral-300 rounded-md top-80 right-11 hover:brightness-[92%] mx-[5px] text-black">
                    🤳사진/동영상
                  </button>
                  <button className="w-[160px] h-[40px]  bg-neutral-300 rounded-md top-80 right-11 hover:brightness-[92%] mx-[5px] text-black">
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
                    <button className="w-[80px] h-[40px]  bg-neutral-300 rounded-md top-80 right-11 hover:brightness-[92%] mx-[5px] text-black">
                      🖋️필터
                    </button>
                    <button className="w-[130px] h-[40px]  bg-neutral-300 rounded-md top-80 right-11 hover:brightness-[92%] mx-[5px] text-black">
                      ⚙️게시물관리
                    </button>
                  </div>
                </div>
                <hr className="w-full border-t-[1px] border-slate-500 pb-[30px] mt-[40px]" />
                <div className="flex justify-between items-center">
                  <div className="text-blue-600 font-bold underline  underline-offset-[20px]  decoration-2  w-[310px]  h-[40px]  flex  justify-center  items-center  cursor-pointer  ">
                    ▤리스트보기
                  </div>
                  <div className=" w-[310px] h-[40px]  bg-white  rounded-md  top-80 right-11  hover:brightness-[92%] flex justify-center items-center cursor-pointer">
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
