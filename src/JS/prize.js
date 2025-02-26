const prizes = [
  {
    image: "first.png",
    name: "First Prize",
    Total: "$1,900",
    Cash: "₹10,000",
    KnowMore: [
      "InterviewBuddy: Mock Interview, discount Vouchers for all.",
      "Free Mock Interview Sessions with DCornerr to all winners.",
      "Echo3D: One Month free access to pro tier worth $99",
      ".XYZ: Domain Name for One Year worth ₹165.",
      "InterviewCake: Full access licences worth $249.",
      "DCornerr: Rs. 1000 discount on DCornerr DSA course",
      "Exclusive Swag kits.",
    ],
  },
  {
    image: "second.png",
    name: "Second Prize",
    Total: "$1,845",
    Cash: "₹5,000",
    KnowMore: [
      "InterviewBuddy: Mock Interview, discount Vouchers for all.",
      "Free Mock Interview Sessions with DCornerr to all winners.",
      "Echo3D: One Month free access to pro tier worth $99",
      ".XYZ: Domain Name for One Year worth ₹165.",
      "InterviewCake: Full access licences worth $249.",
      "DCornerr: Rs. 1000 discount on DCornerr DSA course",
      "Exclusive Swag kits.",
    ],
  },
  {
    image: "third.png",
    name: "Third Prize",
    Total: "$1,810",
    Cash: "₹3,000",
    KnowMore: [
      "InterviewBuddy: Mock Interview, discount Vouchers for all.",
      "Free Mock Interview Sessions with DCornerr to all winners.",
      "Echo3D: One Month free access to pro tier worth $99",
      ".XYZ: Domain Name for One Year worth ₹165.",
      "InterviewCake: Full access licences worth $249.",
      "DCornerr: Rs. 1000 discount on DCornerr DSA course",
      "Exclusive Swag kits.",
    ],
  },
];

function openModal(index) {
  const prize = prizes[index];
  document.getElementById("modal-title").textContent = prize.name;
  document.getElementById("modal-content").innerHTML = prize.KnowMore.map(
    (item) => `<li>${item}</li>`
  ).join("");
  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

const container = document.getElementById("prize-container");
prizes.forEach((prize, index) => {
  const prizeBox = document.createElement("div");
  prizeBox.className =
    "w-[90%] lg:w-[28%] bg-gray-200 rounded-2xl shadow-lg p-5 text-center flex flex-col items-center";
  prizeBox.innerHTML = `
                <img src="images/${prize.image}" class="w-40 h-40 rounded-full border-4 border-gray-500 -mt-20" />
                <h3 class="text-3xl font-bold mt-4">${prize.name}</h3>
                <p class="mt-2">Total Prize Worth: ${prize.Total}</p>
                <p class="mt-2">Cash Prize Worth: ${prize.Cash}</p>
                <button onclick="openModal(${index})" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Know More</button>
            `;
  container.appendChild(prizeBox);
});
