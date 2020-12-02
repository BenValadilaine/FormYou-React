import { Cookies } from 'js-cookie';

const isUserSignIn = () => {
    return Cookies.get("current_user") != undefined;
}

export default isUserSignIn;