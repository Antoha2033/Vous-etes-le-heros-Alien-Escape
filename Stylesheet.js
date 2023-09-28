// Define the starting point and initialize the game
let currentRoom = "start";
let inventory = [];

// Define the game map
const gameMap = {
  start: {
    description: "You are in a dark room. There is a door to the north.",
    options: {
      north: "bedroom",
    },
  },
  bedroom: {
    description: "You are in a cozy bedroom. There is a window to the east and a chest to the south.",
    options: {
      east: "garden",
      south: "start",
      open: "chest",
    },
  },
  garden: {
    description: "You are in a beautiful garden with colorful flowers.",
    options: {
      west: "bedroom",
    },
  },
  chest: {
    description: "You opened the chest and found a key!",
    options: {},
  },
};

// Function to display the current room's description
function displayRoom() {
  const room = gameMap[currentRoom];
  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = room.description;
  document.body.appendChild(descriptionElement);

  if (inventory.includes("key")) {
    const winMessage = document.createElement("p");
    winMessage.textContent = "Congratulations! You found the key and won the game!";
    document.body.appendChild(winMessage);
    document.body.removeChild(descriptionElement);
  }
}

// Function to handle player input
function handleInput() {
  const input = prompt("What do you want to do?");
  const room = gameMap[currentRoom];

  if (room.options[input]) {
    currentRoom = room.options[input];
    document.body.innerHTML = "";
    displayRoom();
  } else {
    alert("Invalid choice. Try again.");
  }
}

// Start the game
displayRoom();
while (!inventory.includes("key")) {
  handleInput();
}