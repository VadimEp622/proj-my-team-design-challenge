const shareData = {
    url: "https://vadimep622.github.io/proj-my-team-design-challenge"
}

export const shareService = {
    getFacebookUrl,
    getPinterestUrl,
    getTwitterUrl,
    getLinkedinUrl
}

function getFacebookUrl() {
    return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`;
}

function getPinterestUrl() {
    return `https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=${encodeURIComponent(shareData.url)}&is_video=[is_video]&description=[post-title]`
}

function getTwitterUrl() {
    return `https://twitter.com/share?url=${encodeURIComponent(shareData.url)}&text=[post-title]&via=[via]&hashtags=[hashtags]`
}

function getLinkedinUrl() {
    return `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(shareData.url)}&title=[post-title]`
}