const gameData = {
  currentChapter: "start",
  inventory: [],
};

const chapters = {
  start: {
    subtitle: "Début",
    img: "./assets/images/schema.png",
    text: "Vous vous réveillez à l'intérieur d'un vieux cryopode rouillé, après avoir quitté la chambre d'égalité décrépite pour trouver une étoile qui monte et descend, et un couloir sombre avec une faible lumière au bout.",
    options: [
      {
        text: "Monter les escaliers",
        action: "upthestairs",
      },
      {
        text: "Descendre les escaliers",
        action: "downthestairs",
      },
      {
        text: "Traversez le couloir",
        action: "thecorridor",
      },
    ],
  },

  downthestairs: {
    subtitle: "GAMEOVER",
    img: "",
    text: "GAMEOVER",

    options: [
      {
        text: "GAMEOVER",
        action: "start",
      },
    ],
  },

  upthestairs: {
    subtitle: "clé",
    img: "",
    text: "Vous trouvez une clé.",

    options: [
      {
        text: "Continuer en haut des escaliers",
        action: "medbayorvents",
      },
    ],
  },

  medbayorvents: {
    subtitle: "Medbay ou bouches d'aération",
    img: "",
    text: "Devant vous se trouve l'ancienne infirmerie et un petit passage par les bouches d'aération.",

    options: [
      {
        text: "Passer par les bouches d'aération",
        action: "vents",
      },
      {
        text: "Passer par le Medbay",
        action: "medbay",
      },
    ],
  },

  medbay: {
    subtitle: "Medbay ou bouches d'aération",
    img: "",
    text: "Après être entré dans l'infirmerie, vous croisez d'innombrables sacs mortuaires, certains marqués, d'autres non. Au bout d'un moment, vous arrivez à un carrefour, avant de pouvoir décider quel chemin prendre, vous entendez au loin un bruit fort de fracas de métal, suivi de pas lents.",

    options: [
      {
        text: "Cacher",
        action: "hide",
      },
      {
        text: "Courez à droite",
        action: "runforward",
      },
    ],
  },

  vents: {
    subtitle: "GAMEOVER",
    img: "",
    text: "GAMEOVER",

    options: [
      {
        text: "GAMEOVER",
        action: "start",
      },
    ],
  },

  hide: {
    subtitle: "GAMEOVER",
    img: "",
    text: "GAMEOVER",

    options: [
      {
        text: "GAMEOVER",
        action: "start",
      },
    ],
  },

  runforward: {
    subtitle: "close call",
    img: "",
    text: "après avoir couru un moment, les pas lointains disparaissent, vous décidez de continuer",

    options: [
      {
        text: "Continuez dans le couloir",
        action: "crowbar",
      },
    ],
  },

  thecorridor: {
    subtitle: "Corridor",
    img: "",
    text: "Après avoir traversé le long couloir, vous arrivez dans une zone lumineuse, avant de vous en rendre compte, toute la station a commencé à trembler. Si vous courez jusqu’au bout du tunnel, allez plus lentement ou préparez-vous.",

    options: [
      {
        text: "Courir",
        action: "run",
      },
      {
        text: "marche doucement",
        action: "runslow",
      },
      {
        text: "Préparez vous",
        action: "brace",
      },
    ],
  },

  run: {
    subtitle: "GAMEOVER",
    img: "",
    text: "GAMEOVER",

    options: [
      {
        text: "GAMEOVER",
        action: "start",
      },
    ],
  },

  brace: {
    subtitle: "Préparez vous",
    img: "",
    text: "Après vous être barricadé et avoir attendu la fin du remembrement de la station, cela se terminera aussi vite qu'il a commencé, vous décidez de continuer vers le bout du couloir.",

    options: [
      {
        text: "Continuez dans le couloir",
        action: "crowbar",
      },
    ],
  },

  crowbar: {
    subtitle: "Vous trouvez un outil",
    img: "",
    text: "En passant devant quelques pièces, vous apercevez un atelier. à l'intérieur vous voyez un vieux pied de biche rouillé, n'ayant aucun outil sous la main vous décidez de le ramasser",

    options: [
      {
        text: "Continuez dans le couloir",
        action: "blueDoor",
      },
    ],
  },

  blueDoor: {
    subtitle: "Vous trouvez une porte",
    img: "",
    text: "vous continuez à marcher jusqu'à ce que vous voyiez une grande porte avec une petite lueur bleue",

    options: [
      {
        text: "try to open it",
        action: "escapepodroom",
      },
    ],
  },

  runslow: {
    subtitle: "Medbay ou bouches d'aération",
    img: "",
    text: "Au lieu de courir dans le couloir, vous marchez prudemment et lentement en évitant les chutes de débris. Le couloir principal est bloqué par des débris incrustés, vous continuez dans un tunnel de service. Après avoir marché un moment, nous aboutissons à un carrefour, un chemin éclairé par un feu rouge et un autre par un feu vert.",

    options: [
      {
        text: "Allez vers le feu rouge",
        action: "redlight",
      },
      {
        text: "Allez vers le feu vert",
        action: "greenlight",
      },
      {
        text: "Décidez de faire demi-tour et de trouver un chemin différent.",
        action: "goback",
      },
    ],
  },

  greenlight: {
    subtitle: "GAMEOVER",
    img: "",
    text: "GAMEOVER",

    options: [
      {
        text: "GAMEOVER",
        action: "start",
      },
    ],
  },

  goback: {
    subtitle: "GAMEOVER",
    img: "",
    text: "GAMEOVER",

    options: [
      {
        text: "GAMEOVER",
        action: "start",
      },
    ],
  },

  redlight: {
    subtitle: "Préparez vous",
    img: "",
    text: "après avoir suivi le feu rouge, une grande porte d'où sort une faible lueur bleue.",

    options: [
      {
        text: "Approchez-vous de la porte",
        action: "escapepodroom",
      },
    ],
  },

  escapepodroom: {
    subtitle: "S'échapper",
    img: "",
    text: "Après avoir ouvert la porte, vous trouvez une pièce remplie de capsules de sauvetage, une seule est opérationnelle. Il est verrouillé, vous aurez donc besoin d'une clé, peut-être d'un outil pour l'ouvrir. Vous pouvez toujours utiliser votre force brute. Ou mieux encore, vous pourriez essayer de le pirater.",

    options: [
      {
        text: "Utilisez la clé que vous avez trouvée plus tôt",
        action: "useatool",
      },
      {
        text: "Utilisez le CrowBar que vous avez trouvé plus tôt",
        action: "useatool",
      },
      {
        text: "le pirater",
        action: "rawhands",
      },
      {
        text: "Essayez de l'ouvrir à mains nues",
        action: "hack",
      },
    ],
  },

  useatool: {
    subtitle: "YOU WIN",
    img: "",
    text: "YOU WIN",

    options: [
      {
        text: "YOU WIN",
        action: "start",
      },
    ],
  },

  rawhands: {
    subtitle: "GAMEOVER",
    img: "",
    text: "GAMEOVER",

    options: [
      {
        text: "GAMEOVER",
        action: "start",
      },
    ],
  },

  hack: {
    subtitle: "GAMEOVER",
    img: "",
    text: "GAMEOVER",

    options: [
      {
        text: "GAMEOVER",
        action: "start",
      },
    ],
  },
};

let foundKey = false;
let foundTool = false;

function displayChapter(chapterKey) {
  const chapter = chapters[chapterKey];
  const storyElement = document.getElementById("story");
  const optionsElement = document.getElementById("options");
  const imageElement = document.getElementById("image");

imageElement.src = chapter.img;

  storyElement.textContent = chapter.text;

  // Clear existing options
  optionsElement.innerHTML = "";

  for (const option of chapter.options) {
    const optionButton = document.createElement("button");
    optionButton.textContent = option.text;
    optionButton.addEventListener("click", () => selectOption(option));
    optionsElement.appendChild(optionButton);
  }
}

function selectOption(option) {
  if (option.action === "treasure") {
    gameData.inventory.push("treasure");
  }

  gameData.currentChapter = option.action;
  displayChapter(gameData.currentChapter);
}

displayChapter("start"); // Initialize the game
