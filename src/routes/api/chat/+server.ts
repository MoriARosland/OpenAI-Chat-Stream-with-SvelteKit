import type { RequestHandler } from './$types';
import { OPENAI_API_KEY } from '$env/static/private';
import { OpenAI } from 'openai';
import { error, json } from '@sveltejs/kit';


const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

export const POST: RequestHandler = async ({ request }) => {

    let requestData;

    try {
        requestData = await request.json();

    } catch (err) {
        console.error('Error parsing request body:', err);
        throw error(400, 'Invalid JSON in request body.');
    }

    try {
        const response = await openai.chat.completions.create({
            messages: [{ role: "system", content: "You are a helpful assistant." }],
            model: "gpt-3.5-turbo",
        });

        return json(response.choices[0].message);

    } catch (err) {
        throw error(500, 'Failed to fetch data.');
    }
};