// Universal loader: detects runtime and delegates to the right native package.
//
// Runtime detection order:
//   1. Bare (bare.run, pear.run, etc.)  → @utexo/rgb-lib-bare
//   2. Node.js (linux-x64, linux-arm64, darwin-arm64) → @utexo/rgb-lib-{platform}-{arch}
//
// Bare check MUST come first — require('os') does not exist in Bare.
if (typeof globalThis !== "undefined" && globalThis.Bare) {
    module.exports = require("@utexo/rgb-lib-bare");
} else {
    const os = require("os");

    // Currently supported Node.js platforms
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
        console.error(
            "Supported combinations: linux-x64, linux-arm64, darwin-arm64, or Bare runtime"
        );
        process.exit(1);
    }

    let nativePackageName = `@utexo/rgb-lib-${platform}-${arch}`;
    module.exports = require(nativePackageName);
}
