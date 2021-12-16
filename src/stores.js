import { writable } from 'svelte/store';
import SetMulti100 from "./sets/SetMulti100.js"
import SetEnglishColors from "./sets/SetEnglishColors.js"

var sets_store_initial = [
    { 
        active: false,
        obj: SetMulti100
    },
    { 
        active: false,
        obj: SetEnglishColors 
    }

]


export const sets_store = writable(sets_store_initial);