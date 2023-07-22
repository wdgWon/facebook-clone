import profile_img5 from "../../img/profile_img5.png";
import Modals from "./contentmodals";
import { Link } from "react-router-dom";

const CreateContent = () => {
   return (
      <div className="w-full bg-white rounded-md shadow">
         <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full flex space-x-2 p-3 items-center">
               <Link to={"/profile"}>
                  <img
                     className="inline-block rounded-full cursor-pointer hover:brightness-[90%] w-10 h-10"
                     alt="profile"
                     src={profile_img5}
                  />
               </Link>
               <Modals />
            </div>
            <hr className="inline-block w-full mb-2 border-t border-slate-200" />
            <div className="w-full flex justify-stretch items-center pb-2 px-2">
               <button className="flex-1 flex justify-center items-center space-x-2 p-3 rounded-lg hover:brightness-[92%] hover:bg-neutral-100/70">
                  <img
                     height="24"
                     width="24"
                     alt="live broadcast"
                     referrerPolicy="origin-when-cross-origin"
                     src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/c0dWho49-X3.png"
                  />
                  <span className="inline-block shrink-0 text-[#65676b] font-semibold">
                     라이브방송
                  </span>
               </button>
               <button className="flex-1 flex justify-center items-center space-x-2 p-3 rounded-lg hover:brightness-[92%] hover:bg-neutral-100/70">
                  <img
                     height="24"
                     width="24"
                     alt="photos"
                     referrerPolicy="origin-when-cross-origin"
                     src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png"
                  />
                  <span className="inline-block shrink-0 text-[#65676b] font-semibold">
                     사진/동영상
                  </span>
               </button>
               <button className="flex-1 flex justify-center items-center space-x-2 p-3 rounded-lg hover:brightness-[92%] hover:bg-neutral-100/70">
                  <img
                     height="24"
                     width="24"
                     alt="mood and activity"
                     referrerPolicy="origin-when-cross-origin"
                     src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png"
                  />
                  <span className="inline-block shrink-0 text-[#65676b] font-semibold">
                     기분/활동
                  </span>
               </button>
            </div>
         </div>
      </div>
   );
};

export default CreateContent;
