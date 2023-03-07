import React from 'react'
import './main.global.css';
import { hot } from 'react-hot-loader/root'
import { Layout } from './shared/Layout';
import { Header } from './shared/Header/Header'
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { useToken } from './hooks/useToken';
import { tokenContext } from './shared/context/tokenContext'
function AppComponent() {
// test
  const [token] = useToken();  
  const { Provider } = tokenContext;
  return (
   <Provider value={token}>
    <Layout>
      <Header />
      <Content>
        <CardsList />
        {/* <div style={{padding: 20}}>
          <br />
          <Dropdown onClose={() => console.log('closed')} onOpen={() => console.log('opened')} button={<button>Test</button>}>
          <div>block</div>
          </Dropdown>
        </div> */}
      </Content>
    </Layout>
    </Provider>
  )
}

export const App = hot(() => <AppComponent />);