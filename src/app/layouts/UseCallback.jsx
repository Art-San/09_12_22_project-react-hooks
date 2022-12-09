import Collapse from '../components/common/Collapse'
import React from 'react'
import UseCallBackExample from '../components/examples/useCallback/useCallBackExample.jsx'
import BlockQuoteWrapper from '../components/common/BlockQuote'
import CardWrapper from '../components/common/Card'
import Divider from '../components/common/Divider'
import Title from '../components/common/typografy/Title'
import Subtitle from '../components/common/typografy/Subtitle'

const UseCallbackExample = () => {
    return (
        <>
            <Title>useCallback</Title>

            <Collapse title="Информация">
                <BlockQuoteWrapper>
                    <p>
                        Аргументы: callBack, [array of dependencies]
                        <br />
                        Возвращает: Закэшированное значение выполненной функции,
                        которое обновляется только при изменении зависимостей.
                    </p>

                    <figcaption>
                        <cite title="reactjs.org">reactjs.org</cite>
                    </figcaption>
                </BlockQuoteWrapper>
            </Collapse>

            <CardWrapper>
                <i className="bi bi-lightbulb"></i>{' '}
                <code>useCallback(fn, deps)</code> ~{' '}
                <code>useMemo(() =&gt; fn, deps)</code>
            </CardWrapper>
            <Divider />
            <Subtitle>Examples</Subtitle>
            <UseCallBackExample />
        </>
    )
}

export default UseCallbackExample
