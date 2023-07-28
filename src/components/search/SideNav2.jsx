import { Link } from "react-router-dom";

const FRIENDS_URL = "/friends";

const SideNavCard = ({ url, children }) => {
   return (
      <button type="button" className="px-2">
         <Link to={url}>
            <label className="flex py-2 px-2 space-x-3 items-center  cursor-pointer rounded-md hover:bg-gray-300/50">
               {children}
            </label>
         </Link>
      </button>
   );
};

const Profile = () => {
   return (
      <SideNavCard>
         <div className="flex justify-center items-center rounded-full p-2 bg-blue-500">
            <i
               data-visualcompletion="css-img"
               className='bg-[url("https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/7o9s1koXoba.png")] invert'
               style={{
                  backgroundPositionY: "-218px",
                  width: "20px",
                  height: "20px",
               }}
            ></i>
         </div>
         <span className="text-black text-sm">모두</span>
      </SideNavCard>
   );
};

const Friends = () => {
   return (
      <SideNavCard url={FRIENDS_URL}>
         <div className="flex justify-center items-center rounded-full bg-neutral-300 p-2">
            <i
               data-visualcompletion="css-img"
               className="bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/7o9s1koXoba.png')]"
               style={{
                  backgroundPositionY: "-260px",
                  width: "20px",
                  height: "20px",
               }}
            ></i>
         </div>
         <span className="text-black text-sm">친구</span>
      </SideNavCard>
   );
};

export default function SideNav() {
   return (
      <div className="flex flex-col">
         <Profile />
         <Friends />
      </div>
   );
}
