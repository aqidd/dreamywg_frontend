import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css'
const { Header, Content, Footer } = Layout;

const BaseLayout = ({ children }) => (
    <Layout className="layout">
        <Header>
        <div className="logo" />
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
        >
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Nav 2</Menu.Item>
            <Menu.Item key="3">Nav 3</Menu.Item>
        </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        { children }
        </Content>
        <Footer style={{ textAlign: 'center' }}>Custom Footer Here</Footer>
    </Layout>
)


export default BaseLayout