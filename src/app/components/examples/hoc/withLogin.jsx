/* eslint-disable react/display-name */
import React from 'react'
import SmallTitle from '../../common/typografy/SmallTitle'

const withLogin = (Component) => (props) => {
    const isLogin = localStorage.getItem('auth')
    return (
        <>
            {isLogin ? <Component {...props} /> : <SmallTitle>Auth</SmallTitle>}
        </>
    )
}

export default withLogin
