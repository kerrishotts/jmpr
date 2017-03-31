var exports = {};
function require(reqModule) {
    let module = reqModule;
    if (module.substr(0, 2) === "./") {
        module = module.substr(2);
    }
    module = module.replace(".js", "");
    return exports[module];
}