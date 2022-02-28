import React from 'react'
import PropTypes from 'prop-types'

function PropComponent(props){
    return <div>{props.name}</div>
}

PropComponent.defaultProps = {
    name : "jaemin",
    age : 32
};

PropComponent.propTypes={
    name : PropTypes.string,
    age : function (props, propName, componentName) {
        if(!/(7|32)/.test(props[propName])){
            return new Error(
                'Invalid prop `' + propName + '`supplied to' + '`' + componentName + '`. Validation failed'
            );
        }        
    },
}

function Component() {
  return (
    <div>
        <PropComponent/>
    </div>
  )
}

export default Component
