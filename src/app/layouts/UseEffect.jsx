import React from 'react'
import Title from '../components/common/typografy/Title'
import CollapseWrapper from '../components/common/Collapse'
import BlockQuote from '../components/common/BlockQuote'
import Divider from '../components/common/Divider'
import Subtitle from '../components/common/typografy/Subtitle'
import RenderCountExample2 from '../components/examples/useEffect/renderCount2'

const UseEffect = () => {
    return (
        <>
            <Title>useEffect</Title>
            <CollapseWrapper>
                <BlockQuote>
                    <p>
                        <code>useEffect</code> помогает отслеживать рендеры нашего приложения.
                        В момент рендера он вызовет переданный ему <code>callback</code>.
                        useEffect() может срабатывать при:
                        каждом ререндере компонента.
                        первом рендере.
                        изменении какой-то зависимости.
                        Демонтаже компонента.
                    </p>

                    <figcaption className="blockquote-footer">
                        <cite title="reactjs.org">reactjs.org</cite>
                    </figcaption>
                </BlockQuote>
                <BlockQuote>
                    <p><code> useEffect(() {}) </code> При каждом ререндере</p>
                    <p><code> useEffect(() {}, []) </code> При первом рендере</p>
                    <p><code> useEffect(() {}, [someProps1, someProps1]) </code> При изменении зависимостей someProps1, someProps1</p>
                    <p> <code>useEffect(() return ())</code> вызовется при демонтаже компонента  </p>

                    <figcaption className="blockquote-footer">
                        <cite title="reactjs.org">reactjs.org</cite>
                    </figcaption>
                </BlockQuote>
            </CollapseWrapper>
            <Divider />
            <div>
                <Subtitle>Примеры</Subtitle>
                <RenderCountExample2 />
                {/* <PrevStateExample /> */}
                {/* <ProgrammableActionsExample /> */}
            </div>
        </>
    )
}

export default UseEffect
