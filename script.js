"use strict";

const lastDayOfMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    // since if day supplied starts at 1, if it is below 1 it begins to overflow.
    // e.g. -3 would yield 27, thus 0 yields the last day of the month
    return new Date(year, month, 0).getDate();
};

const main = () => {
    const today = new Date();
    const isLastDayOfMonth = today.getDate() === lastDayOfMonth(today);
    const body = document.querySelector("body");
    const answer = document.querySelector("#answer");
    if (isLastDayOfMonth) {
        body.classList.add("yes");
        answer.innerText = "Ja";
    } else {
        body.classList.add("no");
        answer.innerText = "Nej";
    }
};

main();
