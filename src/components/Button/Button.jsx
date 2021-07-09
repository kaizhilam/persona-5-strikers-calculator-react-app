import { Input } from '..';
import { INPUT_TYPE } from '../../utils';
import PropTypes from 'prop-types';

Button.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export function Button(props) {
    const {
        id,
        label,
        onClick
    } = props;
    return (
        <Input type={INPUT_TYPE.BUTTON} value={label} id={id} onClick={onClick}/>
    )
}