import axios from "axios";
import { LOGIN_URL } from '../../config/api.json'
import { initStore } from "../store";
import { USER_LOGIN } from "../type.json";

export default function userLogin() {
   const actions = {
      [USER_LOGIN]: async (_, formData) => {
         let res;

         try {
            res = await axios.post(LOGIN_URL, formData);
            console.log('로그인 성공!!!!');
            console.log(JSON.stringify(res));
            alert('로그인 성공!!!!')
         }
         catch (err) {
            alert("로그인 중 에러가 발생했습니다.\nerror code : " + err)
            console.log(err);
            return;
         }
         return { user: res };
      },
   };

   initStore(actions);
}
