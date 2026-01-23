const os = require("os");

// Currently supported platforms
const supportedCombinations = [
    { platform: "linux", arch: "x64" },
    { platform: "linux", arch: "arm64" },
    { platform: "darwin", arch: "arm64" },
];

const platform = os.platform();
const arch = os.arch();

const isSupported = supportedCombinations.some(
    (combo) => combo.platform === platform && combo.arch === arch
);

if (!isSupported) {
    console.error(`Unsupported platform-arch: ${platform}-${arch}`);
    console.error("Supported combinations: linux-x64, linux-arm64, darwin-arm64");
    process.exit(1);
}

let nativePackageName = `@utexo-protocol/rgb-lib-${platform}-${arch}`;
module.exports = require(nativePackageName);
