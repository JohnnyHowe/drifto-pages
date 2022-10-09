const operatingSystems = {
    iOS: [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
    ],
    Mac: [
        'MacIntel'
    ],
    Windows: [
        'Win32'
    ],
    Android: [
        'Linux armv8l',
    ]
}

export function deviceOS() {
    let deviceName = navigator.platform;
    for (let os in operatingSystems) {
        if (operatingSystems[os].includes(deviceName)) {
            return os;
        }
    }
    console.log(`Unknown device: ${deviceName}`);
    return null;
}