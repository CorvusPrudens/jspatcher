/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require("fs");
const path = require("path");

const deleteFolder = (fp) => {
    if (fs.existsSync(fp)) {
        fs.readdirSync(fp).forEach((file) => {
            const curPath = path.join(fp, file);
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteFolder(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(fp);
    }
};

if (fs.existsSync("./dist/packages")) deleteFolder("./dist/packages");
fs.mkdirSync("./dist/packages");

const internalPackagesPath = "./src/scripts/internal-packages.json";
/** @type {string[]} */
const INTERNAL_PACKAGES = require("./internal-packages.json");

fs.copyFileSync(internalPackagesPath, "./dist/packages/internal-packages.json");

const internalPackagesPathHardware = "./src/scripts/internal-packages-hardware.json";
/** @type {string[]} */
const INTERNAL_PACKAGES_HARDWARE = require("./internal-packages-hardware.json");

fs.copyFileSync(internalPackagesPathHardware, "./dist/packages/internal-packages-hardware.json");

/**
 * @param {string} from
 * @param {string} to
 */
const copyFolderSync = (from, to) => {
    fs.mkdirSync(to);
    fs.readdirSync(from).forEach((element) => {
        if (fs.lstatSync(path.join(from, element)).isFile()) {
            fs.copyFileSync(path.join(from, element), path.join(to, element));
        } else {
            copyFolderSync(path.join(from, element), path.join(to, element));
        }
    });
};

INTERNAL_PACKAGES.forEach(p => copyFolderSync(`./node_modules/@electrosmith/package-${p}/dist`, `./dist/packages/${p}/`));
INTERNAL_PACKAGES_HARDWARE.forEach(p => copyFolderSync(`./node_modules/@electrosmith/package-${p}/dist`, `./dist/packages/${p}/`));
