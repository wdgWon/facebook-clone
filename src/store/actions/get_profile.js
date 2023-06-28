import axios from "axios";
import { PROFILES_URL } from "../../config/api.json";
import { GET_PROFILE } from "../type.json";
import { initStore } from "../store";
// 컴포넌트가 아닌 값이나 문자열이라면 임의로 파라미터처럼 바꿀 수 있음 {} = 컬리 브레이스(브라켓)

export default function getProfile() {
  const actions = {
    [GET_PROFILE]: async () => {
      //[key] 프로퍼티로 고유해야 함 :
      //type.json을 따로 폴더 만들어야 함
      let res; //뭔갈 받아야 하니까

      try {
        res = await axios.get(PROFILES_URL);
        console.log("프로필 받기 성공!");
        console.log(JSON.stringify(res));
        alert("프로필 받기 성공!");
      } catch (err) {
        console.log(err);
        alert("프로필 받기 성공!");
        return;
      }
      return { profile: res };
    },
  };
  initStore(actions);
}
