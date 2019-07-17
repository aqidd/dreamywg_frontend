import React from 'react'
import { Button, List } from 'antd'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'

const RoomListContainer = inject('store')(
  observer(({ store }) => {
    return (
      <div>
        <h2> Available Rooms </h2>
        <List
          itemLayout="vertical"
          dataSource={store.flatStore.flat.rooms}
          renderItem={room => (
            <List.Item
              actions={[
                <Link to={`/chat/${store.flatStore.flat._id}`}>
                  <Button type="primary" icon="message">
                    Interested
                  </Button>
                </Link>
              ]}
              extra={
                <img
                  width={200}
                  src={room.images[0]}/>
              }>
              <List.Item.Meta
                title={`Room Price : ${room.rent} EUR`}
                description={`Available during : ${new Date(room.dateAvailableRange[0]).toDateString()} - 
                    ${new Date(room.dateAvailableRange[1]).toDateString()}`}
              />
              <p>
                This room is {room.furnished ? '' : `not`} furnished. The room size is {room.roomSize}. This is
                a {`${room.rentType} `}
                rental period. Please consult with flat owner for more details.
              </p>
            </List.Item>
          )}
        />
      </div>
    )
  })
)

export default RoomListContainer
