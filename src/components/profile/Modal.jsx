import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Modal = ({ setModal }) => {
  const [isFlip, setIsFlip] = useState(false);
  const [isResidenceFlip, setIsResidenceFlip] = useState(false);
  const [isFacebookFlip, setIsFacebookFlip] = useState(false);

  // 나중에 연구
  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setModal(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div
      className="container fixed top-[0] left-[50%] translate-x-[-50%] z-999 bg-white/50 shadow-lg "
      style={{ height: "100vh" }}
      onClick={closeModal}
    >
      <div className="w-[700px] h-[770px] bg-white my-0 mx-auto rounded-md">
        <div className="bg-white w-[644px] my-0 mx-auto">
          <div className="w-full h-[60px] bg-white flex justify-center items-center">
            <span>상세 정보 수정</span>
          </div>
          <hr className="w-full border-t-[1px] border-slate-500 mt-3.5"></hr>
          <div className="w-[644px] h-[600px] bg-white my-0 mx-auto p-[25px] ">
            <div className="">
              <span className="block font-bold">
                회원님을 소개할 항목을 구성해보세요
              </span>
              <span className="block mb-[15px]">
                선택하신 상세 정보는 전체 공개됩니다.
              </span>
            </div>
            <div>
              <ul className="h-[500px]">
                <li className="mb-[30px]">
                  <span className="font-bold">직장</span>
                  <div className="cursor-pointer mt-[10px]">
                    <i className="mr-[10px] cursor-pointer">➕</i>
                    <button className="text-blue-600 hover:underline underline-offset-8">
                      <Link to="/about">직장 추가</Link>
                    </button>
                  </div>
                </li>
                <li className="mb-[30px]">
                  <span className="font-bold">학력</span>
                  <div className="cursor-pointer mt-[10px]">
                    <div>
                      <i className="mr-[10px] cursor-pointer">➕</i>
                      <button className=" text-blue-600 hover:underline underline-offset-8">
                        <Link to="/about">고등학교 추가</Link>
                      </button>
                    </div>
                    <div className="mt-[10px]">
                      <i className="mr-[10px] cursor-pointer">➕</i>
                      <button className=" text-blue-600 hover:underline underline-offset-8">
                        <Link to="/about">대학교 추가</Link>
                      </button>
                    </div>
                  </div>
                </li>
                <li className="mb-[30px]">
                  <span className="font-bold">출신지</span>
                  <div className="cursor-pointer mt-[10px]">
                    <ul>
                      <li className="flex justify-between items-center">
                        <div className="flex items-center ">
                          <button
                            onClick={() => setIsFlip(!isFlip)}
                            className={
                              isFlip
                                ? "w-[40px] h-[20px] rounded-full text-white flex items-center justify-center mr-[10px] bg-blue-600"
                                : "w-[40px] h-[20px] rounded-full text-white flex items-center justify-center mr-[10px] bg-gray-600"
                            }
                          >
                            {isFlip ? "ON" : "OFF"}
                          </button>
                          <span>00 거주</span>
                        </div>
                        <button>
                          <Link to="/about">✏️</Link>
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mb-[30px]">
                  <span className="font-bold">거주지</span>
                  <div className="cursor-pointer mt-[10px]">
                    <ul>
                      <li className="flex justify-between items-center">
                        <div className="flex items-center ">
                          <button
                            onClick={() => setIsResidenceFlip(!isResidenceFlip)}
                            className={
                              isResidenceFlip
                                ? "w-[40px] h-[20px] rounded-full text-white flex items-center justify-center mr-[10px] bg-blue-600"
                                : "w-[40px] h-[20px] rounded-full text-white flex items-center justify-center mr-[10px] bg-gray-600"
                            }
                          >
                            {isResidenceFlip ? "ON" : "OFF"}
                          </button>
                          <span>00 출신</span>
                        </div>
                        <button>
                          <Link to="/about">✏️</Link>
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mb-[30px]">
                  <span className="font-bold">결혼/연애 상태</span>
                  <div className="cursor-pointer mt-[10px]">
                    <div>
                      <i className="mr-[10px] cursor-pointer">➕</i>
                      <button className=" text-blue-600 hover:underline underline-offset-8">
                        <Link to="/about">결혼/연애 추가</Link>
                      </button>
                    </div>
                  </div>
                </li>
                <li>
                  <span className="font-bold">Facebook 가입</span>
                  <div className="cursor-pointer mt-[10px]">
                    <ul>
                      <li className="flex justify-between items-center">
                        <div className="flex items-center ">
                          <button
                            onClick={() => setIsFacebookFlip(!isFacebookFlip)}
                            className={
                              isFacebookFlip
                                ? "w-[40px] h-[20px] rounded-full text-white flex items-center justify-center mr-[10px] bg-blue-600"
                                : "w-[40px] h-[20px] rounded-full text-white flex items-center justify-center mr-[10px] bg-gray-600"
                            }
                          >
                            {isFacebookFlip ? "ON" : "OFF"}
                          </button>
                          <span>0000년 0월에 가입</span>
                        </div>
                        <button>
                          <Link to="/about">✏️</Link>
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-[30px]">
            <hr className="w-full border-t-[1px] border-slate-500 mt-3.5"></hr>
            <div className="w-[644px] h-[60px] bg-white flex justify-between items-center px-[25px]">
              <span className="text-blue-600">정보 업데이트</span>
              <div>
                <button
                  className="w-[50px] h-[40px] bg-neutral-300 rounded-md  hover:brightness-[92%] mr-[5px]"
                  onClick={closeModal}
                >
                  취소
                </button>

                <button className="w-[110px] h-[40px]  bg-blue-600 rounded-md top-80 right-11 hover:brightness-[92%] mx-[5px] text-white">
                  저장
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
