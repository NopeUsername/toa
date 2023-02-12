<script>
	import "../app.css"
</script>

<main class="min-h-screen bg-neutral-900 font-mono">
	<section
		class="flex justify-center items-center gap-2 bg-neutral-800 text-white pb-4 pt-4 mb-6 drop-shadow-lg"
	>
		<img src="$lib/assets/EH.png" alt="TOChicken logo" class="h-14" />
		<div class="flex-col">
			<h1 class="text-xs">Welcome to</h1>
			<h1 class="text-lg font-extrabold">THE TOChicken!!!! 🔰🔰</h1>
			<p class="text-xs">the outdoor club's video dump</p>
		</div>
	</section>

	<slot />
</main>
