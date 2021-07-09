import { useContext } from "react";
import { TextInput } from "../../components";
import { AppContext } from "../AppContext";

export function TargetPersonaInput() {
    const {
        setTargetPersona
    } = useContext(AppContext)
    const handleBlur = (e) => {
        setTargetPersona(e.target.value)
    }
    return (
        <TextInput label='Target persona' id='targetPersona' onBlur={handleBlur}/>
    );
}