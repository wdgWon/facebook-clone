import { useState } from "react";
import { useStore } from "../../store/store";
import actionType from "../../store/type.json";

// 회원가입 모달창
export default function Signup({ setIsModal }) {
   const dispatch = useStore(false)[1];
   const [registerInfo, setRegisterInfo] = useState({
      name: "",
      email: "",
      password: "",
      password2: "",
   });

   // api 요청 비동기 함수
   async function apiRequestSignup() {
      // 비밀번호 일치 확인
      if (registerInfo.password !== registerInfo.password2) {
         alert("비밀번호가 일치하지 않습니다.");
         return;
      }

      // 비밀번호 유효성 검사
      const pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

      if (pwdCheck.test(registerInfo.password) === false) {
         alert(
            "비밀번호는 영문자,특수문자,숫자 조합으로 8~25글자 이내로 작성해주세요."
         );
         return;
      }

      // 회원가입 유효성 통과후 post 비동기 요청
      try {
         await dispatch(actionType.REGISTER_SIGNUP, registerInfo);

         alert("가입 성공!");

         setIsModal(false);
      } catch (err) {
         alert("가입 실패!");

         console.error(err);
      }
   }

   // 서버에 가입 요청
   const handleSubmit = (e) => {
      e.preventDefault();
      apiRequestSignup();
   };

   return (
      <div
         className="fixed inset-0 flex items-center justify-center z-999 bg-white/50"
         onClick={() => setIsModal(false)}
      >
         <div
            className="p-4 shadow-md rounded-md w-[300px] bg-white"
            onClick={(e) => e.stopPropagation()}
         >
            <div className="flex">
               <h1 className="basis-full text-left text-xl font-semibold">
                  가입하기
               </h1>
               <button
                  type="button"
                  className="text-left cursor-pointer"
                  onClick={() => setIsModal(false)}
               >
                  X
               </button>
            </div>
            <span className="text-left text-xs">
               빠르고 쉽게 가입할 수 있습니다.
            </span>
            <hr className="border border-gray-300 my-2"></hr>
            <form onSubmit={handleSubmit}>
               <input
                  type="text"
                  value={registerInfo.name}
                  onChange={(e) => {
                     setRegisterInfo({
                        ...registerInfo,
                        name: e.currentTarget.value,
                     });
                  }}
                  className="w-full p-1 border border-gray-300 rounded-md bg-gray-100 outline-none my-1 placeholder:text-xs text-gray-700"
                  placeholder="이름"
                  required
               />
               <input
                  type="email"
                  value={registerInfo.email}
                  onChange={(e) => {
                     setRegisterInfo({
                        ...registerInfo,
                        email: e.currentTarget.value,
                     });
                  }}
                  className="w-full p-1 border border-gray-300 rounded-md bg-gray-100 outline-none my-1 placeholder:text-xs text-gray-700"
                  placeholder="이메일"
                  required
               />
               <input
                  type="password"
                  value={registerInfo.password}
                  onChange={(e) => {
                     setRegisterInfo({
                        ...registerInfo,
                        password: e.currentTarget.value,
                     });
                  }}
                  className="w-full p-1 border border-gray-300 rounded-md bg-gray-100 outline-none my-1 placeholder:text-xs text-gray-700"
                  placeholder="비밀번호"
                  required
               />
               <input
                  type="password"
                  value={registerInfo.password2}
                  onChange={(e) => {
                     setRegisterInfo({
                        ...registerInfo,
                        password2: e.currentTarget.value,
                     });
                  }}
                  className="w-full p-1 border border-gray-300 rounded-md bg-gray-100 outline-none my-1 placeholder:text-xs text-gray-700"
                  placeholder="비밀번호 확인"
                  required
               />

               <div className="w-full flex justify-center">
                  <button
                     type="submit"
                     className="w-1/2 bg-green-500 text-white py-1 px-4 rounded-md mt-3 hover:bg-green-600 transition-colors"
                  >
                     가입하기
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
}
