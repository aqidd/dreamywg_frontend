import React, {Component} from "react"
import LandingContent from "../components/container/landing/landingContent"
import "antd/dist/antd.css"
import BaseLayout from "../components/presentation/baseLayout";

const theme = "light"

export default class LandingScreen extends Component {
  constructor(props) {
    super(props)
    this.onGetStarted.bind(this)
  }

  onGetStarted = () => this.props.history.push("/register")

  onLogin = () => this.props.history.push("/login")

  render = () => (
    <BaseLayout>
      <LandingContent
        theme={theme}
        onGetStarted={() => this.onGetStarted()}
      />
    </BaseLayout>
  )
}

const themeDecider = () => (theme === "dark" ? "#222" : "white")
