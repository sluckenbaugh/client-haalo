import formatName from "../functions/formatName"

// This file is for AirTable functions

/** 
 * @brief Uploads the user's data to airtable after completing the HAALO.
 * @param user - the user object
 * @param persona - the user's persona object
 * @param scores - the percentage scores of the test
 * @param culture - the highest percentage and description 
 */ 
async function submitHAALOToAirTable (user, persona, culture, percentages) {

    const formattedFirstName = formatName(user.firstName)
    const formattedLastName = formatName(user.lastName)

    const cultures = {
        "adhocracy":`${(percentages.A.toPrecision(2) * 100)}%`,
        "hierachy": `${(percentages.H.toPrecision(2) * 100)}%`,
        "community": `${(percentages.C.toPrecision(2) * 100)}%`,
        "market": `${(percentages.M.toPrecision(2) * 100)}%`,
    }

    // Send to Airtable 
    
    const airtableData = JSON.stringify({ 
        "records": [
        {
            "fields": {
                "fldM5QFRQLmOt0T1K": formattedFirstName,
                "fldqB3GXLbsvgbiy5": formattedLastName,
                "fldKFbBpIZOjqzrQt": user.email,
                "flddD3mFg7tkbTXyz": user.company,
                "fldgXHmPxkH0eBfa2": user.position,
                "fldyYdLCt10INpQ7p": user.industry,
                "fldF3aARnGg4Lnb3p": user.environment,
                "fldkMIZZ76Z6rmzPc": user.city,
                "fldfAuA4TZHAJqx3y": user.state,
                "fldUSRC1Fct825xth": user.zip,
                "fldJhA5Kswdl7Gt86": culture,
                "fldlr0Ats2NTPJf54": persona.name,
                "fldsplLBi9aJtVdCp": cultures.adhocracy,
                "fldZIr4WFwAXcN6i2": cultures.hierachy,
                "fldAd1J0FhWVB5GDz": cultures.community,
                "fldHoGXdarlte0mKO": cultures.market
            }
        }
    ]})

    const requestOptions = { 
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
        },
        body: airtableData
    }
    await fetch("https://avenica-backend.onrender.com/client", requestOptions)
}

export default submitHAALOToAirTable;