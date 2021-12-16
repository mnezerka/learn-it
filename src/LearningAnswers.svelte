<script>
    import {t} from "./i18n";

    export let answers = []
</script>

<table>
    <thead>
        <tr>
            <th>{$t("question")}</th>
            <th>{$t("answer")}</th>
            <th>{$t("answer.correct")}</th>
        </tr>
    </thead>
    <tbody>
        {#each answers as a}
            <tr>
                <td>{a.q}</td>
                <td class:wrong={a.a != a.user_a} class:correct={a.a == a.user_a}>
                    {a.user_a}
                </td>
                <td class="correct">{a.a}</td>
            </tr>
        {/each}
    </tbody>
</table>

<style>
    table {
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
        border-collapse: collapse;
    }

    thead tr {
        border-bottom: 1px solid #999;
    }

    th, td {
        padding: 0px 10px 0px 10px;
    }
    th {
        font-weight: normal;
        font-style: italic;
    }

    .wrong {
        color: #cc0000;
    }
    .correct{
        color: #00cc00;
    }

</style>