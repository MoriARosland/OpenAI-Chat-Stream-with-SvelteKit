<script>
	import { error } from '@sveltejs/kit';

	let loading = false;
	let inputText = 'placeholder';

	let answer = '';

	const handleSubmit = async () => {
		loading = true;

		const response = await fetch('/api/chat', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ inputText })
		});

		if (!response.ok) {
			console.log('Unexpected error');
			throw new Error('An error occured');
		}

		const responseData = await response.json();

		const { content } = responseData;
		answer = content;

		console.log(content);

		loading = false;
	};
</script>

<h1 class="text-5xl text-center py-6 mb-10">Say hello to Garbis👋</h1>

<div class="flex justify-center">
	<form class="flex flex-col w-[520px] shrink" on:submit|preventDefault={handleSubmit}>
		<label class="pb-2" for="userInput">Write your text here:</label>
		<textarea class="h-48 resize-none rounded-md" name="userInput" bind:value={inputText} />
		<button class="btn btn-primary mt-4">proompt</button>
		<div class="mt-4">
			<h2>Answer:</h2>
			{#if answer}
				<p>{answer}</p>
			{/if}
		</div>
	</form>
</div>

<!-- <div class="flex justify-center items-center min-h-screen">
	<form
		class="flex flex-col items-center w-full max-w-7xl"
		on:submit|preventDefault={() => handleSubmit()}
	>
		<label class="w-max" for="context">Test</label>
		<textarea class="w-5/12" name="context" rows="5" />
		<button class="btn btn-primary mt-4">proompt</button>
		<div class="">
			<h2>Answer:</h2>
			<p>GPT Answer</p>
		</div>
	</form>
</div> -->
