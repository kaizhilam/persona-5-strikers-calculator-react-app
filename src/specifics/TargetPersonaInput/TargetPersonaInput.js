import { useContext } from "react";
import { Select } from "../../components";
import { compare } from "../../utils";
import { AppContext } from "../AppContext";

export function TargetPersonaInput() {

    const {
        setTargetPersona,
        persona
    } = useContext(AppContext)
    const handleBlur = (e) => {
        setTargetPersona(e.target.value);
    }
    const options = persona
        .filter((p) => p.arcana !== "Treasure")
        .map((p) => {
            return {
                label: p.name,
                value: p.name
            }
        })
        .sort((a, b) => compare(a, b, "value"))
    options.unshift({
            label: '---',
            value: '---'
        })
    return (
        <Select label='Target persona' id='targetPersona' options={options} onBlur={handleBlur} />
    );
}