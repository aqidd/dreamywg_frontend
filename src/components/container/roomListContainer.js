import React from 'react'
import { List, Avatar, Button, Skeleton, Icon, Carousel } from 'antd';
import RoomModal from '../presentation/flat-details/roomModal'
import axios from 'axios'
import { inject, observer, Provider } from 'mobx-react'

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

class RoomListContainer extends React.Component {
  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: [],
  };

  modalVisible = false;

  componentDidMount() {
    this.getData().then( res => {
      // todo move to store
      this.setState({
        initLoading: false,
        data: res.data.results,
        list: res.data.results,
      });
    }).catch(console.error)
  }

  getData = () => {
    return axios.get(fakeDataUrl)
  };

  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    });
    this.getData().then(res => {
      const data = this.state.data.concat(res.data.results);
      this.setState(
        {
          data,
          list: data,
          loading: false,
        },
        () => {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event('resize'));
        },
      );
    })
  };

  showRoomDetails = (visibility) => {
    this.modalVisible = visibility;
  };

  render() {
    const { initLoading, loading, list } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={this.onLoadMore}>loading more</Button>
        </div>
      ) : null;

    return (
      <div>
        <h2> Available Rooms </h2>
        <List
          loading={initLoading}
          itemLayout="vertical"
          loadMore={loadMore}
          dataSource={list}
          renderItem={item => (
            <List.Item 
                actions={[<h3>900EUR</h3>, 
                <Button type="primary" icon="phone">
                  Contact
                </Button>, 
                <Button type="primary" icon="eye">
                  View Details
                </Button>]}
                extra={
                  <img 
                    width={200}
                    src="http://images.mentalfloss.com/sites/default/files/styles/article_640x430/public/up_house.jpg"/>
                }>
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                  title={<a href="https://ant.design">{item.name.last}'s Room</a>}
                  description="AVAILABLE on 12 Dec 2019"
                />
              </Skeleton>
              <p>This is a room short description. Click to see popup details (?).
                  The room is pretty small with balcony and toilet. No kitchen and bed</p>
            </List.Item>
          )}
        />
        <Provider>
          <RoomModal></RoomModal>
        </Provider>
      </div>
      
    );
  }
}

const roomList = () => new RoomListContainer();

export default roomList