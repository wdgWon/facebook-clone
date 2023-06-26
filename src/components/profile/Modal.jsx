const Modal = () => {
  return (
    <div className="w-[700px] h-[1000px] bg-slate-200 my-0 mx-auto">
      <div className="bg-slate-600 w-[644px] h-[880px] my-0 mx-auto ">
        <div className="w-full h-[60px] bg-slate-500 flex justify-center items-center">
          <span>상세 정보 수정</span>
          <hr className="w-full border-t-[1px] border-slate-500 mt-3.5"></hr>
        </div>
        <div className="w-[644px] h-[880px] bg-white my-0 mx-auto p-[25px]">
          <div className="">
            <span className="block">회원님을 소개할 항목을 구성해보세요</span>
            <span className="block">선택하신 상세 정보는 전체 공개됩니다.</span>
          </div>
          <div>
            <ul>
              <li>
                <span className="font-bold">직장</span>
                <div className="cursor-pointer mt-[10px]">
                  <i className="mr-[10px] cursor-pointer">➕</i>
                  <span className="text-blue-600 hover:underline underline-offset-8">
                    직장 추가
                  </span>
                </div>
              </li>
              <li>
                <span className="font-bold">학력</span>
                <div className="cursor-pointer mt-[10px]">
                  <div>
                    <i className="mr-[10px] cursor-pointer">➕</i>
                    <span className=" text-blue-600 hover:underline underline-offset-8">
                      고등학교 추가
                    </span>
                  </div>
                  <div>
                    <i className="mr-[10px] cursor-pointer">➕</i>
                    <span className=" text-blue-600 hover:underline underline-offset-8">
                      대학교 추가
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[644px] h-[60px] bg-slate-500 flex justify-between items-center px-[25px]">
          <span className="text-blue-600 ">정보 업데이트</span>
          <div>
            <button className="w-[50px] h-[40px] bg-neutral-300 rounded-md  hover:brightness-[92%] mr-[5px]">
              취소
            </button>
            <button className="w-[110px] h-[40px]  bg-blue-600 rounded-md top-80 right-11 hover:brightness-[92%] mx-[5px] text-white">
              저장
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
