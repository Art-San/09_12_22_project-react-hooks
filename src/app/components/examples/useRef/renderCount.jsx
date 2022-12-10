import React, { useRef, useState, useEffect } from 'react'
import CardWrapper from '../../common/Card'
import Divider from '../../common/Divider'
// import Divider from '../../common/Divider'
import SmallTitle from '../../common/typografy/SmallTitle'
const RenderCountExample = () => {
    const renderCount = useRef(0)
    const [otherState, setOtherState] = useState(false)
    const toggleOtherState = () => {
        setOtherState(!otherState)
    }
    useEffect(() => {
        renderCount.current++
    })
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider />
            <p>render count: {renderCount.current}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                жми
            </button>
        </CardWrapper>
    )
}

export default RenderCountExample

// const RenderCountExample = () => {
//     const renderCount = useRef(0)
//     const [otherState, setOtherState] = useState(false)
//     const toggleOtherState = () => {
//         setOtherState(!otherState)
//     }
//     useEffect(() => {
//         renderCount.current++
//     })
//     return (
//         <CardWrapper>
//             <SmallTitle>Подсчет количества рендеров</SmallTitle>
//             <Divider />
//             <p>render count:{renderCount.current}</p>
//             <button className="btn btn-primary" onClick={toggleOtherState}>
//                 Toggle other state
//             </button>
//         </CardWrapper>
//     )
// }
