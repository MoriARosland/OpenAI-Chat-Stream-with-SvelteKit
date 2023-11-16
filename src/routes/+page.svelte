<script lang="ts">
	import { SSE } from 'sse.js';

	let loading = false;
	let error = false;

	let inputText = 'one';

	let answer = '';

	const handleSubmit = async () => {
		loading = true;
		error = false;

		answer = '';

		const eventSource = new SSE('/api/chat', {
			headers: {
				'Content-Type': 'application/json'
			},
			payload: JSON.stringify({ inputText })
		});

		inputText = '';

		eventSource.addEventListener('error', (e) => {
			console.log('error', e);
			error = true;
			loading = false;

			alert('An error occured');
		});

		eventSource.addEventListener('message', (e) => {
			try {
				loading = false;
				const data = JSON.parse(e.data);

				if (data.choices[0].finish_reason === 'stop') {
					// End of Stream
					return;
				}

				const { content } = data.choices[0].delta;
				answer = (answer ?? '') + content;
			} catch (err) {
				error = true;
				loading = false;

				console.error(err);
				alert('Failed to read message');
			}
		});
	};
</script>

<h1 class="text-5xl text-center py-6 mb-10">Say hello to Garbis👋</h1>

<div class="flex justify-center">
	<form class="flex flex-col w-[520px] shrink" on:submit|preventDefault={handleSubmit}>
		<label class="pb-2" for="userInput">Write your text here:</label>
		<textarea class="h-48 resize-none rounded-md" name="userInput" bind:value={inputText} />

		{#if !loading}
			<button class="btn btn-primary mt-4">proompt</button>
		{/if}

		{#if loading}
			<button class="btn btn-primary mt-4" disabled
				>GENERATING <span class="spinner">⚡</span></button
			>
		{/if}
		<div class="mt-4">
			<h2>Answer:</h2>
			{#if answer}
				<p>{answer}</p>
			{/if}
		</div>
	</form>
</div>
