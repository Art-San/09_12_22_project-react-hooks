import React from 'react'
import CardWrapper from '../../common/Card'
import TextField from '../../common/form/TextField'
import SmallTitle from '../../common/typografy/SmallTitle'

const CloneElementExample = () => {
    const field = <TextField label='email' name='email' />
    const handleChange = (target) => {
        console.log('change', target)
    }
    return (
        <CardWrapper>
            <SmallTitle>Пример</SmallTitle>
            {field}
            {React.cloneElement(field, { onChange: handleChange, label: 'Clone Label' })}
        </CardWrapper>
    )
}

export default CloneElementExample

// import React from 'react'
// import CardWrapper from '../../common/Card'
// import TextField from '../../common/form/TextField'

// import SmallTitle from '../../common/typografy/SmallTitle'
// const CloneElementExample = () => {
//     const field = <TextField label="email" name="email" />
//     const handleChange = (target) => {
//         console.log('change: ', target)
//     }
//     return (
//         <CardWrapper>
//             <SmallTitle>Пример</SmallTitle>
//             {field}
//             {React.cloneElement(field, {
//                 onChange: handleChange,
//                 label: 'Cloned email'
//             })}
//         </CardWrapper>
//     )
// }

// export default CloneElementExample
