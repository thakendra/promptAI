import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const { Environment, Mood, category, color, extra, subject, lighting,Level } = req.body;
  const prompt = generatePrompt(Environment, Mood, category, color, extra, subject, lighting,Level);

  console.log(prompt);

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.6,
    max_tokens: 2048,
  });

  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(Environment, Mood, category, color, extra ,subject, lighting,Level) {
  return `You will now act as a prompt generator for a generative AI called "Midjourney". Midjourney AI generates images based on given prompts. 

  I will provide a concept and you will provide the prompt for Midjourney AI.
  
  The prompt you will generate will be exactly as written in the structure to the letter including the "/" and ":"
  This is the prompt structure: "/imagine prompt: ${extra}, [2], [3], [4], [5], [6], [ar] [v]"
  
  You will not and must not alter the structure in any way.
  
  ${extra}
  [2] = a detailed description of ${extra} that will include very specific imagery details.
  [3] = with a detailed description describing the environment of the scene.
  [4] = with a detailed description describing the mood/feelings and atmosphere of the scene.
  [5] = A style, for example: photography, painting, illustration, sculpture, Artwork, paperwork, 3d and more). ${extra} 
  [6] = A description of how [5] will be realized. (e.g. Photography (e.g. Macro, Fisheye Style, Portrait) with camera model and according settings, Painting with detailed descriptions about the materials and working material used, rendering with engine settings, a digital Illustration, a woodburn art (and everything else that could be defined as an output type)
  [ar] = "--ar 16:9" if the image looks best horizontally, "--ar 9:16" if the image looks best vertically, "--ar 1:1" if the image looks best in a square.
  [v] = If [5] looks best in a Japanese art style, "--niji". Else, "--v 4"
  
  you will not write the words "description:" or use ":" in any form.
  You will write the prompt in one line without creating new lines
  
  you will generate 4 prompts for each concept ${extra}, and each of your prompts will be different in its description, environment, atmosphere, and realization.
  
  The prompts you provide will be in English*.
  
  Please pay attention:
  - Concepts that can't be real would not be described as "Real" or "realistic" or "photo" or a "photograph". for example, a concept which is made of paper or scenes which are fantasy related.
  - One of the prompts you generate for each concept must be in realistic photographic style. you should also choose a lens type and size for it. don't choose an artist for the realistic photography prompts.
  - Separate the different prompts with two new lines `;}
