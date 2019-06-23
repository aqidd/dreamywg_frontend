import React, { Component } from 'react'
import CustomCard from '../../common/customCard'

export default class SearchContainer extends Component {
  render() {
    return (
      <div
        style={{
          marginLeft: '5vh',
          marginRight: '5vh'
        }}
      >
        <CustomCard sponsor />
        <CustomCard />
        <CustomCard />

      </div>
    )
  }
}
