<script>
	export let placeholder
	export let value
	export let required
	export let className
	export let name
</script>

<div class="text-white">
	<p>{name}</p>
	<input {placeholder} {required} {value} class={className} on:input={e => value = e.target.value} type="text" />
</div>
