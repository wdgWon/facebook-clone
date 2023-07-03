import displayAction from './display_action';
import userAction from './user_action'
import updateProfile from "./put_profile";
import authentication from './authentication';

export default function setActions() {
    userAction();
    displayAction();
    updateProfile();
    authentication();
}
