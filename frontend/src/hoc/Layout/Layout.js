import React from 'react'
import classes from './Layout.module.css'


class Layout extends React.Component {
    render() {
        return (
            <div className={classes.main_div}>
                {this.props.children}
            </div>
        )
    }
}

export default Layout