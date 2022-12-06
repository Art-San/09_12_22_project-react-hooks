import React, { useRef, useState, useEffect } from 'react'
import CardWrapper from '../../common/Card'
// import Divider from '../../common/Divider'
import SmallTitle from '../../common/typografy/SmallTitle'
const PrevStateExample = () => {
    const prevState = useRef('')
    const [otherState, setOtherState] = useState('false')
    const toggleOtherState = () => {
        setOtherState((prevState) =>
            prevState === 'false' ? 'true' : 'false'
        )
    }
    useEffect(() => {
        prevState.current = otherState
    }, [otherState])
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <p>prev State: {prevState.current}</p>
            <p>Corrent State: {otherState}</p>
            <button className='btn btn-primary' onClick={toggleOtherState}>жми</button>
        </CardWrapper>
    )
}

export default PrevStateExample

// const prevState = useRef('')
// const [otherState, setOtherState] = useState('false')
// const toggleOtherState = () => {
//     setOtherState((prevState) => (prevState === 'false' ? 'true' : 'false'))
// }
// useEffect(() => {
//     prevState.current = otherState
// }, [otherState])
// return (
//     <CardWrapper>
//         <SmallTitle>Предыдущее состояние</SmallTitle>
//         <Divider />
//         <p>prev State:{prevState.current}</p>
//         <p>Current State:{otherState}</p>
//         <button className="btn btn-primary" onClick={toggleOtherState}>
//             Toggle other state
//         </button>
//     </CardWrapper>
// )
