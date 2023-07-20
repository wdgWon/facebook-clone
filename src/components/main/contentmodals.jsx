import React, { useState, Fragment } from "react";
import profile_img from "../../img/profile_img5.png";
import picture from "../../img/pictures.png";
import maps from "../../img/maps.png";
import presontag from "../../img/person.png";
import emoticon from "../../img/emoticon.png";
import threemark from "../../img/threemark.png";
import { useStore } from "../../store/store";
import actionType from "../../store/type.json";
import { useOutletContext } from "react-router-dom";

const Modals = () => {
   const profile = useOutletContext();
   const [store, dispatch] = useStore(true);
   const [isOpen, setIsOpen] = useState(false);
   const [content, setContent] = useState("");

   const openModal = () => {
      setIsOpen(true);
   };

   const closeModal = () => {
      setIsOpen(false);
   };

   const handleTextareaChange = (e) => {
      setContent(e.target.value);
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      await dispatch(actionType.POST_CREATE, content);
      setContent("");
      closeModal();
   };

   const handlebutton = (e) => {
      e.preventDefault();
   };

   return (
      <Fragment>
         <button
            onClick={openModal}
            className="basis-full flex justify-start items-center p-2 bg-neutral-200/70 rounded-full cursor-pointer hover:brightness-[95%]"
         >
            <span className="text-base text-[#65676b]">
               {(profile?.profile_user_name && profile?.profile_user_name !== store.user?.name)
                  ? `${profile.profile_user_name}님에게 글을 남겨보세요...`
                  : `${store.user?.name}님, 무슨 생각을 하고 계신가요?`}
            </span>
         </button>

         {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-10">
               <button
                  className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
                  onClick={closeModal}
               />
               <div className="modal-container bg-white w-4/5 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-hidden">
                  <div className="modal-content py-4 text-left px-6">
                     <div className="flex justify-between items-center pb-3">
                        <h2 className="text-2xl font-bold">게시물 만들기</h2>
                        <button
                           className="modal-close relative w-10 h-10 bg-gray-200 hover:bg-gray-300/80 rounded-full"
                           onClick={closeModal}
                        >
                           <span className="absolute -top-1 left-2 text-4xl text-gray-500">
                              &times;
                           </span>
                        </button>
                     </div>
                     <form onSubmit={handleSubmit}>
                        <div className="flex items-center">
                           <img
                              className="cursor-pointer hover:brightness-[92%] w-12 h-12 rounded-full mr-4"
                              src={profile_img}
                              alt="프로필 사진"
                           />
                           <div className="flex flex-col">
                              {store.user?.name}
                              <button
                                 className="w-[110px] h-[30px] flex space-x-1 justify-center items-center rounded-lg border p-1 text-sm mb-2 bg-gray-200"
                                 onClick={handlebutton}
                              >
                                 <img
                                    className="inline-block"
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/bXBYraHyR0S.png"
                                    alt="나만 보기"
                                    height="12"
                                    width="12"
                                 ></img>
                                 <span className="text-black shrink-0">
                                    나만 보기 ▼
                                 </span>
                              </button>
                           </div>
                        </div>
                        <div className="mb-6">
                           <textarea
                              rows="5"
                              placeholder={`${store.user?.name}님, 무슨 생각을 하고 계신가요?`}
                              value={content}
                              onChange={handleTextareaChange}
                              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                           ></textarea>
                        </div>
                        <div className="flex shadow shadow-gray-400 rounded-md px-4 py-3 mb-5">
                           <label className="w-full flex justify-between items-center ">
                              <span className="inline-block text-black font-semibold cursor-pointer">
                                 게시물에 추가
                              </span>
                              <button type="button" className="flex space-x-4">
                                 <label className="flex">
                                    <img
                                       width="20"
                                       height="30"
                                       className="cursor-pointer hover:bg-gray-300 rounded-lg"
                                       src={picture}
                                    />
                                 </label>
                                 <img
                                    width="20"
                                    height="20"
                                    className="cursor-default hover:bg-gray-300 rounded-lg"
                                    src={presontag}
                                 />
                                 <img
                                    width="20"
                                    height="20"
                                    className="cursor-default hover:bg-gray-300 rounded-lg"
                                    src={emoticon}
                                 />
                                 <img
                                    width="20"
                                    height="20"
                                    className="cursor-default hover:bg-gray-300 rounded-lg"
                                    src={maps}
                                 />
                                 <img
                                    width="20"
                                    height="20"
                                    className="cursor-default hover:bg-gray-300 rounded-lg"
                                    src={threemark}
                                 />
                              </button>
                           </label>
                        </div>
                        <div className=" flex justify-end">
                           <button
                              disabled={!content}
                              type="submit"
                              className="w-full bg-gray-200/60 disabled:text-gray-300 disabled:cursor-not-allowed enabled:bg-blue-500 text-white font-bold py-2 px-4 rounded"
                           >
                              게시
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         )}
      </Fragment>
   );
};

export default Modals;
