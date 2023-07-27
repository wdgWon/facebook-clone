import profile_img5 from "../../../img/profile_img5.png";
import { Link, useLocation, useOutletContext } from "react-router-dom";


const ListCard = ({ id, name }) => {

   return (
      <Link to={`/profile?id=${id}`}>
         <div className="flex flex-col space-y-1">
            <button
               type="button"
               // onClick={handleOnClick}
               className="w-[140px] h-[140px] bg-neutral-300 rounded-lg block"
            >
               <img src={profile_img5} className="w-full h-full" alt={name} />
            </button>
            <span className="text-black text-xs font-semibold">{name}</span>
         </div>
      </Link>
   );
};

export default function FriendSection() {
   const friends = useOutletContext().friends;
   const location = useLocation();

   return (
      <section className="w-full h-[534px] pt-[15px] bg-white rounded-md flex flex-col justify-center">
         <div className="flex items-center justify-between ml-[15px]">
            <span className="text-xl font-bold">친구</span>
            <Link to={{pathname: "/profile/friends/", search: location.search}} className="text-blue-600 pr-[15px] cursor-pointer">
               모든 친구 보기
            </Link>
         </div>
         <div>
            <span className="ml-[15px]">{`${Object.keys(friends).length}명`}</span>
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
