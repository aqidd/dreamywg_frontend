import { Card, Col, Icon, Row } from 'antd'
import TitleContent from '../../common/titlecontent'
import styled from 'styled-components'
import React from 'react'
import withRedirect from '../../common/class/withRedirect'

const RoleSelection = ({ redirect }) => (
  <Container>
    <Row>
      <TitleContent title="What would you like to do?" />
    </Row>
    <Row type="flex" justify="space-between" gutter={64}>
      <Col span={12}>
        <SelectionCard
          type="seeker"
          icon="search"
          title="Find flatshare"
          description="You are looking for the most suitable place to live in Munich within a flatshare"
          click={() => redirect('/setupSeeker')}
        />
      </Col>
      <Col span={12}>
        <SelectionCard
          type="offerer"
          icon="select"
          title="Offer flatshare"
          description="You live in Munich and looking for a new flatmate to share your place with"
          click={() => redirect('/setupOfferer')}
        />
      </Col>
    </Row>
  </Container>
)

const SelectionCard = ({ type, icon, title, description, click }) => (
  <StyledCard style={roundCorner} onClick={() => click()}>
    <CardContainer className="custom-card-container">
      <StyledIcon type={icon} twoToneColor="#1890ff" />
      <CustomTitle> {title} </CustomTitle>
      <CustomDescription> {description} </CustomDescription>
    </CardContainer>
  </StyledCard>
)

const Container = styled.div`
  text-align: center;
  margin-left: 15vh;
  margin-right: 15vh;
  margin-bottom: 5vh;
`

const CardContainer = styled.div`
  text-align: center;
  margin-top: 5vh;
  margin-left: 10vh;
  margin-right: 10vh;
  display: flex;
  flex-direction: column;
`

const StyledCard = styled(Card)`
  min-height: 50vh;
  transition: 0.2s;
  &:hover ${StyledCard} {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`

const StyledIcon = styled(Icon)`
  transform: rotate(0deg);
  transition: all 0.3s ease-out;
  &:hover ${StyledIcon} {
    transform: rotate(45deg);
  }
  font-size: 16vh;
`

const CustomTitle = styled.p`
  margin-top: 2vh;
  font-size: 2.5em;
  font-weight: bold;
`

const CustomDescription = styled.p`
  font-size: 1.3em;
  font-weight: 500;
  line-height: 3.5vh;
  text-align: justify;
`

const roundCorner = {
  borderRadius: 30
}

export default withRedirect(RoleSelection)
