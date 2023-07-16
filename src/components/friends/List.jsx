import axios from "axios";
import { useStore } from "../../store/store";
import {
  useOutletContext,
  useNavigate,
  useSearchParams,
  NavLink,
  Outlet,
} from "react-router-dom";
import DefaultProfile from "./DefaultProfile";
import SearchFriend from "./SearchFriend";
import profileImage from "../../img/profile_img5.png";
import api from "../../api/api.json";

const ListCard = ({ src, name, id }) => {
  const fetchFriends = async () => {
    const URL = api.PROFILES_URL + id;
    console.log(URL);
    try {
      const response = await axios.get(URL);
      const data = response.data;
      console.dir(data);
    } catch (error) {
      console.error(error);
    }
  };

  const onClick = () => {
    fetchFriends();
  };

  return (
    <NavLink
      to={`./profile?id=${id}`}
      className="flex p-2 space-x-4 items-center cursor-pointer rounded-md hover:!bg-gray-100
      "
      style={({ isActive }) => {
        return { backgroundColor: isActive ? "#e4e6eb" : "white" };
      }}
      onClick={onClick}
      // NavLink 안에 있는 isActive가 true면 #e4e6eb 아니면 화이트
    >
      <img src={src} className="w-14 h-14 rounded-full inline-block" />
      <span className="text-black font-bold basis-full">{name}</span>
      <button
        type="button"
        className="flex justify-center items-center p-2 rounded-full"
      >
        <i
          data-visualcompletion="css-img"
          className="inline-block bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/ENSmmP7ZTZt.png')] w-4 h-4"
          style={{ backgroundPosition: "-85px -126px" }}
        ></i>
      </button>
    </NavLink>
  );
};

export default function List() {
  const context = useOutletContext();
  const navigate = useNavigate();
  const searchParam = useSearchParams()[0];
  const [store] = useStore();

  return (
    <>
      <aside
        style={{ top: context.getHeight.top, height: context.getHeight.height }}
        className="sticky bg-white pt-4 flex flex-col basis-1/4 shadow-md shadow-black/30 scrollbar overflow-hidden hover:overflow-y-auto"
      >
        <div role="requests list" className="flex flex-col w-full items-center">
          <div className="flex flex-col w-full p-2 space-y-2 border-b border-gray-300">
            <div className="flex w-full items-center">
              <button
                type="button"
                className="flex items-center justify-center p-2 rounded-full hover:bg-gray-300"
                onClick={() => navigate("/friends")}
              >
                <i
                  data-visualcompletion="css-img"
                  className="inline-block bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/ENSmmP7ZTZt.png')] w-5 h-5"
                  style={{ backgroundPosition: "-75px -59px" }}
                ></i>
              </button>
              <h1 className="inline-block text-black font-semibold text-2xl pl-4">
                모든 친구
              </h1>
            </div>
            <SearchFriend />
          </div>
          <section role="list" className="flex flex-col space-y-2 w-full p-2">
            <span className="inline-block p-2 text-black/80 font-bold text-lg">{`친구 ${store.profile.friends.length}명`}</span>
            <div className="flex space-y-2 flex-col w-full">
              {/* [{"4": "젠테"}, ["6", "블루"]] */}
              {Object.entries(store.profile.friends)
                .map(([id, name]) => ({ id: id, name: name }))
                .map((friend, index) => (
                  <ListCard
                    key={index}
                    src={profileImage}
                    name={friend.name}
                    id={friend.id}
                  ></ListCard>
                ))}
            </div>
          </section>
        </div>
      </aside>
      <main role="others profile" className="flex flex-col basis-3/4 p-10">
        {searchParam.get("id") ? <Outlet /> : <DefaultProfile />}
      </main>
    </>
  );
}
