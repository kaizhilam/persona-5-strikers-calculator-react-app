import { INPUT_TYPE } from "../../utils";
import PropTypes from 'prop-types';

Input.propTypes = {
    defaultValue: PropTypes.string,
    id: PropTypes.string.isRequired,
    max: PropTypes.number,
    min: PropTypes.number,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    ref: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]),
    type: PropTypes.oneOf(Object.values(INPUT_TYPE)),
    value: PropTypes.string,
};

export function Input(props) {
    const {
        defaultValue,
        id,
        max,
        min,
        onBlur,
        onClick,
        ref,
        type,
        value,
    } = props;
    return (
        <input
            defaultValue={defaultValue}
            id={id}
            max={max}
            min={min}
            onBlur={onBlur}
            onClick={onClick}
            name={id}
            ref={ref}
            type={type}
            value={value}
        />
    )
}