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

        const { inputText } = requestData;

        // const messageArray = [{ role: "system", content: "You are a helpful assistant." }];
        // messageArray.push({ role: "user", content: inputText });

        const completionResponse = await openai.chat.completions.create({
            messages: [{ role: "system", content: "You are a helpful assistant." }, { role: "user", content: inputText }],
            model: "gpt-3.5-turbo",
            stream: true
        });

        const headers = {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
        };

        const stream = new ReadableStream({
            async start(controller) {
                for await (const chunk of completionResponse) {
                    controller.enqueue(`data: ${JSON.stringify(chunk)}\n\n`);
                }
                controller.close();
            }
        });

        return new Response(stream, { headers });

    } catch (err) {
        throw error(500, 'Failed to fetch data.');
    }
};