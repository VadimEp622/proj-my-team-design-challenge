const shareData = {
    url: encodeURIComponent("https://vadimep622.github.io/proj-my-team-design-challenge"),
    title: encodeURIComponent("my-team"),
    description: encodeURIComponent("Hi, this is a private presentation project called my-team. It was made following instructions on a canvas design file using Figma & Lunacy. Project was created using React.js + SCSS"),
    hashtags: 'myteam,display_project,react,figma,lunacy'
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
    return `https://pinterest.com/pin/create/bookmarklet/?url=${shareData.url}&is_video=false&description=${shareData.description}`
}

function getTwitterUrl() {
    return `https://twitter.com/share?url=${shareData.url}&text=${shareData.description}&hashtags=${shareData.hashtags}`
}

function getLinkedinUrl() {
    return `https://www.linkedin.com/shareArticle?url=${shareData.url}&title=${shareData.title}`
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