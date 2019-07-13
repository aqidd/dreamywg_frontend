import React from 'react'
import FlatDetailsTab from '../components/container/flatDetailsTabContainer'
import { Provider } from 'mobx-react'
import FlatDetailsRootStore from '../stores/flatDetailsRootStore'

export default class FlatDetails extends React.Component {
  constructor(props) {
    super(props)
    this.flatDetailsRootStore = new FlatDetailsRootStore();
  }

  render() {
    return (
      <Provider store={this.flatDetailsRootStore}>
        <div style={pageStyle}>
          <FlatDetailsTab />
        </div>
      </Provider>
    )
  }
}

const pageStyle = {
  padding: '30px'
}
