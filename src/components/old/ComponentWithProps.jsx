import React from "react"
import PropTypes from 'prop-types';


const Proppy = ({para, header, number, empty}) => {
    return(
        <React.Fragment>
            <h1>{header}</h1>
            <p>{para}</p>
            <p>{number} != Five</p>
            <p>{empty} text</p>
        </React.Fragment>
    )
}

Proppy.propTypes = {
    header: PropTypes.string.isRequired,
    para: PropTypes.string.isRequired,
    number: PropTypes.number
}

// Proppy.propTypes = {}
// Proppy.defaultProps = {}

export default Proppy