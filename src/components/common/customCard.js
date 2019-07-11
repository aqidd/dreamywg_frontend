import React from 'react'
import { Button, Skeleton } from 'antd'
import styled from 'styled-components'

const CustomCard = ({
  sponsor,
  img,
  name,
  description,
  recommendation,
  location,
  price,
  ready
}) =>
  ready ? (
    <CardContainer onClick={() => alert('work wa')}>
      <StyledImage alt="example" src={img} />

      <ContentContainer>
        <TitleContainer>
          <Title>{name}</Title>
          <Button type={sponsor ? 'primary' : 'danger'} shape="round">
            {sponsor ? 'Sponsored' : recommendation + '% Matched'}
          </Button>
        </TitleContainer>
        <DescriptionContainer>
          <p>{description}</p>
        </DescriptionContainer>

        <FooterContainer>
          <AddressContainer>
            <p>
              <strong>{location}</strong>
            </p>
          </AddressContainer>
          <Price> {'€' + price} </Price>
        </FooterContainer>
      </ContentContainer>
    </CardContainer>
  ) : (
    <Skeleton active />
  )

const CardContainer = styled.div`
  margin-top: 2vh;
  margin-bottom: 2vh;
  display: flex;
  flex-direction: row;
  height: 170px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover ${CardContainer} {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`
const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1vh;
  margin-left: 2vh;
  margin-right: 2vh;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const DescriptionContainer = styled.div`
  max-height: 30px;
  margin-top: -2vh;
  @media (max-width: 700px) {
    ${DescriptionContainer} {
      display: none;
    }
  }
`

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 2vh;
`

const StyledImage = styled.img`
  max-width: 250px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`

const Title = styled.p`
  font-weight: bold;
  font-size: 1.2em;
`

const Price = styled.p`
  font-weight: bold;
  font-size: 2em;
`

export default CustomCard
