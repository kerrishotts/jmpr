var exports = {};
/* eslint-disable no-unused-vars */
function require(reqModule) {
    let module = reqModule;
    if (module.substr(0, 2) === "./") {
        module = module.substr(2);
    }
    if (module.substr(0, 3) === "../") {
        module = module.substr(3);
    }
    module = module.replace(".js", "");
    return exports[module];
}