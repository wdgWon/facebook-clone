import displayAction from './display_action';
import userAction from './user_action'
import updateProfile from "./put_profile";

export default function setActions() {
    userAction();
    displayAction();
    updateProfile();
}
