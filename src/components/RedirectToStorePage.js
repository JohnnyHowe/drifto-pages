import { deviceOS } from '../helpers/deviceHelper';
import constants from '../helpers/constants';
import React  from 'react';


export default function RedirectToStorePage() {
    let os = deviceOS();
    let url;

    try {
        if (os === 'Android' || os.startsWith('Win')) {
            url = constants.androidURL;
        } else if (os === 'iOS' || os === 'Mac') {
            url = constants.iOSURL;
        } else {
            url = `Could not match "${os}" to an OS.`;
        }
    }
    catch (error) { }

    let contentStr = `0; url='${url}'`

    return (
        <div style={{
            paddingTop: '10vh',
            fontSize: '3vh',
            textAlign: 'center',
            background: '#aaa',
            height: '100vh',
            color: 'white',
        }}>
            <p>Redirecting you to store...</p>
            <br />
            <div style={{ fontSize: '2vh' }}>
                <p >Not being redirected? Use these.</p>
                <a href={constants.androidURL}>Play Store</a>
                <br />
                <a href={constants.iOSIURL}>App Store</a>
            </div>
            <meta http-equiv="Refresh" content={contentStr} />
        </div>
    );
}