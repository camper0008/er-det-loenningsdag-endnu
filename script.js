"use strict";

const lastBankDayOfMonth = (today) => {
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    for (let i = 0; i > -4; i--) {
        const date = new Date(year, month, i);
        const weekday = date.getDay();
        // for some reason it starts at sunday rather than monday, so 0 is sunday and 6 is saturday
        if (weekday !== 0 && weekday !== 6) {
            return date.getDate();
        }
    }
};

const main = () => {
    const today = new Date();
    const daysLeft = lastBankDayOfMonth(today) - today.getDate();
    const isLastDayOfMonth = daysLeft === 0;
    const body = document.querySelector("body");
    const answer = document.querySelector("#answer");
    const count = document.querySelector("#days-left");
    if (isLastDayOfMonth) {
        body.classList.add("yes");
        answer.innerText = "Ja";
    } else {
        body.classList.add("no");
        answer.innerText = "Nej";
        if (daysLeft < 0) {
            count.innerText = "(det har allerede været lønningsdag)";
        } else {
            count.innerText = `(først om ${daysLeft} ${
                daysLeft === 1 ? "dag" : "dage"
            })`;
        }
    }
};

main();
