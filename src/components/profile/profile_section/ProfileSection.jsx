import { useState } from "react";
import Modal from "../Modal";
import HobbyModal from "../HobbyModal";
import FriendSection from "./FriendSection";
import PhotosSection from "./PhotosSection";
import IntroductionSection from "./IntroductionSection";
import WritePost from "./WritePost";
import PostSection from "./PostSection";

const ProfileSection = () => {
   const [modal, setModal] = useState(false);
   const [hobbyModal, setHobbyModal] = useState(false);

   // const toggleMenu = () => setIsEdit(!isEdit);

   // const handleEdit = () => {
   //    setIsEdit(false);
   //    setContent("");
   // };
   // async function getDate() {
   //    try {
   //       const response = await axios.get(`/api/profiles/`);
   //       console.log(JSON.stringify(response));
   //    } catch (error) {
   //       console.error(error);
   //    }
   // }

   return (
      <div className=" h-full bg-neutral-200 ">
         {modal ? <Modal setModal={setModal} /> : null}
         {hobbyModal ? <HobbyModal setHobbyModal={setHobbyModal} /> : null}

         <section
            role="profile post"
            className="w-[1186px] h-full mt-[7px] my-0 mx-auto pt-[20px] flex justify-between"
         >
            <div className="w-[490px] rounded-md  ">
               <IntroductionSection
                  setModal={setModal}
                  setHobbyModal={setHobbyModal}
               />
               <PhotosSection />
               <FriendSection />
            </div>
            <div className="mr-[20px] ">
               <WritePost />
               <PostSection />
            </div>
         </section>
      </div>
   );
};

export default ProfileSection;
