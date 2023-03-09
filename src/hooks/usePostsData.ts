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
          console.log(postsData);
          setPosts(postsData.data.children);
        })
        .catch(console.log);
    }, [token]);
    
    return [posts];
//   const token = useContext(tokenContext);
//   const [data, setData] = useState<IUserData>({});
//   useEffect(() => {
//     if (!token || token === "undefined") return;
//     axios
//       .get("https://oauth.reddit.com/api/v1/me.json", {
//         headers: { Authorization: `bearer${token}` },
//       })
//       .then((resp) => {
//         const userData = resp.data;
//         console.log(resp);

//         const icon = userData.icon_img.split("?")[0];
//         setData({ name: userData.name, iconImg: icon });
//       })
//       .catch(console.log);
//   }, [token]);
//   console.log("useUserData--->", data);

//   return [data];
}