

let chapterObj = {

  
  
  START: {
      subtitle:"Début",
      img:"",
      text:"Vous vous réveillez à l'intérieur d'un vieux cryopode rouillé, après avoir quitté la chambre d'égalité décrépite pour trouver une étoile qui monte et descend, et un couloir sombre avec une faible lumière au bout.",
      options:[{
        text:"Monter les escaliers",
        action:"goToChapter('Upthestairs')",
    }, {
        text:"Descendre les escaliers",
        action:"goToChapter('Downthestairs')",
    }, {
        text:"Traversez le couloir",
        action:"goToChapter('TheCorridor')",
      }],
  },
  
  
  
  Downthestairs:{
      subtitle:"GAMEOVER",
      img:"",
      text:"GAMEOVER",
      
      options:[{
        text:"GAMEOVER",
        action:"goToChapter('START')",
      }],
  },
  
  
  
  Upthestairs: {
      subtitle:"clé",
      img:"",
      text:"Vous trouvez une clé. Devant vous se trouve l'ancienne infirmerie et un petit passage par les bouches d'aération.",
    
      options:[{
        text:"Passer par les bouches d'aération",
        action:"goToChapter('Vents')",
    }, {
        text:"Passer par le Medbay",
        action:"goToChapter('Medbay')",
      }],
  },
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  Upthestairs: {
    subtitle:"clé",
    img:"",
    text:"Vous trouvez une clé. Devant vous se trouve l'ancienne infirmerie et un petit passage par les bouches d'aération.",
  
    options:[{
      text:"Passer par les bouches d'aération",
      action:"goToChapter('Vents')",
  }, {
      text:"Passer par le Medbay",
      action:"goToChapter('Medbay')",
    }],
},
  
  
  
 
















AttaqueHache: {
      subtitle:"Combat d'envergure",
      img:"assets/video/combatUnContreUn.gif",
      text:"L'ours s'est énervé et votre hache n'a pas suffit à gagner votre combat. Vous êtes mort.",
      options:[{
          text:"Recommencez pour trouvez d'autres fins",
          action:"goToChapter('START')"
      }],
  },
  OffrirVin: {
      subtitle:"Une offre à ne pas refuser",
      img:"assets/img/VinOurs.jpg",
      text:"L'ours, quoique surpris, accepte l'offre et vous apprenez à vous connaître. L'ours semble bien vous apprécier et il vous a obligé de continuer votre RoadTrip avec lui.",
      options:[{
          text:"Continuer le RoadTrip avec l'ours",
          action:"goToChapter('OursRoadTrip')"
      }],
  },
  OursRoadTrip: {
      subtitle:"Un dangé pour votre ami",
      img:"assets/img/chasseur.jpg",
      text:"En continuant votre RoadTrip avec l'ours, vous apercevez au loin une cabane de chasseur qui semble habité. Impossible de passer innaperçu sans leurs attirer l'attention.",
      options:[{
          text:"Essayez de sauver l'ours",
          action: "AvoirVin('SauveOurs')",
          
      }, {
          text:"Essayez dans profiter pour se débarasser de l'ours",
          action:"goToChapter('NuireOurs')"
      }, {
          text:"Proposez du vin au chasseur",
          action:"checkvin()"
      }],
  },
  SauveOurs: {
      subtitle:"Tentative de sauvetage",
      img:"assets/img/OursDeguise.jpg",
      text:"Déguiser l'ours comme votre compagne à fonctionné! En continuant le Road Trip ensemble, vous avez trouvé encore plus de vin et puisque l'ours a bien aimer votre vin. Il décide donc de vous tuer pour en avoir plus pour lui. MORT",
      options:[{
          text:"Essayez de trouver d'autres fins. (VOUS AVEZ TROUVEZ (+) DE VINS! UTILE POUR UNE FIN CACHÉE)",
          action:"goToChapter('START')"
      }],
  },
  NuireOurs: {
      subtitle:"Adieu ours! Où plûtot adieu à vous!",
      img:"assets/video/PeurChasseur.gif",
      text:"Vous attirez l'attention des chasseurs, C'est votre RoadTrip en solo après tout ! Mais il semblerait que avoir crier a fait peur aux chasseurs. Vous avez reçu une balle de fusil de chasse. MORT",
      options:[{
          text:"Réessayez pour trouver d'autres fins",
          action:"goToChapter('START')"
      }],
  },
  LOCKVinChasseur: {
      subtitle:"Fin secrète",
      img:"assets/img/MeilleurFin.jpg",
      text:"Vous êtes rendu un groupe à faire le Road Trip. L'ours s'entend super bien avec les chasseurs. Vous decidez de vivre tous ensemble puisque vous vous entendez bien autour d'une bonne bouteille de vin! FIN!",
      options:[{
          text:"Vous avez trouvé la meilleure fin mais vous pouvez toutefois recommencer et trouver les autres fins!",
          action:"goToChapter('START')"
      }],
  }}
  



  function goToChapter(chapter) {
    //Si le chapitre existe
    //    On affiche avec console.log() son titre, sa description et ses boutons (clés)
    //Sinon
    //    Afficher un message d'erreur
}