import React from 'react'
import FlatDetailsTab from  '../components/container/flatDetailsTabContainer'

export default class FlatDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div style={pageStyle}>
            <FlatDetailsTab>

            </FlatDetailsTab>
        </div>)
    }
}

const pageStyle = {
    padding: '30px'  
}