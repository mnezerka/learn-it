import {get_random_int, shuffle_array} from "../utils.js"

function next() {
    let a = get_random_int(10);
    let b = get_random_int(10);

    // add correct result
    let choices = [a*b];

    // add sum
    choices.push(a + b)

    while (choices.length < 4) {
        console.log('gen')
        let invalid = get_random_int(100);
        if (!choices.includes(invalid))  {
            choices.push(invalid)
        }
    }

    console.log(choices);

    // random order of choices
    shuffle_array(choices);

    return { q: `${a} . ${b} =`, a: a * b, choices}
 }


var set = {
    name: "Multiplication <100",
    question: next
}

export default set