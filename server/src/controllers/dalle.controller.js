import { request, response } from 'express';
import { createImageOpenAI } from '../utils/openAI.js'


export const handleOpenAI = async (req = request, res = response) => {
    try {
        const { prompt } = req.body;
        const aiResponse = await createImageOpenAI(prompt)

        const image = aiResponse.data.data[0].b64_json;

        res.status(200).json({ photo: image });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error?.response.data.error.message })
    }
}




