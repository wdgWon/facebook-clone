import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const About = () => {
  // 개요 : 직장 추가 상태 관리
  const [isEdit, setIsEdit] = useState(false);
  const [content, setContent] = useState("");

  const toggleMenu = () => setIsEdit(!isEdit);

  const onClick = () => {
    toggleMenu();
    setContent(content);
  };
  const onChange = (e) => {
    setContent(e.target.value);
  };
  const handleCloseEdit = () => {
    setIsEdit(false);
  };

  // 개요 , 경력 및 학력 등등 카테고리 별 쿼리스트링
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedState, setSelectedState] = useState("");

  const handleButtonClick = (queryParam) => {
    setSearchParams({ ...searchParams, aboutParam: queryParam });
    setSelectedState(queryParam);
  };

  return (
    <div className=" h-full mt-[7px]  my-0  mx-auto  pt-[20px]  flex  justify-between bg-neutral-200 ">
      <div className="w-[1186px] my-0  mx-auto flex">
        <div className="w-[285px] h-[430px] bg-white rounded-md p-[15px] ">
          <h3 className="font-bold text-xl mb-[20px] ml-[6px]">정보</h3>
          <div className="flex flex-col items-center">
            <button
              className="flex items-center w-[240px] h-[30px] bg-white rounded-md hover:brightness-[92%] text-neutral-600 font-semibold text-sm pl-[10px] mb-[20px]"
              onClick={() => handleButtonClick("overview")}
            >
              개요
            </button>
            <button
              className="flex items-center w-[240px] h-[30px] bg-white rounded-md hover:brightness-[92%] text-neutral-600 font-semibold text-sm pl-[10px] mb-[20px]"
              onClick={() => handleButtonClick("career")}
            >
              경력 및 학력
            </button>
            <button
              className="flex items-center w-[240px] h-[30px] bg-white rounded-md hover:brightness-[92%] text-neutral-600 font-semibold text-sm pl-[10px] mb-[20px]"
              onClick={() => handleButtonClick("address")}
            >
              이전 거주지
            </button>
            <button
              className="flex items-center w-[240px] h-[30px] bg-white rounded-md hover:brightness-[92%] text-neutral-600 font-semibold text-sm pl-[10px] mb-[20px]"
              onClick={() => handleButtonClick("phonenumber")}
            >
              연락처 및 기본 정보
            </button>
            <button
              className="flex items-center w-[240px] h-[30px] bg-white rounded-md hover:brightness-[92%] text-neutral-600 font-semibold text-sm pl-[10px] mb-[20px]"
              onClick={() => handleButtonClick("family")}
            >
              가족 및 결혼/연애 상태
            </button>
            <button
              className="flex items-center w-[240px] h-[30px] bg-white rounded-md hover:brightness-[92%] text-neutral-600 font-semibold text-sm pl-[10px] mb-[20px]"
              onClick={() => handleButtonClick("myself")}
            >
              자세한 내 소개
            </button>
            <button
              className="flex items-center w-[240px] h-[30px] bg-white rounded-md hover:brightness-[92%] text-neutral-600 font-semibold text-sm pl-[10px] mb-[20px]"
              onClick={() => handleButtonClick("event")}
            >
              중요 이벤트
            </button>
          </div>
        </div>
        <div className="w-[900px] h-[430px] bg-white rounded-md p-[15px] relative ">
          <div>
            {selectedState === "overview" && (
              <div>
                <ul>
                  <li className="mb-[30px]">
                    <div className="content">
                      {isEdit ? (
                        <>
                          <input
                            className="w-[849px] h-[56px] outline-none border-2 bg-white mt-[15px] rounded-md text-left pl-[30px] hover:border-blue-600 hover:text-xs from-current"
                            placeholder="회사"
                            name="content"
                            value={content}
                            onChange={onChange}
                          />
                        </>
                      ) : (
                        <div>
                          <span>💼 {content} 에서 근무 했음</span>
                        </div>
                      )}
                    </div>
                    {isEdit ? (
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
                      </div>
                    ) : (
                      <div className="cursor-pointer flex mt-[30px] absolute top-[-18px] right-0 justify-center items-center">
                        <i className="mr-[10px] cursor-pointer w-[20px] h-[20px] bg-neutral-400 rounded-full flex justify-center items-center ">
                          ...
                        </i>
                        <button
                          className="text-blue-600 hover:underline underline-offset-8 mr-[10px]"
                          value={content}
                          onClick={onClick}
                        >
                          근무 수정하기
                        </button>
                      </div>
                    )}

                    <div className="cursor-pointer mt-[20px]">
                      <i className="mr-[10px] cursor-pointer">➕</i>
                      <span className="text-blue-600 hover:underline underline-offset-8">
                        고등학교 추가
                      </span>
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
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            {selectedState === "career" && (
              <div>
                <ul>
                  <li className="mb-[30px]">
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
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            {selectedState === "address" && (
              <div>
                <span className="font-bold">이전 거주지</span>
                <div className="cursor-pointer mt-[10px] mb-[30px]">
                  <i className="mr-[10px] cursor-pointer">➕</i>
                  <span className="text-blue-600 hover:underline underline-offset-8">
                    도시 추가
                  </span>
                </div>
              </div>
            )}
          </div>
          <div>
            {selectedState === "phonenumber" && (
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
            )}
          </div>
          <div>
            {selectedState === "family" && (
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
            )}
          </div>
          <div>
            {selectedState === "myself" && (
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
            )}
          </div>
          <div>
            {selectedState === "event" && (
              <div>
                <ul>
                  <li>
                    <span className="font-bold">중요 이벤트</span>
                    <div className="cursor-pointer mt-[10px] mb-[30px]">
                      <i className="mr-[10px] cursor-pointer">➕</i>
                      <span className="text-blue-600 hover:underline underline-offset-8 ">
                        중요 이벤트 추가
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
