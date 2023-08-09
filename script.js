document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("grades-form");
    const scoreInputs = document.querySelectorAll(".score");
    const resultElement = document.getElementById("result");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const scores = [];
      scoreInputs.forEach(input => {
        const score = parseInt(input.value);
        if (!isNaN(score) && score >= 0 && score <= 100) {
          scores.push(score);
        }
      });
  
      if (scores.length !== 5) {
        resultElement.textContent = "Please enter valid scores for all 5 subjects.";
        return;
      }
  
      const average = scores.reduce((total, score) => total + score, 0) / scores.length;
  
      let grade = "";
  
      if (average >= 90) {
        grade = "A";
      } else if (average >= 80) {
        grade = "B";
      } else if (average >= 70) {
        grade = "C";
      } else if (average >= 60) {
        grade = "D";
      } else {
        grade = "F";
      }
  
      resultElement.textContent = `Your average score is ${average.toFixed(2)}, and your grade is: ${grade}`;
    });
  });
  