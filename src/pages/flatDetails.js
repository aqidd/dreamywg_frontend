import React from 'react'
import FlatDetailsTab from  '../components/container/flatDetailsTabContainer'
import { Provider } from 'mobx-react';
import {toJS} from 'mobx'
import FlatDetailsRootStore from '../stores/flatDetailsRootStore'

export default class FlatDetails extends React.Component {
    constructor(props) {
        super(props)

        this.flatDetailsRootStore = new FlatDetailsRootStore(this.props.match.params.id);
    }

    componentDidMount() {
        this.flatDetailsRootStore.flatStore.fetchFlat().catch(console.error)
    }

    render() {
        return (
        <div style={pageStyle}>
            <Provider store={this.flatDetailsRootStore}>
                <FlatDetailsTab/>
            </Provider>
        </div>)
    }
}

const pageStyle = {
    padding: '30px'  
}