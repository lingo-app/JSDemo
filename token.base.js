const { default: lingo, AssetType, ItemType, LingoError } = require("@lingo-app/node")

// Add your spaceId and API token
lingo.setup(2265, "NbujukaezEMN09G31MN39Ut3oBou00QLCQLoRjo1Tcg")

lingo.baseURL = "http://local.lingoapp.com:9000/1";

// Wrap the script in a function so we can use async/await
async function runScript() {

    const kits = await lingo.fetchKits()
    console.log(`Your space has ${kits.length} kits`)
    console.log(kits.map(k => `${k.name} - ${k.short_id}`))

    if (kits.length > 0) {
        const kitId = kits[0].kit_uuid
        const kit = await lingo.fetchKit(kitId)
        const kitOutline = await lingo.fetchKitOutline(kitId)
        console.log(kit)
        console.log(kitOutline)
    } else {
        console.log("You don't have any kits. You can create one here using")
        // WARNING: Any content created here will be available to other members of your space
        // as it would be if you created it in the Lingo app.

        // const kit = lingo.createKit("My new kit")
    }
}

runScript()