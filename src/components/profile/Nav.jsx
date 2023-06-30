import { useLocation, Link } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  return (
    <div>
      <section className="w-[1186px] my-0 mx-auto">
        <hr className="w-full border-t-[1px] border-slate-500 mt-3.5" />
        <div className="flex items-center justify-center pt-2	">
          <div className="w-[1136px] h-[40px] flexitems-center">
            <div className=" flex  items-center  justify-between w-[560px] cursor-pointer ">
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
              <div className=" w-[70px]  h-[40px]  bg-white rounded-md  hover:brightness-[92%]  flex  justify-center  items-center cursor-pointer ">
                더보기▼
              </div>
            </div>
          </div>

          <div className=" w-[40px]  h-[40px]  bg-neutral-300  rounded-md  hover:brightness-[92%]  flex  justify-center  cursor-pointer ">
            ...
          </div>
        </div>
      </section>
    </div>
  );
};
export default Nav;
