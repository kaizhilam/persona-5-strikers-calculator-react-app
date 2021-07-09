import PropTypes from 'prop-types';
import { Input } from '..';
import { INPUT_TYPE } from '../../utils'

TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    label: PropTypes.string.isRequired,
};

export function TextInput(props) {
    const {
        id,
        label,
        onBlur
    } = props;
    return (
        <>
            <label htmlFor={id}>{`${label}: `}</label>
            <br />
            <Input type={INPUT_TYPE.TEXT} id={id} name={id} onBlur={onBlur}/>
        </>
    )
}