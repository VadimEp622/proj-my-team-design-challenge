const shareData = {
    url: encodeURIComponent("https://vadimep622.github.io/proj-my-team-design-challenge"),
    img: encodeURIComponent(require('../assets/images/logo.svg').default)
}

export const shareService = {
    getFacebookUrl,
    getPinterestUrl,
    getTwitterUrl,
    getLinkedinUrl
}

function getFacebookUrl() {
    return `https://www.facebook.com/sharer/sharer.php?u=${shareData.url}`;
}

function getPinterestUrl() {
    // return `https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=${shareData.url}&is_video=[is_video]&description=[post-title]`
    return `https://pinterest.com/pin/create/bookmarklet/?media=${shareData.img}&url=${shareData.url}&is_video=false&description=no`
}

function getTwitterUrl() {
    return `https://twitter.com/share?url=${shareData.url}&text=[post-title]&via=[via]&hashtags=[hashtags]`
}

function getLinkedinUrl() {
    return `https://www.linkedin.com/shareArticle?url=${shareData.url}&title=[post-title]`
}



// Here is argument details:
// Argument     Details
//--------------------------
// [post-url]	    The url for your blog post
// [post-img]	    The image/thumbnail for your blog post
// [post-title]	    The blog post title of the url you want to share
// [post-desc]	    A longer description of the blog post content you are sharing
// [post-app_id]	The App ID
// [via]	        optional Twitter username of content author (don’t include “@”)
// [hashtags]	    optional Hashtags appended onto the tweet (comma separated. don’t include “#”)
// [provider]	    Company who is sharing the url
// [is_video]	    If the content is a video or not