import { useMakeGif, useMakeImage, useMakeScript, useMakeSpeech, useMakeSpeech2 } from "./hooks.js";
import { mkdirSync } from "fs"
import slugify from "slugify";
import { getAudioDurationInSeconds } from "get-audio-duration"
import fs from "fs"
import getColors from 'get-image-colors'
import path from "path";


const FullApp = async (topic) => {

    const id = "source/" + slugify(topic) + "-" + Date.now()
    mkdirSync(id)

    const videoData = await useMakeScript({
        topic: topic,
    })

    console.log(await videoData)

    await useMakeSpeech(videoData.title, `${id}/title.mp3`)

    for (let i = 0; i < videoData.scenes.length; i++) {

        const { content } = videoData.scenes[i]

        // await useMakeImage(content, `${id}/${i}.jpg`)
        await useMakeSpeech(content, `${id}/${i}.mp3`)

        console.log(`scene  Number ${i} : created `)
    }

    let schema = {
        id: id,
        header: {
            text: videoData.title,
            background: "",
            audioPath: 0,
            startAtEndAt: 0,
            endAt: 0,
            duration: 0
        },
        body: []
    }

    await getAudioDurationInSeconds(id + "/title.mp3").then((duration) => {
        schema.header.duration = duration
        schema.header.endAt = duration
        schema.header.audioPath = id + "/title.mp3"

    })

    for (let i = 0; i < videoData.scenes.length; i++) {
        await getAudioDurationInSeconds(id + "/" + i + ".mp3").then((duration) => {

            let before = schema.header.duration
            for (let j = 0; j < schema.body.length; j++) {
                before = before + schema.body[j].duration
            }

            const obj = {
                content: videoData.scenes[i].content,
                image: id + "/" + i + ".jpg",
                colors: [],
                duration: duration,
                startAt: before,
                endAt: before + duration,
            }

            // const buffer = fs.readFileSync(path.join(id + "/" + i + ".jpg"))


            // getColors(buffer, 'image/jpg').then(colors => {
            //     obj.colors = colors.map(color => color.hex())
            // })

            schema.body.push(obj)
        })
    }

    fs.writeFileSync(id + "/data.json", `${JSON.stringify(schema, null, 2)}`)
    fs.writeFileSync("range/src/data.js", `export const json = ${JSON.stringify(schema, null, 2)}`)

}

FullApp("5 wierd fact about north korea no one want you to know about")