import {
   useOutletContext,
   useNavigate,
   Outlet,
   useSearchParams,
   useLocation,
} from "react-router-dom";
import DefaultProfile from "./DefaultProfile";
import { useStore } from "../../store/store";
import profile_image from "../../img/profile_img5.png";
import actionType from "../../store/type.json";

const RequestCard = ({ src, profile, acceptRequest, deleteRequest }) => {
   const location = useLocation();
   const navToProfile = useNavigate();

   const handleOnClickToAccept = (e) => {
      e.stopPropagation();

      const CONFIRM_MESSAGE = `${profile.sender_name}님의 요청을 수락하시겠습니까?`;
      const isConfirm = confirm(CONFIRM_MESSAGE);

      if (isConfirm === true) {
         acceptRequest(profile.id);
      }
   };

   const handleOnClickToDelete = (e) => {
      e.stopPropagation();

      const CONFIRM_MESSAGE = `요청을 삭제합니다.`;
      const isConfirm = confirm(CONFIRM_MESSAGE);

      if (isConfirm) {
         deleteRequest(profile.id);
      }
   };

   const handleOnClickToNavigate = (e) => {
      if (e.target === e.currentTarget) {
         navToProfile(`${location.pathname}/profile?id=${profile.sender_id}`);
      }
   };

   return (
      <div className="flex p-2 space-x-2 items-center cursor-pointer rounded-md hover:bg-gray-100">
         <img
            onClick={handleOnClickToNavigate}
            src={src}
            className="w-14 h-14 rounded-full inline-block"
         />
         <span className="text-black font-bold text-sm basis-full">
            {profile.sender_name}
         </span>
         <button
            type="button"
            className="flex justify-center items-center px-5 py-[6px] rounded-md bg-[#1b74e4] hover:bg-[#1666c7]"
            onClick={handleOnClickToAccept}
         >
            <span className="inline-block shrink-0 font-black text-white">
               확인
            </span>
         </button>
         <button
            type="button"
            className="flex justify-center items-center px-5 py-[6px] rounded-md bg-[#e4e6eb] hover:bg-[#cfd0d5]"
            onClick={handleOnClickToDelete}
         >
            <span className="inline-block shrink-0 font-black text-black">
               삭제
            </span>
         </button>
      </div>
   );
};

export default function Request() {
   const navigate = useNavigate();
   const context = useOutletContext();
   const [requests, dispatch] = useStore(true);
   const searchParam = useSearchParams()[0];

   const acceptRequest = async (id) => {
      const body = {
         id: id,
      };
      try {
         await dispatch(actionType.ACCEPT_FRIEND_REQUEST, body);
         await dispatch(actionType.GET_FRIEND_REQUESTS_LIST);
      } catch (err) {
         console.error(err);
      }
   };

   const deleteRequest = async (id) => {
      const body = {
         id: id,
      };
      await dispatch(actionType.DELETE_FRIEND_REQUEST, body);
   };

   return (
      <>
         <aside
            style={{
               top: context.getHeight.top,
               height: context.getHeight.height,
            }}
            className="sticky bg-white pt-4 flex flex-col basis-1/4 shadow-md shadow-black/30 scrollbar overflow-hidden hover:overflow-y-auto"
         >
            <div
               role="requests list"
               className="flex flex-col w-full items-center"
            >
               <div className="flex items-center w-full p-4 min-w-fit border-b border-gray-300">
                  <button
                     type="button"
                     className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100"
                     onClick={() => navigate("/friends")}
                  >
                     <i
                        data-visualcompletion="css-img"
                        className="inline-block text-[#385898] bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/ENSmmP7ZTZt.png')] w-5 h-5"
                        style={{ backgroundPosition: "-75px -59px" }}
                     ></i>
                  </button>
                  <h1 className="inline-block text-black font-semibold text-2xl pl-4">
                     친구 요청
                  </h1>
               </div>
               <section
                  role="list"
                  className="flex flex-col space-y-2 w-full p-2"
               >
                  <span className="inline-block p-2 text-black font-semibold text-lg">{`친구 요청 ${requests.friendRequests.length}개`}</span>
                  <div className="flex space-y-2 flex-col w-full">
                     {requests.friendRequests.map((request) => (
                        <RequestCard
                           key={request.id}
                           profile={request}
                           src={profile_image}
                           acceptRequest={acceptRequest}
                           deleteRequest={deleteRequest}
                        />
                     ))}
                  </div>
               </section>
            </div>
         </aside>
         <main role="request profile" className="flex flex-col basis-3/4 p-10">
            {searchParam.get("id") ? <Outlet /> : <DefaultProfile />}
         </main>
      </>
   );
}
