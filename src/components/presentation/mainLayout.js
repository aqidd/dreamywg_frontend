import React from 'react'
import { Layout, Menu } from 'antd'
import 'antd/dist/antd.css'
import { Link } from 'react-router-dom'
import img from '../../resources/logo.png'
import { TYPE } from '../../stores/authStore'

const { Header, Content, Footer } = Layout

const MainLayout = ({ children }) => {
  let items = []
  const type = localStorage.getItem('userType')
  if (type)
    items = (type === TYPE.OFFERER)
      ? [{ url: '/my-flat', name: 'My Flat Offer' }]
      : [{ url: '/search', name: 'Search Flat' }, { url: '/chat', name: 'My Messages' }]

  return <Layout>
    <Header style={{ backgroundColor: 'white' }}>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="0">
          <div className="logo">
            <Link to="/" refresh="true">
              <img src={img} height="50px"/>
            </Link>
          </div>
        </Menu.Item>
        {items.map((item, index) =>
          <Menu.Item key={index + 1}>
            <Link to={item.url}>
              <span>{item.name}</span>
            </Link>
          </Menu.Item>)}
        <Menu.Item key="4" style={rightMenu}>
          <Link to="/" refresh="true" onClick={() => localStorage.removeItem('token')}>
            <span>Logout</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
    <Content>{children}</Content>
    <Footer style={{ textAlign: 'center' }}>DreamyWG - 2019</Footer>
  </Layout>
}

const rightMenu = {
  float: 'right',
  marginRight: '20px'
}

export default MainLayout
