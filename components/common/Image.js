import { Card } from 'antd'
const { Meta } = Card

const Image = (props) => {
  return (
    <Card
      {...props}
      bordered={false}
      cover={<img alt="example" src={props.img} />}
    />
  )
}

export default Image
