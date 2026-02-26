# RGB Lib Node.js bindings

[![npm version](https://badge.fury.io/js/rgb-lib.svg)](https://badge.fury.io/js/rgb-lib)

This project builds Node.js packages for the [rgb-lib] Rust library, which is
included as a git submodule. The bindings are created using the [rgb-lib C++
bindings], which are located inside the rgb-lib submodule, and [Swig].

## Platform-specific packages

Bindings are platform-specific and are published into dedicated packages (under
the @rgb-tools namespace). The main package is a thin layer that depends on the
correct platform-specific package for the platform where it's being installed.

## Requirements

- Python 3
- development tools (e.g. make, g++)

## Installation

Install the package with npm:

```sh
npm install rgb-lib
```

## Usage

Import the package with:

```javascript
const rgblib = require("rgb-lib");
```

Then call its exported functions. As an example:

```javascript
let keys = rgblib.generateKeys(rgblib.BitcoinNetwork.Regtest);
console.log(keys);
```

## VSS backup (optional)

When built with the `vss` feature, the bindings expose [VSS (Versioned Storage Service)](https://github.com/UTEXO-Protocol/rgb-lib) cloud backup:

- **`rgblib.restoreFromVss(config, targetDir)`** — restore a wallet from VSS backup.
- **`rgblib.VssBackupClient`** — client for a VSS server (`config`: `{ server_url, store_id, signing_key }`). Methods: `encryptionEnabled()`, `deleteBackup()`, `drop()`.
- **`wallet.configureVssBackup(config)`** — enable VSS backup for the wallet.
- **`wallet.disableVssAutoBackup()`** — turn off automatic VSS backup.
- **`wallet.vssBackup(vssBackupClient)`** — run a backup (returns version info).
- **`wallet.vssBackupInfo(vssBackupClient)`** — get backup info.

> :warning: **Warning: memory will be leaked if not taken care of manually**
>
> Check the example to see how you can manually avoid memory leaks

[Swig]: https://github.com/swig/swig
[rgb-lib C++ bindings]: https://github.com/RGB-Tools/rgb-lib/tree/master/bindings/c-ffi
[rgb-lib]: https://github.com/RGB-Tools/rgb-lib
