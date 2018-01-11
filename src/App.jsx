import React, { Component } from 'react'
import {rem,fontRem} from './utils/rem'

class App extends Component {
    render(){
        return(
            <div style={styles.container}>123</div>
        )
    }
}

const styles = {
    container: {
        width: rem(640),
        height: rem(1040),
        background: 'red',
        fontSize: fontRem(18),
    },
    
}

export default App
