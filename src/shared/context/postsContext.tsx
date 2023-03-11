import React from "react";
import { usePostsData } from "../../hooks/usePostsData";

interface IPostContext {
   data: {
     author: string;
     title: string;
     id: string;
   }
 }

export const postsContext = React.createContext<IPostContext[]>([{} as IPostContext]);

export function PostContextProvider({ children }: { children: React.ReactNode }) {
    const [posts] = usePostsData()
    return (
      <postsContext.Provider value={posts}>{children}</postsContext.Provider>
    );
}