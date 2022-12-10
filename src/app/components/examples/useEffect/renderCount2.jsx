import React, { useState, useEffect } from 'react'
import CardWrapper from '../../common/Card'
// import Divider from '../../common/Divider'
import SmallTitle from '../../common/typografy/SmallTitle'
const RenderCountExample2 = () => {
    const [renderCount, setRenderCount] = useState(0)
    useEffect(() => {
        setRenderCount((prevState) => prevState + 1)
    }, [])
    const handleRender = () => {
        console.log('someRef')
    }
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <p>render count: {renderCount}</p>
            <button className="btn btn-primary m-2" onClick={handleRender}>
                ;vb
            </button>
        </CardWrapper>
    )
}

export default RenderCountExample2
