import React from 'react'
import styled from 'styled-components'
import WrappedSelection from '../../common/form/wrappedSelection'
import { Select } from 'antd'

const { Option } = Select

const FilterBar = ({ handleChange, filter, defaultVal }) => (
  <FilterContainer>
    <StyledSelect defaultValue={defaultVal} onChange={handleChange}>
         { filter.map( val => <Option value={val.toLowerCase()}>{val}</Option>)}
    </StyledSelect>
  </FilterContainer>
)

const FilterContainer = styled.div`
  margin-top: 2vh;
`

const StyledSelect = styled(Select)`
  width: 200px;
`

export default FilterBar
