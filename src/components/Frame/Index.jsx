import React, { Component } from 'react'
import { Layout, Menu, Dropdown, message } from 'antd'
import { withRouter } from 'react-router-dom'
import logo from './logo.png'
import * as Icon from '@ant-design/icons'
import { clearToken } from '../../utils/auth'

import './index.css'
import { adminRoutes } from '../../routers/index'

const { Header, Content, Sider } = Layout
const routes = adminRoutes.filter((route) => route.isShow)
class Index extends Component {
  iconBc = (name) => {
    return React.createElement(Icon && Icon[name])
  }
  menuClick = (e) => {
    console.log(e)
    if (e.key === '3') {
      clearToken()
      this.props.history.push('/login')
    } else {
      message.info(e.key)
    }
  }
  popMenu = (
    <Menu onClick={this.menuClick}>
      <Menu.Item key="1">通知中心</Menu.Item>
      <Menu.Item key="2">设置</Menu.Item>
      <Menu.Item key="3" danger>
        退出
      </Menu.Item>
    </Menu>
  )
  render() {
    return (
      <Layout>
        <Header className="header" style={{ backgroundColor: '#7a7dbd' }}>
          <div className="logo">
            <img src={logo} alt="" />
            {/* <Icon.LaptopOutlined /> */}
          </div>
          <Dropdown overlay={this.popMenu}>
            <div>
              <Icon.UserOutlined />
              <span style={{ color: '#eee' }}>超级管理员</span>
              <Icon.DownOutlined />
            </div>
          </Dropdown>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              {routes.map((route) => {
                return (
                  <Menu.Item
                    key={route.path}
                    icon={route.icon ? this.iconBc(route.icon) : ''}
                    onClick={(e) => {
                      console.log(e, this.props)
                      this.props.history.push(e.key)
                    }}
                  >
                    {route.title}
                  </Menu.Item>
                )
              })}
            </Menu>
          </Sider>
          <Layout style={{ padding: '16px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(Index)
