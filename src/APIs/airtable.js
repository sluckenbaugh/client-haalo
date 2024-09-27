// This file is for AirTable functions

/** 
 * @brief Uploads the user's data to airtable after completing the HAALO.
 * @param user - the user object
 * @param persona - the user's persona object
 * @param scores - the percentage scores of the test
 * @param culture - the highest percentage and description 
 */ 
async function submitHAALOToAirTable (user, persona, scores, culture) {
    const descriptions = (persona.description).join(', ')

    // Send to Airtable 
    
    const airtableData = JSON.stringify({ 
        "records": [
        {
            "fields": {
                "fldNkwhg3P8lqxs53": user.firstName,
                "fld8Qb4phbDgjK2ST": user.lastName,
                "fld4FuqsRa8SAf6Cb": user.email,
                "fldL6JzdRtXqLFKMg": persona.name,
                "fldWsB67lH5j1mBgb": descriptions,
                "fldO4MIKpacx19xcI": scores,
                "fldcFCsEQGJfyFfvm": culture
            }
        }
    ]})

    const requestOptions = { 
        method: "POST",
        headers: { 
            "Content-Type": "application/json"
        },
        body: airtableData
    }
    await fetch("https://avenica-backend.onrender.com/airtable", requestOptions)
}

export default submitHAALOToAirTable;