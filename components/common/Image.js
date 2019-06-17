import { Card } from 'antd'
const { Meta } = Card

const Image = ({ img }) => {
  return (
    <Card
      bordered={false}
      cover={<img alt="example" src={img} />}
    />
  )
}

export default Image
