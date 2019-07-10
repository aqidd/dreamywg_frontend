import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import {Link} from "react-router-dom";
import {Button} from "antd";
import styled from "styled-components";

@inject('store')
@observer
class OAuth extends Component {
  render() {
    return (
      <Container>
        <div>
          <h1>Registered successfully</h1>
          <h2>Please check your Mails to verify your account</h2>
          <br/>
          <hr/>
          <br/>
          <h4>OAuth with Social media</h4>
          <br/>
          <hr/>
          <br/>
          <div>
            <Link to={'/'}>
              <Button type="primary">
                <p>Go to login</p>
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    );
  }
}

const Container = styled.div`
  background-color: white;
  margin:auto;
  text-align: center;
  padding: 30px;
`;


export default OAuth
