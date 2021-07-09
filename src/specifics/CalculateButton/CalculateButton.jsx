import { useContext } from "react";
import { Button } from "../../components";
import { AppContext } from "../AppContext";

export function CalculateButton() {
    const {
        calculate
    } = useContext(AppContext)
    const handleClick = (e) => {
        calculate();
    }
    return (
        <Button label='Calculate' id='calculateButton' onClick={handleClick}/>
    )
}