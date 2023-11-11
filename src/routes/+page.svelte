<script>
	const handleSubmit = async () => {};
</script>

<h1 class="text-5xl text-center py-6 mb-10">Say hello to Garbis👋</h1>

<div class="flex justify-center">
	<form class="flex flex-col w-[520px] shrink">
		<label class="pb-2" for="context">Write your text here:</label>
		<textarea class="h-48 resize-none rounded-md" name="context" />
		<button class="btn btn-primary mt-4">proompt</button>
		<div class="mt-4">
			<h2>Answer:</h2>
			<p>GPT Answer</p>
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
