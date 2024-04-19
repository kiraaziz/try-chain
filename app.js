import { z } from "zod";
import { HuggingFaceInference } from "@langchain/community/llms/hf"
import { StructuredOutputParser } from "langchain/output_parsers"
import { RunnableSequence } from "@langchain/core/runnables";
import { PromptTemplate } from "@langchain/core/prompts";

const HF_API_KEY = ""

const GeneratedAi = async (parser, template) => {

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


try {
    console.log(await GeneratedAi(StructuredOutputParser.fromZodSchema(
        z.array(z.object({
            name: z.string().describe("name of the simular city ."),
        })
        ).length(4)
    ), `Give me a simular city of Rome ! `))

} catch (e) {
    console.log(e)
}
