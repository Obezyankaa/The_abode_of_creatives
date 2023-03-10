import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../shared/context/tokenContext";

interface IGetFromAPI {
  data: any;
  id: string;
  created: number;
  num_comments: number;
  score: number;
  sr_detail: { icon_img: string };
  subreddit: string;
  title: string;
  thumbnail: string;
}

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
          setPosts(postsData.data.children.map((el: IGetFromAPI) => el.data));
        })
        .catch(console.log);
    }, [token]);

    return [posts];
}