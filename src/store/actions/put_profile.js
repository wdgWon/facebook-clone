import axios from "axios";
import { PROFILES_URL } from "../../config/api.json";
import { PUT_PROFILE } from "../type.json";
import { initStore } from "../store";

export default function updateProfile() {
  const actions = {
    [PUT_PROFILE]: async (currentState, newState) => {
      //[key] 프로퍼티로 고유해야 함 :
      //type.json을 따로 폴더 만들어야 함
      // let res; //뭔갈 받아야 하니까
      let body = {
        ...currentState,
        ...newState,
      };

      try {
        await axios.put(PROFILES_URL, body);
      } catch (err) {
        if(err.response.status === 500) {
          console.log("프로필 업데이트 성공!");
          console.log(err);
          return { profile: body };
        }
        console.error(err);
        return;
      }
    },
  };
  initStore(actions);
}
