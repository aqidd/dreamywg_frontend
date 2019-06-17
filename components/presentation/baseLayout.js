import { Layout, Menu, Breadcrumb } from 'antd'
import styled from 'styled-components'
import 'antd/dist/antd.css'

const { Header, Content, Footer } = Layout

const BaseLayout = ({ children }) => (
  <Layout className="layout">
    <StyledContent>{children}</StyledContent>
    <Footer style={{ textAlign: 'center' }}>Custom Footer Here</Footer>
  </Layout>
)

const TempBread = () => (
  <Breadcrumb style={{ margin: '16px 0' }}>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>List</Breadcrumb.Item>
    <Breadcrumb.Item>App</Breadcrumb.Item>
  </Breadcrumb>
)
const Temp = () => (
  <StyledHeader>
    <div className="logo" />
  </StyledHeader>
)

const StyledHeader = styled(Header)`
  color: white;
  background-color: white;
`
const StyledContent = styled(Content)`
  background-color: white;
  padding: 0 50px;
`

export default BaseLayout
