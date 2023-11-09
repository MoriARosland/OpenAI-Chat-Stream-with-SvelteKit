import type { RequestEvent, RequestHandler } from './$types';
import { OPENAI_API_KEY } from '$env/static/private';
import { OpenAI } from 'openai';
import { error, json } from '@sveltejs/kit';


const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

export const GET: RequestHandler = async (e: RequestEvent) => {

    let user = { admin: true };

    if (!user.admin) {
        throw error(401, 'Unauthorized');
    }

    try {
        const response = await openai.chat.completions.create({
            messages: [{ role: "system", content: "You are a helpful assistant." }],
            model: "gpt-3.5-turbo",
        });

        return json(response.choices[0].message.content);

    } catch (err) {
        throw error(500, 'Failed to fetch Data.');
    }
};