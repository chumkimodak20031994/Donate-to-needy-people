const donationSection = document.getElementById("donation-section");
const historySection = document.getElementById("history-section");
const donationBtn = document.querySelector(".donation-btn");
const historyBtn = document.querySelector(".history-button");

historySection.style.display = "none";
function showDonation() {
  donationSection.style.display = "block";
  historySection.style.display = "none";
  donationBtn.classList.add("active");
  historyBtn.classList.remove("active");
}
function showHistory() {
  donationSection.style.display = "none";
  historySection.style.display = "block";
  historyBtn.classList.add("active");
  donationBtn.classList.remove("active");
}
const donationTabBtn = document.querySelector(".tab-donation");
const historyTabBtn = document.querySelector(".tab-history");
const historyList = document.createElement("ul");
historySection.appendChild(historyList);
donationTabBtn?.addEventListener("click", showDonation);
historyTabBtn?.addEventListener("click", showHistory);
document.querySelectorAll(".donation-section").forEach((card) => {
  const input = card.querySelector(".donation-input");
  const cardBalance = card.querySelector("span");
  const mainBalanceSpan = document.getElementById("donation-amount");
  const titleEl = card.querySelector(".card-title");
  const title = titleEl ? titleEl.textContent.trim() : "Untitled Donation";
  card.querySelector(".donate-btn").addEventListener("click", () => {
    const amount = parseFloat(input.value);
    const currentMainBalance = parseFloat(mainBalanceSpan.textContent);
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid positive number");
      return;
    }

    if (amount > currentMainBalance) {
      alert("You do not have enough balance to make this donation");
      return;
    }

    const currentCardBalance = parseFloat(cardBalance.textContent);
    cardBalance.textContent = `${currentCardBalance + amount} BDT`;

    mainBalanceSpan.textContent = `${currentMainBalance - amount} BDT`;

    const li = document.createElement("li");
    li.innerHTML = `
  <span class="history-title">${amount} Taka is Donated for ${title}</span><br>
  <span class="history-date">Date : ${new Date().toString()}</span>
`;
    historyList.appendChild(li);
  });
});
