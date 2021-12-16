<script>
    import LearningAnswers from "./LearningAnswers.svelte"
    import {sets_store} from "./stores.js"
    import {get_random_int, hash} from "./utils.js"
    import {t} from "./i18n";

    let sets = []
    let answers_wrong = []
    let answers_correct = []
    let show_answers = false

    sets_store.subscribe(value => {
        sets = value
	});

    let active_sets = []
    $: active_sets = sets.filter((set) => set.active);

    let question
    let answers = [] 
    let answered = false

    // generate new question
    function get_question() {
        let random_set_id = get_random_int(active_sets.length);
        let random_set = active_sets[random_set_id]
        question = random_set.obj.question()
        answers = []
        answered = false
    }

    $: if (active_sets.length > 0) {
        get_question()
    }

    // store all question to be able to list all answers
    function store_question(arr, q, answer) {

        // look for item by question and answer
        let exists = arr.find(el => el.q == q.q && el.user_a == answer)

        if (!exists) {
            arr.push({
                q: q.q,
                a: q.a,
                user_a: answer 
            })
        }

        return arr
    }

    function on_answer(answer) {

        // remember current tip
        if (!answers.includes(answer)) {
            answers = [...answers, answer];
        }

        // if this is a first tip
        if (!answered) {
            answered = answer == question.a;
        }

        // remember both positive and negative answers
        if (answer == question.a) {
            if (!answers_correct.includes(question.q)) {
                answers_correct = store_question(answers_correct, question, answer)
            }
        } else {
            if (!answers_wrong.includes(question.q)) {
                answers_wrong = store_question(answers_wrong, question, answer)
            }
        }

    }

    function on_next() {
        get_question()
    }

</script>

{#if question}
<div class="question block">
    <div class="question-text">{question.q}</div>
    <div class="question-answer">
        {#if question.choices}
            {#each question.choices as choice}
                <div class="question-choice">
                    <button
                        class:ok={answers.length > 0 && answers.includes(choice) && choice == question.a}
                        class:fail={answers.length > 0 && answers.includes(choice) && choice != question.a}
                        on:click={() => on_answer(choice)}>{choice}</button>
                </div>
            {/each}
        {:else}
            <input type="text" />
        {/if}
    </div>

    <div class="question-next">
        <button class="next" disabled={!answered} on:click={() => on_next()}>{$t("nav.next")}</button>
    </div>

</div>
{/if}


<div class="answers block">
    <div class="summary">
        <div class="correct">{$t("answer.correct")}: {answers_correct.length}</div>
        <div class="wrong">{$t("answer.wrong")}: {answers_wrong.length}</div>
    </div>

    <label>
	    <input type=checkbox bind:checked={show_answers}>
        {$t("answers.show")}
    </label>

    {#if show_answers}
        <LearningAnswers answers={answers_wrong} />
    {/if}


</div>

<style>
    .block {
        margin: 20px;
    }
    .question {
        font-size: 2em;
    }

    .question-text {
        margin: 20px;
    }

    .question-choice {
        display: inline-block;
        padding: 20px;
    }

    .question-choice button.ok {
        background-color: #aaffaa;
    }

    .question-choice button.fail {
        background-color: #ffaaaa;
    }

    .question-next button:enabled {
        background-color: #aaffaa;
    }

    .answers .summary {
        font-size: 18px;
        margin-bottom: 20px;
    }

    .answers .summary div {
        padding: 5px;
    }
    .answers .correct {
        color: #00cc00;
    }

    .answers .wrong {
        color: #cc0000;
    }

</style>
