import React from 'react'
import { Row, Col, Button, Card } from 'antd';
import axios from 'axios'

const {Meta} = Card;
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

class RoomGridContainer extends React.Component {
  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: [],
  };

  componentDidMount() {
    this.getData().then( res => {
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
        <Row>
            <Col span={6}>
                <Card
                hoverable
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Photo and desc" description="www.instagram.com" />
                </Card>
            </Col>
            <Col span={6}>
                <Card
                hoverable
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Photo and desc" description="www.instagram.com" />
                </Card>
            </Col>
            <Col span={6}>
                <Card
                hoverable
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Photo and desc" description="www.instagram.com" />
                </Card>
            </Col>
            <Col span={6}>
                <Card
                hoverable
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Photo and desc" description="www.instagram.com" />
                </Card>
            </Col>
        </Row>
    );
  }
}

const roomList = () => new RoomGridContainer();

export default roomList