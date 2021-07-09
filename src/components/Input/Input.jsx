import { INPUT_TYPE } from "../../utils";
import PropTypes from 'prop-types';

Input.propTypes = {
    id: PropTypes.string.isRequired,
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
        id,
        onBlur,
        onClick,
        ref,
        type,
        value,
    } = props;
    return (
        <input
            id={id}
            onBlur={onBlur}
            onClick={onClick}
            name={id}
            ref={ref}
            type={type}
            value={value}
        />
    )
}