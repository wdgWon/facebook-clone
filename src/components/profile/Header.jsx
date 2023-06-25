import { useLocation, Link } from "react-router-dom";
import profile_img5 from "../../img/profile_img5";

const Header = () => {
  const location = useLocation();

  return (
    <div
      className="
    ProfileSectio 
    max-w-7xl 
    my-0 
    mx-auto
    "
    >
      <section
        className="
      w-full h-460
      bg-gradient-to-b from-neutral-200 to-neutral-500 
      rounded-lg 
      relative"
      >
        <div
          className="
        flex 
        flex-col 
        relative"
        >
          <button
            className="
          p-1 
          w-[160px] 
          h-[40px] 
          absolute 
          text-white  
          bg-neutral-600 
          rounded-md 
          top-80 
          right-11 
          hover:brightness-[80%]
          "
          >
            😀아바타로 만들기
          </button>
          <button
            className="
          p-1 
          w-[160px] 
          h-[40px] 
          absolute 
          text-white 
          bg-neutral-600 
          rounded-md 
          top-96 
          right-11 
          hover:brightness-[80%]
          "
          >
            📷커버 사진 추가
          </button>
        </div>
      </section>
      <section
        className="
      w-[1186px] 
      h-[146px] 
      relative 
      flex 
      justify-betwee 
      my-0 mx-auto
      "
      >
        <div
          className="
        flex 
        relative 
        w-[175px]
        "
        >
          <div
            className="
          absolute 
          top-[-20px] 
          w-[168px] 
          h-[168px] 
          rounded-full 
          border-4 
          border-white  
          "
          >
            <img
              className="
              rounded-full  
              cursor-pointer
              hover:brightness-[90%]
              "
              alt="profile"
              src={profile_img5}
            />
          </div>
        </div>
        <div
          className="
        w-[600px] 
        flex-1
        "
        >
          <h1 className="text-lg">user name</h1>
          <span>user friends 00명</span>
        </div>
        <div
          className="
        w-[505px] 
        flex 
        justify-end 
        items-end 
        "
        >
          <button
            className="
          w-[160px] 
          h-[40px]  
          bg-blue-600 
          rounded-md 
          top-80 
          right-11 
          hover:brightness-[92%] 
          mx-[5px] text-white
          "
          >
            + 스토리에 추가
          </button>
          <button
            className="
          w-[160px] 
          h-[40px]  
          bg-neutral-300 
          rounded-md 
          top-80 
          right-11 
          hover:brightness-[92%] 
          mx-[5px]
          "
          >
            ✏️프로필 편집
          </button>
          <button
            className="
          w-[40px] 
          h-[40px]  
          bg-neutral-300 
          rounded-md 
          top-80 
          right-11 
          hover:brightness-[92%] 
          mx-[5px]
          "
          >
            ▼
          </button>
        </div>
      </section>
      <section
        className="
      w-[1186px] 
      my-0 mx-auto
      "
      >
        <hr
          className="
        w-full 
        border-t-[1px] 
        border-slate-500 
        mt-3.5
        "
        />
        <div
          className="
        flex 
        items-center 
        justify-center 
        pt-2	
        "
        >
          <div
            className="
          w-[1136px] 
          h-[40px] 
          flex
          items-center
          "
          >
            <div
              className="
              flex 
              items-center 
              justify-between
              w-[560px]
              cursor-pointer
              "
            >
              <Link to="/">
                <span
                  className={
                    "pofile" +
                    (location.pathname === "/"
                      ? "cursor-pointer text-blue-600 font-bold underline underline-offset-[20px] decoration-2"
                      : "bg-white rounded-md top-80 right-11 hover:brightness-[92%] cursor-pointer")
                  }
                >
                  게시물
                </span>
              </Link>
              <Link to="/about">
                <span
                  className={
                    "pofile" +
                    (location.pathname === "/about"
                      ? "cursor-pointer text-blue-600 font-bold underline underline-offset-[20px] decoration-2"
                      : "bg-white rounded-md top-80 right-11 hover:brightness-[92%]cursor-pointer")
                  }
                >
                  정보
                </span>
              </Link>
              <Link to="/friends">
                <span
                  className={
                    "pofile" +
                    (location.pathname === "/friends"
                      ? "cursor-pointer text-blue-600 font-bold underline underline-offset-[20px] decoration-2"
                      : "bg-neutral-300 rounded-md top-80 right-11 hover:brightness-[92%] cursor-pointer")
                  }
                >
                  친구
                </span>
              </Link>
              <Link to="/photos">
                <span
                  className={
                    "pofile" +
                    (location.pathname === "/photos"
                      ? "cursor-pointer text-blue-600 font-bold underline underline-offset-[20px] decoration-2"
                      : "bg-white rounded-md top-80 right-11 hover:brightness-[92%]cursor-pointer")
                  }
                >
                  사진
                </span>
              </Link>
              <Link to="/videos">
                <span
                  className={
                    "pofile" +
                    (location.pathname === "/videos"
                      ? "cursor-pointer text-blue-600 font-bold underline underline-offset-[20px] decoration-2"
                      : "bg-white rounded-md top-80 right-11 hover:brightness-[92%]cursor-pointer")
                  }
                >
                  동영상
                </span>
              </Link>
              <Link to="/map">
                <span
                  className={
                    "pofile" +
                    (location.pathname === "/map"
                      ? "cursor-pointer text-blue-600 font-bold underline underline-offset-[20px] decoration-2"
                      : "bg-white rounded-md top-80 right-11 hover:brightness-[92%]cursor-pointer")
                  }
                >
                  체크인
                </span>
              </Link>
              <div
                className="
          w-[70px] 
          h-[40px] 
          bg-white
          rounded-md 
          hover:brightness-[92%] 
          flex 
          justify-center 
          items-center
          cursor-pointer
          "
              >
                더보기▼
              </div>
            </div>
          </div>

          <div
            className="
          w-[40px] 
          h-[40px] 
          bg-neutral-300 
          rounded-md 
          hover:brightness-[92%] 
          flex 
          justify-center 
          cursor-pointer
          "
          >
            ...
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
