import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../shared/context/tokenContext";

interface ICommentsData { }

export function useCommentsData() {
      const token = useContext(tokenContext);
    const [data, setData] = useState<ICommentsData>({});
    const postId = 1;
      useEffect(() => {
        if (!token || token === "undefined") return;
        axios
            .get(`http://api.reddit.com/comments/${postId}`, {
              params: {limit: 10},
              headers: { Authorization: `bearer${token}` },
          })
          .then((resp) => {
            const commentsData = resp.data;
            setData(commentsData);
          })
          .catch(console.log);
      }, [token]);
      console.log("useCommentsData--->", data);

      return [data];
}
