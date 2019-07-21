import React from 'react'
import FlatDetailsTab from  '../components/container/flatDetails/flatDetailsTabContainer'
import { Provider } from 'mobx-react';
import FlatDetailsRootStore from '../stores/flatDetailsRootStore'
import DefaultHeader from '../components/common/defaultHeader'
import MainLayout from '../components/presentation/mainLayout';

export default class FlatDetails extends React.Component {
  
    constructor(props) {
        super(props)
        this.flatDetailsRootStore = new FlatDetailsRootStore(this.props.match.params.id);
        this.flatDetailsRootStore.flatPresentationStore.hideInterview = true;
        this.error = false;
    }

    componentDidMount() {
        this.flatDetailsRootStore.flatStore.fetchFlat().catch( e =>
          this.error = true
        )
    }

  render() {
    return (
      <MainLayout>
        <div style={pageStyle}>
        {
          this.error ? (
            <h1>Flat not found.</h1>
          ) :
          (
            <Provider store={this.flatDetailsRootStore}>
              <FlatDetailsTab/>
            </Provider>
          )
        }
        </div>
      </MainLayout>
    )
  }
}

const pageStyle = {
  padding: '30px'
}
