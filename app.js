
let taskBtn = document.getElementsByClassName('task-btn');
let submitBtn = document.querySelector(".submit-btn");
// console.log(taskBtn);
let taskNumber = document.querySelector('.task-number');
let ratingDiv = document.querySelector('.rating-div');
let thankDiv = document.querySelector('.thank-div')


let number = 0;

for (let i=0; i < taskBtn.length; i++) {
    taskBtn[i].addEventListener('click', () => {
        number = taskBtn[i].id;
        console.log(number);
        taskNumber.textContent = "You selected " + number + " out of 5";
    })
}



submitBtn.addEventListener('click', () => {
    number != 0 && (ratingDiv.classList.add("close"),
    thankDiv.classList.add("active"));
})










