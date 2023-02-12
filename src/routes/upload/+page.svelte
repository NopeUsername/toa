<script>
	import Input from "$lib/components/InputText.svelte"

	let key = ""
    let name = ""
    let description = ""

    let uploadBtnDisabled = false

    const upload = () => {
        uploadBtnDisabled = true
        console.log("G")
    }
</script>

<section class="flex-col gap-5 w-[40%] m-auto">
	<Input required={true} name="❗❗🔰🔰 Key 🔰🔰❗❗" bind:value={key} placeholder="Input your key" className="w-full mb-4 text-black"/>
    <Input required={true} name="Video name" bind:value={name} placeholder="Don't be silly" className="w-full mb-4 text-black"/>
    <Input required={true} name="Description" bind:value={description} placeholder="I ran out of things to put here" className="w-full mb-4 text-black"/>

    <input class="mb-4" type="file">
    <button class="bg-emerald-600 w-full h-12 rounded-sm drop-shadow-md hover:brightness-75 disabled:brightness-50" disabled={uploadBtnDisabled} on:click={upload}>PRESS THIS FUNNY THING TO UPLOAD LOL,,,</button>
</section>
