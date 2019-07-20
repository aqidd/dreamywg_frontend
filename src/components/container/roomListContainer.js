import React from 'react'
import { List, Button} from 'antd'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'

const RoomListContainer = inject('store')(
  observer(({ store }) => {
    return (
      <div>
        <h2> Available Rooms </h2>
        <hr/>
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
            >
              <List.Item.Meta
                title={`Room Price : ${room.rent} EUR`}
                description={`Available from ${store.flatPresentationStore.formatDateAvailable(room.dateAvailable, room.dateAvailableRange)}`}
              />
              <p>
                This room is {room.furnished ? '' : `not`} furnished. The room
                size is {room.roomSize}. This is a {`${room.rentType} `}
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
