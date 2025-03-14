import * as personas from '../JSON/haaloObjects'

export const getPercentages = (responses) => {
    // Get count for each letter
    var counter = {'A': 0, 'M': 0, 'C': 0, 'H': 0}
        for (let i = 0; i < responses.length; i++) {
            switch (responses[i].option.associatedLetter) {
                case 'A':
                    counter['A'] += 3
                    break;
                case 'M':
                    counter['M'] += 3
                    break;
                case 'C':
                    counter['C'] += 3
                    break;
                case 'H':
                    counter['H'] += 3
                    break;
                default:
                    break;
            }
        }

    let percent_A = counter.A / 45
    let percent_M = counter.M / 45
    let percent_C = counter.C / 45
    let percent_H = counter.H / 45

    return {'A': percent_A, 'H': percent_H, 'C': percent_C, 'M': percent_M}
}

export const findPersona = (responses) => {
    var persona = {}

    
    var largestResult = -1
    var largestLetter = 'Z'

    let percentages = getPercentages(responses)
    
    for (let letter in percentages) {
        if (percentages[letter] > largestResult) {
            largestLetter = letter
            largestResult = percentages[letter]
        }
    }

    
    switch (largestLetter) {
        case 'A':
            persona = findPersonaForA(percentages)
            break
            case 'H':
                persona = findPersonaForH(percentages)
                break
                case 'C':
                    persona = findPersonaForC(percentages)
                    break
                    case 'M':
                        persona = findPersonaForM(percentages)
                        break
                        case 'X':
                            persona = findPersonaForX(percentages)
                            break
                            default:
                                console.log('No maximum')
                            }
                            return persona
                        }
                        
export const findPersonaForA = (percentages) => {
    
    if (percentages['A'] >= 0.85)
        return personas.PIONEER
    
    if ((percentages['C'] > percentages['H'] &&
            percentages['C'] > percentages['M'])
            ||
            (percentages['C'] > percentages['M'] && percentages['C'] === percentages['H'])
            ||
            (percentages['A'] === percentages['C'] && percentages['M'] > percentages['H'])) {
        return personas.ADVOCATE
    }
    
    if ((percentages['M'] > percentages['C'] &&
                percentages['M'] > percentages['H'])
                ||
                (percentages['M'] > percentages['C'] && percentages['M'] === percentages['H'])
                ||
                (percentages['A'] === percentages['M'] && percentages['C'] > percentages['H'])) {
        return personas.ENTREPRENEUR
    }
    
    if ((percentages['H'] > percentages['C']) &&
        (percentages['H'] > percentages['M'])) {
        return personas.NAVIGATOR
    }
    return personas.DIPLOMAT
}

export const findPersonaForH = (percentages) => {
    if (percentages['H'] > 0.85)
        return personas.GENERAL

    
    if ((percentages['C'] > percentages['A'] &&
            percentages['C'] > percentages['M'])
            ||
            (percentages['C'] > percentages['A'] && percentages['C'] === percentages['M'])
            ||
            (percentages['H'] === percentages['C'] && percentages['M'] > percentages['A'])) {
        return personas.GUARDIAN
    }
    
    if ((percentages['M'] > percentages['C'] &&
                percentages['M'] > percentages['H'])
                ||
                (percentages['M'] > percentages['C'] && percentages['M'] === percentages['A'])
                ||
                (percentages['H'] === percentages['M'] && percentages['C'] > percentages['A'])) {
        return personas.CLOSER
    }
    
    if (percentages['A'] > percentages['C'] &&
        percentages['A'] > percentages['M']) {
        return personas.SCIENTIST
    }
    
    return personas.CONSULTANT
}

export const findPersonaForC = (percentages) => {
    if (percentages['C'] > 0.85) {
        return personas.CAPTAIN
    }
    
    if ((percentages['A'] > percentages['H'] &&
            percentages['A'] > percentages['M'])
            ||
            (percentages['A'] > percentages['M'] && percentages['A'] > percentages['H'])
            ||
            (percentages['C'] === percentages['A'] && percentages['H'] > percentages['M'])) {
        return personas.CHAMPION
    }
    
    if ((percentages['H'] > percentages['A'] &&
                percentages['H'] > percentages['M'])
                ||
                (percentages['H'] > percentages['A'] && percentages['M'] === percentages['H'])
                ||
                (percentages['C'] === percentages['H'] && percentages['A'] > percentages['M'])) {
        return personas.COUNSELOR
    }
    
    if (percentages['M'] > percentages['A'] &&
        percentages['M'] > percentages['H']) {
        return personas.SCHOLAR
    }
    return personas.PROMOTER
}

export const findPersonaForM = (percentages) => {
    if (percentages['M'] > 0.85) {
        return personas.PLAYMAKER
    }
    
    if ((percentages['A'] > percentages['H'] &&
            percentages['A'] > percentages['C'])
            ||
            (percentages['A'] > percentages['C'] && percentages['A'] === percentages['H'])
            ||
            (percentages['M'] === percentages['A'] && percentages['C'] > percentages['H'])) {
        return personas.STRIVER
    }
    
    if ((percentages['H'] > percentages['A'] &&
                percentages['H'] > percentages['C'])
                ||
                (percentages['H'] > percentages['A'] && percentages['H'] === percentages['C'])
                ||
                (percentages['M'] === percentages['H'] && percentages['A'] > percentages['C'])) {
        return personas.NEGOTIATOR
    }
    if (percentages['C'] > percentages['A'] &&
        percentages['C'] > percentages['H']) {
        return personas.STRATEGIST
    }
    return personas.INTERPRETER
}

export const findPersonaForX = (percentages) => {
    if ((percentages['A'] === percentages['H'] &&
        percentages['A'] === percentages['C'] && percentages['A'] > percentages['M'])
        ||
        (percentages['C'] === percentages['M'] &&
        percentages['C'] === percentages['A'] && percentages['C'] > percentages['H'])
        ||
        (percentages['A'] === percentages['M'] && percentages['C'] === percentages['H'])) {
        return personas.CHAMELEON
    }
    
    return {name: 'None'}
}

export const findPersonaForO = (percentages) => {
    if (percentages['H'] === percentages['M']
        ||
        (percentages['M'] > percentages['A'] &&
        percentages['H'] > percentages['C'])) {
        
        return personas.MERCENARY
    }
    
    return {name: 'None'}
}