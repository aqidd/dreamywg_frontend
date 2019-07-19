import React from 'react'
import { List, Icon, Avatar, Button } from 'antd'

const ListContent = ({ past, data, onClick }) =>
  past ? (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={data}
      renderItem={item => (
        <List.Item
          key={item._id}
          actions={[
            <IconText type="like" item={item} text="Accept" onClickCallback={onClick}/>,
            <IconText type="dislike" item={item} text="Reject" onClickCallback={onClick}/>,
            <IconText type="stop" item={item} text="No Show" onClickCallback={onClick}/>,
            <IconText type="message" item={item} text="Message" onClickCallback={onClick}/>
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={item.startTime}
            description={item.status}
          />
        </List.Item>
      )}
    />
  ) : (
    <List
      itemLayout="vertical"
      dataSource={data}
      renderItem={item => (
        <List.Item
          onClick={console.log(item)}
          actions={[
            <IconText type="calendar" text={item.startTime} />,
            <IconText type="message" text={item.status} />
          ]}
        >
          <List.Item.Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={<a href="https://ant.design">Timeslot {item.startTime}</a>}
            description="No interviewee booked for this slot"
          />
        </List.Item>
      )}
    />
  )

const ActionButton = ({text, item}) => (
  <Button type="primary" onClick={() => console.log(item)}>{text}</Button>
)

const IconText = ({ type, text, item, onClickCallback }) => (
  <span onClick={() => onClickCallback({
    type: type,
    data: item
  })} >
    <Icon theme="twoTone" type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
)

export default ListContent
