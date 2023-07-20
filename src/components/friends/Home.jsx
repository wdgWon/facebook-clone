import { Fragment } from "react";
import { Link, NavLink, useOutletContext } from "react-router-dom";
import { useStore } from "../../store/store";
import profile_image from "../../img/profile_img5.png"

const HomeButton = ({ isActive }) => {
   return (
      <button
         type="button"
         className="w-full flex items-center p-2 mx-2 rounded-md hover:bg-[#f0f2f5] cursor-pointer"
         style={
            isActive
               ? { backgroundColor: "rgba(240, 242, 245, 0.6)" }
               : { backgroundColor: "white" }
         }
      >
         <div
            className="flex justify-center items-center rounded-full p-2"
            style={
               isActive
                  ? { backgroundColor: "rgb(24 119 242)" }
                  : { backgroundColor: "rgb(228, 230, 235)" }
            }
         >
            <i
               data-visualcompletion="css-img"
               className="inline-block bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/JNuBZwogQUq.png')] w-5 h-5"
               style={{
                  backgroundPosition: "0px -176px",
                  filter: isActive ? "invert(100%)" : "invert(0%)",
               }}
            ></i>
         </div>
         <span className="flex text-black text-base basis-full pl-3">홈</span>
      </button>
   );
};

const RequestButton = ({ isActive }) => {
   return (
      <button
         type="button"
         className="w-full flex items-center p-2 mx-2 rounded-md hover:bg-[#f0f2f5] cursor-pointer"
         style={
            isActive
               ? { backgroundColor: "rgba(240, 242, 245, 0.6)" }
               : { backgroundColor: "white" }
         }
      >
         <div
            className="flex justify-center items-center rounded-full p-2"
            style={
               isActive
                  ? { backgroundColor: "rgb(24 119 242)" }
                  : { backgroundColor: "rgb(228, 230, 235)" }
            }
         >
            <i
               data-visualcompletion="css-img"
               className="inline-block bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/hr14PA6nN8e.png')] w-5 h-5"
               style={{
                  backgroundPosition: "0px -210px",
                  filter: isActive ? "invert(100%)" : "invert(0%)",
               }}
            ></i>
         </div>
         <span className="flex text-black text-base basis-full pl-3">
            친구 요청
         </span>
      </button>
   );
};

const ListButton = ({ isActive }) => {
   return (
      <button
         type="button"
         className="w-full flex items-center p-2 mx-2 rounded-md hover:bg-[#f0f2f5] cursor-pointer"
         style={
            isActive
               ? { backgroundColor: "rgba(240, 242, 245, 0.6)" }
               : { backgroundColor: "white" }
         }
      >
         <div
            className="flex justify-center items-center rounded-full p-2"
            style={
               isActive
                  ? { backgroundColor: "rgb(24 119 242)" }
                  : { backgroundColor: "rgb(228, 230, 235)" }
            }
         >
            <i
               data-visualcompletion="css-img"
               className="inline-block bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/5C530K4BwkR.png')] w-5 h-5"
               style={{
                  backgroundPosition: "0px -155px",
                  filter: isActive ? "invert(100%)" : "invert(0%)",
               }}
            ></i>
         </div>
         <span className="flex text-black text-base basis-full pl-3">
            친구 목록
         </span>
      </button>
   );
};

const ProfileCard = ({ src, name }) => {
   return (
      <div className="flex flex-col m-[5px] rounded-md shadow shadow-black/30 overflow-hidden w-[225px] h-[377px]">
         <img
            src={src}
            alt="Profile Picture"
            className="inline-block basis-3/5"
         />
         <div className="flex flex-col h-full space-y-2 p-4">
            <span className="flex-1 text-black font-semibold inline-block">
               {name}
            </span>
            <button
               type="button"
               className="flex flex-1 items-center justify-center w-full text-white font-semibold bg-[#1b74e4] rounded-md shadow-sm cursor-pointer hover:bg-[#135bb3]"
            >
               확인
            </button>
            <button
               type="button"
               className="flex flex-1 items-center justify-center w-full text-black font-semibold bg-[#e4e6eb] rounded-md shadow-sm cursor-pointer hover:bg-[#c0c1c6]"
            >
               삭제
            </button>
         </div>
      </div>
   );
};

const FriendCard = ({ src, id, name }) => {
   return (
      <div className="flex flex-col m-[5px] rounded-md shadow shadow-black/30 overflow-hidden w-[225px] h-[377px]">
         <img
            src={src}
            alt="Profile Picture"
            className="inline-block basis-3/5"
         />
         <div className="flex flex-col h-full space-y-2 p-4">
            <span className="flex-1 text-black font-semibold inline-block">
               {name}
            </span>
            <Link to={`/profile?id=${id}`}
               className="flex flex-1 items-center justify-center w-full text-white font-semibold bg-[#1b74e4] rounded-md shadow-sm cursor-pointer hover:bg-[#135bb3]"
            >
               프로필
            </Link>
            <Link
               className="flex flex-1 items-center justify-center w-full text-black font-semibold bg-[#e4e6eb] rounded-md shadow-sm cursor-pointer hover:bg-[#c0c1c6]"
            >
               친구 삭제
            </Link>
         </div>
      </div>
   );
};

const SectionCard = ({title}) => {
   return (
      <div className="flex items-center">
         <h1 className="text-black font-semibold text-xl basis-full">
            {title}
         </h1>
         <button type="button" className="text-[#216fdb] min-w-fit">
            모두 보기
         </button>
      </div>
   );
};

export default function Home() {
   const context = useOutletContext();
   const store = useStore(false)[0];
   const friends = Object.entries(store.profile.friends);

   return (
      <Fragment>
         <aside
            style={{ top: context.getHeight.top, height: context.getHeight.height }}
            className="sticky bg-white pt-4 flex flex-col basis-1/4 shadow-md shadow-black/30 scrollbar overflow-hidden hover:overflow-y-auto"
         >
            <div role="friends navigation" className="flex w-full items-center">
               <h1 className="inline-block text-black basis-full font-semibold text-2xl pl-4">
                  친구
               </h1>
               <button
                  type="button"
                  className="flex justify-center items-center min-h-fit min-w-fit p-2 mr-4 bg-gray-300 rounded-full"
               >
                  <i
                     data-visualcompletion="css-img"
                     className="inline-block bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/m7ujdQqCYbu.png')] w-5 h-5"
                     style={{ backgroundPosition: "-84px -105px" }}
                  ></i>
               </button>
            </div>
            <div role="nav buttons" className="pt-2">
               <NavLink to={"/friends"}>
                  {({ isActive }) => <HomeButton isActive={isActive} />}
               </NavLink>
               <NavLink to={"/friends/requests"}>
                  {({ isActive }) => <RequestButton isActive={isActive} />}
               </NavLink>
               <NavLink to={"/friends/list"}>
                  {({ isActive }) => <ListButton isActive={isActive} />}
               </NavLink>
            </div>
         </aside>
         <main role="friends main" className="flex flex-col basis-3/4 p-10 -mt-4">
            <section
               role="request"
               className="flex flex-col space-y-4 min-h-fit w-full py-4"
            >
                <SectionCard title={"친구 요청"} />
               <div className="flex flex-wrap">
                  {store.friendRequests.map((request) => {
                     return (
                        <ProfileCard
                           key={request.id}
                           id={request.id}
                           src={profile_image}
                           name={request.sender_name}
                        />
                     );
                  })}
               </div>
            </section>
            <hr className="border border-gray-300" />
            <section
               role="friends list"
               className="flex flex-col space-y-4 min-h-fit w-full py-4"
            >
               <SectionCard title={"친구 목록"} />
               <div className="flex flex-wrap">
                  {friends.map(([id, name]) => {
                     return (
                        <FriendCard
                           key={id}
                           id={id}
                           src={profile_image}
                           name={name}
                        />
                     );
                  })}
               </div>
            </section>
         </main>
      </Fragment>
   );
}
