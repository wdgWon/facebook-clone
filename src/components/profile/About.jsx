import { useSearchParams } from "react-router-dom";
import { Fragment, useState } from "react";

const QUERIY_PARAMS = [
   ["개요", "overview"],
   ["경력 및 학력", "career"],
   ["이전 거주지", "address"],
   ["연락처 및 기본 정보", "phonenumber"],
   ["가족 및 결혼/연애 상태", "family"],
   ["자세한 내 소개", "myself"],
   ["중요 이벤트", "event"],
];

const ConfigureButton = ({ config, queryParam }) => {
   const [searchParam, setSearchParam] = useSearchParams();

   return (
      <button
         type="button"
         className="flex items-center w-[240px] h-[30px] bg-white rounded-md hover:brightness-[92%] text-neutral-600 font-semibold text-sm pl-[10px] mb-[20px]"
         onClick={() => {
            searchParam.set("aboutParam", queryParam);
            setSearchParam(searchParam);
         }}
      >
         {config}
      </button>
   );
};

const AddButton = ({ config }) => {
   return (
      <button
         type="button"
         className="flex space-x-2 items-center cursor-pointer"
      >
         <i
            data-visualcompletion="css-img"
            className="inline-block bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/DA_T_XD6AQv.png')] bg-[-104px_-276px] bg-[length:550px_302px] h-6 w-6"
         ></i>
         <span className="text-sm text-blue-500 font-medium hover:underline decoration-inherit">
            {config + " 추가"}
         </span>
      </button>
   );
};

const UpdateInput = ({ setIsEdit }) => {
   const [content, setContent] = useState("");

   const onChange = (e) => {
      setContent(e.target.value);
   };

   const handleCloseEdit = () => {
      setIsEdit(false);
   };

   return (
      <div>
         <input
            className="w-[849px] h-[56px] outline-none border-2 bg-white mt-[15px] rounded-md text-left pl-[30px] focus:border-blue-600 from-current"
            placeholder="회사"
            name="content"
            value={content}
            onChange={onChange}
         />
         <div className="flex flex-col">
            <div className="flex justify-end mr-[15px] mt-[30px]">
               <button
                  className="w-[40px] h-[40px] bg-neutral-300 rounded-md hover:brightness-[92%] mr-[5px]"
                  onClick={handleCloseEdit}
               >
                  취소
               </button>
               <button
                  className="w-[40px] h-[40px] bg-neutral-300 rounded-md hover:brightness-[92%]"
                  onClick={handleCloseEdit}
               >
                  저장
               </button>
            </div>
         </div>
      </div>
   );
};

const Overview = () => {
   const configs = [
      ["company", "회사"],
      ["education", "학력"],
      ["residence", "거주지"],
      ["birth_place", "출신지"],
      ["mobile_phone", "휴대폰"],
   ];
   const [content, setContent] = useState("");
   const [isEdit, setIsEdit] = useState(false);

   const onClick = () => {
      setIsEdit((isEdit) => !isEdit);
      setContent(content);
   };

   return (
      <div>
         <div className="content">
            {isEdit ? (
               <div className="cursor-pointer flex mt-[30px] absolute top-[-18px] right-0 justify-center items-center">
                  <i className="mr-[10px] cursor-pointer w-[20px] h-[20px] bg-neutral-400 rounded-full flex justify-center items-center ">
                     ...
                  </i>
                  <span>💼 {content} 에서 근무 했음</span>
                  <button
                     className="text-blue-600 hover:underline underline-offset-8 mr-[10px]"
                     value={content}
                     onClick={onClick}
                  >
                     근무 수정하기
                  </button>
               </div>
            ) : (
               <Fragment>
                  <AddButton />
                  <UpdateInput setIsEdit={setIsEdit} />
               </Fragment>
            )}
            <AddButton config={"고등학교"} />
            {/* <div className="cursor-pointer mt-[20px]">
            <i className="mr-[10px] cursor-pointer">➕</i>
            <span className="text-blue-600 hover:underline underline-offset-8">
               고등학교 추가
            </span>
         </div> */}
            <div className="cursor-pointer mt-[50px]">
               <i className="mr-[10px] cursor-pointer">➕</i>
               <button
                  className="text-blue-600 hover:underline underline-offset-8"
                  value={content}
                  onClick={onClick}
               >
                  직장 추가
               </button>
            </div>
            <div className="cursor-pointer mt-[20px]">
               <i className="mr-[10px] cursor-pointer">➕</i>
               <span className="text-blue-600 hover:underline underline-offset-8">
                  대학교 추가
               </span>
            </div>
            <div className="cursor-pointer mt-[20px] relative">
               <i className="mr-[10px] cursor-pointer">🏠</i>
               <span className="text-blue-600 hover:underline underline-offset-8">
                  000
               </span>
               <span className="pl-[15px]">거주</span>
               <i className="w-[30px] h-[30px] flex justify-center   absolute top-[0px] right-0 bg-neutral-300  rounded-full hover:brightness-[92%] cursor-pointer">
                  ...
               </i>
            </div>
            <div className="cursor-pointer mt-[20px] relative">
               <i className="mr-[10px] cursor-pointer">🚩</i>
               <span className="text-blue-600 hover:underline underline-offset-8">
                  000
               </span>
               <span className="pl-[15px]">출신</span>
               <i className="w-[30px] h-[30px] flex justify-center   absolute top-[0px] right-0 bg-neutral-300  rounded-full hover:brightness-[92%] cursor-pointer">
                  ...
               </i>
            </div>
            <div className="cursor-pointer mt-[20px]">
               <i className="mr-[10px] cursor-pointer">➕</i>
               <span className="text-blue-600 hover:underline underline-offset-8">
                  결혼/연애 상태 추가
               </span>
            </div>
            <div className="cursor-pointer mt-[20px] relative">
               <i className="mr-[10px] cursor-pointer">📞</i>
               <span className="text-blue-600 hover:underline underline-offset-8">
                  000-0000-0000
               </span>
               <span className="pl-[15px]">휴대폰</span>
               <i className="w-[30px] h-[30px] flex justify-center   absolute top-[0px] right-0 bg-neutral-300  rounded-full hover:brightness-[92%] cursor-pointer">
                  ✏️
               </i>
            </div>
         </div>
      </div>
   );
};

const Career = () => {
   return (
      <div>
         <span className="font-bold">직장</span>
         <div className="cursor-pointer mt-[10px] mb-[30px]">
            <i className="mr-[10px] cursor-pointer">➕</i>
            <span className="text-blue-600 hover:underline underline-offset-8 ">
               직장 추가
            </span>
         </div>
         <span className="font-bold">대학</span>
         <div className="cursor-pointer mt-[10px] mb-[30px]">
            <i className="mr-[10px] cursor-pointer">➕</i>
            <span className="text-blue-600 hover:underline underline-offset-8">
               대학교 추가
            </span>
         </div>
         <span className="font-bold">고등학교</span>
         <div className="cursor-pointer mt-[10px] mb-[30px]">
            <i className="mr-[10px] cursor-pointer">➕</i>
            <span className="text-blue-600 hover:underline underline-offset-8">
               고등학교 추가
            </span>
         </div>
      </div>
   );
};

const Address = () => {
   return (
      <div>
         <span className="font-bold">이전 거주지</span>
         <div className="cursor-pointer mt-[10px] mb-[30px]">
            <i className="mr-[10px] cursor-pointer">➕</i>
            <span className="text-blue-600 hover:underline underline-offset-8">
               도시 추가
            </span>
         </div>
      </div>
   );
};

const PhoneNumber = () => {
   return (
      <div>
         <ul>
            <li className="mb-[30px]">
               <span className="font-bold">이전 거주지</span>
               <div className="cursor-pointer mt-[20px] relative">
                  <i className="mr-[10px] cursor-pointer">📞</i>
                  <span className="text-blue-600">000-0000-0000</span>
                  <span className="pl-[15px]">휴대폰</span>
                  <i className="w-[30px] h-[30px] flex justify-center   absolute top-[0px] right-0 bg-neutral-300  rounded-full hover:brightness-[92%] cursor-pointer">
                     ✏️
                  </i>
               </div>
               <div className="cursor-pointer mt-[20px] relative">
                  <i className="mr-[10px] cursor-pointer">✉️</i>
                  <span className="text-blue-600">000000 @ 000000</span>
                  <span className="pl-[15px]">이메일</span>
                  <i className="w-[30px] h-[30px] flex justify-center   absolute top-[0px] right-0 bg-neutral-300  rounded-full hover:brightness-[92%] cursor-pointer">
                     ✏️
                  </i>
               </div>
            </li>
            <li className="mb-[30px]">
               <span className="font-bold">웹사이트 및 소셜 링크</span>
               <div className="cursor-pointer mt-[20px]">
                  <i className="mr-[10px] cursor-pointer">➕</i>
                  <span className="text-blue-600 hover:underline underline-offset-8">
                     직장 추가
                  </span>
               </div>
               <div className="cursor-pointer mt-[20px]">
                  <i className="mr-[10px] cursor-pointer">➕</i>
                  <span className="text-blue-600 hover:underline underline-offset-8">
                     소셜 링크 추가
                  </span>
               </div>
            </li>
            <li>
               <span className="font-bold">기본 정보</span>
               <div className="cursor-pointer mt-[20px]">
                  <i className="mr-[10px] cursor-pointer">➕</i>
                  <span className="text-blue-600 hover:underline underline-offset-8">
                     언어 추가
                  </span>
               </div>
               <div className="cursor-pointer mt-[20px] relative">
                  <i className="mr-[10px] cursor-pointer">👤</i>
                  <span className="text-blue-600">0성</span>
                  <span className="pl-[15px]">성별</span>
                  <i className="w-[30px] h-[30px] flex justify-center   absolute top-[0px] right-0 bg-neutral-300  rounded-full hover:brightness-[92%] cursor-pointer">
                     ✏️
                  </i>
               </div>
               <div className="cursor-pointer mt-[20px] relative">
                  <i className="mr-[10px] cursor-pointer">🎂</i>
                  <span className="text-blue-600">0000년 0월 0일</span>
                  <span className="pl-[15px]">생년월일</span>
                  <i className="w-[30px] h-[30px] flex justify-center   absolute top-[0px] right-0 bg-neutral-300  rounded-full hover:brightness-[92%] cursor-pointer">
                     ✏️
                  </i>
               </div>
            </li>
         </ul>
      </div>
   );
};

const MySelf = () => {
   return (
      <div>
         <ul>
            <li>
               <span className="font-bold">내 소개</span>
               <div className="cursor-pointer mt-[10px] mb-[30px]">
                  <i className="mr-[10px] cursor-pointer">➕</i>
                  <span className="text-blue-600 hover:underline underline-offset-8 ">
                     자신을 소개해보세요
                  </span>
               </div>
            </li>
            <li>
               <span className="font-bold">이름 발음 정보</span>
               <div className="cursor-pointer mt-[10px] mb-[30px]">
                  <i className="mr-[10px] cursor-pointer">➕</i>
                  <span className="text-blue-600 hover:underline underline-offset-8 ">
                     이름 발음 정보 추가
                  </span>
               </div>
            </li>
            <li>
               <span className="font-bold">다른 이름</span>
               <div className="cursor-pointer mt-[10px] mb-[30px]">
                  <i className="mr-[10px] cursor-pointer">➕</i>
                  <span className="text-blue-600 hover:underline underline-offset-8 ">
                     별명,본명 등을 추가하세요...
                  </span>
               </div>
            </li>
            <li>
               <span className="font-bold">좋아하는 문구</span>
               <div className="cursor-pointer mt-[10px] mb-[30px]">
                  <i className="mr-[10px] cursor-pointer">➕</i>
                  <span className="text-blue-600 hover:underline underline-offset-8 ">
                     좋아하는 인용구 추가
                  </span>
               </div>
            </li>
            <li>
               <span className="font-bold">헌혈</span>
               <div className="cursor-pointer mt-[10px] mb-[30px]">
                  <i className="mr-[10px] cursor-pointer">➕</i>
                  <span className="text-blue-600 hover:underline underline-offset-8 ">
                     헌혈에 대해 알아보기
                  </span>
               </div>
            </li>
         </ul>
      </div>
   );
};

const Family = () => {
   return (
      <div>
         <ul>
            <li>
               <span className="font-bold">결혼/연애 상태</span>
               <div className="cursor-pointer mt-[10px] mb-[30px]">
                  <i className="mr-[10px] cursor-pointer">➕</i>
                  <span className="text-blue-600 hover:underline underline-offset-8 ">
                     결혼/연애 상태 추가
                  </span>
               </div>
            </li>
            <li>
               <span className="font-bold">가족</span>
               <div className="cursor-pointer mt-[10px] mb-[30px]">
                  <i className="mr-[10px] cursor-pointer">➕</i>
                  <span className="text-blue-600 hover:underline underline-offset-8 ">
                     가족 추가
                  </span>
               </div>
            </li>
         </ul>
      </div>
   );
};

const Event = () => {
   return (
      <div>
         <span className="font-bold">중요 이벤트</span>
         <div className="cursor-pointer mt-[10px] mb-[30px]">
            <i className="mr-[10px] cursor-pointer">➕</i>
            <span className="text-blue-600 hover:underline underline-offset-8 ">
               중요 이벤트 추가
            </span>
         </div>
      </div>
   );
};

const SwitchParam = () => {
   // 개요 , 경력 및 학력 등등 카테고리 별 쿼리스트링

   const params = useSearchParams()[0];
   const aboutParam = params.get("aboutParam");

   switch (aboutParam) {
      case "overview":
         return <Overview />;
      case "career":
         return <Career />;
      case "address":
         return <Address />;
      case "phonenumber":
         return <PhoneNumber />;
      case "family":
         return <Family />;
      case "myself":
         return <MySelf />;
      case "event":
         return <Event />;
      default:
         return <Overview />;
   }
};

const About = () => {
   return (
      <div className=" h-full mt-[7px]  my-0  mx-auto  pt-[20px]  flex  justify-between bg-neutral-200 ">
         <div className="w-[1186px] my-0  mx-auto flex">
            <div className="w-[285px] h-[430px] bg-white rounded-md p-[15px] ">
               <h3 className="font-bold text-xl mb-[20px] ml-[6px]">정보</h3>
               <div className="flex flex-col items-center">
                  {QUERIY_PARAMS.map(([config, queryParam], index) => (
                     <ConfigureButton
                        key={index}
                        config={config}
                        queryParam={queryParam}
                     />
                  ))}
               </div>
            </div>
            <div className="w-[900px] h-[430px] bg-white rounded-md p-[15px] relative ">
               <SwitchParam />
            </div>
         </div>
      </div>
   );
};
export default About;
