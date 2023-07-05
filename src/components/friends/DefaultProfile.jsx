export default function DefaultProfile() {
   return (
      <div className="flex flex-col space-y-4 items-center justify-center w-full h-full">
         <img
            className="inline-block"
            height="112"
            src="https://www.facebook.com/images/comet/empty_states_icons/people/null_states_people_gray_wash.svg"
            width="112"
            alt="no profile"
         />
         <span className="text-gray-500 text-xl font-bold">
            프로필을 미리 볼 사람의 이름을 선택하세요.
         </span>
      </div>
   );
}
