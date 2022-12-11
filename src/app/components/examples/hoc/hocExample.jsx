import React from 'react'
import Component from './someComponent'

import CardWrapper from '../../common/Card'
import SmallTitle from '../../common/typografy/SmallTitle'
import Divider from '../../common/Divider'
import withLogin from './withLogin'
import withPropsStyles from './withPropsStyles'
import withQuery from '../../examples/hoc/hoc.1/withQuery'
import UserMeta from './hoc.1/hoc-with-query'
import withEditUserPhone from './hoc.1/withEditUserPhone'

const HOCExample = () => {
    const WithQueryUserMeta = withQuery(UserMeta)
    const WithQuerynEdit = withQuery(withEditUserPhone(UserMeta))

    const ComponentWithAuth = withLogin(Component)
    const ComponentWithPropsStyles = withPropsStyles(Component)
    const NewComponent = withPropsStyles(withLogin(Component))
    // const NewComponent = withPropsStyles(ComponentWithAuth)
    return (
        <>
            <CardWrapper>
                <SmallTitle>0. Доп пример</SmallTitle>
                <Divider />
                <h1 className="mb-5">Компоненты высшего порядка</h1>
                <h2>withQuery</h2>
                <WithQueryUserMeta userGuid="AF8B35D3-AF7B-D696-DD95-CFD9EE754F9B" />
                <Divider />
                <h2>withQuery & withEditUserPhone</h2>
                <WithQuerynEdit userGuid="AF8B35D3-AF7B-D696-DD95-CFD9EE754F9B" />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>1. Обычный компонент</SmallTitle>
                <Divider />
                <Component/>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>2. Функциональный HOC</SmallTitle>
                <Divider />
                <ComponentWithAuth name='Тишь'/>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>3. HOC With Styles and Props</SmallTitle>
                <Divider />
                <ComponentWithPropsStyles/>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>4. Composed HOC</SmallTitle>
                <NewComponent />
            </CardWrapper>
        </>
    )
}

export default HOCExample
