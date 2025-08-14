function toggleQA() {
  const donationSection = document.getElementById("donation-section");
  const historySection = document.getElementById("history-section");

  if (donationSection) {
    donationSection.style.display = "none";
  }
  if (historySection) {
    historySection.style.display = "none";
  }

  const buttonSection = document.querySelector(".button-section");
  if (buttonSection) {
    buttonSection.style.display = "none";
  }

  document.getElementById("qa-section").style.display = "block";
}
function toggleAnswer(element) {
  let answer = element.nextElementSibling;
  let arrow = element.querySelector(".arrow");
  if (answer.style.display === "block") {
    answer.style.display = "none";
    arrow.classList.remove("rotate");
  } else {
    answer.style.display = "block";
    arrow.classList.add("rotate");
  }
}
