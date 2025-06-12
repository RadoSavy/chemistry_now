// Sticky navbar on scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("bg-black", "shadow-md");
  } else {
    navbar.classList.remove("bg-black", "shadow-md");
  }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Header fade-in animation
document.addEventListener("DOMContentLoaded", () => {
  const h2 = document.querySelector("header h2");
  const p = document.querySelector("header p");

  h2.style.opacity = 0;
  p.style.opacity = 0;

  setTimeout(() => {
    h2.style.transition = "opacity 1s ease-out, transform 1s ease-out";
    p.style.transition = "opacity 1.2s ease-out, transform 1.2s ease-out";
    h2.style.opacity = 1;
    h2.style.transform = "translateY(0)";
    p.style.opacity = 1;
    p.style.transform = "translateY(0)";
  }, 300);
});

// Modal with metal facts
const modal = document.createElement("div");
modal.id = "factModal";
modal.innerHTML = `
  <div style="position:fixed;top:0;left:0;width:100%;height:100%;background:#000000aa;display:flex;align-items:center;justify-content:center;z-index:1000;">
    <div style="background:white;padding:20px;max-width:400px;border-radius:10px;text-align:center;">
      <h3>📘 Факт за металите</h3>
      <p id="factText">Металите могат да се рециклират безкрайно без да губят качеството си!</p>
      <button id="closeModal">Затвори</button>
    </div>
  </div>
`;
modal.style.display = "none";
document.body.appendChild(modal);

document.getElementById("closeModal").onclick = () => {
  modal.style.display = "none";
};

function showFact(fact) {
  document.getElementById("factText").innerText = fact;
  modal.style.display = "flex";
}

// Example call:
document.getElementById("showFactBtn")?.addEventListener("click", () => {
  const facts = [
    "Алуминиевите кенове се рециклират за по-малко от 60 дни.",
    "Рециклираният метал използва 95% по-малко енергия от новия.",
    "Медта е 100% рециклируема и няма загуба на свойства.",
    "Металният отпадък е най-ценният вид отпадък.",
    "Рециклирането на една тостер пести енергия колкото за 30 минути телевизия.",
  ];
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  showFact(randomFact);
});

// Counter animation
function animateCounter(id, target) {
  let count = 0;
  const el = document.getElementById(id);
  const interval = setInterval(() => {
    count += Math.ceil(target / 100);
    if (count >= target) {
      count = target;
      clearInterval(interval);
    }
    el.innerText = count;
  }, 30);
}

document.addEventListener("DOMContentLoaded", () => {
  animateCounter("canCount", 1240);
});

// Scroll reveal animation
function revealOnScroll() {
  document.querySelectorAll(".reveal").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("opacity-100", "translate-y-0");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Keyboard shortcut (press 'R' for random fact)
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "r") {
    const facts = [
      "Стоманата се рециклира най-много от всички материали.",
      "Алуминият може да бъде преработен безкрайно.",
    ];
    showFact(facts[Math.floor(Math.random() * facts.length)]);
  }
});

// Quiz Game
const quizQuestions = [
  {
    question: "Кой метал се използва най-често при кеновете?",
    answers: ["Желязо", "Мед", "Алуминий", "Цинк"],
    correct: 2,
  },
  {
    question: "Кой от следните е полза от рециклирането?",
    answers: ["Повече отпадък", "Пести енергия", "Загуба на ресурси", "Повече замърсяване"],
    correct: 1,
  },
];

let currentQuestion = 0;

function showQuestion() {
  const q = quizQuestions[currentQuestion];
  const quizBox = document.getElementById("quizBox");
  quizBox.innerHTML = `
    <h4>${q.question}</h4>
    ${q.answers
      .map(
        (ans, i) =>
          `<button onclick="checkAnswer(${i})" style="margin: 5px">${ans}</button>`
      )
      .join("")}
  `;
}

function checkAnswer(index) {
  const q = quizQuestions[currentQuestion];
  if (index === q.correct) {
    alert("✅ Вярно!");
  } else {
    alert("❌ Грешка!");
  }
  currentQuestion = (currentQuestion + 1) % quizQuestions.length;
  showQuestion();
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("quizBox")) {
    showQuestion();
  }
});

// Easter Egg – Console
console.log("%cРециклирай умно – бъдещето е твое!", "color: green; font-size: 18px;");

// Typing Effect (optional, fun)
function typeEffect(element, text, speed = 100) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

document.addEventListener("DOMContentLoaded", () => {
  const typeTarget = document.getElementById("typingHeader");
  if (typeTarget) {
    typeEffect(typeTarget, "Рециклирай. Пести. Побеждавай.");
  }
});