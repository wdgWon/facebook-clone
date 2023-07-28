import axios from "axios";
import { PROFILES_URL } from "../../api/api.json";
import { PUT_PROFILE } from "../type.json";
import { initStore } from "../store";

export default function () {
  const actions = {
    [PUT_PROFILE]: async (currentState, newState) => {
      let body = {
        ...currentState,
        ...newState,
      };

      try {
        await axios.put(PROFILES_URL, body);
      } catch (err) {
        if (err.response.status === 500) {
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
