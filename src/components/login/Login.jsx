import { useState } from "react";
import Signup from "../signup/Signup";
import { useStore } from "../../store/store";
import { USER_LOGIN, GET_PROFILE } from "../../store/type.json";
import { useNavigate } from "react-router-dom";

export default function Login() {
   const navigate = useNavigate();
   const [store, dispatch] = useStore(true);
   const [formData, setFormData] = useState({
      email: "",
      password: "",
   });

   const [isModal, setIsModal] = useState(false);

   // 회원가입 모달창 열기
   const handleClick = (event) => {
      event.preventDefault();
      setIsModal(true);
   };

   // 로그인 정보 api 요청
   const handleSubmit = async (event) => {
      event.preventDefault();

      try {
         await dispatch(USER_LOGIN, formData);
         await dispatch(GET_PROFILE);
         navigate("/");
      } catch (err) {
         console.error(err);
      }
   };

   return (
      <>
         {/* 새 계정 만들기 클릭시 회원가입 모달창 출력 */}
         {isModal && <Signup setIsModal={setIsModal} />}

         <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
            <label className="flex items-center justify-center">
               <img
                  className="w-[300px] h-[100px] mb-[30px]"
                  src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                  alt="Facebook"
               />
            </label>
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
               <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                     <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                     >
                        이메일
                     </label>
                     <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                           setFormData({
                              ...formData,
                              email: e.currentTarget.value,
                           });
                        }}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="이메일을 입력하세요"
                        required
                     />
                  </div>
                  <div>
                     <label
                        htmlFor="password"
                        className="text-sm font-medium text-gray-700"
                     >
                        비밀번호
                     </label>
                     <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => {
                           setFormData({
                              ...formData,
                              password: e.currentTarget.value,
                           });
                        }}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="비밀번호를 입력하세요"
                        required
                     />
                  </div>
                  <div>
                     <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                     >
                        로그인
                     </button>
                  </div>
               </form>

               {/* 계정 찾기에서 필요 없는 부분 */}
               <hr className="border border-gray-300 my-4"></hr>
               <div className="w-full flex justify-center">
                  <button
                     type="submit"
                     onClick={handleClick}
                     className="w-1/2 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
                  >
                     새 계정 만들기
                  </button>
               </div>
            </div>
         </div>
      </>
   );
}
