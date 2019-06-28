import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import Title from '../../common/title'
import styled from 'styled-components'

import 'antd/dist/antd.css'
import {Link} from "react-router-dom";
import {Button} from "antd";
import BaseLayout from "../../presentation/baseLayout";


@inject('store')
@observer
export default class ConfirmationContent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.store.verify(this.props.token);
  }

  render() {
    let result = this.props.store.result;
    const content = (
      (result === undefined) ? <p>Pending... </p> :
        result.state ? (
            <div>
              <p>{result.data}</p>
              <Link to={'/'}>
                <Button type="primary">
                  <p>Login</p>
                </Button>
              </Link>
            </div>
          ) :
          (
            <div>
              <p>{result.data}</p>
            </div>
          )
    );

    return (
      <BaseLayout>
        <Container>
          <Title>Account Confirmation</Title>
          {content}
        </Container>
      </BaseLayout>
    )
  }
}

const Container = styled.div`
  background-color: white;
  margin:auto;
  text-align: center;
  padding: 30px;
`;
