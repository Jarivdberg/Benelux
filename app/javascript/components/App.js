import React from "react"
import { BrowserRouter as Router, Route} from "react-router-dom"
import { Layout } from 'antd';
import Page1 from "./page1"
import Page2 from "./page2"
import 'antd/dist/antd.css'

const { Header, Footer, Sider, Content } = Layout

class App extends React.Component {

  render() {
    return(
      <Router>

        <Layout>
          <Header>Header</Header>
          <Content style={{ padding: '50px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Route exact path="/" render={(props) => <Page1 {...props}/>} />
              <Route exact path="/page2" render={(props) => <Page2 {...props}/>} />
            </div>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Router>
    )
  }
}

export default App
