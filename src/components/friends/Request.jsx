import DefaultProfile from "./DefaultProfile";

const RequestCard = ({ src, name }) => {
   return (
      <div className="flex p-2 space-x-2 items-center cursor-pointer rounded-md hover:bg-gray-100">
         <img src={src} className="w-14 h-14 rounded-full inline-block" />
         <span className="text-black font-bold text-sm basis-full">{name}</span>
         <button
            type="button"
            className="flex justify-center items-center px-5 py-[6px] rounded-md bg-[#1b74e4] hover:bg-[#1666c7]"
         >
            <span className="inline-block shrink-0 font-black text-white">
               확인
            </span>
         </button>
         <button
            type="button"
            className="flex justify-center items-center px-5 py-[6px] rounded-md bg-[#e4e6eb] hover:bg-[#cfd0d5]"
         >
            <span className="inline-block shrink-0 font-black text-black">
               삭제
            </span>
         </button>
      </div>
   );
};

export default function Request({ getHeight, dummyRequests }) {
   return (
      <>
         <aside
            style={{ top: getHeight.top, height: getHeight.height }}
            className="sticky bg-white pt-4 flex flex-col basis-1/4 shadow-md shadow-black/30 scrollbar overflow-hidden hover:overflow-y-auto"
         >
            <div
               role="requests list"
               className="flex flex-col w-full items-center"
            >
               <div className="flex items-center w-full p-4 min-w-fit border-b border-gray-300">
                  <button
                     type="button"
                     className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100"
                  >
                     <i
                        data-visualcompletion="css-img"
                        className="inline-block text-[#385898] bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/ENSmmP7ZTZt.png')] w-5 h-5"
                        style={{ backgroundPosition: "-75px -59px" }}
                     ></i>
                  </button>
                  <h1 className="inline-block text-black font-semibold text-3xl pl-4">
                     친구 요청
                  </h1>
               </div>
               <section
                  role="list"
                  className="flex flex-col space-y-2 w-full p-2"
               >
                  <span className="inline-block p-2 text-black font-semibold text-lg">{`친구 요청 ${dummyRequests.length}개`}</span>
                  <div className="flex space-y-2 flex-col w-full">
                     {dummyRequests.map((request) => (
                        <RequestCard
                           key={request.id}
                           src={request.profile_image}
                           name={request.name}
                        />
                     ))}
                  </div>
               </section>
            </div>
         </aside>
         <main role="request profile" className="flex flex-col basis-3/4 p-10">
            <DefaultProfile />
         </main>
      </>
   );
}
