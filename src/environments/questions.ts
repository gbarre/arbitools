import { Question } from 'src/app/models/question';

export const questions: Question[] = [
  {
    question: 'Un arbitre fédéral option TAE peut :',
    answers: [
      '[_] Etre responsable d’un concours campagne dans son club',
      'MMM Juger les cordons sur une compétitions Nature/3D',
      '[_] Infliger une sanction dans une compétition Nature/3D',
    ],
  },
  {
    question: "Lors d'une compétition par équipe, le capitaine d'équipe :",
    answers: [
      '[_] Doit être obligatoirement du même club que l’équipe',
      '[_] Peut avoir une licence Découverte',
      'MMM Doit avoir la même tenue que son équipe',
    ],
  },
  {
    question:
      "Un comité régional décide que le jury d'appel n’existera plus pour les championnats régionaux :",
    answers: [
      "MMM Les comités départementaux de cette région peuvent choisir d'en laisser pour leurs championnats départementaux",
      '[_] Les comités départementaux de cette région doivent faire de même pour leurs championnats départementaux',
      "[_] Il n'y a plus de jury d'appel pour les championnats départementaux",
    ],
  },
  {
    question: "Un licencié FFTA peut faire partie d'un jury d'appel :",
    answers: [
      "MMM S'il est entraîneur d’archers lors de cette compétition",
      "[_] S'il est archer lors de cette compétition",
      "[_] S'il est le fils du président de la commission des arbitres",
    ],
  },
  {
    question:
      'Lors d’un concours à 18 mètres en senior 3 (S3) participe à deux départs :',
    answers: [
      'MMM Ses deux scores seront pris en compte pour le classement national',
      '[_] Ses deux scores seront pris en compte pour le classement officiel de la compétition',
      "[_] Il ne pourra bénéficier que d’une seule session d'entraînement avant le premier départ",
    ],
  },
  {
    question: "L'archer, qui a abandonné lors d’un concours sélectif :",
    answers: [
      "[_] N'a droit à aucune récompense",
      '[_] Son score ne sera pas inscrit au classement national',
      "MMM À droit à toutes les récompenses prévues par l'organisateur, en fonction de son score réalisé au moment de l'abandon",
    ],
  },
  {
    question: 'Les PCRA sont nommés :',
    answers: [
      '[_] Parle président de la CNA',
      '[_] Par le président de la FFTA',
      'MMM Selon des critères fixés par la région dont il dépend',
    ],
  },
  {
    question:
      'Pour les U11 en dernière année, qui doit établir le certificat médical de surclassement ?',
    answers: [
      '[_] Tout docteur en médecine',
      'MMM Un médecin agréé par la FFTA',
      '[_] Il ne peut pas être surclassé',
    ],
  },
  {
    question:
      'Un club récemment créé veut organiser une compétition, mais il n’a pas d’arbitre',
    answers: [
      '[_] Il doit attendre d’avoir au moins un arbitre pour pouvoir en organiser une',
      'MMM Il peut en organiser dans les deux premières années de son existence',
      '[_] Il ne peut pas en organiser',
    ],
  },
  {
    question:
      "Lorsque la compétition est interrompue pour cause d'intempéries :",
    answers: [
      "MMM L'organisateur n’a pas à rembourser les mises",
      '[_] Doit prévoir une nouvelle date de compétition gratuite pour les archers présents lors de celle qui a été interrompue',
      "[_] L'organisateur doit rembourser les mises",
    ],
  },
  {
    question: "Une demande de jury d'appel doit être faite dans les :",
    answers: [
      '[_] 30 minutes qui suivent la fin des tirs',
      '[_] 20 minutes qui suivent la fin des tirs',
      'MMM 15 minutes qui suivent la fin des tirs',
    ],
  },
  {
    question:
      'Un mandat (invitation à une compétition) doit obligatoirement comporter entre autres choses :',
    answers: [
      "[_] L'heure de la proclamation des résultats",
      "MMM L'heure de l'ouverture du greffe",
      "[_] Le nom de l'arbitre responsable",
    ],
  },
  {
    question: 'Un jeune arbitre peut :',
    answers: [
      'MMM Arbitrer un concours adulte jusqu’au niveau du championnat départemental',
      '[_] Arbitrer un concours adulte jusqu’au niveau du championnat régional',
      '[_] Etre responsable d’un concours adulte',
    ],
  },
  {
    question:
      'Lors des quarts de finale d’un championnat régional de tir à 18 mètres, les entraîneurs peuvent :',
    answers: [
      '[_] Se tenir près de leurs archers sur la ligne de tir',
      '[_] Accompagner leurs archers aux cibles entre les volées',
      "MMM Se tenir derrière la ligne d'attente",
    ],
  },
  {
    question:
      ': Pour une compétition sélective, quel est le nombre minimum de cibles par départ pour que la compétition soit prise en compte ?',
    answers: ['[_] 6 cibles', 'MMM 8 cibles', '[_] 10 cibles'],
  },
  {
    question:
      "Lors d'une compétition régionale à 18 mètres, en ramassant les feuilles de marque à la fin de la compétition, le greffe s'aperçoit d’un écart de total entre les deux feuilles papier :",
    answers: [
      '[_] Le greffe prend en compte le résultat le plus fort',
      'MMM Le greffe prend en compte le résultat le plus faible',
      '[_] Le greffe fait une moyenne entre les deux résultats',
    ],
  },
  {
    question:
      "Lors d'une compétition régionale à 18 mètres, en ramassant les feuilles de marque à la fin de la compétition, le greffe s'aperçoit d'un écart de total entre la feuille papier et le système électronique qui fait la contremarque :",
    answers: [
      '[_] Le greffe prend en compte le résultat le plus faible',
      'MMM Sil es valeurs de flèches sont bien les mêmes sur les deux systèmes, le greffe prend en compte le résultat du système électronique',
      '[_] Le greffe prend en compte le résultat le plus fort',
    ],
  },
  {
    question:
      "Lors d'un concours sélectif, la participation d’archers extérieurs au club organisateur est :",
    answers: ['[_] Facultative', '[_] Conseillée', 'MMM Obligatoire'],
  },
  {
    question:
      "Lors de l'entrainement durant une compétition à 18 mètres, l'entraineur :",
    answers: [
      'MMM Peut avancer jusqu’à la ligne de tir',
      '[_] Ne peut pas aller aux cibles',
      '[_] Doit rester dans la zone des entraineurs entre la zone de repos des archers et le public',
    ],
  },
  {
    question: "Pour les compétitions dominicales, le jury d'appel :",
    answers: [
      '[_] Est interdit',
      "MMM N'est pas obligatoire",
      '[_] Est obligatoire',
    ],
  },
  {
    question: 'Un archer U11 (poussin) âgé de 9 ans :',
    answers: [
      '[_] Ne peut pas participer à une compétition, il doit attendre 10 ans.',
      '[_] Peut participer à une compétition sans restriction',
      'MMM Peut participer à une compétition à condition que les branches de son arc soient marquées à une puissance inférieure à 18 livres.',
    ],
  },
  {
    question:
      'Un archer qui veut tirer ponctuellement dans une catégorie supérieure à la sienne pour laquelle la distance et la taille des blasons sont identiques :',
    answers: [
      "MMM N'a pas besoin d’un certificat médical de sur-classement",
      '[_] Doit présenter un certificat médical de sur-classement s’il est mineur',
      '[_] Doit présenter un certificat médical de sur-classement quel que soit son âge.',
    ],
  },
  {
    question: "Lors d'une compétition dominicale sélective :",
    answers: [
      '[_] Aucun contrôle anti-dopage n’est possible',
      'MMM Un contrôle anti dopage est possible et peut concerner tous les archers',
      '[_] Un contrôle anti dopage est possible mais uniquement pour les archers sur le podium.',
    ],
  },
  {
    question:
      "Lors d'une épreuve par équipe, un archer refuse de se soumettre au contrôle anti-dopage. Vous lui expliquez qu’ :",
    answers: [
      '[_] Il peut le faire par lui-même à condition de signer une décharge au médecin',
      '[_] Il peut le faire à condition qu’un autre membre de l’équipe se soumette à ce contrôle',
      'MMM 11 ne peut pas le faire et que s’il persiste il sera déclaré positif au contrôle',
    ],
  },
  {
    question: "La vente d'alcool! à la buvette d’une compétition :",
    answers: [
      '[_] Est autorisée aux compétiteurs',
      'MMM Est interdite à tous les compétiteurs jusqu’à la fin de la compétition',
      '[_] Est interdite à tous les compétiteurs même après la fin de la compétition',
    ],
  },
  {
    question:
      'Un archer est considéré comme PARA ARCHER à condition d’avoir été préalablement « classifié ». Cette classification :',
    answers: [
      '[_] Peut être faite par un médecin du sport au choix de l’archer',
      '[_] Peut être faite par un kinésithérapeute du sport au choix de l’archer',
      'MMM Doit être faite par un classificateur préalablement habilité par la FFTA',
    ],
  },
  {
    question:
      "Lors d'une compétition PARA TIR A L’ARC classique à 70 mètres, un PARA ARCHER dispose de :",
    answers: [
      'MMM 4 minutes pour tirer une volée',
      '[_] 5 minutes pour tirer une volée',
      '[_] Ne peut pas tirer, les para archers ne tirent pas à 70 mètres',
    ],
  },
  {
    question:
      'Lors de sa classification un para archer se voit remettre une carte de classification. Sur cette carte il est inscrit :',
    answers: [
      '[_] Uniquement sa reconnaissance en tant que para tir à l’arc',
      "[_] Uniquement sa reconnaissance en tant que para tir à l'arc et la durée pour laquelle l’archer est autorisé à tirer en para tir à l'arc",
      'MMM En complément des deux phrases précédentes on y trouve également la description des aides autorisées pendant le tir',
    ],
  },
  {
    question: 'Un PARA ARCHER en fauteuil roulant :',
    answers: [
      '[_] Ne peut pas faire partie d’une équipe de DR',
      '[_] Peut prendre part à une équipe de DR mais devra respecter la ligne des 1 mètre',
      "MMM Peut prendre part à une équipe de DR et pourra rester sur la ligne de tir et signifiera la fin de son tir à l'arbitre en levant le bras (ou par un autre signe convenu à l’avance)",
    ],
  },
  {
    question: 'Les archers mal voyants :',
    answers: [
      'MMM Sont autorisés à tirer lors des compétitions FFTA',
      "[_] Doivent s'adresser à une autre fédération pour pratiquer le tir à l'arc en compétition",
      '[_] Ne peuvent en aucun cas participer à une compétition officielle',
    ],
  },
  {
    question:
      "Lors des épreuves de Tir Extérieur à 70m, des barrières pour retenir le public doivent être placées de part et d'autre de la ligne de tir à une distance minimale de :",
    answers: ['[_] 15m', '[_] 12m', 'MMM 10m'],
  },
  {
    question:
      'En cas de danger, le Directeur des tirs (DoS) suspend le tir avec :',
    answers: [
      '[_] 2 signaux sonores',
      '[_] 3 signaux sonores',
      'MMM Au moins 5 signaux sonores',
    ],
  },
  {
    question:
      "En Tir 3D, si la pluie rend le terrain glissant au niveau d’une cible et que cela représente un danger de chute. Au niveau de cette cible, l'arbitre responsable doit :",
    answers: [
      '[_] Faire respecter le temps de tir de 20s pour les catégories jeunes et de 30s pour les catégories à partir de S1',
      '[_] Faire respecter le temps de tir pour les catégories jeunes uniquement',
      'MMM Neutraliser le temps de tir sur cette cible',
    ],
  },
  {
    question: "En TAE, une technique d'armement latéral (sur le côté) :",
    answers: [
      "[_] N'est jamais considérée comme dangereuse",
      'MMM Est considérée comme dangereuse car la flèche peut passer au-delà de la zone latérale de sécurité du terrain',
      '[_] Est considérée comme dangereuse uniquement si la flèche peut passer au-dessus des cibles',
    ],
  },
  {
    question:
      'En TAE, après avoir monté son arc, un archer peut l’armer sans flèche :',
    answers: [
      "[_] À l'endroit même où il a monté son arc",
      'MMM Uniquement sur la ligne de tir en direction des cibles, si personne n’est devant la ligne de tir',
      '[_] Uniquement dans la zone de matériel, si personne n’est juste devant lui',
    ],
  },
  {
    question: 'En Tir en Campagne la double marque est obligatoire :',
    answers: [
      '[_] Mais il est possible de remplir la seconde feuille de marque à la fin du parcours',
      '[_] Sauf si une feuille de marque électronique est utilisée',
      'MMM Et doit être complétée à chaque cible sur les deux feuilles de marque',
    ],
  },
  {
    question:
      'Afin de gérer les égalités en Tir 3D, la feuille de marque doit faire apparaître :',
    answers: [
      '[_] Le nombre total de 6 et de 5',
      'MMM Le nombre total de 11 et de 10',
      '[_] Le nombre total de 20 et de 15',
    ],
  },
  {
    question:
      'Afin de gérer les égalités en Tir à 18m, la feuille de marque doit faire apparaître :',
    answers: [
      '[_] Le nombre total de 6 et de 5',
      'MMM Le nombre total de 10 et de 9',
      '[_] Le nombre total de 10 (10 + X) et de 1',
    ],
  },
  {
    question: 'En Tir Beursault :',
    answers: [
      'MMM Une marque provisoire peut avoir lieu à chaque flèche avec une annonce sonore',
      "[_] Il est interdit d'établir une marque provisoire pour ne pas perturber les archers dans leur tir",
      "[_] La marque doit être assurée par les archers au fur et à mesure de leur tir, et ce dès qu'ils arrivent à la butte de tir qu'ils doivent rejoindre immédiatement.",
    ],
  },
  {
    question:
      'En TAE, lors des épreuves de matchs alternés sur les terrains de finales :',
    answers: [
      '[_] Les archers doivent aller marquer leurs scores en cible',
      'MMM Les archers peuvent être représentés à la cible pour marquer leurs scores',
      "[_] Le speaker annonce les scores officiels (définitifs) qui sont saisis par l'arbitre",
    ],
  },
  {
    question:
      "Pendant les phases de qualification d'une épreuve individuelle de TAE (70m), un archer ayant deux flèches à rattraper dispose d’un temps maximal de :",
    answers: ['[_] 60 secondes', 'MMM 80 secondes', '[_] 120 secondes'],
  },
  {
    question:
      'En Beursault, quel est le temps alloué à un archer pour tirer une volée ? :',
    answers: ['MMM 60 secondes', '[_] 80 secondes', '[_] 120 secondes'],
  },
  {
    question:
      'En TAE (70m), quel est le temps alloué à une équipe mixte pour tirer une volée pendant un match en tir simultané ? :',
    answers: ['[_] 60 secondes', 'MMM 80 secondes', '[_] 120 secondes'],
  },
  {
    question:
      'Dans une compétition sélective de Tir en Campagne, quel est le temps alloué à un archer pour tirer une volée ? :',
    answers: ['[_] 1 minute', '[_] 1 minute 30 secondes', 'MMM 3 minutes'],
  },
  {
    question:
      'Dans une compétition sélective de Tir 3D, quel est le temps alloué à un archer pour tirer une volée ? :',
    answers: ['[_] 1 minute', 'MMM 1 minute 30 secondes', '[_] 3 minutes'],
  },
  {
    question: 'En Parcours Nature, la valeur maximale d’une volée est de :',
    answers: ['[_] 22 points', '[_] 30 points', 'MMM 35 points'],
  },
  {
    question: 'En Tir 3D, la valeur maximale d’une volée est de :',
    answers: ['MMM 22 points', '[_] 30 points', '[_] 35 points'],
  },
  {
    question:
      "En Tir à 18m, comment doit-on inscrire sur la feuille de marque la valeur d'une flèche qui se plante hors zone marquante 7? :",
    answers: ['[_] 0', 'MMM M', '[_] X'],
  },
  {
    question:
      "Lors d'une compétition sélective de TAE (70m), sur combien de flèches est établi le classement 7 :",
    answers: ['[_] 40', '[_] 60', 'MMM 72'],
  },
  {
    question:
      'En Tir en Campagne, combien de flèches un archer tire-t-il par cible ? :',
    answers: ['[_] 1', '[_] 2', 'MMM 3'],
  },
];
