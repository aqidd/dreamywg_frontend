import React from 'react'
import { Layout, Menu } from 'antd'
import 'antd/dist/antd.css'
import { Link } from 'react-router-dom'
import img from '../../resources/logo.png'
import Image from '../common/Image'

const { Header, Content, Footer } = Layout

const MainLayout = ({ children }) => (
  <Layout>
    <Header style={{ backgroundColor: 'white' }}>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="0">
          <div className="logo">
            <Link to="/" refresh="true">
              <img src={img} height="50px" />
            </Link>
          </div>
        </Menu.Item>
        <Menu.Item key="1">
          <Link to="/search">
            <span>Search Flat</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/my-flat">
            <span>My Flat Offer</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/chat">
            <span>My Messages</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="4" style={rightMenu}>
          <Link
            to="/"
            refresh="true"
            onClick={() => localStorage.removeItem('token')}
          >
            <span>Logout</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
    <Content>{children}</Content>
    <Footer style={{ textAlign: 'center' }}>DreamyWG - 2019</Footer>
  </Layout>
)

const rightMenu = {
  float: 'right',
  marginRight: '20px'
}

export default MainLayout
