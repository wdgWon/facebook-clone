// import { useState } from "react";
import axios from "axios";
import Nav from "./Nav";
import profile_img5 from "../../img/profile_img5.png";

const Header = () => {
  // const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = async (e) => {
    try {
      const file = await e.target.files[0];
      // setSelectedFile(file);

      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.put("/api/profile/4", {
        // 수정
        profile_image: formData,
      });
      console.log(response);

      const profile = await axios.get("/api/4");

      console.log(profile);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-[1186px] my-0 mx-auto ">
      <section className=" w-full h-460 bg-gradient-to-b from-neutral-200 to-neutral-500  rounded-lg  relative">
        <div className="flex flex-col relative">
          <button className="p-1 w-[160px] h-[40px] absolute text-white  bg-neutral-600 rounded-md top-80 right-11 hover:brightness-[80%]">
            😀아바타로 만들기
          </button>
          <button className="p-1 w-[160px] h-[40px] absolute text-white bg-neutral-600 rounded-md top-96 right-11 hover:brightness-[80%]">
            📷커버 사진 추가
          </button>
        </div>
      </section>
      <section className="w-[1186px] h-[146px] relative flex justify-betwee my-0 mx-auto">
        <div className="flex relative w-[175px]">
          <div className="absolute top-[-20px] w-[168px] h-[168px] rounded-full border-4 border-white">
            <img
              className=" rounded-full   cursor-pointer hover:brightness-[90%]
              relative
              "
              alt="profile"
              src={profile_img5}
            />
            <div
              className="w-[30px] h-[30px] bg-neutral-400 rounded-full flex justify-center items-center
            absolute bottom-[10px] right-[10px]
            "
            >
              <label className="rounded-full flex justify-center items-center cursor-pointer">
                <input
                  className="hidden"
                  type="file"
                  onChange={handleFileChange}
                  // onClick={handleUpload}
                />
                📷
              </label>
            </div>
          </div>
        </div>
        <div className="w-[600px] flex-1">
          <h1 className="text-lg">user name</h1>
          <span>user friends 00명</span>
        </div>
        <div className="w-[505px] flex justify-end items-end ">
          <button className="w-[160px] h-[40px]  bg-blue-600 rounded-md top-80 right-11 hover:brightness-[92%] mx-[5px] text-white">
            + 스토리에 추가
          </button>
          <button className="w-[160px] h-[40px]  bg-neutral-300 rounded-md top-80 right-11 hover:brightness-[92%] mx-[5px]">
            ✏️프로필 편집
          </button>
          <button className="w-[40px] h-[40px]  bg-neutral-300 rounded-md top-80 right-11 hover:brightness-[92%] mx-[5px]">
            ▼
          </button>
        </div>
      </section>
      <Nav />
    </div>
  );
};

export default Header;
