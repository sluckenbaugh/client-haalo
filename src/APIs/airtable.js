// This file is for AirTable functions

/** 
 * @brief Uploads the user's data to airtable after completing the HAALO.
 * @param user - the user object
 * @param persona - the user's persona object
 * @param scores - the percentage scores of the test
 * @param culture - the highest percentage and description 
 */ 
async function submitHAALOToAirTable (user, persona, scores, culture, percentages) {
    const descriptions = (persona.description).join(', ')

    // Send to Airtable 
    
    const airtableData = JSON.stringify({ 
        "records": [
        {
            "fields": {
                "fldM5QFRQLmOt0T1K": user.firstName,
                "fldqB3GXLbsvgbiy5": user.lastName,
                "fldKFbBpIZOjqzrQt": user.email,
                "flddD3mFg7tkbTXyz": user.company,
                "fldgXHmPxkH0eBfa2": user.position,
                "fldJhA5Kswdl7Gt86": culture,
                "fldlr0Ats2NTPJf54": persona.name,
                "fldsplLBi9aJtVdCp": `${(percentages.A.toPrecision(2) * 100)}%`,
                "fldZIr4WFwAXcN6i2": `${(percentages.H.toPrecision(2) * 100)}%`,
                "fldAd1J0FhWVB5GDz": `${(percentages.C.toPrecision(2) * 100)}%`,
                "fldHoGXdarlte0mKO": `${(percentages.M.toPrecision(2) * 100)}%`,
            }
        }
    ]})

    const requestOptions = { 
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": "Bearer patWiziWhG5YG9Ph2.47142afa972374cd23308f668c6a42c816abdf02fa45dafd57541fd679c90ee7"
        },
        body: airtableData
    }
    await fetch("https://api.airtable.com/v0/app5Hvza0912EJf6B/tblPhuF6TYWuDp7to", requestOptions)
}

export default submitHAALOToAirTable;