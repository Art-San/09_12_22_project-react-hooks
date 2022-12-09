import React, { useMemo, useState } from 'react'

function myLoop(n) {
    console.time('Выполнялось: ')
    let i = 0
    do {
        i++
    } while (i !== n)
    console.timeEnd('Выполнялось: ')
    return i
}

const ExampleUseMemoFeb = () => {
    // В JS большие числа для удобства можно разделять с помощью "_"
    const [value, setValue] = useState(1_000_000_000)
    const [anotherState, setAnotherState] = useState(1)

    const computedResult = useMemo(() => {
        return myLoop(value)
    }, [value])

    return (
        <div>
            <div>
                Вычисленный результат: <b>{computedResult}</b>
                <p>
                    value: <b>{value}</b>
                </p>
            </div>
            <div>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => setValue((v) => v + 1000)}>
                    Increment
                </button>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => setValue((v) => v - 1000)}>
                    dDecrement
                </button>
            </div>
            <div>
                {anotherState}
                <p>
                    <button
                        className='btn btn-warning m-1'
                        onClick={() => setAnotherState((p) => p + 1)}>
                        Обновить
                    </button>
                </p>
            </div>
            <hr />
        </div>
    )
}

export default ExampleUseMemoFeb
