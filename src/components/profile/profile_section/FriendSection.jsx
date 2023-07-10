import { useState } from "react";
import axios from "axios";
import profile_img5 from "../../../img/profile_img5.png";
import { useStore } from "../../../store/store";
import api from "../../../config/api.json";


const ListCard = ({ id, name }) => {
  const [friends, setFriends] = useState([]);

  const handleOnClick = async () => {
    const URL = api.FRIENDS_REQUEST_URL.replace("{id}", id);
    try {
      const response = await axios.get(URL);
      setFriends(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Link to={"/profile/" + id}>
      <button 
        onClick={handleOnClick} 
        className="w-[140px] h-[140px] bg-neutral-300 rounded-lg block"
        >
        <img src={profile_img5} className="w-full h-full" alt="name" />
      </button>
        </Link>
  );
};

export default function FriendSection() {
  const store = useStore(false)[0];
  const friends = store.profile.friends;

  return (
    <section className="w-full h-[534px] pt-[15px] bg-white rounded-md flex flex-col justify-center">
      <div className="flex items-center justify-between ml-[15px]">
        <span className="text-xl font-bold">친구</span>
        <span className="text-blue-600 pr-[15px] cursor-pointer">
          모든 친구 보기
        </span>
      </div>
      <div>
        <span className="ml-[15px]">{`user friend  ${friends.length}명`}</span>
      </div>
      <div className="w-[458px] h-[458px] grid grid-cols-3 gap-4 ml-[15px]">
        {Object.entries(friends)
          .slice(0, 9)
          .map(([id, name]) => (
            <ListCard key={id} id={id} name={name} />
          ))}
      </div>
    </section>
  );
}
