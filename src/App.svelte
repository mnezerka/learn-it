<script>
    import SetSelection from "./SetSelection.svelte"
    import Learning from "./Learning.svelte"
    import Navbar from "./Navbar.svelte"
    import {sets_store} from "./stores.js"
    import {t} from "./i18n";

    var sets = [];

    sets_store.subscribe(value => {
        sets = value
	});

    var active_sets = []

    $: active_sets = sets.filter((set) => set.active);

    let learning = false;

    /*
    $: if (active_sets.length > 0) {
        learning = true;
    }
    */

    function on_start() {
        learning = true;
    }

    function on_stop() {
        learning = false;
    }

</script>

<Navbar/>

<main>

    {#if !learning}
        <h3>Select set</h3>
        <SetSelection />
        <button on:click|once={on_start} disabled={active_sets.length === 0}>Start</button>
    {:else}
        <Learning />
        <button on:click|once={on_stop}>{$t("nav.end")}</button>
    {/if}

</main>

<style>
	main {
        text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>