import React from 'react'
import FlatDetailsTab from  '../components/container/flatDetails/flatDetailsTabContainer'
import { Provider } from 'mobx-react';
import FlatDetailsRootStore from '../stores/flatDetailsRootStore'

export default class MyFlat extends React.Component {
    constructor(props) {
        super(props)
        this.flatDetailsRootStore = new FlatDetailsRootStore(this.props.match.params.id);
        this.flatDetailsRootStore.flatPresentationStore.hideInterview = false
        this.error = false;
    }

    componentDidMount() {
        this.flatDetailsRootStore.flatStore.fetchOffererFlat().catch( e =>
          this.error = true
        )
    }

  render() {
    return this.error? (<h1>Error</h1>) :
    (
      <Provider store={this.flatDetailsRootStore}>
        <div style={pageStyle}>
          <FlatDetailsTab/>
        </div>
      </Provider>
    )
  }
}

const pageStyle = {
  padding: '30px'
}
