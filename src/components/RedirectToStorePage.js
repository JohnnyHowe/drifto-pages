import { deviceOS } from '../helpers/deviceHelper';

export default function RedirectToStorePage() {
    let os = deviceOS();
    let error;
    let url;

    try {
        if (os === 'Android' || os.startsWith('Win')) {
            url = 'https://play.google.com/store/apps/details?id=com.UnluckyDuck.Drifto';
        } else if (os === 'iOS' || os === 'Mac') {
            url = 'https://apps.apple.com/nz/app/drifto/id1643464834';
        } else {
            url = `Could not match "${os}" to an OS.`;
        }
    }
    catch (error) { }

    let contentStr = `0; url='${url}'`

    return (
        <div>
            Redirect to store
            <br />
            Raw OS: {navigator.platform}
            <br />
            OS: {os}
            <br />
            URL: "{url}"
            <br />
            Error Status: "{error}"
            <br />
            <meta http-equiv="Refresh" content={contentStr} />
        </div>
    );
}