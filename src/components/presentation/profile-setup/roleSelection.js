import {Card, Col, Icon, Row, Button} from 'antd'
import TitleContent from '../../common/titlecontent'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ProfileSetupSeeker from '../../../pages/profileSetupSeeker';
import ProfileSetupOfferer from '../../../pages/profileSetupOfferer';
import { Redirect } from 'react-router';
import React, {Component} from 'react'
import {withRouter} from 'react-router'


@withRouter
export default class RoleSelection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <Container>
      <TitleContent flex title="What would you like to do?"/>
      <Col span={11}>
        <SeekerCard/>
      </Col>
      <Col span={1}>
      </Col>
      <Col span={11}>
        <OffererCard/>
      </Col>
    </Container>
    )
  }
}

const setRedirectSeeker = () => {
  console.log('this is')
 return <Redirect to="/setupseeker"/>;
   };

const setRedirectOfferer = () => {
  return <Redirect to="/setupofferer"/>;
};

const SeekerCard = () => (
<Router>
  <StyledCard>
    <Col span={5}>
      <StyledIconOfferer type="team"/>
    </Col>
    <Col span={19}>
      <Row>
        <Title> Offer flatshare room</Title>
      </Row>
      <Row style={{marginBottom:"30px"}}>
        <Description> You have an empty room in your flatshare and want to fill it quickly? Just click below. </Description>
      </Row>
      <Row>
        <Link to="/setupofferer">
          <Button type="primary" block onClick={setRedirectSeeker}>
            <p>OFFER ROOM</p>
          </Button>
        </Link>
      </Row>
    </Col>
  </StyledCard>

</Router>
);
const OffererCard = () => (
<Router>
  <StyledCard>
    <Row>
      <Col span={5}>
        <StyledIconOfferer type="team"/>
      </Col>
      <Col span={19}>
        <Row>
          <Title> Find flatshare</Title>
        </Row>
        <Row style={{marginBottom:"30px"}}>
          <Description> You are looking for the perfect flatshare with the best flatmates for you? Just click below. </Description>
        </Row>
        <Row>
          <Link to="/setupseeker">
            <Button type="primary" block onClick={setRedirectOfferer}>
            <p>FIND FLATSHARE</p>
            </Button>
          </Link>
        </Row>
      </Col>
    </Row>
  </StyledCard>
</Router>
);

const Container = styled.div`
  margin-top: 5vh;
  text-align: center;
  height : 100vh;
`;

const StyledIcon = styled(Icon)`
  font-size: 5em;
`;

const StyledIconOfferer = styled(StyledIcon)`
  color: #096dd9;
`;
const StyledIconSeeker = styled(StyledIcon)`
  color: #389e0d;
`;

const StyledCard = styled(Card)`
  margin-bottom: 5vh;
  height: 40vh;
`;

const Title = styled.p`
  text-align: left;
  font-size: 2em;
  font-weight: bold;
`;

const Description = styled.p`
  text-align: left;
  font-size: 1em;
  font-weight: bold;
`;

