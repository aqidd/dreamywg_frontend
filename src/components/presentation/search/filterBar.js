import React from 'react'
import styled from 'styled-components'
import WrappedSelection from '../../common/form/wrappedSelection'
import { Select } from 'antd'

const { Option } = Select

const FilterBar = ({ handleChange }) => (
  <FilterContainer>
    <StyledSelect defaultValue="Recommendation" onChange={handleChange}>
      <Option value="recommendation">Recommendation</Option>
      <Option value="price">Price</Option>
      <Option value="name">Name</Option>
      <Option value="rating">Rating</Option>
    </StyledSelect>
  </FilterContainer>
)

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const StyledSelect = styled(Select)`
  width: 200px;
`

export default FilterBar
