// import { useStore } from "../../store/store";

import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useStore } from "../../store/store";
import { GET_DISPLAY_HEIGHT } from "../../store/type.json";
// import Home from "./Home";
// import Request from "./Request";
// import List from "./List";

export const dummyFriends = [
   {
      id: 143,
      name: "Brett Houston",
      profile_image:
         "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7206a8&_nc_ohc=lxVi5aNcgXgAX-ej6A7&_nc_ht=scontent-ssn1-1.xx&oh=00_AfALXeB9oozCpCEgmbQOmlXJ8-TzGrZaRC5C0pcwNtT3fw&oe=64CC68B8",
   },
   {
      id: 191,
      name: "Noah Howard",
      profile_image:
         "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7206a8&_nc_ohc=lxVi5aNcgXgAX-ej6A7&_nc_ht=scontent-ssn1-1.xx&oh=00_AfALXeB9oozCpCEgmbQOmlXJ8-TzGrZaRC5C0pcwNtT3fw&oe=64CC68B8",
   },
   {
      id: 131,
      name: "Johnny Ortega",
      profile_image:
         "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7206a8&_nc_ohc=lxVi5aNcgXgAX-ej6A7&_nc_ht=scontent-ssn1-1.xx&oh=00_AfALXeB9oozCpCEgmbQOmlXJ8-TzGrZaRC5C0pcwNtT3fw&oe=64CC68B8",
   },
   {
      id: 100,
      name: "Fred Reese",
      profile_image:
         "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7206a8&_nc_ohc=lxVi5aNcgXgAX-ej6A7&_nc_ht=scontent-ssn1-1.xx&oh=00_AfALXeB9oozCpCEgmbQOmlXJ8-TzGrZaRC5C0pcwNtT3fw&oe=64CC68B8",
   },
   {
      id: 164,
      name: "Amanda Hayes",
      profile_image:
         "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7206a8&_nc_ohc=lxVi5aNcgXgAX-ej6A7&_nc_ht=scontent-ssn1-1.xx&oh=00_AfALXeB9oozCpCEgmbQOmlXJ8-TzGrZaRC5C0pcwNtT3fw&oe=64CC68B8",
   },
   {
      id: 160,
      name: "Mildred Ingram",
      profile_image:
         "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7206a8&_nc_ohc=lxVi5aNcgXgAX-ej6A7&_nc_ht=scontent-ssn1-1.xx&oh=00_AfALXeB9oozCpCEgmbQOmlXJ8-TzGrZaRC5C0pcwNtT3fw&oe=64CC68B8",
   },
];

export const dummyRequests = [
   {
      id: 29,
      name: "Nettie Christensen",
      profile_image:
         "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7206a8&_nc_ohc=lxVi5aNcgXgAX-ej6A7&_nc_ht=scontent-ssn1-1.xx&oh=00_AfALXeB9oozCpCEgmbQOmlXJ8-TzGrZaRC5C0pcwNtT3fw&oe=64CC68B8",
   },
   {
      id: 64,
      name: "Jessie Berry",
      profile_image:
         "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7206a8&_nc_ohc=lxVi5aNcgXgAX-ej6A7&_nc_ht=scontent-ssn1-1.xx&oh=00_AfALXeB9oozCpCEgmbQOmlXJ8-TzGrZaRC5C0pcwNtT3fw&oe=64CC68B8",
   },
   {
      id: 56,
      name: "Katherine Ferguson",
      profile_image:
         "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7206a8&_nc_ohc=lxVi5aNcgXgAX-ej6A7&_nc_ht=scontent-ssn1-1.xx&oh=00_AfALXeB9oozCpCEgmbQOmlXJ8-TzGrZaRC5C0pcwNtT3fw&oe=64CC68B8",
   },
];

export default function Friends() {
   const dispatch = useStore(false)[1];
   const [getHeight, setHeight] = useState({});
   dispatch(GET_DISPLAY_HEIGHT, setHeight);

   return (
      <div
         role="friends"
         className="relative w-screen flex min-h-fit bg-[#eeeeee]"
      >
         <Outlet context={{ getHeight, dummyFriends, dummyRequests }} />
      </div>
   );
}
