const prompt = require("prompt-sync")()


let bryson = prompt("Are you interested in some of Bryson Tiller's Tracks?: ")
let getArtistURL = "https://api.spotify.com/v1/artists/2EMAnMvWE2eb56ToJVfCWs/top-tracks?include_groups=album&limit=10&market=US";


const artist = {
    id: "2EMAnMvWE2eb56ToJVfCWs",
};

async function getArtist(artistData){

    const options = {
        method: 'GET',
          headers: {
            Authorization: "Bearer BQD6oMjGVL4Jo-7A3jJB8lnyWkbTG8WknfKqzh8mCAVXCdrMnLqtfxbypHI72lz1saZpcwa-xFHnXu9FdmJda6FoaOqdAOGnDV-TiW1gkj-BXR39HHynVvRKx0-GcR3a1GmIvVbo9qPjZ3iBzRKne70u1EGohDNYroq9k7UfwibHhU3O1VHdDf8Z1K_9ksnnA_uOL-f8AQOhXe0-lmwTdbwhmYX63GsNFNLhuxZt9OH2VEw70cNlMdBbje-QDjj4-npUaDzw1arHs-FApEMq7VeBCWdVaUx4a1VeLxSezvSy7pv54mT2BVbCiWHhm1xWCBbRIM2jCHF0NdqmpQdBe03utoz2",
            "Content-Type": "application/json",
        },
    };

    try {
    const response = await fetch(getArtistURL, options);
    const data = await response.json()
   
if (data && data.tracks){
    console.log("Bryson Tiller's Top Tracks: ")
    for(let i = 0; i < data.tracks.length; i++){
        console.log("name: ", data.tracks[i].name)
        console.log("popularity: ", data.tracks[i].popularity)
        console.log("link: ", data.tracks[i].href) 
    }

} else {
    console.error("No tracks found in the response. Check API.")
 } 
} catch(error) {
    console.log("error fetching tracks: ", error)
}
    }


async function generateImage() {
   
    const apiKey = "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"
    const url = "https://api.openai.com/v1/images/generations"

 
const promptData = {
    prompt: "Create a visually stunning digital artwork inspired by Bryson Tiller. The image should reflect a moody, introspective vibe, incorporating elements such as a dimly lit urban setting, neon lights, and a sleek, modern aesthetic. Include subtle references to themes of love, heartbreak, and self-reflection, using a dark and atmospheric color palette of blues, purples, and blacks. The artwork should evoke a sense of both melancholy and hope, capturing the essence of Bryson Tiller's music.",
    n: 1,
    size: "1024x1024",
};



    const options = {
        method: 'POST',
        headers: {
            Authorization: 'Bearer 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',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(promptData)
    };

    try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);

            if (data && data.data){
                console.log("Image URL: ", data.data[0].url);
            
            }else {
                console.error("No image generated. Check api response.")
            }
        } catch (error){
            console.log("Error generating image ", error);
            
        }  

    }

    if(bryson === "yes"){
    generateImage()
    getArtist()
    }else {
        console.log("Okay! Let us know if you change your mind.")
    }

