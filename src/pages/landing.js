import React, { Component } from "react"
import { Layout } from "antd"
import CustomHeader from "../components/common/customHeader"
import LandingContent from "../components/container/landing/landingContent"
import CustomFooter from "../components/common/customFooter"
import styled from "styled-components"
import withRouter from "react-router-dom"

import "antd/dist/antd.css"

const { Header, Footer } = Layout
const theme = "light"

export default class LandingScreen extends Component {
     constructor(props) {
          super(props)
          this.onGetStarted.bind(this)
          console.log(this.props)
     }

     onGetStarted = () => this.props.history.push("/register")

     onLogin = () => this.props.history.push("/login")

     render = () => (
          <div>
               <Layout>
                    <StyledHeader>
                         <CustomHeader
                              theme={theme}
                              onLogin={() => this.onLogin()}
                         />
                    </StyledHeader>
                    <LandingContent
                         theme={theme}
                         onGetStarted={() => this.onGetStarted()}
                    />
                    <StyledFooter>
                         <CustomFooter />
                    </StyledFooter>
               </Layout>
          </div>
     )
}

const themeDecider = () => (theme == "dark" ? "#222" : "white")

const StyledHeader = styled.div`
     background-color: ${themeDecider()};
`
const StyledFooter = styled(Footer)`
     background-color: ${themeDecider()};
`
