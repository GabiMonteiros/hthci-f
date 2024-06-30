
// import axios from "axios";
// import React, { useEffect } from "react";


// // export interface InstaItem{
// //   // id: string;
// //   // media_type: "IMAGE" | "VIDEO";
// //   media_url: string;
// //   permalink: String;
// // }

// function InstaFeed() {


//   // const [InstaItems, setInstaItems] = useState<InstaItem[]>([]);
//     async function getInstaFeed(){

//         // const userId = process.env.REACT_APP_USER_ID;
//         const accessToken = process.env.REACT_APP_API_KEY;

//         // const fields= "media_url, media_type, permalink"
//         const url = `https://graph.instagram.com/me/media?access_token=${accessToken}`;
//         // const url = `https://graph.instagram.com/refresh_access_token=${token}&fields=${fields}`;
    
//         const {data} = await axios.get(url)
//         console.log(data)
//     }

//     useEffect(()=>{
//         getInstaFeed(); valid OAuth Redirect URIs 
//     },[])


    

//   return (
//     <div>
//       <p>Meu Feed</p>
//     </div>
//   )
// }

// export default InstaFeed

// import React ,{useEffect, useState} from "react";

// const BASE_URL = 'https://jsonplaceholder.typicode.com';

// //eslint
// const InstaItem = ['id: number', 'title: string']

// function Instafeed() {
  
 
  
  
//   // const[posts, setPosts] = useState <InstaItem[]> ([]);

  
//   // useEffect(()=>{
//   //   const fetchPosts = async ()=>{
//   //     const response = await fetch (`${BASE_URL}/posts`);
//   //     const posts = (await response.json() )as InstaItem[];
//   //     setPosts(posts);
//   //   };

//   //   fetchPosts();
//   // },[]);

//   return(
//     <div>

//        <p>Meu Feed</p>

//        <ul>
//         {posts.map((post)=>{
//           return<li key={post.id}>{post.title}</li>
//         })}
//        </ul>
//     </div>
//   )


// } export default Instafeed;
