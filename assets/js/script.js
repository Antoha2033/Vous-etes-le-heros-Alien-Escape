const gameData = {
  currentChapter: localStorage.getItem("currentChapter") || "start",
  inventory: JSON.parse(localStorage.getItem("inventory")) || [],
  twistActivated: localStorage.getItem("twistActivated") === "true" || false,
};

const chapters = {
  start: {
    subtitle: "Début",
    img: "./assets/images/Start.png",
    text: "Vous vous réveillez de la cryopod, sans savoir combien de temps vous avez dormi. Peu importe, car dès que vous appelez à l'aide, vous réalisez que personne ne répond à vos supplications. Lorsque vous sortez de la chambre cryogénique, vous découvrez que les murs et le sol des couloirs sont rouillés et recouverts d'une substance noire et visqueuse. Dans votre quête d'aide, vous avancez jusqu'à apercevoir un couloir et un escalier menant à la fois vers le bas et vers le haut. Maintenant, vous devez décider : où devriez-vous aller ?",
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
    img: "./assets/images/start-1.png",
    video: "./assets/videos/OVER.mp4",
    text: "En descendant les escaliers, vous réalisez rapidement que le passage est plongé dans une obscurité totale. Vous descendez prudemment, craignant à chaque instant le bruit sec d'une structure en acier rouillé. Les vieilles marches cèdent sous votre poids, et vous tombez sans espoir de retour.",

    options: [
      {
        text: "RESTART",
        action: "start",
      },
    ],
  },

  upthestairs: {
    subtitle: "clé",
    img: "./assets/images/key.png",
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
    img: "./assets/images/start-3.png",
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
    img: "./assets/images/5.png",
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
    img: "./assets/images/6.png",
    video: "./assets/videos/OVER.mp4",
    text: "Après être entré dans les vieux conduits, vous continuez à ramper jusqu'à ce que vous entendiez un faible bruit de gémissement devant vous. Avant que vous n'ayez la chance de faire demi-tour, quelque chose avance lentement vers vous.",

    options: [
      {
        text: "GAMEOVER",
        action: "start",
      },
    ],
  },

  hide: {
    subtitle: "GAMEOVER",
    img: "./assets/images/5.png",
    video: "./assets/videos/OVER.mp4",
    text: "Vous vous cachez de ce qui s'approche, vous retenez votre souffle, fermez les yeux. Mais... cela vous a toujours trouvé.",

    options: [
      {
        text: "GAMEOVER",
        action: "start",
      },
    ],
  },

  runforward: {
    subtitle: "close call",
    img: "./assets/images/5.png",
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
    img: "./assets/images/4.png",
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
    img: "./assets/images/4.png",
    video: "./assets/videos/OVER.mp4",
    text: "Vous décidez de courir au lieu de rester immobile, une erreur, peu de temps après avoir commencé à courir, des débris vous tombent dessus.",

    options: [
      {
        text: "GAMEOVER",
        action: "start",
      },
    ],
  },

  brace: {
    subtitle: "Préparez vous",
    img: "./assets/images/4.png",
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
    img: "./assets/images/7.png",
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
    img: "./assets/images/8.png",
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
    img: "./assets/images/4.png",
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
    img: "./assets/images/9.png",
    video: "./assets/videos/OVER.mp4",
    text: "Vous suivez la lumière verte pour trouver une porte verrouillée. Avant que vous ne puissiez rebrousser chemin, la station tremble à nouveau et vous êtes enseveli sous les décombres.",

    options: [
      {
        text: "GAMEOVER",
        action: "start",
      },
    ],
  },

  goback: {
    subtitle: "GAMEOVER",
    img: "./assets/images/11.png",
    video: "./assets/videos/OVER.mp4",
    text: "Vous essayez de retourner d'où vous venez, mais avant de pouvoir revenir en arrière, la station tremble à nouveau, et vous êtes enseveli sous les débris.",

    options: [
      {
        text: "GAMEOVER",
        action: "start",
      },
    ],
  },

  redlight: {
    subtitle: "Préparez vous",
    img: "./assets/images/10.png",
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
    img: "./assets/images/8.png",
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
    img: "./assets/images/13.png",
    video: "./assets/videos/WIN.mp4",
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
    img: "./assets/images/12.png",
    video: "./assets/videos/OVER.mp4",
    text: "Vous essayez d'utiliser vos mains nues, vous frappez et tirez sur la porte, mais le tumulte attire un visiteur, quelque chose de gros et affamé.",

    options: [
      {
        text: "GAMEOVER",
        action: "start",
      },
    ],
  },

  hack: {
    subtitle: "GAMEOVER",
    img: "./assets/images/14.png",
    video: "./assets/videos/OVER.mp4",
    text: "Vous essayez de pirater la console pour ouvrir la porte, mais vous activez une mesure de sécurité. Toutes les sorties se verrouillent derrière vous, et vous êtes piégé.",

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

// Sons
const sound1 = new Audio("./assets/sons/click2.mp3")
const sound2 = new Audio("./assets/sons/ambience.mp3")

function displayChapter(chapterKey) {
  const chapter = chapters[chapterKey];
  const storyElement = document.getElementById("story");
  const optionsElement = document.getElementById("options");
  const mediaWrapper = document.getElementById("media");
  storyElement.textContent = chapter.text;
  mediaWrapper.innerHTML = "";

//Videos
 
if (chapter.video != undefined) {
    const videoElement = document.createElement("video");
    videoElement.autoplay = true;
    videoElement.loop = true;
    videoElement.src = chapter.video;
    mediaWrapper.appendChild(videoElement);
  } else {
    const imageElement = document.createElement("img");
    imageElement.src = chapter.img;
    mediaWrapper.appendChild(imageElement);
  }

 
  optionsElement.innerHTML = "";

for (const option of chapter.options) {
    const optionButton = document.createElement("button");
    optionButton.textContent = option.text;
    optionButton.addEventListener("click", () => selectOption(option));
    sound1.play();
    optionsElement.appendChild(optionButton);
  }

  // Save current state
  localStorage.setItem("currentChapter", gameData.currentChapter);
  localStorage.setItem("inventory", JSON.stringify(gameData.inventory));
  localStorage.setItem("twistActivated", gameData.twistActivated);

// reset game and clear
function resetGame() {
  localStorage.clear();
  gameData.currentChapter = "start";
  gameData.inventory = [];
  gameData.twistActivated = false;
  displayChapter(gameData.currentChapter);
}

// reset button
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetGame);

}

function selectOption(option) {
  if (option.action === "treasure") {
    gameData.inventory.push("treasure");
  }

  gameData.currentChapter = option.action;
  displayChapter(gameData.currentChapter);
}



// Initialize the game
displayChapter(gameData.currentChapter);
