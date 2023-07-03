import { useState } from "react";

const friends = [
  {
    id: 49,
    name: "Ellen Haynes",
    profileImage: "https://www.hanalube.com/common/img/default_profile.png",
  },
  {
    id: 45,
    name: "Agnes Lawrence",
    profileImage: "https://www.hanalube.com/common/img/default_profile.png",
  },
  {
    id: 99,
    name: "Adrian Schultz",
    profileImage: "https://www.hanalube.com/common/img/default_profile.png",
  },
  {
    id: 48,
    name: "Roger Townsend",
    profileImage: "https://www.hanalube.com/common/img/default_profile.png",
  },
  {
    id: 12,
    name: "Lucinda Klein",
    profileImage: "https://www.hanalube.com/common/img/default_profile.png",
  },
];

const FriendItem = ({ name, profileImage }) => {
  return (
    <div className="flex items-center space-x-2 border border-gray-100 rounded p-4">
      <img
        className="w-20 h-20 rounded-md shadow-md cursor-pointer transition-transform duration-300 transform-gpu hover:scale-105"
        src={profileImage}
        alt={name}
      />
      <span className="basis-full text-base cursor-pointer hover:underline">
        {name}
      </span>
      <button
        type="button"
        className="font-black w-2 rounded-full hover:bg-gray-200"
      >
        …
      </button>
    </div>
  );
};

const Friends = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="min-w-screen min-h-screen p-4 bg-gray-200">
      <div className="flex flex-col mx-auto max-w-screen-xl p-4 bg-white rounded pt-2 shadow-md">
        <header className="flex flex-nowrap my-2 leading-4 space-x-4">
          <div className="basis-full">
            <h1 className="font-black text-lg text-black">친구</h1>
          </div>
          <div className="p-1">
            <label className="flex flex-nowrap place-items-center p-0 rounded-[50px] bg-[#f0f2f0] cursor-text">
              <span className="pl-[10px]">🍳</span>
              <input
                type="text"
                placeholder="검색"
                value={searchValue}
                onChange={(e) => setSearchValue(e.currentTarget.value)}
                className="pt-[7px] px-[6px] pb-[9px] bg-black/0 leading-[1.3] text-[15px] outline-none"
              />
            </label>
          </div>
          <button
            type="button"
            className="text-blue-500 font-black min-w-fit px-2 rounded-lg hover:bg-gray-200"
          >
            친구 요청
          </button>
          <button
            type="button"
            className="text-blue-500 font-black min-w-fit px-2 rounded-lg hover:bg-gray-200"
          >
            친구 찾기
          </button>
        </header>
        <div className="mt-4 grid grid-cols-2 gap-1">
          {friends.map((friend) => (
            <FriendItem
              key={friend.id}
              name={friend.name}
              profileImage={friend.profileImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Friends;
