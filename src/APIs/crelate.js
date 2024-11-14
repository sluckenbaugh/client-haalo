// This file is for Crelate functions

/** 
 * @brief Uploads the user's data to Crelate after completing the HAALO.
 * @param user - the user object
 * @param persona - the user's persona object
 * @param scores - the percentage scores of the test
 * @param culture - the highest percentage and description 
 */ 
async function submitHAALOToCrelate (user, persona, culture, percentages) {
    const descriptions = (persona.description).join(', ')

    // Send to Crelate

    const crelateData = JSON.stringify({
        "entity": {
          "FirstName": user.firstName,
          "LastName": user.lastName,
          "CustomFields": {
            "HAALO_Persona": {
              "Id": persona.id,
              "Title": persona.name
            },
            "HAALO_Description": descriptions,
            "HAALO_Primary_Culture": culture,
            "Adhocracy": percentages.A.toPrecision(2),
            "Hierarchy": percentages.H.toPrecision(2),
            "Community": percentages.C.toPrecision(2),
            "Market": percentages.M.toPrecision(2),
          },
          "EmailAddresses_Personal": {
            "Value": user.email
          },
          "Tags": {
            "5099edcd-47e7-4ed2-f30c-9aa37681dc08":
            [
                {
                "Id": persona.tagId,
                "Name": persona.name
                }
            ]

        }
        }
    })
    const getOptions = {
      method: "GET",
      mode: "cors", 
      headers: {
        'Content-Type': 'application/json',
      }, 
    };  
    let userId = null
    
    await fetch(`https://avenica-backend.onrender.com/crelate/${user.email}`, getOptions)
      .then((response) => response.text())
      .then((result) => userId = result)
      .catch((error) => {
        userId = null;
        console.log(error)
      });

    if (!userId) {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: crelateData,
      }
      await fetch("https://avenica-backend.onrender.com/crelate", options)
    }

    else {
      const options = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: crelateData,
      }
      await fetch(`https://avenica-backend.onrender.com/crelate/${userId}`, options)
    }
}

export default submitHAALOToCrelate;