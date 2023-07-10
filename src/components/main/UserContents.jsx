import React, { useState } from "react";
import profile_img from "../../img/profile_img5.png";
import actionType from "../../store/type.json";
import { useStore } from "../../store/store";

const Reply = ({ reply, setReply }) => {
   return (
      <label className="ml-2 w-full flex place-items-center rounded-[50px] bg-[#f0f2f0] cursor-text">
         <span className="pl-[10px]">
            <svg fill="gray" viewBox="0 0 16 16" width="1em" height="1em">
               <g fillRule="evenodd" transform="translate(-448 -544)">
                  <g fillRule="nonzero">
                     <path
                        d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z"
                        transform="translate(448 544)"
                     ></path>
                     <path
                        d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z"
                        transform="translate(448 544)"
                     ></path>
                     <path
                        d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z"
                        transform="translate(448 544)"
                     ></path>
                     <path
                        d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z"
                        transform="translate(448 544)"
                     ></path>
                  </g>
               </g>
            </svg>
         </span>
         <input
            type="text"
            placeholder="댓글을 입력하세요..."
            value={reply}
            onChange={(e) => setReply(e.currentTarget.value)}
            className="inline-block basis-full py-[7px] px-[6px] bg-black/0 leading-[1.3] text-[15px] outline-none placeholder:text-black/70"
         />
      </label>
   );
};

const UserContent = ({ post }) => {
   const [reply, setReply] = useState("");
   const [store, dispatch] = useStore(false);

   const handleSubmit = (e) => {
      e.preventDefault();
      uploadReply();
   };

   const handleOnclick = () => {
      uploadLike();
   }

   const uploadReply = async () => {

      let body = {
         id: post.id,
         reply: {
            user_name: store.user.name,
            comment: reply,
            created_time: "방금 전",
         },
      };

      await dispatch(actionType.UPLOAD_REPLY, body);
   };

   const uploadLike = async () => {
      let body = {
         id: post.id,
      }

      await dispatch(actionType.REPLY_LIKE, body);
   }

   return (
      <div className="flex flex-col space-y-2 w-full bg-white p-4 shadow rounded-lg">
         <div className="flex items-start">
            <img
               className="cursor-pointer hover:brightness-[92%] w-12 h-12 rounded-full mr-4"
               src={profile_img}
               alt="프로필 사진"
            />
            <div>
               <h2 className="text-base cursor-pointer font-semibold">
                  {post.writer_name}
               </h2>
               <p className="text-gray-600 text-sm cursor-default">
                  {post.created_time}
               </p>
            </div>
         </div>
         <div>{post.content}</div>
         {post.image !== "http://example.com" && post.image && (
            <img src={post.image} alt="post image" className="w-full h-fit" />
         )}
         {post.like !== 0 && (
            <div className="flex w-full items-center">
               <div className="flex items-center space-x-2">
                  <img
                     height="18"
                     role="presentation"
                     src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
                     width="18"
                  />
                  <span className="text-sm text-gray-400">{post.like}</span>
               </div>
            </div>
         )}
         {(post.like !== 0 || post.reply_list.length !== 0) && (
            <hr className="w-full border-t-[1px] border-slate-300" />
         )}
         <div className="flex items-center">
            <button onClick={handleOnclick} className="flex-1 flex py-1 justify-center items-center space-x-2 rounded-md hover:bg-gray-100">
               <i
                  data-visualcompletion="css-img"
                  className="inline-block opacity-70 bg-[length:26px_664px] bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/u_8wqnYWIlG.png')] w-[18px] h-[18px]"
                  style={{ backgroundPosition: "0px -202px" }}
               ></i>
               <span className="text-gray-600 text-sm">좋아요</span>
            </button>
            <button className="flex-1 flex py-1 justify-center items-center space-x-2 rounded-md hover:bg-gray-100">
               <i
                  data-visualcompletion="css-img"
                  className="inline-block opacity-70 bg-[length:26px_664px] bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/u_8wqnYWIlG.png')] w-[18px] h-[18px]"
                  style={{ backgroundPosition: "0px -162px" }}
               ></i>
               <span className="text-gray-600 text-sm">댓글</span>
            </button>
         </div>
         <hr className="w-full border-t-[1px] border-slate-300" />
         <div className="flex w-full space-x-2 items-center">
            <img
               alt="profile image"
               src={profile_img}
               className="inline-block w-8 h-8 rounded-full cursor-pointer"
            />
            <form className="w-full" onSubmit={handleSubmit}>
               <Reply reply={reply} setReply={setReply} />
            </form>
            <div className="w-full flex flex-col">
               {post.reply_list.map((reply, index) => {
                  return (
                  <div key={index} className="w-full flex space-x-2">
                     <h1 className="">{reply.writer_name}</h1>
                     <p className="inline-block text-black text-lg">{reply.comment}</p>
                  </div>);
               })}
            </div>
         </div>
      </div>
   );
};

export default UserContent;
