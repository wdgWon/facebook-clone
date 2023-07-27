import { Fragment, useState } from "react";
import SideNav from "./SideNav2";
import { useStore } from "../../store/store";
import { GET_DISPLAY_HEIGHT } from "../../store/type.json";
import profile_img5 from "../../img/profile_img5.png";
// const NavButton = ({ isActive }) => {
//     const [searchList, setSearchList] = useState(null);
//     return (
//         <button
//             type="button"
//             className="w-full flex items-center p-2 mx-2 rounded-md hover:bg-[#f0f2f5] cursor-pointer"
//             style={
//                 isActive
//                     ? { backgroundColor: "rgba(240, 242, 245, 0.6)" }
//                     : { backgroundColor: "white" }
//             }
//         >
//             <div
//                 className="flex justify-center items-center rounded-full p-2"
//                 style={
//                     isActive
//                         ? { backgroundColor: "rgb(24 119 242)" }
//                         : { backgroundColor: "rgb(228, 230, 235)" }
//                 }
//             >
//                 <i
//                     data-visualcompletion="css-img"
//                     className="inline-block bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/JNuBZwogQUq.png')] w-5 h-5"
//                     style={{
//                         backgroundPosition: "0px -176px",
//                         filter: isActive ? "invert(100%)" : "invert(0%)",
//                     }}
//                 ></i>
//             </div>
//             <span className="flex text-black text-base basis-full pl-3">
//                 홈
//             </span>
//         </button>
//     );
// };

const DummyData = [
    { id: 1, name: "홍길동", image: "https://example.com/placeholder1.jpg" },
    { id: 2, name: "김영희", image: "https://example.com/placeholder2.jpg" },
    { id: 3, name: "이철수", image: "https://example.com/placeholder3.jpg" },
    { id: 4, name: "박미나", image: "https://example.com/placeholder4.jpg" },
    { id: 5, name: "정수빈", image: "https://example.com/placeholder5.jpg" },
    { id: 6, name: "오준혁", image: "https://example.com/placeholder6.jpg" },
    { id: 7, name: "윤지원", image: "https://example.com/placeholder7.jpg" },
    { id: 8, name: "신동욱", image: "https://example.com/placeholder8.jpg" },
    { id: 9, name: "임수진", image: "https://example.com/placeholder9.jpg" },
    { id: 10, name: "조영민", image: "https://example.com/placeholder10.jpg" },
    { id: 11, name: "이지은", image: "https://example.com/placeholder11.jpg" },
    { id: 12, name: "장승훈", image: "https://example.com/placeholder12.jpg" },
    { id: 13, name: "김수진", image: "https://example.com/placeholder13.jpg" },
    { id: 14, name: "한기태", image: "https://example.com/placeholder14.jpg" },
    { id: 15, name: "이민우", image: "https://example.com/placeholder15.jpg" },
    { id: 16, name: "박서윤", image: "https://example.com/placeholder16.jpg" },
    { id: 17, name: "정승호", image: "https://example.com/placeholder17.jpg" },
    { id: 18, name: "유수정", image: "https://example.com/placeholder18.jpg" },
    { id: 19, name: "최성훈", image: "https://example.com/placeholder19.jpg" },
    { id: 20, name: "한지호", image: "https://example.com/placeholder20.jpg" },
];

const ProfileCard = (props) => {
    return (
        <div
            className="flex flex-col rounded-md shadow shadow-black/10"
            key={props.id}
        >
            <div className="flex items-center flex space-x-5 py-2 px-4 bg-white w-[600px] rounded-sm">
                <img
                    src={profile_img5}
                    alt={props.name}
                    className="w-10 h-10 rounded-full"
                />
                <span className="text-black">{props.name}</span>
                <button className="bg-white rounded-sm">친구추가</button>
            </div>
        </div>
    );
};

const SectionCard = ({ title }) => {
    return (
        <div className="flex items-center">
            <h1 className="text-black font-semibold text-xl basis-full">
                {title}
            </h1>
            <button
                type="text"
                className="cursor-default text-[#216fdb] min-w-fit"
            >
                더보기가 없습니다.
            </button>
        </div>
    );
};

const Searchs = () => {
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
                    className="flex flex-col m-auto space-y-4 w-[600px] py-4"
                >
                    <div className="flex flex-col items-center  bg-gray-300">
                        
                        {DummyData.map((a,i) => (
                            return(
                            <ProfileCard profiles={DummyData}>
                                key={DummyData.id}
                                title={DummyData.name}
                                img={profile_img5.png}
                            </ProfileCard>  
                                )
                        ))}
                    </div>
                    <SectionCard />
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
