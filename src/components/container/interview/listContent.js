import React from 'react'
import { List, Icon, Avatar, Button } from 'antd'
import md5 from 'md5'

const ListContent = ({ past, data, onClick, formatDateTime }) =>
  past ? (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={data}
      renderItem={item => (
        <List.Item
          key={item._id}
          actions={[
            <IconText
              type="like"
              item={item}
              text="Accept"
              onClickCallback={onClick}
            />,
            <IconText
              type="dislike"
              item={item}
              text="Reject"
              onClickCallback={onClick}
            />,
            <IconText
              type="stop"
              item={item}
              text="No Show"
              onClickCallback={onClick}
            />,
            <IconText
              type="message"
              item={item}
              text="Message"
              onClickCallback={onClick}
            />
          ]}
        >
          <List.Item.Meta
            avatar={
              <Avatar src={`https://www.gravatar.com/avatar/${md5(item.userId.email)}?f=y&d=mp`}/>
            }
            title={`${item.userId.firstName} : ${formatDateTime(item.startTime)}`}
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
            <IconText type="calendar" text={formatDateTime(item.startTime)}/>,
            <IconText type="message" text={item.status}/>
          ]}
        >
          <List.Item.Meta
            avatar={
              item.userId ?
                <Avatar src={`https://www.gravatar.com/avatar/${md5(item.userId.email)}?f=y&d=mp`}/> :
                <Avatar src={`https://www.gravatar.com/avatar/willReturnDefault?f=y&d=mp`}/>
            }
            title={<span>Timeslot {formatDateTime(item.startTime)}</span>}
            description={
              item.userId ?
                <span>
                  Booked by {item.userId.firstName} {item.userId.lastName} 
              </span>
                : <span>No interviewee booked for this slot</span>
            }
          />
        </List.Item>
      )}
    />
  )

const ActionButton = ({ text, item }) => (
  <Button type="primary" onClick={() => console.log(item)}>
    {text}
  </Button>
)

const IconText = ({ type, text, item, onClickCallback }) => (
  <span
    onClick={() =>
      onClickCallback({
        type: type,
        data: item
      })
    }
  >
    <Icon theme="twoTone" type={type} style={{ marginRight: 8 }}/>
    {text}
  </span>
)

export default ListContent
