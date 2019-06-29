import React from 'react'
import { Layout } from 'antd'

const { Header } = Layout

const InsystemHeader = ({}) => <Header style={HeaderStyle} />

const HeaderStyle = {
  backgroundColor: 'white',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  zIndex: 1,
  position: 'fixed',
  width: '100%'
}

export default InsystemHeader
