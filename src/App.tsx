import React, { useState } from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { useToken } from "./hooks/useToken";
import { tokenContext } from "./shared/context/tokenContext";
import { UserContextProvider } from "./shared/context/userContext";
import { PostContextProvider } from "./shared/context/postsContext";
import { CommentContext } from "./shared/context/commentContext";
function AppComponent() {
  const [commentValue, setCommentValue] = useState("");
  const [token] = useToken();

  const CommentProvider = CommentContext.Provider;
  
  return (
    <CommentProvider
      value={{
        value: commentValue,
        onCahge: setCommentValue,
      }}
    >
      <tokenContext.Provider value={token}>
        <UserContextProvider>
          <Layout>
            <Header />
            <Content>
              <PostContextProvider>
                <CardsList />
              </PostContextProvider>
            </Content>
          </Layout>
        </UserContextProvider>
      </tokenContext.Provider>
    </CommentProvider>
  );
}

export const App = hot(() => <AppComponent />);
