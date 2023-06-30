import { useEffect } from "react";
import profile_hobby from "../../img/profile_hobby.png";

const HobbyModal = ({ setHobbyModal }) => {
  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setHobbyModal(false);
    }
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div
      className="
     container fixed top-[0] left-[50%] translate-x-[-50%] z-999 bg-white/50 shadow-lg
    "
      style={{ height: "100vh" }}
      onClick={closeModal}
    >
      <div className="w-[550px] h-[640px] rounded-md my-0 mx-auto bg-white">
        <div className="w-[550px flex justify-center items-center rounded-full relative">
          <img className="w-[550px] rounded-md " src={profile_hobby} />
          <button
            className="absolute top-[20px] right-[20px] w-[35px] h-[35px] bg-neutral-400 flex justify-center items-center rounded-full hover:brightness-[92%]"
            onClick={closeModal}
          >
            ✖️
          </button>
        </div>
        <div className="flex flex-col items-center my-[10px] ">
          <span className="text-xl font-bold mb-[10px]">취미 추가</span>
          <span className="text-sm">
            취미가 무엇인가요? 아래의 일반적인 취미 중에서 선택하거나 다른
            취미를 추가하세요.
          </span>
          <hr className="w-[550px] border-t-[1px] border-slate-500 mt-3.5" />
        </div>
        <div className="flex flex-col items-center ">
          <span className="text-sm mb-[10px] ">추천 취미</span>
          <div className="flex flex-wrap mb-[10px]">
            <button className="h-[40px]  bg-white px-[10px] rounded-full hover:brightness-[92%] mx-[5px] border mb-[10px]">
              📚책읽기
            </button>
            <button className="h-[40px]  bg-white px-[10px] rounded-full hover:brightness-[92%] mx-[5px] border mb-[10px]">
              🎵음악감상
            </button>
            <button className="h-[40px]  bg-white px-[10px] rounded-full hover:brightness-[92%] mx-[5px] border mb-[10px]">
              🌐언어 배우기
            </button>
          </div>
          <div>
            <button className="h-[40px]  bg-white px-[10px] rounded-full hover:brightness-[92%] mx-[5px] border">
              🔍 다른 취미 검색
            </button>
          </div>
        </div>
        <div>
          <hr className="w-[550px] border-t-[1px] border-slate-500 mt-3.5" />
        </div>
        <div className="mt-[20px]">
          <span>🌍취미는 전체 공개 됩니다.</span>
        </div>
      </div>
    </div>
  );
};
export default HobbyModal;
