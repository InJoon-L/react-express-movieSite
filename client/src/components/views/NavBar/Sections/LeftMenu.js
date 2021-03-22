import React from 'react'
import { Menu } from 'antd'
import { withRouter } from 'react-router-dom';

function LeftMenu(props) {
    return (
        <Menu mode={props.mode}>
            <Menu.Item key='favorite'>
                <a href="/favorite">Favorite</a>
            </Menu.Item>
        </Menu>
    )
}

export default withRouter(LeftMenu)
