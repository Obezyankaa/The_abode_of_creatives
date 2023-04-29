import React from "react";
import { useCommentsData } from "../../hooks/useCommentsData";
import { usePostsData } from "../../hooks/usePostsData";

interface IPostContext {
  data: {
    subreddit: string;
    author: string;
    title: string;
    id: string;
    sr_detail: {
      banner_img: string;
      icon_img: string;
      created_utc: number
    };
  };
}

export const postsContext = React.createContext<IPostContext[]>([{} as IPostContext]);

export function PostContextProvider({ children }: { children: React.ReactNode }) {
  const [posts] = usePostsData()
  
    return (
      <postsContext.Provider value={posts}>{children}</postsContext.Provider>
    );
}