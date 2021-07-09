import { useContext } from "react";
import { TextInput } from "../../components";
import { AppContext } from "../AppContext";

export function CurrentPersonaInput() {
    const {
        setCurrentPersona
    } = useContext(AppContext)
    const handleBlur = (e) => {
        setCurrentPersona(e.target.value)
    }
    return (
        <TextInput label='Current persona' id='currentPersona' onBlur={handleBlur}/>
    );
}