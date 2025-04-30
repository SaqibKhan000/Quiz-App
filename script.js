const quizQuestions = [
    {
        question: "Which law states inertia of motion?",
        options: ["First law", "Second law", "Third law", "Zeroth law"],
        answer: "First law"
    },
    {
        question: "The dimensional formula for force is:",
        options: ["[MLT^-2]", "[ML^2T^-2]", "[MLT^-1]", "[M^2LT^-2]"],
        answer: "[MLT^-2]"
    },
    {
        question: "Which of the following is not a unit of energy?",
        options: ["Joule", "Electronvolt", "Watt-hour", "Newton"],
        answer: "Newton"
    },
    {
        question: "The area under a velocity-time graph represents:",
        options: ["Velocity", "Acceleration", "Displacement", "Jerk"],
        answer: "Displacement"
    },
    {
        question: "When a body is in non-uniform circular motion, it has:",
        options: ["Only centripetal acceleration", "Only tangential acceleration", "Both accelerations", "No acceleration"],
        answer: "Both accelerations"
    },
    {
        question: "In projectile motion, horizontal acceleration is:",
        options: ["g", "0", "-g", "depends on angle"],
        answer: "0"
    },
    {
        question: "What is the angle between velocity and acceleration at the highest point in projectile motion?",
        options: ["0°", "45°", "90°", "180°"],
        answer: "90°"
    },
    {
        question: "Which law is the basis of the principle of conservation of momentum?",
        options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Kepler's Law"],
        answer: "Newton's Third Law"
    },
    {
        question: "Work done in uniform circular motion is:",
        options: ["Maximum", "Zero", "Constant", "Variable"],
        answer: "Zero"
    },
    {
        question: "Escape velocity depends on:",
        options: ["Mass of body", "Acceleration", "Height", "Mass and radius of planet"],
        answer: "Mass and radius of planet"
    },
    {
        question: "Which quantity remains conserved in an elastic collision?",
        options: ["Only momentum", "Only kinetic energy", "Both momentum and kinetic energy", "Only mechanical energy"],
        answer: "Both momentum and kinetic energy"
    },
    {
        question: "For a satellite in circular orbit, total energy is:",
        options: ["Positive", "Negative", "Zero", "Infinite"],
        answer: "Negative"
    },
    {
        question: "Which graph correctly represents Hooke’s Law?",
        options: ["Stress vs strain (linear)", "Force vs displacement (non-linear)", "Force vs velocity (linear)", "Strain vs time (exponential)"],
        answer: "Stress vs strain (linear)"
    },
    {
        question: "The Young’s modulus is defined for:",
        options: ["Shear", "Bulk", "Tensile", "Compressive"],
        answer: "Tensile"
    },
    {
        question: "A body is dropped from a height. Its potential energy is converted into:",
        options: ["Mass", "Power", "Kinetic energy", "Work"],
        answer: "Kinetic energy"
    },
    {
        question: "In SHM, the acceleration is proportional to:",
        options: ["Displacement", "Velocity", "Time", "Square of displacement"],
        answer: "Displacement"
    },
    {
        question: "The time period of a simple pendulum depends on:",
        options: ["Mass and length", "Length and gravity", "Amplitude", "None"],
        answer: "Length and gravity"
    },
    {
        question: "The value of bulk modulus for a perfectly rigid body is:",
        options: ["0", "1", "∞", "Negative"],
        answer: "∞"
    },
    {
        question: "Terminal velocity depends on:",
        options: ["Viscosity", "Density difference", "Radius of body", "All of these"],
        answer: "All of these"
    },
    {
        question: "The heat required to raise the temperature of a unit mass by 1°C is called:",
        options: ["Heat capacity", "Latent heat", "Specific heat", "Thermal energy"],
        answer: "Specific heat"
    }
];


let hearts = ['<i class="fa-solid fa-heart"></i>', '<i class="fa-solid fa-heart"></i>', '<i class="fa-solid fa-heart"></i>', '<i class="fa-solid fa-heart"></i>', '<i class="fa-solid fa-heart"></i>'];

let h3 = document.querySelector("h3");
let buttons = document.querySelectorAll("button");
let scoreNum = document.querySelector("h6");
let quesCount = document.querySelector(".quesCount");
let icons = document.querySelector(".icon");
let score = 0;
let count = 0;

function showQuestion() {
    if (count >= quizQuestions.length) {
        alert("Your quiz Completed successfully 🎉🎉 and you got ✨" + score + "/20" + "✨ scores");
        return;
    }
    h3.innerText = quizQuestions[count].question;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerText = quizQuestions[count].options[i];
    }
}


function check(myOption) {
    let correctAnswer = quizQuestions[count].answer;


    if (myOption.innerText == quizQuestions[count].answer) {
        myOption.style.background = "green";
        score++;
        scoreNum.innerText = "Score: " + (score);
    } else {
        myOption.style.background = "red";
        hearts.pop();
        icons.innerHTML = hearts.join("");
        let heartIcons = icons.querySelectorAll("i");
        heartIcons.forEach(icon => {
            icon.classList.add("animate-shake");
            setTimeout(() => {
                icon.classList.remove("animate-shake");
            }, 500);
        });
        if (hearts.length === 0) {
            alert("Game Over😌! you got " + score + "/ 20 Scores.");
            buttons.forEach(btn => {
                btn.disabled = true;
                btn.style.background = "transparent";
            });
            return;
        }
        buttons.forEach(btn => {
            btn.disabled = true;
            if (btn.innerText === correctAnswer) {
                btn.style.background = "green";
            }
        });
    }


    setTimeout(() => {

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.background = "transparent";
            buttons[i].disabled = false;

        }

        count++;
        showQuestion();
        quesCount.innerText = count + 1 <= quizQuestions.length ? count + 1 : quizQuestions.length;
    }, 1000);
}

onload = function () {
    showQuestion();
    icons.innerHTML = hearts.join("");;
};