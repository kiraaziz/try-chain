import { z } from "zod";
import { HuggingFaceInference } from "@langchain/community/llms/hf"
import { StructuredOutputParser } from "langchain/output_parsers"
import { RunnableSequence } from "@langchain/core/runnables";
import { PromptTemplate } from "@langchain/core/prompts";
import { writeFileSync } from "fs"

const HF_API_KEY = "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"
const TENOR_API_Key = 'AIzaSyBf8tvxsPLvT4IeyjW30eO281NuCWE58iA'

const useMakeText = async (parser, template) => {

    const model = new HuggingFaceInference({
        model: "mistralai/Mistral-7B-Instruct-v0.2",
        apiKey: HF_API_KEY,
        maxTokens: 10000
    })


    const chain = RunnableSequence.from([
        PromptTemplate.fromTemplate(
            "Answer the users question as best as possible.\n{format_instructions}\n {question} ? "
        ),
        model,
        parser,
    ])

    const result = await chain.invoke({
        question: template,
        format_instructions: parser.getFormatInstructions()
    });

    return result
}

export const useMakeScript = async ({ topic }) => {

    const data = await useMakeText(StructuredOutputParser.fromZodSchema(
        z.object({
            title: z.string().describe("A title for the topic as intersting tiktok video title "),
            scenes: z.array(
                z.object({
                    content: z
                        .string()
                        .describe("a single topic of what I ask"),
                    // image: z
                    //     .string()
                    //     .describe("a related gif hashtag"),
                })
            )
                .describe("each element will have one fact")
        })
    ), `${topic}`)

    return data
}

export const useMakeSpeech = async (about, path) => {
    const res = await fetch("https://countik.com/api/text/speech", {
        "headers": {
            "content-type": "application/json",
        },
        "body": "{\"text\":\"" + about + "\",\"voice\":\"en_us_001\"}",
        "method": "POST"
    });

    const data = await res.json()
    writeFileSync(path, Buffer.from(data.v_data, 'base64'))
}

export const useMakeGif = async (about, path) => {
    const imageReq = await fetch(`https://tenor.googleapis.com/v2/search?q=${about}&key=${TENOR_API_Key}&limit=1`)
    const image = await imageReq.json()

    const finalGif = await fetch(image.results[0].media_formats.nanogif.url)
    const buffer = Buffer.from(await finalGif.arrayBuffer());

    writeFileSync(path, buffer)

}

// import Scraper from 'images-scraper'
// const google = new Scraper({
//     puppeteer: {
//         headless: true,
//     },
// })


export const useMakeImage = async (about, path) => {

    try {

        // const results = await fetch("https://api.serpdog.io/images?api_key=662e464eabf77ef1e015c9c2&q="+about)
        // const data = await results.json()

        // console.log(data)

        // const url = data.image_results[0].original

        // const results = await google.scrape('banana', 1);
        // console.log('results', results);

        // const finalGif = await fetch(url)
        // const buffer = Buffer.from(await finalGif.arrayBuffer());

        // writeFileSync(path, buffer)
    } catch (e) {
        console.error(e);
    }


}

useMakeImage("The largest snowflake ever recorded was 15 inches wide and 8 inches thick, and was found in Montana, USA, in 1887.")

export const useMakeSpeech2 = async (about, path) => {


    const reqData = await fetch("https://countik.com/api/text/speech", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en,en-US;q=0.9,fr;q=0.8,ar;q=0.7",
            "content-type": "application/json",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrer": "https://countik.com/tiktok-voice-generator",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"text\":\"People in the state of Assam practice a unique tradition called 'Mishing Bihu'. During this festival, they jump over a bonfire while singing and dancing.\",\"voice\":\"en_us_001\"}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    });

    const Data = await reqData.json()

    console.log(Data)
    const finalGif = await fetch(Data.URL)
    const buffer = Buffer.from(await finalGif.arrayBuffer());

    writeFileSync(path, buffer)
}
