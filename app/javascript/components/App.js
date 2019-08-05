import React from "react"
import { BrowserRouter as Router, Route, Link} from "react-router-dom"
import { Layout, Menu, Icon } from 'antd';
import Page1 from "./page1"
import Page2 from "./page2"
import 'antd/dist/antd.css'

const { Header, Sider, Content } = Layout

export default class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return(
      <Router>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="plus-circle" />
                <Link to="/page2">Add Matches</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="ordered-list" />
                <Link to="/page2">Scoreboard</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                height: '88vh',
              }}
            >
              <Route exact path="/" render={(props) => <Page1 {...props} />} />
              <Route exact path="/page2" render={(props) => <Page2 {...props} />} />
          </Content>
          </Layout>
        </Layout>
      </Router>
    )
  }
}
