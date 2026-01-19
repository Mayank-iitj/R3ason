require('dotenv').config({ path: '.env.local' });
const Groq = require('groq-sdk');

const API_KEY = process.env.GROQ_API_KEY;
console.log('API Key loaded:', API_KEY ? `${API_KEY.substring(0, 10)}...` : 'MISSING');

const groq = new Groq({ apiKey: API_KEY });

async function test() {
    try {
        const completion = await groq.chat.completions.create({
            messages: [{ role: 'user', content: 'Say "test successful" in JSON format: {"status": "..."}' }],
            model: 'llama-3.3-70b-versatile',
            temperature: 0.1,
            response_format: { type: 'json_object' },
            max_tokens: 50
        });

        console.log('✅ API Test Successful!');
        console.log('Response:', completion.choices[0].message.content);
    } catch (error) {
        console.error('❌ API Test Failed:');
        console.error('Error type:', error.constructor.name);
        console.error('Error message:', error.message);
        if (error.response) {
            console.error('Response status:', error.response.status);
            console.error('Response data:', error.response.data);
        }
    }
}

test();
