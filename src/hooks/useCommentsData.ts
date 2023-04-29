import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../shared/context/tokenContext";

export function useCommentsData() {
  const token = useContext(tokenContext);
  const [data, setData] = useState({});

  const id = 1
  useEffect(() => {
    if (!token || token === "undefined") return;
    axios
      .get(`https://api.reddit.com/comments/${id}`, {
        params: { limit: 10 },
        headers: { Authorization: `bearer${token}` },
      })
      .then((resp) => {
        const commentsData = resp.data;
        console.log(data);

        setData(commentsData);
      })
      .catch(console.log);
  }, [token]);
  console.log("useCommentsData--->", data);

  return [data];
}


