// creating dynamic routes
// any request that comes to blog/n will get handled here
// specify params in case of TS
// data fetching in nextjs
// [....ajndj] =  doesn't matter how many subroutes you have all of them will get caught here 
// [[double braces]] catches everything after every slash


import axios from "axios";
import { useEffect } from "react";

export default async function BlogPage({params}: any) {
console.log(params);

const postId = params.postId;
const response = await axios.get('https://jsonplaceholder.tyicode.com/posts/${postId}')
const data = response.data;


    return <div>
        Blog Page {postId}


        <br />
        title - {data.title}
        body - {data.body}
    </div>

}