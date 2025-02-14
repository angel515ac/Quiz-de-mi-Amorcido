document.addEventListener("DOMContentLoaded", function() {
    const quizForm = document.getElementById("quiz-form");
    const puzzle = document.getElementById("puzzle");
    const message = document.getElementById("message");
    const puzzleAnswer = document.getElementById("puzzle-answer");
    const puzzleSubmit = document.getElementById("puzzle-submit");

    const correctAnswers = {
        q1: "17 de diciembre",
        q2: "Angelito",
        q3: "Dummy",
        q4: "Cualquier respuesta es correcta",
        q5: "Angelito a March"
    };

    quizForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let allCorrect = true;

        Object.keys(correctAnswers).forEach(q => {
            const input = document.getElementById(q);
            const errorMsg = document.getElementById(`error-${q}`);
            
            if (q === "q4") {
                errorMsg.textContent = "✅ ¡Me encanta tu respuesta!";
            } else if (input.value.trim().toLowerCase() !== correctAnswers[q].toLowerCase()) {
                errorMsg.textContent = "❌ ¡Estás mal, tilín! Inténtalo otra vez.";
                allCorrect = false;
            } else {
                errorMsg.textContent = "✅ Correcto!";
            }
        });

        if (allCorrect) {
            quizForm.style.display = "none";
            puzzle.style.display = "block";
        }
    });

    puzzleSubmit.addEventListener("click", function() {
        if (puzzleAnswer.value.trim().toLowerCase() === "beats") {
            puzzle.style.display = "none";
            message.style.display = "block";
        } else {
            document.getElementById("error-puzzle").textContent = "❌ No te rindas, amorcito!";
        }
    });
});
