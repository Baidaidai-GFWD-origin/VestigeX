import { GoogleGenerativeAI, HarmCategory , HarmBlockThreshold } from "@google/generative-ai";

// HARM_CATEGORY_HARASSMENT	Gemini - 骚扰内容。
// HARM_CATEGORY_HATE_SPEECH	Gemini - 仇恨言论和内容。
// HARM_CATEGORY_SEXUALLY_EXPLICIT	Gemini - 露骨色情内容。
// HARM_CATEGORY_DANGEROUS_CONTENT	Gemini - 危险内容。
// HARM_CATEGORY_CIVIC_INTEGRITY	Gemini - 可能用于破坏公民诚信的内容。

const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    }
];

const genAI = new GoogleGenerativeAI("YOUR_API_KEYS");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash",safetySettings});

const chat = model.startChat({
  history: [
    {
      role: "user",
      parts: [{ text: "你好！" }],
    },
    {
      role: "model",
      parts: [{ text: "你好，我叫Gemini，很高兴认识你！你可以随时提问我!" }],
    },
  ],
});

let rebuildResault = async function(userInput="你好"){
    console.log("Gemini is Running……")
    let result = await chat.sendMessage(userInput,{
        generationConfig: {
            maxOutputTokens: 1000,
            temperature: 1,
        }
    });
    let Answer = await result.response.text()
    return Answer

//  let result = await chat.sendMessage("I have 2 dogs in my house.");
//  console.log(result.response.text());
}


export { rebuildResault }