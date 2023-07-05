import profile_img from "../../img/profile_img5.png";

export default function NavProfile() {
   return (
      <img
         alt="프로필 사진"
         className="h-10 w-10 rounded-full cursor-pointer hover:brightness-95"
         src={profile_img}
      />
   );
}
