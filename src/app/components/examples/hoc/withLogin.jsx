import React from 'react'
import SmallTitle from '../../common/typografy/SmallTitle'

const withLogin = (Component) => (props) => {
    // console.log('Component', Component)
    console.log('props', props)
    const isLogin = localStorage.getItem('auth')
    console.log('isLogin', isLogin)
    return (
        <>
            {isLogin ? <Component {...props} /> : <SmallTitle>Auth</SmallTitle>}
        </>
    )
}

export default withLogin
