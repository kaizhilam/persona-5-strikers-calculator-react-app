import PropTypes from 'prop-types';

H1.propTypes = {
    children: PropTypes.string
};

export function H1(props) {
    const {
        children
    } = props;
    return (
        <h1>{children}</h1>
    )
}