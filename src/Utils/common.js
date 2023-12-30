export const Option_Logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png";
export const YT_Logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/512px-YouTube_Logo_%282013-2017%29.svg.png";
export const user_logo = "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png";
export const search_logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png";

const API_KEY = "AIzaSyA4LM7t2WFcwFSz4dRoTpERZz8UwzRlB1w";
export const YT_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`;

export const YT_VIDEO_DETAIL_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=[ID]&key=${API_KEY}`;

export const YT_SEARCH_SUGGESTION_API = `https://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q=`;
