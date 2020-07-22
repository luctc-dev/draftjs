import 'draft-js/dist/Draft.css';
import React from 'react';
import { withRouter } from "react-router";
import { Layout, Menu } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Switch, Route, Link } from "react-router-dom";

import ROUTERS from './routers';

const { Header, Sider, Content } = Layout;

class App extends React.Component<any, any> {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const pathname = this.props.location?.pathname || '/simple';
    return (
      <Layout className="layout-custom">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <Link to="/"><div className="logo" /></Link>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['/simple']} selectedKeys={[pathname]}>
            {
              ROUTERS.map(o => {
                return <Menu.Item key={o.path}><Link to={o.path}>{o.text}</Link></Menu.Item>
              })
            }
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>

            {
              this.state.collapsed
                ? <MenuUnfoldOutlined className="trigger" onClick={this.toggle} />
                : <MenuFoldOutlined className="trigger" onClick={this.toggle} />
            }

          </Header>
          <Content className="site-layout-background site-layout-content">
            <Switch>

              {
                ROUTERS.map(o => {
                  return (
                    <Route path={o.path} key={o.path}>
                      <o.component />
                    </Route>
                  )
                })
              }

              <Route>
                <img src={`${process.env.PUBLIC_URL}/editorstate.png`} alt="" />
              </Route>

            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

// @ts-ignore
export default withRouter(App);