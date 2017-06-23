let prefixedIds = {};
export default function getIdWithPrefix(prefix = "") {
    if (typeof prefixedIds[prefix] === undefined) {
        prefixedIds[prefix] = 0;
    }
    return prefixedIds[prefix]++;
}