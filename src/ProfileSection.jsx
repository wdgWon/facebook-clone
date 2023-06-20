import profile_img5 from "./img/profile_img5.png";
const ProfileSection = () => {
  return (
    <div className="ProfileSectio ">
      <section className="w-1250 h-460 my-0 mx-auto  bg-gradient-to-b from-gray-200 to-gray-500 rounded-lg relative">
        <div className="flex flex-col relative">
          <button className="p-1 w-[160px] h-[40px] absolute text-white  bg-gray-700 rounded-md top-80 right-11">
            😀아바타로 만들기
          </button>
          <button className="p-1 w-[160px] h-[40px] absolute text-white bg-gray-700 rounded-md top-96 right-11">
            📷커버 사진 추가
          </button>
        </div>
        <div className="flex my-auto relative ">
          <div className="absolute top-[440px] left-0 w-[168px] h-[168px] ">
            <img
              className="rounded-full border-4 border-white"
              alt="profile"
              src={profile_img5}
            />
          </div>
          <div className="flex flex-col">
            <span>user name</span>
          </div>
        </div>
      </section>
      <section></section>
      <section></section>
    </div>
  );
};
export default ProfileSection;
