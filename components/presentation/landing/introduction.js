import { Row, Col, Typography, Button } from 'antd'
import img from '../../../resources/about-demo3.png'
import Image from '../../common/Image'
import VersionCard from './versionCard'
import styled from 'styled-components'

const Introduction = ({ onGetStarted }) => (
  <StyledContainer>
    <Row>
      <Col xs={2} sm={2} md={2} lg={2} xl={5} />
      <Col xs={20} sm={20} md={10} lg={10} xl={7}>
        <StyledInContainer>
          <VersionCard />
          <Row>
            <Title>Connect a perfect flatmate together</Title>
          </Row>
          <Row>
            <Paragraph>
              A mobile app landing page is important and essential for right
              amount of information about your product. Start increasing your
              user base upon the launch of your product.
            </Paragraph>
          </Row>
          <CenteredRow type="flex">
            <Col span={8}>
              <Button
                block
                size={'large'}
                type={'primary'}
                onClick={() => onGetStarted()}
              >
                Get Started
              </Button>
            </Col>
            <Col span={8}>
              <Button block size={'large'} type={'link'}>
                Learn more
              </Button>
            </Col>
          </CenteredRow>
        </StyledInContainer>
      </Col>
      <Col xs={2} sm={2} md={1} lg={1} xl={1} />
      <Col style={{ marginTop: '-5vh' }} xs={0} sm={0} md={11} lg={11} xl={11}>
        <Image img={img} />
      </Col>
    </Row>
  </StyledContainer>
)

const StyledContainer = styled.div`
  margin: auto;
  margin-top: 10vh;
`
const StyledInContainer = styled.div`
  align-items: center;
`

const CenteredRow = styled(Row)`
  align-items: center;
`

const Title = styled.p`
  font-size: calc(1em + 2.5vw);
  font-weight: bold;
`

const Paragraph = styled.p`
  font-size: 1.25em;
  margin-top: -2vh;
`

export default Introduction
