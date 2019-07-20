import React from "react"
import { Layout, Menu, Breadcrumb } from "antd"
import styled from "styled-components"
import "antd/dist/antd.css"
import DefaultHeader from "../common/defaultHeader";

const { Header, Content, Footer } = Layout

const BaseLayout = ({ children }) => (
     <Layout>
          <DefaultHeader/>
          <StyledContent>{children}</StyledContent>
          <Footer style={{ textAlign: "center" }}>DreamyWG - 2019</Footer>
     </Layout>
)

const StyledContent = styled(Content)`
     background-color: white;
     padding: 0 50px;
`

export default BaseLayout
