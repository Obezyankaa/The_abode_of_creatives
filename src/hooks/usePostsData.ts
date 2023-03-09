import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../shared/context/tokenContext";


export function usePostsData() {
    const token = useContext(tokenContext)
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      axios
        .get("https://oauth.reddit.com/best.json?sr_detail=true", {
          headers: { Authorization: `bearer${token}` },
        })
        .then((res) => {
          const postsData = res.data;
          setPosts(postsData.data.children);
        })
        .catch(console.log);
    }, [token]);
console.log(posts);

    return [posts];
}