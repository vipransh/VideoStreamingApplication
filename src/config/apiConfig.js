
const Youtube_Api_key=process.env.REACT_APP_YOUTUBE_API_KEY




export const Youtube_Video_Api="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+ Youtube_Api_key;


export const Youtube_Search_Api="https://suggestqueries.google.com/complete/search?client=youtube&q="

export const Video_Info_Api="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key="+Youtube_Api_key;

export const Youtube_Comment_Api=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=${Youtube_Api_key}&maxResults=100&videoId=`