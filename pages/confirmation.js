import React, {Component} from 'react'
import {Layout} from 'antd'
import CustomHeader from '../components/container/customHeader'
import CustomFooter from '../components/container/customFooter'
import 'antd/dist/antd.css'
import styled from 'styled-components'
import Router from "next/router";
import initStore from "../stores/indexStore";
import axios from 'axios';

const {Header, Footer} = Layout

export default class ConfirmationScreen extends Component {
  constructor(props) {
    super(props);
    this.store = initStore();
    this.state = {msg: "Pending..."}
  }

  componentDidMount() {
    //this.setState({token: Router.query.token})
    axios.get(`http://localhost:4005/confirmation/${Router.query.token}`)
      .then((response) => {
        console.log(response);
        this.setState({msg: response.data})
      })
      .catch((err) => {
        this.setState({msg: err.response.data})
      })

  }


  render = () => (
    <div>
      <Layout>
        <StyledHeader>
          <CustomHeader/>
        </StyledHeader>
        <p>{this.state.msg}</p>
        <Footer>
          <CustomFooter/>
        </Footer>
      </Layout>
    </div>
  )
}

const
  StyledHeader = styled(Header)`
  background-color: white;
`
