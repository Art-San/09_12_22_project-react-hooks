import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import NavBar from './components/ui/NavBar'
import Users from './layouts/Users'
// import Login from './layouts/Login'
import Main from './layouts/Main'
import UseRefExample from './layouts/UseRef'
import ContainerWrapper from './components/common/Container'

function App() {
    return (
        <>
            <NavBar />
            <ContainerWrapper>
                <Switch>
                    <Route path="/users/:userId?/:edit?" component={Users} />
                    {/* <Route path="/login/:type?" component={Login} /> */}
                    <Route path="/useRef" component={UseRefExample} />
                    <Route path="/" exact component={Main} />
                    <Redirect to="/" />
                </Switch>
            </ContainerWrapper>
        </>
    )
}

export default App
