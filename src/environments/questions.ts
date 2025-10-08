import { Question } from 'src/app/models/question.model';

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
      'Lors d’un concours à 18 mètres, un senior 3 (S3) participe à deux départs :',
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
      '[_] Arbitrer un concours adulte jusqu’au niveau du championnat départemental',
      'MMM Arbitrer un concours adulte jusqu’au niveau du championnat régional',
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
      'Pour une compétition sélective, quel est le nombre minimum de cibles par départ pour que la compétition soit prise en compte ?',
    answers: ['MMM 6 cibles', '[_] 8 cibles', '[_] 10 cibles'],
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
      'MMM Si les valeurs de flèches sont bien les mêmes sur les deux systèmes, le greffe prend en compte le résultat du système électronique',
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
      'MMM Il ne peut pas le faire et que s’il persiste il sera déclaré positif au contrôle',
    ],
  },
  {
    question: "La vente d'alcool à la buvette d’une compétition :",
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
      "Lors d'une compétition sélective de TAE (70m), sur combien de flèches est établi le classement :",
    answers: ['[_] 40', '[_] 60', 'MMM 72'],
  },
  {
    question:
      'En Tir en Campagne, combien de flèches un archer tire-t-il par cible ? :',
    answers: ['[_] 1', '[_] 2', 'MMM 3'],
  },
  {
    question:
      "Un club peut demander l'inscription d’une compétition au calendrier officiel de la FFTA :",
    answers: [
      "[_] S'il a au moins un entraîneur dans son club",
      "[_] S'il a un arbitre actif dans l’option de la compétition demandée",
      "MMM S'il a un arbitre jeune actif au sein de son club",
    ],
  },
  {
    question:
      'En TAE, vous constatez qu’un archer annonce des points plus élevés que les valeurs des flèches en cible :',
    answers: [
      "[_] Vous ne pouvez intervenir qu’à la demande d'un autre archer",
      'MMM Vous intervenez',
      '[_] Vous ne faites rien',
    ],
  },
  {
    question: 'Parmi ces réponses, laquelle n’est pas une mission de la CNA :',
    answers: [
      'MMM Proposer des règlements sportifs pour le livre des règlements sportifs et arbitrage',
      '[_] Assurer la formation des PCRA et des formateurs',
      '[_] Concevoir les examens d’arbitres',
    ],
  },
  {
    question: "Ne peut pas faire partie d’un jury d'appel :",
    answers: [
      "[_] Le papa (lui-même licencié à la FFTA) d'un jeune archer tirant lors de la compétition",
      'MMM Un archer de la compétition',
      '[_] Un capitaine d’equipe',
    ],
  },
  {
    question: "Quel statut d’arbitres n'existe pas ?",
    answers: ['[_] Actif', 'MMM Repos', '[_] Retrait'],
  },
  {
    question:
      'À partir de quel âge, un jeune peut-il commencer la formation Jeune Arbitre ?',
    answers: ['[_] 13 ans', 'MMM 14 ans', '[_] 15 ans'],
  },
  {
    question:
      'Qui est habilité à signer les qualifications et récolter les demandes de distinctions internationales ?',
    answers: [
      '[_] Tout arbitre de la compétition',
      "MMM L'arbitre responsable de la compétition",
      '[_] Uniquement le PCRA du lieu de la compétition',
    ],
  },
  {
    question: 'Dans un championnat de France par équipe de club :',
    answers: [
      'MMM Il peut y avoir un archer étranger dans l’équipe',
      "[_] Il n'y a pas de limite au nombre d’archers étrangers dans l’équipe",
      '[_] Il ne peut pas y avoir d’archer étranger dans l’équipe',
    ],
  },
  {
    question:
      'Pour les U11, qui doit établir le certificat médical de surclassement en dernière année ?',
    answers: [
      '[_] Tout docteur en médecine',
      'MMM Un médecin agréé FFTA',
      '[_] Ne peut pas être surclassé',
    ],
  },
  {
    question: "La validité de la licence s'étend sur la période :",
    answers: [
      'MMM Du 1er septembre au 31 août de l’année suivante',
      '[_] Du 15 octobre au 14 octobre de l’année suivante',
      '[_] Du 15 septembre au 14 septembre de l’année suivante',
    ],
  },
  {
    question:
      'Lors d’une compétition dominicale sélective la participation d’archers licenciés d’un autre club est :',
    answers: ['[_] Facultative', '[_] Conseillée', 'MMM Obligatoire'],
  },
  {
    question:
      "Lors de l'attribution des cibles lors d’une compétition sélective :",
    answers: [
      '[_] Ne pas placer plus d’un tireur du même club sur une même cible',
      'MMM Ne pas placer plus de 2 tireurs du même club sur une même cible',
      '[_] Ne pas placer plus de 3 tireurs du même club sur une même cible',
    ],
  },
  {
    question:
      "Pour toutes les disciplines individuelles et par équipe, les entraineurs ou capitaines d'équipes doivent :",
    answers: [
      '[_] Etre titulaires d’une licence du club dont ils encadrent le ou les archers',
      'MMM Etre titulaires d’une licence d’un autre club',
      "[_] N'ont pas besoin d'être licenciés",
    ],
  },
  {
    question:
      'Si un arbitre désigné pour arbitrer une compétition dominicale sélective a un empêchement pour y participer :',
    answers: [
      'MMM Il doit trouver lui-même un remplaçant',
      '[_] N’a rien à faire, le concours se déroulera sans lui',
      '[_] Laisse au PCRA de sa région le soin de trouver un remplaçant',
    ],
  },
  {
    question:
      'Un archer qui a 42 ans en 2023 sera classé sur sa licence 2023 en :',
    answers: ['[_] S1', 'MMM S2', '[_] S3'],
  },
  {
    question:
      'Pour pouvoir reprendre son activité après une interruption de 2 ans, un arbitre fédéral doit :',
    answers: [
      '[_] Repasser le tronc commun,',
      "[_] Suivre le cycle complet de formation d'Arbitre Fédéral avec un contrôle final validé par la CNA",
      'MMM Suivre une formation de remise à niveau dans les options obtenues initialement avec validation du PCRA.',
    ],
  },
  {
    question: 'Lors d’une compétition dominicale un archer :',
    answers: [
      '[_] Doit obligatoirement porter la tenue de son club',
      'MMM Peut porter un jean',
      '[_] Ne peut jamais porter de jean.',
    ],
  },
  {
    question:
      'Un arbitre prévu pour la compétition est absent au démarrage d’un concours. Un archer, également arbitre, se propose de le remplacer tout en tirant la compétition. Cette situation est-elle possible ?',
    answers: ['MMM Non', '[_] Oui sous certaines conditions', '[_] Oui'],
  },
  {
    question:
      'Lors d’un surclassement ponctuel, avec changement de distance, blason ou piquet, un archer U18 doit :',
    answers: [
      '[_] Avoir un certificat médical de surclassement établi par un médecin de son choix',
      'MMM Avoir un certificat médical de surclassement établi par un médecin agréé par la FFTA',
      "[_] N'a pas de certificat médical de surclassement à produire",
    ],
  },
  {
    question: 'Un archer U11 agé de 9 ans :',
    answers: [
      '[_] Ne peut pas participer à une compétition, il doit attendre 10 ans.',
      '[_] Peut participer à une compétition sans restriction avec un arc dont les branches marquées par le fabricant sont de 20 livres.',
      'MMM Peut participer à une compétition à condition que les branches de son arc soient marquées par le fabricant à une puissance inférieure à 18 livres.',
    ],
  },
  {
    question:
      'Un archer qui veut tirer ponctuellement dans une catégorie supérieure à la sienne pour laquelle la distance et la taille des blasons sont identiques :',
    answers: [
      "MMM N'a pas besoin d'un certificat médical de sur-classement",
      '[_] Doit présenter un certificat médical de sur-classement s’il est mineur',
      '[_] Doit présenter un certificat médical de sur-classement quel que soit son âge',
    ],
  },
  {
    question: 'La carte de classification d’un para archer :',
    answers: [
      "MMM Peut-être vérifiée par l'arbitre pour connaitre les équipements autorisés",
      "[_] Est un document confidentiel signifiant les conditions de handicap et ne doit pas être présenté à l'arbitre",
      "[_] N'est pas un document prévu par nos règlements",
    ],
  },
  {
    question: 'Les catégories d’arcs autorisées pour un para archers sont :',
    answers: [
      '[_] Arc classique seulement',
      'MMM En Arc classique et arc à poulies',
      '[_] Arc droit',
    ],
  },
  {
    question: 'Un para-archer :',
    answers: [
      '[_] Ne peut en aucun cas participer à un tir par équipe',
      '[_] Ne peut participer à un tir par équipe uniquement s’il tire debout',
      'MMM Peut participer à tir par équipe',
    ],
  },
  {
    question: 'La distance maximale pour une compétiteur para est de :',
    answers: ['MMM 70m', '[_] 60m', '[_] 50m'],
  },
  {
    question: "Le para-tir à l'arc :",
    answers: [
      '[_] Est limité au niveau départemental',
      '[_] Est limité au niveau régional',
      'MMM Fait l’objet d’un championnat de France dédié',
    ],
  },
  {
    question:
      'En Tir en Salle pour des raisons de sécurité, les feuilles de marque doivent être placées après la marque :',
    answers: [
      '[_] Au pied des cibles',
      '[_] Sur le rebord du chevalet',
      'MMM À au moins 2 mètres devant les cibles',
    ],
  },
  {
    question:
      'En Tir 3D, le cheminement le plus sûr pour les archers en quittant la cible pour rejoindre la suivante sans revenir au pas de tir est :',
    answers: [
      "[_] De poursuivre l'axe de tir du moment que le chemin est caché par la cible",
      '[_] De longer l’axe de tir à environ vingt degrés pour revenir sur leurs pas',
      'MMM De partir à environ 90 degrés de l’axe de tir',
    ],
  },
  {
    question:
      "En Parcours Nature, si la pluie rend le terrain glissant au niveau d’une cible et que cela représente un danger de chute. Au niveau de cette cible, l'arbitre responsable doit :",
    answers: [
      '[_] Faire respecter le temps de tir pour les catégories jeunes uniquement',
      'MMM Neutraliser le temps de tir sur cette cible',
      '[_] Allonger le temps de tir sur cette cible de 15s',
    ],
  },
  {
    question: 'En Tir en Campagne, un armement par le haut :',
    answers: [
      'MMM Doit toujours être considéré comme potentiellement dangereux',
      "[_] N'est considéré comme étant dangereux que pour les Arcs à Poulies",
      "[_] N'est jamais considéré comme dangereux car le tir se fait en pleine nature",
    ],
  },
  {
    question:
      'Lors des épreuves de TAE, afin de départager les égalités, la feuille de marque doit indiquer en plus du score. Le nombre total de :',
    answers: [
      '[_] 9 et de 10',
      '[_] 10 (uniquement) et de X (uniquement)',
      'MMM 10 (10 + X) et de X (uniquement)',
    ],
  },
  {
    question:
      'Lors des épreuves de Tir Beursault, le classement est établi suivant :',
    answers: [
      "MMM Le nombre d'honneurs, puis le nombre de points",
      '[_] Le nombre de points, puis le nombre d’honneurs',
      '[_] Le nombre de chapelets uniquement',
    ],
  },
  {
    question:
      "En Tir à 18m, un archer ne tire qu’une flèche (qui marque 5 points) lors des volées marquantes avant d'abandonner. L’organisateur devra :",
    answers: [
      '[_] Classer l’archer avec 0 point car il a abandonné avant la fin de sa première volée',
      '[_] Ne pas saisir de score pour l’archer',
      'MMM Classer l’archer avec 5 points',
    ],
  },
  {
    question:
      'Lors d’une compétition sélective, les feuilles de marque doivent être :',
    answers: [
      '[_] Contrôlées par un arbitre à la fin de la volée',
      'MMM Contrôlées par l’archer à la fin de chaque volée',
      '[_] Signées par les deux marqueurs',
    ],
  },
  {
    question:
      'En tir à 18m, le système électronique de chronométrage tombe en panne lors des phases finales. Vous devez gérer le tir en ABC avec un sifflet. Quelle est la bonne méthode ?',
    answers: [
      '[_] 1 coup pour aller sur la ligne de tir, 3 coups pour débuter le tir, 2 coups pour finir la volée.',
      '[_] 1 coup pour aller sur la ligne de tir, 2 coups pour débuter le tir, 1 coup pour signaler les 30 secondes, 3 coups pour finir la volée.',
      'MMM 2 coups pour aller sur la ligne de tir, 1 coup pour débuter le tir, 3 coups pour finir la volée.',
    ],
  },
  {
    question:
      'En Tir à l’Arc Extérieur, un archer qui a des difficultés à marcher :',
    answers: [
      "[_] Doit se rendre aux cibles pour marquer ses points sous peine d'annulation de ses scores",
      '[_] Doit faire marquer ses points par un arbitre de la compétition',
      'MMM Peut déléguer à un autre archer le droit de marquer ses points',
    ],
  },
  {
    question:
      'Lors d’un match individuel en tir simultané en TAE, chaque archer tire par volée :',
    answers: ['[_] 1 flèche', '[_] 2 flèches', 'MMM 3 flèches'],
  },
  {
    question:
      'Lors d’un match par équipe en tir simultané en TAE, chaque archer de l’équipe tire par volée :',
    answers: ['[_] 1 flèche', 'MMM 2 flèches', '[_] 3 flèches'],
  },
  {
    question:
      'En Tir Beursault, de combien de temps dispose un archer pour tirer une flèche ? :',
    answers: ['[_] 40 secondes', 'MMM 60 secondes', '[_] 80 secondes'],
  },
  {
    question:
      'En TAE, quel est le temps alloué à une équipe mixte pour tirer une volée pendant un match en tir simultané ? :',
    answers: ['[_] 40 secondes', '[_] 60 secondes', 'MMM 80 secondes'],
  },
  {
    question: 'En tir Beursault, la valeur maximale d’une volée est de :',
    answers: ['MMM 4 points', '[_] 8 points', '[_] 10 points'],
  },
  {
    question:
      'À partir de quel âge, un jeune arbitre, s’il remplit les conditions peut devenir arbitre fédéral ?',
    answers: ['[_] 17 ans', 'MMM 18 ans', '[_] 21 ans'],
  },
  {
    question:
      'Un U18 qui souhaite participer à une manche de DRE avec son équipe doit :',
    answers: [
      '[_] Ne rien à faire',
      "MMM Fournir un certificat médical établi par n'importe quel médecin",
      '[_] Fournir un certificat médical établi par un médecin agréé par la FFTA',
    ],
  },
  {
    question: "Quel est l'ordre dans les statuts d'arbitrage ?",
    answers: [
      '[_] Actif, Inactif, Sommeil, Retrait',
      'MMM Actif, Inactif, Retrait, Sommeil',
      '[_] Actif, Retrait, Sommeil, Inactif',
    ],
  },
  {
    question:
      'En cas de plusieurs départs sur un parcours, un arbitre peut tirer :',
    answers: [
      "[_] A n'importe quel départ",
      'MMM Uniquement au premier départ',
      '[_] Uniquement au dernier départ',
    ],
  },
  {
    question:
      "En cas d’impossibilité pour un arbitre d’être présent à un arbitrage pour lequel il s'était engagé :",
    answers: [
      '[_] Il doit prévenir le PCRA, qui trouvera un remplaçant',
      "[_] Il doit prévenir l'organisateur, qui trouvera un remplaçant",
      'MMM Il doit chercher lui-même un remplaçant',
    ],
  },
  {
    question:
      'Lors d’un concours sélectif dominical, le directeur des tirs (DOS) peut être :',
    answers: [
      "MMM Un arbitre fédéral ou un jeune arbitre ou un membre du club validé par l'arbitre responsable",
      '[_] Uniquement un arbitre fédéral ou jeune arbitre',
      '[_] Uniquement un arbitre fédéral',
    ],
  },
  {
    question: 'Une compétition sélective du week-end ne peut pas se dérouler :',
    answers: [
      '[_] Uniquement le samedi et le dimanche',
      '[_] Sur 3 jours le samedi et le dimanche et un autre jour accolé au week-end',
      'MMM Sur 4 jours le vendredi, le samedi, le dimanche et le lundi',
    ],
  },
  {
    question:
      'Lors d’un championnat de France en salle, lors de la phase de qualifications, où se situe la zone des entraîneurs ?',
    answers: [
      '[_] Entre la ligne du matériel et la zone de repos des archers',
      'MMM Entre la zone de repos des archers et le public',
      "[_] Entre la ligne d'attente et la zone de repos des archers",
    ],
  },
  {
    question:
      'Lors d’une compétition individuelle à quel moment commence les phases finales :',
    answers: [
      '[_] Après les qualifications, quel que soit le niveau des premiers duels (32ème, 16ème...)',
      'MMM A partir des 1/4 de finales',
      '[_] A partir des 1/2 de finales',
    ],
  },
  {
    question:
      'Quelle période a été prise en compte pour la licence 2024, pour définir la catégorie suivant la date de naissance ?',
    answers: [
      '[_] Du 1 septembre 2023 au 31 aout 2024',
      '[_] Du 1 janvier 2023 au 31 décembre 2023',
      'MMM Du 1 janvier 2024 au 31 décembre 2024',
    ],
  },
  {
    question:
      "Lors d'une compétition dominicale, un archer qui décide d'arrêter la compétition :",
    answers: [
      '[_] Ne sera pas classé pour la compétition',
      '[_] Ne sera pas classé au plan national',
      "MMM Sera classé avec les points qu'il a acquis au moment de son arrêt, que ce soit pour le classement national que le classement de la compétition",
    ],
  },
  {
    question: 'Dans les compétitions, il est :',
    answers: [
      '[_] Autorisé de fumer ou de vapoter si les compétitions se déroulent en extérieur',
      '[_] Interdit de fumer mais autoriser de vapoter si les compétitions se déroulent en intérieur',
      'MMM Interdit de fumer ou de vapoter quel que soit le terrain de compétition',
    ],
  },
  {
    question:
      "Pour déposer une réclamation au jury d'appel lors d’une compétition dominicale :",
    answers: [
      'MMM Un archer dispose de 15 minutes quelle que soit la compétition',
      '[_] Un archer dispose de 30 minutes pour les compétitions type parcours',
      '[_] Un archer dispose de 45 minutes quelle que soit la compétition',
    ],
  },
  {
    question: 'Un jeune arbitre qui a réussi son examen peut :',
    answers: [
      "MMM Etre arbitre responsable d'un concours jeune",
      '[_] Etre arbitre responsable d’un concours adulte',
      '[_] Arbitrer lors d’un championnat régional adulte',
    ],
  },
  {
    question: "Un jury d'appel est obligatoire :",
    answers: [
      '[_] Lors de compétitions dominicales',
      '[_] Lors de championnats régionaux',
      'MMM Lors des championnats de France',
    ],
  },
  {
    question: 'Au sein des comités régionaux, les PCRA sont chargés de :',
    answers: [
      "[_] Sanctionner les erreurs d'arbitrage commises sur les compétitions de la région",
      "[_] D'être arbitre responsable des championnats régionaux",
      "MMM D'organiser annuellement et d'animer une réunion de formation continue (au minimum) des arbitres de leur région",
    ],
  },
  {
    question: 'Laquelle de ces affirmations est correcte :',
    answers: [
      '[_] La catégorie U15 concerne les 12,13 et 14 ans',
      'MMM La catégorie U18 concerne les 15, 16 et 17 ans.',
      '[_] La catégorie U13 concerne les 10 et 11 ans',
    ],
  },
  {
    question:
      "Afin d'éviter toute contestation, le peson utilisé pour le contrôle des arcs à poulies :",
    answers: [
      '[_] Est celui de l’archer',
      '[_] Est celui du président du club organisateur',
      "MMM Est celui désigné par l'arbitre responsable",
    ],
  },
  {
    question:
      'Un archer U11 (poussin) de 9 ans tire en compétition en salle dans la condition suivante :',
    answers: [
      '[_] Sur un blason de 60cm avec le centre à 1m du sol et à 15 mètres de distance',
      '[_] Sur un blason de 80 cm avec le centre à 1m10 du sol et à 15 mètres de distance',
      'MMM Sur un blason de 80 cm avec le centre à 1m10 du sol et à 18 mètres de distance',
    ],
  },
  {
    question:
      'Un archer participera à une compétition campagne au mois d’aout 2024, 4 semaines après le championnat de France. Le score de cet archer participant sera pris en compte :',
    answers: [
      'MMM Au classement de la saison 2024',
      '[_] Au classement de la saison 2025',
      '[_] Ne sera pas pris en compte',
    ],
  },
  {
    question: 'Pour une saison donnée un surclassement annuel permet :',
    answers: [
      "MMM D'être classé toute la saison dans la catégorie immédiatement supérieure",
      "[_] D'être classé dans la catégorie immédiatement supérieure seulement pour les classements de compétitions",
      "[_] D'être classé dans la catégorie immédiatement supérieure pour les compétitions par équipes",
    ],
  },
  {
    question:
      'Auprès de quelle structure un archer doit faire une demande de surclassement annuel ?',
    answers: [
      '[_] Auprès du Comité Régional dont il dépend',
      'MMM Auprès de la FFTA',
      '[_] Auprès de son club',
    ],
  },
  {
    question: 'Un archer licencié peut changer de club :',
    answers: [
      '[_] Seulement dans les trois premiers mois de sa prise de licence',
      '[_] Ne peut pas changer de club en cours de saison sportive',
      "MMM N'importe quel moment",
    ],
  },
  {
    question: 'Le surclassement ponctuel sans certificat médical peut :',
    answers: [
      'MMM Etre autorisé à partir de la catégorie U21',
      '[_] Etre autorisé à partir de la catégorie U18',
      '[_] Etre autorisé à partir de la catégorie U15',
    ],
  },
  {
    question:
      'Un archer qui est en possession d’un surclassement annuel peut tirer dans la catégorie immédiatement supérieure :',
    answers: [
      'MMM Dans toutes les disciplines pour toute la saison',
      '[_] Dans une discipline choisie en début de saison',
      '[_] Seulement en tir en salle',
    ],
  },
  {
    question: 'Pour être reconnu comme para-archer un athlète doit posséder :',
    answers: [
      'MMM Une carte de classification spécifiquement établie par un classificateur de la FFTA',
      "[_] Une carte d'invalidité civile",
      '[_] Un simple certificat médical établi par un médecin de son choix',
    ],
  },
  {
    question: 'Les distances de tir pour un para-archer sont :',
    answers: [
      "[_] Fonction de sa catégorie d'âge uniquement et seront les mêmes que pour les archers valides",
      "MMM Fonction de sa situation de handicap et de sa catégorie d'âge",
      '[_] Uniques quelle que soit la situation de handicap',
    ],
  },
  {
    question: "Un para-archer (licencié FFTA et sous réserve d'accessibilité)",
    answers: [
      "MMM Peut participer à n'importe quelle compétition FFTA",
      '[_] Ne peut participer qu’à des compétitions en salle à 18m',
      "[_] Ne peut participer qu'à des compétitions spécifiques para-tir à l'arc",
    ],
  },
  {
    question:
      'Laquelle des situations de handicap ci-dessous, n’est pas incluse dans la délégation reçue par la FFTA',
    answers: [
      '[_] Handicap visuel',
      '[_] Handicap auditif',
      'MMM Handicap psychique',
    ],
  },
  {
    question: 'Laquelle des affirmations suivantes est vraie',
    answers: [
      '[_] Un archer en fauteuil dispose de 20s (au lieu de 10s) pour se préparer',
      'MMM Un archer en fauteuil peut rester sur le pas de tir durant toute la compétition',
      "[_] Un archer en fauteuil dispose de 2 fois plus de temps qu'un archer valide pour se soigner en cas d'incident médical",
    ],
  },
  {
    question:
      "En Parcours Nature pour des raisons de sécurité, l'accès au terrain d'entraînement n’est autorisé que :",
    answers: [
      "MMM Par l'arbitre",
      "[_] Par l'organisateur",
      "[_] S'il n'y a pas plus de 10 archers présents sur le terrain d'entraînement en même temps",
    ],
  },
  {
    question:
      'En Tir 3D, la sécurité est considérée comme assurée derrière la cible si :',
    answers: [
      '[_] Un gros rocher derrière la cible la dépasse en largeur et en hauteur',
      '[_] La flèche ratant la cible passera plus de 5m au-dessus de la route passant derrière la cible',
      'MMM Un filet arrêtant les flèches été placé derrière la cible si le tir n’est pas fichant',
    ],
  },
  {
    question:
      'En Tir Beursault, la sécurité latérale est assurée par des protections appelées :',
    answers: ['MMM Gardes', '[_] Sentinelles', '[_] Surveillants'],
  },
  {
    question:
      'En Tir en Campagne, le cheminement des archers le plus sûr pour rejoindre la cible suivante après le marquage des scores est de :',
    answers: [
      "[_] Poursuivre dans l'axe de tir si le chemin est caché par la cible",
      'MMM De poursuivre à environ 90 degrés de l’axe de tir',
      "[_] De longer l'axe de tir à environ trente degrés",
    ],
  },
  {
    question:
      'Lors des épreuves qualificatives de Tir Beursault (parties), le classement est établi après :',
    answers: ['[_] 10 haltes', 'MMM 20 haltes', '[_] 40 haltes'],
  },
  {
    question:
      "En Tir en campagne, à la fin d'une compétition sélective, si un peloton n’a pas complété le nombre total de 5 et de 6 :",
    answers: [
      "[_] L'organisateur peut ne pas accepter d'enregistrer les résultats des compétiteurs concernés",
      "[_] L'organisateur doit obligatoirement calculer les totaux manquants et les enregistrer",
      "MMM L'organisateur peut n'enregistrer que les scores sans compléter le nombre de 5 et de 6 pour ces compétiteurs",
    ],
  },
  {
    question:
      "À la fin d'une compétition sélective de Tir en Campagne, si des archers ont une égalité parfaite (score, nombre de 5 et de 6), pour l'établissement du classement de la compétition :",
    answers: [
      'MMM Ces archers sont déclarés ex-aequo y compris pour les médailles',
      '[_] Ces archers doivent être départagés par un tir de barrage, en particulier pour les médailles',
      '[_] Ces archers seront départagés par un tirage au sort',
    ],
  },
  {
    question:
      'En Tir Beursault, une flèche qui atteint la cible après avoir ricoché',
    answers: [
      '[_] Est comptée en fonction de son impact sur la carte',
      'MMM Ne marque aucun honneur ni aucun point',
      '[_] Ne marque aucun point mais marque un honneur si la flèche est en zone marquante',
    ],
  },
  {
    question:
      'En Tir 3D, une flèche qui a rebondi et se plante dans la zone 8 de la cible :',
    answers: [
      '[_] Doit être marquée M',
      'MMM Doit être marquée comme valant 8 points',
      '[_] Doit être tirée à nouveau',
    ],
  },
  {
    question:
      "En Parcours Nature, une flèche qui s'encastre dans une autre fichée en zone marquante :",
    answers: [
      "MMM Prend la valeur de la flèche dans laquelle elle s'est encastrée même si elle retombe au sol",
      "[_] Prend la valeur de la flèche dans laquelle elle s'est encastrée mais uniquement si elle y reste encastrée",
      '[_] Est comptée comme un manqué et marquée M',
    ],
  },
  {
    question:
      'En Tir en Campagne, la valeur maximale que peut atteindre une flèche est :',
    answers: ['[_] 4 points', 'MMM 6 points', '[_] 8 points'],
  },
  {
    question:
      'En compétition par équipe de Parcours Nature, à quel moment doit-on déclencher le chronomètre ? :',
    answers: [
      "[_] Lorsque le premier archer de l’équipe quitte le pas d'attente",
      'MMM Lorsque le premier archer de l’équipe arrive à son premier pas de tir',
      "[_] Lors de la décoche de la première flèche du premier archer de l'équipe",
    ],
  },
  {
    question:
      'En compétition individuelle de Tir 3D, à quel moment doit-on déclencher le chronomètre ? :',
    answers: [
      "[_] Lorsque l'archer quitte le pas d'attente",
      "MMM Lorsque l'archer arrive à son pas de tir",
      '[_] Lors de la décoche de la première flèche de l’archer',
    ],
  },
  {
    question:
      'En tir en salle, quel est le temps alloué à un archer pour tirer une flèche dans un duel en tir alterné :',
    answers: ['MMM 20 secondes', '[_] 30 secondes', '[_] 40 secondes'],
  },
  {
    question:
      'En tir en salle, quel est le temps alloué à un para-archer pour tirer une flèche dans un duel en tir simultané :',
    answers: ['[_] 20 secondes', '[_] 30 secondes', 'MMM 40 secondes'],
  },
];
