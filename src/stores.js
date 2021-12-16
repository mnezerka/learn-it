import { writable } from 'svelte/store';
import SetMulti100 from "./SetMulti100.js"

var sets_store_initial = [
    { 
        active: true,
        obj: SetMulti100
    }
]


export const sets_store = writable(sets_store_initial);