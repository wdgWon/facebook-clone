import { useParams } from "react-router-dom";
import { useStore } from "../../store/store";

export default function Profile() {
  const [store, dispatch] = useStore(true);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[500px] h-[500px] flex justify-center items-center">
        {/* <span className="text-black text-lg font-bold">
          {JSON.stringify(store)}
        </span> */}
        <span className="text-black text-lg font-bold">
          {JSON.stringify(store.profile.friends)}
        </span>
        <span>프로필 정보</span>
      </div>
    </div>
  );
}
