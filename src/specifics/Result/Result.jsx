import { useContext } from 'react';
import { Paragraph } from '../../components';
import { AppContext } from '../AppContext';

export function Result() {
    const {
        data
    } = useContext(AppContext)
    const toReturn = `Result: ${data.result}`;
    return (
        <Paragraph>{toReturn}</Paragraph>
    )
}