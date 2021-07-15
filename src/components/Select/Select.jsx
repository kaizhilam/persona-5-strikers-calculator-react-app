import React from 'react';
import PropTypes from 'prop-types';

Select.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        }).isRequired
    ),
    ref: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]),
};

export function Select(props) {
    const {
        id,
        label,
        onBlur,
        options,
        ref
    } = props;

    const displayOptions = options.map((option, index) => {
        const {
            value,
            label: optionLabel
        } = option;
        return (
            <option value={value} key={`id-${index}`}>{optionLabel}</option>
        )
    })

    return (
        <>
            <label htmlFor={id}>{`${label}: `}</label>
            <select name={id} id={id} onBlur={onBlur} ref={ref}>
                {displayOptions}
            </select>
        </>
    )
}