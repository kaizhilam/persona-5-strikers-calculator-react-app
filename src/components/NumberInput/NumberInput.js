import PropTypes from 'prop-types';
import { INPUT_TYPE } from "../../utils";
import { Input } from "../Input";

NumberInput.propTypes = {
    defaultValue: PropTypes.number,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    max: PropTypes.number,
    min: PropTypes.number,
    onBlur: PropTypes.func,
    ref: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]),
    value: PropTypes.number
};

export function NumberInput(props) {
    const {
        defaultValue,
        id,
        label,
        max,
        min,
        onBlur,
        ref,
    } = props;
    return (
        <>
            <label htmlFor={id}>{`${label}: `}</label>
            <br />
            <Input type={INPUT_TYPE.NUMBER} id={id} name={id} onBlur={onBlur} max={max} min={min} ref={ref} defaultValue={defaultValue.toString()} />
        </>
    )
}