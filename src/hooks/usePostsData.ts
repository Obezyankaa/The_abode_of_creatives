import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../shared/context/tokenContext";


 interface Post {
   data: {
     author: string;
     title: string;
     id: string;
     subreddit: string;
     sr_detail: {
       banner_img: string;
       icon_img: string;
       created_utc: number;
     };
   };
 }

export function usePostsData() {
    const token = useContext(tokenContext)
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
      axios
        .get("https://oauth.reddit.com/best.json?sr_detail=true", {
          params: { limit: 5 },
          headers: { Authorization: `bearer${token}` },
        })
        .then((res) => {
          setPosts(res.data.data.children);
        })
        .catch(console.log);
    }, [token]);
    console.log(posts);
    
    return [posts];
}