import { writable } from "svelte/store";

export const store = writable({
    theme: "light",
    currentPage:"home",
    pages : [{name: "Home", url:"{base}/"},],
    lessons : [{name: "Lesson 1", url:"{base}/lessons/lesson-1"}],



})
export default store