import userLogin from "./user_login";
import getProfile from "./get_profile";
import updateProfile from "./put_profile";

export default function setActions() {
  userLogin();
  getProfile();
  updateProfile();
}
