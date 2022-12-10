import React, { useRef } from 'react'
import CardWrapper from '../../common/Card'
import Divider from '../../common/Divider'
import SmallTitle from '../../common/typografy/SmallTitle'
const ProgrammableActionsExample = () => {
    const inputRef = useRef()
    const handleClick = () => {
        console.log('inputRef', inputRef.current)
        inputRef.current.focus()
    }
    const handleClickWidth = () => {
        inputRef.current.style.width = '100px'
    }
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Мыло
            </label>
            <input
                ref={inputRef}
                type="email"
                className="form-control"
                id="email"
            />
            <button className="btn btn-primary m-2" onClick={handleClick}>
                Фокус input
            </button>
            <button
                className="btn btn-secondary m-2"
                onClick={handleClickWidth}
            >
                Изменить ширину объекта
            </button>
        </CardWrapper>
    )
}
export default ProgrammableActionsExample

// const inputRef = useRef()
// const handleClick = () => {
//     console.log(inputRef.current.clientWidth)
//     inputRef.current.focus()
// }
// const handleClickWidth = () => {
//     inputRef.current.style.width = '100px'
// }
// return (
//     <CardWrapper>
//         <SmallTitle className="card-title">
//             Программируемые действия и свойства
//         </SmallTitle>
//         <Divider />
//         <label htmlFor="email" className="form-label">
//             Email
//         </label>
//         <input
//             ref={inputRef}
//             type="email"
//             className="form-control"
//             id="email"
//         />
//         <button className="btn btn-primary" onClick={handleClick}>
//             Фокус input
//         </button>
//         <button className="btn btn-secondary" onClick={handleClickWidth}>
//             Изменить ширину объекта
//         </button>
//     </CardWrapper>
// )
