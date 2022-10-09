const operatingSystems = {
    iOS: [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
    ],
    mac: [
        'MacIntel'
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