import React, { useState, useEffect } from 'react'
import CardWrapper from '../../common/Card'
import SmallTitle from '../../common/typografy/SmallTitle'

function factorial(n) {
    return n ? n * factorial(n - 1) : 1
}
const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100)
    useEffect(() => {
        console.log('render')
    }, [value])
    const fact = factorial(value)
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Value: {value}</p>
                <p>Result fact: {fact}</p>
                <button
                    className="btn btn-primary ms-md m-1"
                    onClick={() => setValue(prevState => prevState + 10)}>
                        increment
                </button>
                <button
                    className="btn btn-primary ms-md m-1"
                    onClick={() => setValue(prevState => prevState - 10)}>
                        decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button className='btn btn-primary m-1'></button>
            </CardWrapper>
        </>
    )
}

export default ComplexCalculateExample

// import React, { useEffect, useState, useMemo } from 'react'
// import CardWrapper from '../../common/Card'
// import SmallTitle from '../../common/typografy/SmallTitle'

// function factorial(n) {
//     return n ? n * factorial(n - 1) : 1
// }
// function runFactorial(n) {
//     console.log('run Factorial')
//     return factorial(n)
// }

// const ComplexCalculateExample = () => {
//     const [value, setValue] = useState(100)
//     const [otherState, setOtherState] = useState(false)

//     const buttonColor = otherState ? 'primary' : 'secondary'
//     useEffect(() => {
//         console.log('render button color')
//     }, [buttonColor])

//     const fact = useMemo(() => runFactorial(value), [value])
//     return (
//         <>
//             <CardWrapper>
//                 <SmallTitle>Кэширование сложных вычислений</SmallTitle>
//                 <p>Value :{value}</p>
//                 <p>Result fact :{fact}</p>
//                 <button
//                     className="btn btn-primary mx-2"
//                     onClick={() => setValue((prevState) => prevState + 10)}
//                 >
//                     Increment
//                 </button>
//                 <button
//                     className="btn btn-primary mx-2"
//                     onClick={() => setValue((prevState) => prevState - 10)}
//                 >
//                     Decrement
//                 </button>
//             </CardWrapper>
//             <CardWrapper>
//                 <SmallTitle>Зависимость от сторонних setState</SmallTitle>
//                 <button
//                     className={'btn ms-md-2  btn-' + buttonColor}
//                     onClick={() => setOtherState((prevState) => !prevState)}
//                 >
//                     {' '}
//                     Change color
//                 </button>
//             </CardWrapper>
//         </>
//     )
// }

// export default ComplexCalculateExample
