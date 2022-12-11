import React from 'react'
import SmallTitle from '../../common/typografy/SmallTitle'

// Обрати внимание!
// Вместо такой записи:
// const withLogin = (Component) => (props) => { ... }
// Мы можем написать:
// const withLogin = function(Component) {
// return function (props) { ... }
// }
// И это также будет работать.
// В обоих вариантах мы создаем функцию withLogin
// и возвращаем из неё новую функцию.
// В первом варианте запись в одну строку
//  возможна благодаря синтаксису стрелочных функций.

const withLogin = (Component) => (props) => {
    // console.log('Component', Component)
    // console.log('props', props)
    const isLogin = localStorage.getItem('auth')
    // const isLogin = true
    // console.log('isLogin', isLogin)
    return (
        <>
            {isLogin ? <Component {...props} /> : <SmallTitle>Auth</SmallTitle>}
        </>
    )
}

export default withLogin
