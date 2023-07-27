import { Fragment, useState } from "react";
import SideNav from "./SideNav2";
import { useStore } from "../../store/store";
import { GET_DISPLAY_HEIGHT } from "../../store/type.json";
import profile_img5 from "../../img/profile_img5.png";
import FriendData from "./FriendLists.jsx";

const ProfileCard = (props) => {
    return (
        <div className="flex flex-col rounded-md shadow shadow-black/10 m-5">
            <div className="flex items-center flex space-x-5 py-2 px-4 w-[600px] rounded-sm">
                <img src={profile_img5} className="w-10 h-10 rounded-full" />
                <span className="text-black">{props.friendData.name}</span>
                <button className="bg-white rounded-sm">친구추가</button>
            </div>
        </div>
    );
};

// const SectionCard = ({ title }) => {
//     return (
//         <div className="flex items-center">
//             <h1 className="text-black font-semibold text-xl basis-full">
//                 {title}
//             </h1>
//             <button
//                 type="text"
//                 className="cursor-default text-[#216fdb] min-w-fit"
//             >
//                 더보기가 없습니다.
//             </button>
//         </div>
//     );
// };

const Searchs = () => {
    let [friendData, setFriendData] = useState(FriendData);
    const [getHeight, setHeight] = useState("");
    const dispatch = useStore(false)[1];
    dispatch(GET_DISPLAY_HEIGHT, setHeight);

    return (
        <Fragment>
            <main
                style={{ minHeight: getHeight.height }}
                className="w-full flex bg-[#f0f2f5] z-0"
            >
                <nav
                    style={{ top: getHeight.top, maxHeight: getHeight.height }}
                    className="sticky h-fit -mr-2 pt-2 flex flex-col basis-1/4 scrollbar overflow-hidden hover:overflow-y-auto"
                >
                    <h1 className="text-2xl pl-3 border-b border-gray-200">
                        검색결과
                    </h1>
                    <SideNav />
                </nav>
                
                <section
                    role="request"
                    className="flex flex-col m-auto space-y-4 w-[600px] bg-gray-400 py-4"
                >
                    <div className="flex flex-col items-center  bg-gray-300">
                        {friendData.map((a, i) => {
                            <div>
                                <ProfileCard firends={friendData[i]}></ProfileCard>
                            </div>;
                        })}
                    </div>
                </section>
                <hr className="border border-gray-300" />
            </main>
        </Fragment>
    );
};
export default Searchs;

// {context.dummyRequests.map((request) => {
//     return (
//         <ProfileCard
//             key={request.id}
//             src={request.profile_image}
//             name={request.name}
//         />
//     );

{
    /* <div role="nav buttons" className="pt-2">
                    <NavLink to={"/friends"}>
                        {({ isActive }) => <HomeButton isActive={isActive} />}
                    </NavLink>
                    <NavLink to={"/friends/requests"}>
                        {({ isActive }) => (
                            <RequestButton isActive={isActive} />
                        )}
                    </NavLink>
                    <NavLink to={"/friends/list"}>
                        {({ isActive }) => <ListButton isActive={isActive} />}
                    </NavLink>
                </div> */
}

{
    /* <aside
                style={{
                    top: getHeight.top,
                    height: getHeight.height,
                }}
                className="bg-gray-100 pt-4 flex flex-col basis-1/4 shadow-md shadow-black/30 "
            >
                <div
                    role="search navigation"
                    className=" w-1/4 h-full items-center border-r border-gray-300 scrollbar overflow-hidden hover:overflow-y-auto"
                >
                    <h1 className="flex text-black font-semibold text-2xl pl-4 border-b border-gray scrollbar overflow-hidden hover:overflow-y-auto">
                        검색결과
                    </h1>
                    <SideNav />
                </div> */
}
