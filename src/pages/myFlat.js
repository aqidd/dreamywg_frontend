import React from 'react'
import FlatDetailsTab from '../components/container/flatDetails/flatDetailsTabContainer'
import { Provider } from 'mobx-react'
import FlatDetailsRootStore from '../stores/flatDetailsRootStore'
import MainLayout from '../components/presentation/mainLayout'

export default class MyFlat extends React.Component {
  constructor(props) {
    super(props)
    this.flatDetailsRootStore = new FlatDetailsRootStore(
      this.props.match.params.id
    )
    this.flatDetailsRootStore.flatPresentationStore.hideInterview = false
    this.error = false
  }

  componentDidMount() {
    this.flatDetailsRootStore.flatStore
      .fetchOffererFlat()
      .catch(e => (this.error = true))
  }

  render() {
    return (
      <MainLayout>
        <div style={pageStyle}>
          {this.error ? (
            <h1>You have no Flat Offered at the moment</h1>
          ) : (
            <Provider store={this.flatDetailsRootStore}>
              <FlatDetailsTab />
            </Provider>
          )}
        </div>
      </MainLayout>
    )
  }
}

const pageStyle = {
  padding: '30px',
  backgroundColor: 'white'
}
