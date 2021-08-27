import lingo, { AssetType, ItemType, LingoError } from "@lingo-app/node";

import auth from "./apiToken"
// Add your spaceId and API token
lingo.setup(auth.spaceId, auth.apiToken)

// Wrap the script in a function so we can use async/await
async function runScript() {


    // Log all kit names
    const kits = await lingo.fetchKits()
    console.log(`Your space has ${kits.length} kits`)

    if (kits.length > 0) {
        // Print the names of all kits
        console.log(kits.map(k => `${k.shortId} - ${k.name}`))

        const kitId = kits[0].kitId
        const kit = await lingo.fetchKit(kitId)
        const kitOutline = await lingo.fetchKitOutline(kitId)
        console.log(kit)
        console.log(kitOutline.sections)
    } else {
        console.log("You don't have any kits. You can create one here using")

        // Creating a kit
        // WARNING: Any content created here will be available to other members of your space
        // as it would be if you created it in the Lingo app.

        // const kit = lingo.createKit("My new kit")
    }

    // Search
    let results = await lingo.search().limit(5).ofType(AssetType.SVG).fetch()
    console.log(`There are ${results.total} SVGs in your space`)
}

runScript()