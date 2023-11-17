# Streaming Chat Completion With latest OpenAI SDK & SvelteKit.

This project demonstrates how to stream chat completions using the OpenAI API in a SvelteKit application. It includes a simple UI to interact with the OpenAI Chat API and get responses from the model.

## Features

- Front-end interface with SvelteKit.
- Streaming and consuming Server-Sent Events (SSE).
- OpenAI API calls with streamed responses.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (LTS version)
- npm or yarn
- An OpenAI API key (you can create one from [OpenAI API](https://beta.openai.com/signup/))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/NamePending99/OpenAI-Chat-Stream-with-SvelteKit.git
```

2. Install npm:
```bash
npm install
```

3. Create a .env file and define OPENAI_API_KEY:
```javascript
OPENAI_API_KEY="Your Key Here"
```

4. Start the server:
```bash
npm run dev
```
