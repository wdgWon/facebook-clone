// import { useEffect } from "react";

// const PhotoUpload = ({ setPhotoUploadModal }) => {
//   const closeModal = (e) => {
//     if (e.target === e.currentTarget) {
//       setPhotoUploadModal(false);
//     }
//   };
//   useEffect(() => {
//     document.body.style.overflow = "hidden";

//     return () => (document.body.style.overflow = "auto");
//   }, []);
//   return (
//     <div
//       className=" container fixed top-[0] left-[50%] translate-x-[-50%] z-999 bg-white/50 shadow-lg
//     "
//       style={{ height: "100vh" }}
//       onClick={closeModal}
//     >
//       <div className="w-[550px] h-[640px] rounded-md my-0 mx-auto bg-white">
//         <div className="w-[550px] rounded-md">
//           <h1 className="font-bold text-2xl">프로필 사진 업데이트</h1>
//         </div>
//         <button
//           className="absolute top-[190px] right-[20px] w-[35px] h-[35px] bg-neutral-400 flex justify-center items-center rounded-full hover:brightness-[92%]"
//           onClick={closeModal}
//         >
//           ✖️
//         </button>
//         <hr className="w-[700px] border-t-[1px] border-slate-500 mt-3.5" />
//         <button className="w-[458px] h-[50px] bg-blue-200  mt-[15px] rounded-md text-center hover:brightness-[92%] flex justify-center items-center text-blue-600 font-bold ">
//           ➕ 사진 업로드
//         </button>
//       </div>
//     </div>
//   );
// };
// export default PhotoUpload;
