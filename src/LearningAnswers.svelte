<script>
    export let answers = []
</script>

<div>
    {#each answers as a}
        <div>
            {a.q} {a.user_a}
            {#if a.a != a.user_a}
            {a.a}
            {/if}
        </div>
    {/each}
</div>