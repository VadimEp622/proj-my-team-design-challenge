const SHARE_URL = 'https://vadimep622.github.io/proj-my-team-design-challenge'

export const shareService = {
    getFacebookUrl
}

function getFacebookUrl() {
    return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SHARE_URL)}`;
}