import React from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { useToken } from "./hooks/useToken";
import { tokenContext } from "./shared/context/tokenContext";
import { UserContextProvider } from "./shared/context/userContext";
import { usePostsData } from "./hooks/usePostsData";
import { postsContext } from './shared/context/postsContext';
function AppComponent() {
  const [token] = useToken();
  const [posts] = usePostsData();
  
  return (
    <tokenContext.Provider value={token}>
      <UserContextProvider>
        <postsContext.Provider value={posts}>
        <Layout>
          <Header />
          <Content>
            <CardsList />
          </Content>
        </Layout>
        </postsContext.Provider>
      </UserContextProvider>
    </tokenContext.Provider>
  );
}

export const App = hot(() => <AppComponent />);
