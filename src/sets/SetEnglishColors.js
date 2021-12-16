import {get_random_int, shuffle_array} from "../utils.js"

/*
const colors = [
    {name: 'white': '#ffffff'}
    {'black': '#000000',
    'red': '#ff0000',
    'green': '#00ff00',
    'blue': '#0000ff',
]
*/

function next() {
    let c = get_random_int(colors.length);

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
    name: "Barvy - English",
    question: next
}

export default set