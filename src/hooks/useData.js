import { useState } from 'react';
import PERSONA_DATA from '../data/personaData'

export function useData() {
    const [data, setData] = useState({
        currentPersona: '',
        targetPersona: '',
        jokerLevel: -1,
        result: ''
    })

    function buildPersona(currentPersona, targetPersona, stack, index = 0) {
        let result;
        const targetPersonaProfile = PERSONA_DATA.persona.find(p => p.name === targetPersona);
        if (!targetPersonaProfile || !currentPersona || !targetPersona) return undefined;
        const targetPersonaFusion = targetPersonaProfile.fusions;
        targetPersonaFusion.forEach((fusion) => {
            fusion.forEach((fusionPersona) => {
                if (!stack.includes(fusionPersona.name) && data.jokerLevel >= fusionPersona.level) {
                    stack.push(fusionPersona.name)
                }
            })
            result = result ? result : fusion.find(persona => persona.name === currentPersona);
        })
        if (result) {
            return targetPersona;
        } else {
            const newIndex = index + 1;
            return buildPersona(currentPersona, stack[newIndex], stack, newIndex);
        }
    }

    const setCurrentPersona = (value) => {
        setData({
            ...data,
            currentPersona: value
        })
    }
    const setTargetPersona = (value) => {
        setData({
            ...data,
            targetPersona: value
        })
    }
    const setJokerLevel = (value) => {
        const cleanValue = parseInt(value)
        setData({
            ...data,
            jokerLevel: !isNaN(cleanValue) ? cleanValue : -1,
        })
    }
    const setResult = (value) => {
        setData({
            ...data,
            result: value
        })
    }
    const calculate = () => {
        const result = [];
        let currentPersona = data.currentPersona;
        while (currentPersona !== data.targetPersona) {
            currentPersona = buildPersona(currentPersona, data.targetPersona, []);
            if (!currentPersona) {
                break;
            }
            result.push(currentPersona);
        }
        const cleanResult = result.join(' → ');
        if (cleanResult) {
            setResult(`${data.currentPersona} → ${cleanResult}`)
        }
    }
    return {
        data,
        setCurrentPersona,
        setJokerLevel,
        setTargetPersona,
        calculate,
    }
}