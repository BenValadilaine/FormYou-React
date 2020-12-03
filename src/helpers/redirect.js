import React from "react";
import { useHistory } from 'react-router-dom';


const useRedirectToUrl = (url) =>
{
    // hooks to access browser history api using react router dom
    const history = useHistory()

    // helper to for redirection redirect
    const redirect = (url) => {
        history.push(url)

    }

    return redirect(url)
}

export default useRedirectToUrl;