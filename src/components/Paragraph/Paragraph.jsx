import PropTypes from 'prop-types';

Paragraph.propTypes = {
    children: PropTypes.string
};
export function Paragraph(props) {
    const {
        children
    } = props;
    return (
        <p>{children}</p>
    )
}