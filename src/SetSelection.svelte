<script>
    import {sets_store} from "./stores.js"

    let sets = []

    sets_store.subscribe(value => {
        sets = value
	});

    $: sets_store.update(v => sets)

</script>

<div>
    {#each sets as set}
        <label><input type=checkbox bind:checked={set.active} /> {set.obj.name}</label>
    {/each}

</div>