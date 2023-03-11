import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../shared/context/tokenContext";


 interface Post {
   data: {
     author: string;
     title: string;
     id: string;
   }
 }

export function usePostsData() {
    const token = useContext(tokenContext)
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
      axios
        .get("https://oauth.reddit.com/best.json?sr_detail=true", {
          headers: { Authorization: `bearer${token}` },
        })
        .then((res) => {
          setPosts(res.data.data.children);
        })
        .catch(console.log);
    }, [token]);

    return [posts];
}