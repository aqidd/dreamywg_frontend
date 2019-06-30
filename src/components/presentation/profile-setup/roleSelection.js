import React from 'react'
import {Card, Col, Icon, Row, Button} from 'antd'
import TitleContent from '../../common/titlecontent'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ProfileSetupSeeker from '../../../pages/profileSetupSeeker';
import ProfileSetupOfferer from '../../../pages/profileSetupOfferer';

const RoleSelection = () => (
  <Container>
    <TitleContent flex title="What would you like to do?"/>
    <SeekerCard/>
    <OffererCard/>

  </Container>
);

const SeekerCard = () => (
<Router>
  <StyledCard>
    <Col span={5}>
      <StyledIconOfferer type="team"/>
    </Col>
    <Col span={19}>
      <Row>
        <Title> Flatshare Seeker</Title>
      </Row>
      <Row>
        <Description> You are looking for place to live. </Description>
      </Row>
      <Row>
        <Link to="/profileSetupSeeker">
          <Button type="primary" block>
            <p>Continue</p>
          </Button>
        </Link>
      </Row>
    </Col>
  </StyledCard>
  <Route exact path="/profileSetupSeeker" component={ProfileSetupSeeker} />
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
          <Title> Flatshare Offerer</Title>
        </Row>
        <Row>
          <Description> you are offering a place. </Description>
        </Row>
        <Row>
          <Link to="/profileSetupOfferer">
            <Button type="primary" block>
            <p>Continue</p>
            </Button>
          </Link>
        </Row>
      </Col>
    </Row>
  </StyledCard>
  <Route exact path="/profileSetupOfferer" component={ProfileSetupOfferer} />
</Router>
);

const Container = styled.div`
  margin-top: 5vh;
  text-align: center;
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
  height: 30vh;
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

export default RoleSelection
