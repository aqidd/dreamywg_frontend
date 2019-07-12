import React from 'react'
import { List, Icon, Avatar } from 'antd'

const ListContent = ({ past, data, onClick }) =>
  past ? (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={data}
      renderItem={item => (
        <List.Item
          key={item.time}
          actions={[
            <IconText type="like" text="Accept" />,
            <IconText type="dislike" text="Reject" />,
            <IconText type="stop" text="Ignore" />,
            <IconText type="message" text="Message" />
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={item.time}
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
          actions={[
            <IconText type="calendar" text={item.time} />,
            <IconText type="message" text={item.status} />
          ]}
        >
          <List.Item.Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={<a href="https://ant.design">Timeslot {item.time}</a>}
            description="No interviewee booked for this slot"
          />
        </List.Item>
      )}
    />
  )

const IconText = ({ type, text, onClick }) => (
  <span onClick={() => onClick(text)} >
    <Icon theme="twoTone" type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
)

export default ListContent
