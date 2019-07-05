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
          key={item.title}
          actions={[
            <IconText type="like" text="Accept" />,
            <IconText type="dislike" text="Reject" />,
            <IconText type="stop" text="Ignore" />,
            <IconText type="message" text="Message" />
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
          />
          {item.content}
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
            <IconText type="calendar" text="2 July 2020" />,
            <IconText type="message" text="Message" />
          ]}
        >
          <List.Item.Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={<a href="https://ant.design">shubu</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
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
