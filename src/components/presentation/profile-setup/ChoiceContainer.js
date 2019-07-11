import {Button, Card, Col, Icon, Row} from 'antd'
import TitleContent from '../../common/titlecontent'
import styled from 'styled-components'
import React from "react";
import {Link} from "react-router-dom";

const ChoiceContainer = () => (
  <Container>
    <TitleContent flex title="Who are you?"/>
    <SeekerCard/>
    <OffererCard/>

  </Container>
);

const SeekerCard = () => (
  <StyledCard>
    <Col span={5}>
      <StyledIconOfferer type="team"/>
    </Col>
    <Col span={19}>
      <Row>
        <Title>Flatshare Seeker</Title>
      </Row>
      <Row>
        <Description> You are looking for place to live. </Description>
      </Row>
      <Row>
        <Link to={"/setupseeker"}>
          <Button type="primary">
            <p>Continue</p>
          </Button>
        </Link>
      </Row>
    </Col>
  </StyledCard>
);
const OffererCard = () => (
  <StyledCard>
    <Row>
      <Col span={5}>
        <StyledIconOfferer type="team"/>
      </Col>
      <Col span={19}>
        <Row>
          <Title>Flatshare Offerer</Title>
        </Row>
        <Row>
          <Description> you are offering a place. </Description>
        </Row>
        <Row>
          <Link to={"/setupofferer"}>
            <Button type="primary">
              <p>Continue</p>
            </Button>
          </Link>
        </Row>
      </Col>
    </Row>
  </StyledCard>
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
  height: 20vh;
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

export default ChoiceContainer
