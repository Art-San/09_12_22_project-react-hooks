import React from 'react'

import PropTypes from 'prop-types'
import Subtitle from '../../common/typografy/Subtitle'

const SomeComponent = ({ name }) => {
    return <Subtitle>{name || 'Component3'}</Subtitle>
}
SomeComponent.propTypes = {
    name: PropTypes.string
}
export default SomeComponent
