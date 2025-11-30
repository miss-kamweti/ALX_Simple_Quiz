function checkAnswer() {
    const correctAnswer = "4";
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    
    if (selectedRadio) {
        const userAnswer = selectedRadio.value;
        const feedbackElement = document.getElementById('feedback');
        
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red";
        }
    } else {
        const feedbackElement = document.getElementById('feedback');
        feedbackElement.textContent = "Please select an answer!";
        feedbackElement.style.color = "orange";
    }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);