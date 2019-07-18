import React from "react"
import { Layout, Menu } from "antd"
import styled from "styled-components"
import "antd/dist/antd.css"
import {Link} from "react-router-dom";

const { Header, Content, Footer } = Layout

const MainLayout = ({ children }) => (
    <Layout>
        <Header>
            <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">
                    <Link to="/search">
                        <span>Search Flat</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/flat/">
                        <span>Your Offer</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/" refresh="true" onClick={() => localStorage.removeItem('token')}>
                        <span>Logout</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Header>
        <Content>{children}</Content>
        <Footer style={{ textAlign: "center" }}>DreamyWG - 2019</Footer>
    </Layout>
)

export default MainLayout


