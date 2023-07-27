import { useSearchParams, Outlet } from "react-router-dom";
import Auth from "../../hoc/Auth";
import Header from "./Header";
import { useEffect, useState } from "react";
import { useStore } from "../../store/store";
import axios from "axios";
import api from "../../api/api.json";

const ProfilePage = () => {
   const store = useStore()[0];
   const searchParam = useSearchParams()[0];
   const [profile, setProfile] = useState({ ...store.profile });
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setLoading(true);
      const paramId = searchParam.get("id") ?? profile.profile_user_id;

      const getProfile = async () => {
         try {
            const res = await axios.get(
               api.PROFILES_RETRIEVE_URL.replace("{id}", paramId)
            );
            console.dir(res);
            setProfile(() => ({ ...res.data }));
            setLoading(false);
         } catch (err) {
            console.log(err);
            setLoading(false);
         }
      };

      if (profile.profile_user_id !== paramId) {
         console.log("get profile");
         getProfile();
      } else if (!searchParam.get("id")) {
         setProfile({ ...store.profile });
         setLoading(false);
      } else {
         setLoading(false);
      }
      window.scrollTo(0, 0);
   }, [searchParam.get("id")]);

   if (loading) {
      console.log("loading...");
      return;
   }

   return (
      <Auth>
         <Header profile={profile} />
         <Outlet context={profile} />
      </Auth>
   );
};

export default ProfilePage;
