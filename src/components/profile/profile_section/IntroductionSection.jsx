import { useState } from "react";
import { useStore } from "../../../store/store";

const MAXLENGTH = 101;

export default function IntroductionSection({ setModal, setHobbyModal }) {
   const dispatch = useStore()[1];
   const [isEdit, setIsEdit] = useState(false);
   const [content, setContent] = useState("");
   const [previousContent, setPreviousContent] = useState("");

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

   const onChange = (e) => {
      if (content.length < MAXLENGTH || /\b/.test(e.target.value.at(-1))) {
         setContent(e.target.value);
      }
   };

   const onClick = () => {
      setIsEdit(() => !isEdit);
      // toggleMenu();
      setContent(content);
   };

   return (
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
                     maxLength={MAXLENGTH}
                  />
               </>
            ) : (
               <>{content}</>
            )}
         </div>

         {isEdit ? (
            <div className="flex flex-col">
               <span className="text-right mr-[15px] text-xs">
                  {`${MAXLENGTH - content.length}자 남음`}
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
   );
}
