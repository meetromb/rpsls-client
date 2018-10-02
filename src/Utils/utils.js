export const getHashFromURL = () => {
    return window.location.hash.substring(1);
}

export const setHashToURL = (hash) => {
    window.location.hash = hash;
}