import React from 'react'

const Select = props => {
    const { options, selectedOption, onChange } = props
    return (
        <select onChange={onChange} value={selectedOption}>
            {options.map((option, index) => <option key={index} value={option.value}>{option.label}</option>)}
        </select>
    )
  }
  
  Select.defaultProps = {
    onChange: () => {},
    selectedOption: {},
    options: []
  }
  
  export default Select