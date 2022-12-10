import React from 'react'
import BlockQuote from '../components/common/BlockQuote'
import CollapseWrapper from '../components/common/Collapse'
import Divider from '../components/common/Divider'
import Subtitle from '../components/common/typografy/Subtitle'
import Title from '../components/common/typografy/Title'
import { ExampleFileInput } from '../components/examples/useRef/ExampleRefRerender'
import PrevStateExample from '../components/examples/useRef/prevState'
import ProgrammableActionsExample from '../components/examples/useRef/programmableActions'
import RenderCountExample from '../components/examples/useRef/renderCount'
import UseRefExercise from '../components/exercises/useRefExercise'
const UseRefExample = () => {
    return (
        <>
            <Title>useRef</Title>
            <CollapseWrapper>
                <BlockQuote>
                    <p>
                        <code>useRef</code> возвращает изменяемый ref-объект,
                        свойство <code>.current</code> которого инициализируется
                        переданным аргументом <code>(initialValue)</code>.
                        Возвращённый объект будет сохраняться в течение всего
                        времени жизни компонента.
                    </p>

                    <figcaption className="blockquote-footer">
                        <cite title="reactjs.org">reactjs.org</cite>
                    </figcaption>
                </BlockQuote>
            </CollapseWrapper>
            <Divider />
            <div>
                <Subtitle>Examples</Subtitle>
                <RenderCountExample />
                <PrevStateExample />
                <ProgrammableActionsExample />
                <ExampleFileInput />
            </div>
            <Divider />
            <div>
                <Subtitle>Упражнения</Subtitle>
                <UseRefExercise />
            </div>
        </>
    )
}

export default UseRefExample
