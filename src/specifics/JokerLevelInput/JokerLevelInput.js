import { useContext } from "react";
import { TextInput } from "../../components";
import { AppContext } from "../AppContext";

export function JokerLevelInput() {
    const {
        setJokerLevel
    } = useContext(AppContext)
    const handleBlur = (e) => {
        setJokerLevel(e.target.value)
    }
    return (
        <TextInput label={"Joker's level"} id='jokerLevel' onBlur={handleBlur}/>
    );
}