import React from 'react'
import Title from '../components/common/typografy/Title'
import CollapseWrapper from '../components/common/Collapse'
import BlockQuote from '../components/common/BlockQuote'
import Divider from '../components/common/Divider'
import Subtitle from '../components/common/typografy/Subtitle'
import Counter from '../components/examples/useState/Counter'
import Click from '../components/examples/useState/Click'
import ExampleBad from '../components/examples/useState/ExampleBad'
import ExampleColor from '../components/examples/useState/ExampleColor'
import Example4 from '../components/examples/useState/Example4'

const UseState = () => {
    return (
        <>
            <Title>useState</Title>
            <CollapseWrapper>
                <BlockQuote>
                    <p>
                        <code>useState</code> возвращает кортеж (массив), в
                        котором содержится значение состояния и функция для его
                        изменения. По соглашению название функции изменения
                        состояния начинается с <code>set</code>.
                    </p>

                    <figcaption className="blockquote-footer">
                        <cite title="reactjs.org">reactjs.org</cite>
                    </figcaption>
                </BlockQuote>
            </CollapseWrapper>
            <Divider />
            <div>
                <Subtitle>Примеры</Subtitle>
                <Counter />
                <Click/>
                <ExampleBad/>
                <ExampleColor/>
                <Example4/>
                {/* <PrevStateExample /> */}
                {/* <ProgrammableActionsExample /> */}
            </div>
        </>
    )
}

export default UseState
