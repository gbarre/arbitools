import { Rules } from 'src/app/models/rules.model';

export const reglements: Rules = {
  '2026-07-v20260721': {
    name: 'Juillet 2026 v20260721 (saison sportive 2027)',
    topics: [
      {
        title: 'I.B – Définition d’une compétition sélective',
        content:
          '<ul><li>Une compétition peut désormais se dérouler <strong>n’importe quel jour</strong> (fin de la restriction au week-end), dans la limite de 3 jours consécutifs.</li><li>La participation d’archers licenciés dans <strong>3 clubs différents</strong> est obligatoire à chaque départ (au lieu d’« un autre club »).</li><li>S’il y a plus de 2 archers d’un même club sur une cible, l’arbitre et l’organisateur doivent trouver des marqueurs ou vérificateurs d’un autre club.</li><li>Contrôle des fichiers d’intégration : en cas d’anomalie sur un départ, <strong>aucun score de ce départ</strong> n’est intégré au classement national.</li><li>Arrêté sélectif précisé : extraction à J-10 (ou au plus tard le 31 août), derniers scores pris en compte le dimanche précédent, fichier transmis avant le lundi 23h59.</li></ul>',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/R%C3%A8glements_sportifs_et_arbitrage_saison_2027_version_20260721.pdf#page=23',
      },
      {
        title: 'I.B.1.1 – Mandats en Tir à 18m',
        content:
          'Le mandat doit désormais mentionner, en plus des blasons utilisés, le <strong>rythme de tir de chaque départ</strong>.',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/R%C3%A8glements_sportifs_et_arbitrage_saison_2027_version_20260721.pdf#page=24',
      },
      {
        title: 'I.B.5.1 – Composition du jury d’appel',
        content:
          'Un <strong>candidat arbitre</strong> officiant lors de la compétition ne peut pas faire partie du jury d’appel (ajout à la liste des exclusions).',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/R%C3%A8glements_sportifs_et_arbitrage_saison_2027_version_20260721.pdf#page=31',
      },
      {
        title: 'I.C.3.1.1 – Pratique des U11',
        content:
          '<ul><li>Tir à 18 m : les U11 tirent désormais à <strong>10 m sur blason de 60 cm</strong> (au lieu de 18 m sur 80 cm).</li><li>Ajout du <strong>TAE Distances Nationales à 15 m sur blason de 80 cm</strong> ; le TAE Distances Internationales reste à 20 m sur blason de 80 cm.</li><li>Hauteur du centre du blason : 1,10 m dans tous les cas.</li><li>La limite de puissance de 20 livres devient ferme : <strong>suppression du certificat médical</strong> qui permettait de la dépasser.</li></ul>',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/R%C3%A8glements_sportifs_et_arbitrage_saison_2027_version_20260721.pdf#page=45',
      },
      {
        title: 'I.C.3.2 – Surclassements',
        content:
          'Le certificat médical de simple surclassement (U11 à U18) est désormais délivré par un <strong>médecin du sport inscrit à l’ordre des médecins</strong>, et non plus par un médecin agréé FFTA. Même évolution pour le surclassement U11 vers U13.',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/R%C3%A8glements_sportifs_et_arbitrage_saison_2027_version_20260721.pdf#page=46',
      },
      {
        title: 'I.G.3.5 – Définition de l’arc chasse',
        content:
          'Nouvelle définition détaillée de l’arc chasse (corps d’arc, corde, poids internes...). <strong>À compter de la saison 2029</strong>, les arcs dont la poignée n’est pas en bois ou en lamellé-collé seront classés en catégorie « arc nu ».',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/R%C3%A8glements_sportifs_et_arbitrage_saison_2027_version_20260721.pdf#page=92',
      },
      {
        title: 'II.1.A.7.1 – Tableau des catégories ouvertes',
        content:
          'Mise à jour des tableaux des distances nationales et internationales en TAE : intégration du <strong>TAE National U11 à 15 m</strong> et hauteur du centre du blason à <strong>1,10 m pour les U13 en TAE National</strong>, permettant de partager une cible à 20 m entre un U11 (international) et un U13 (national).',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/R%C3%A8glements_sportifs_et_arbitrage_saison_2027_version_20260721.pdf#page=120',
        discipline: "Tir à l'arc Extérieur",
      },
      {
        title: 'II.1.C.1.3 / C.1.4 / C.3.4 – Filière jeunes',
        content:
          '<ul><li>Le championnat de France par équipe de club mixte U13/U15 devient <strong>deux championnats genrés</strong> : 4 championnats jeunes au total (U13/U15 Femme et Homme à 30 m sur blason de 80 cm, U18/U21 Femme et Homme à 60 m sur blason de 122 cm), <strong>12 équipes par catégorie</strong> (au lieu de 16), équipes de 3 à 4 archers.</li><li>Création de <strong>4 championnats de France Double Mixte jeunes</strong> par catégorie d’âge : U13 à 30 m, U15 à 40 m, U18 à 60 m et U21 à 70 m — 12 double-mixtes par catégorie, adossés à la phase de qualification individuelle (4 premiers directement en ¼, places 5 à 12 en 1/8ème).</li><li>Composition d’équipe modifiable jusqu’à 30 minutes avant la phase de qualification.</li></ul>',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/R%C3%A8glements_sportifs_et_arbitrage_saison_2027_version_20260721.pdf#page=176',
        discipline: "Tir à l'arc Extérieur",
        added: true,
      },
      {
        title: 'II.1.C.5.5 – Catégories en Beursault',
        content:
          'Ouverture du Beursault aux <strong>arcs chasse</strong> et <strong>arcs droits</strong> à 50 m, chacun en une catégorie mixte unique regroupant hommes et femmes de U21 à S3.',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/R%C3%A8glements_sportifs_et_arbitrage_saison_2027_version_20260721.pdf#page=221',
        discipline: "Tir à l'arc Extérieur",
        added: true,
      },
      {
        title: 'II.2.A.7.1.2 / A.7.1.3 – Catégories et blasons en Tir à 18m',
        content:
          '<ul><li>Recomposition des catégories arcs nus : <strong>scratch S1 à S3</strong>, <strong>U21 (U18/U21)</strong> et <strong>U15 (U13/U15)</strong> — au lieu de scratch U21-S3 et U18 (U15/U18).</li><li>Mise à jour du tableau des distances et blasons, avec les U11 à <strong>10 m sur blason de 60 cm</strong>.</li></ul>',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/R%C3%A8glements_sportifs_et_arbitrage_saison_2027_version_20260721.pdf#page=234',
        discipline: 'Tir en salle',
      },
      {
        title: 'II.2.B.5.1.8 – Rythme AB en Tir à 18m',
        content:
          'Un rythme de tir <strong>AB</strong> peut être utilisé dans les compétitions sélectives pour un ou plusieurs départs. Les archers doivent en être informés sur le mandat. Si deux archers d’un même club se retrouvent sur une même cible, le club doit revenir à un rythme AB/CD pour ce départ, ou faire tenir la double-marque par un archer d’un autre club des cibles voisines.',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/R%C3%A8glements_sportifs_et_arbitrage_saison_2027_version_20260721.pdf#page=250',
        discipline: 'Tir en salle',
        added: true,
      },
      {
        title: 'II.3.A.5 / A.7.4 – U11 et nouvelles catégories en campagne',
        content:
          '<ul><li>Intégration des U11 : nouveau <strong>piquet rose</strong> avec ses colonnes de distances par blason dans les tableaux des distances connues et inconnues.</li><li>Les U13 (arc classique) tirent du piquet blanc, ou orange s’il est présent.</li><li>Inscription des U11 et U13 obligatoire au plus tard <strong>7 jours avant</strong> la compétition ; sans inscrit, les pas rose et/ou orange ne sont pas installés.</li><li>Tableau des catégories mis à jour (ouvertures de nouvelles catégories).</li></ul>',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/R%C3%A8glements_sportifs_et_arbitrage_saison_2027_version_20260721.pdf#page=288',
        discipline: 'Tir en campagne',
        added: true,
      },
      {
        title: 'II.5.A / B – U11 et nouvelles catégories en Nature',
        content:
          '<ul><li>Intégration des U11 : les deux flèches sont tirées du <strong>piquet rose</strong> ; inscription obligatoire à J-7, sinon le piquet rose n’est pas installé.</li><li>Les <strong>U18</strong> tirent désormais la 1ère flèche au pas <strong>rouge</strong> et la 2ème au pas <strong>bleu</strong>, comme les U21 et seniors (au lieu de bleu puis blanc).</li><li>U13 et U15 : les deux flèches du pas blanc ; ordre de tir dégressif : rouge, bleu, blanc et rose.</li><li>Tableau des distances complété avec le pas rose (grands gibiers 20 m, moyens 15 m, petits 10 m, petits animaux 10 m maxi).</li></ul>',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/R%C3%A8glements_sportifs_et_arbitrage_saison_2027_version_20260721.pdf#page=345',
        discipline: 'Tir Nature',
        added: true,
      },
      {
        title: 'II.5.B.7.1 – Temps de tir en Nature',
        content:
          'Le temps alloué au tir de 2 flèches passe à <strong>45 secondes pour toutes les catégories ouvertes</strong> — fin du temps de 30 secondes pour certaines catégories.',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/R%C3%A8glements_sportifs_et_arbitrage_saison_2027_version_20260721.pdf#page=354',
        discipline: 'Tir Nature',
      },
      {
        title: 'II.5.B.9 / C.1.7 – Départage des égalités en Nature',
        content:
          '<ul><li>Départage au plus grand nombre de <strong>20</strong> puis de <strong>15</strong> réalisés (fin de la saisie des couples 20-15 / 20-10).</li><li>Pour l’attribution des médailles : tir de barrage (1 flèche en 30 secondes ; à score égal, la flèche la plus proche du centre gagne).</li><li>Si l’égalité subsiste : tirage au sort pour la constitution des pelotons d’un 2ème jour ; à partir de la 4ème place du classement final, les archers sont classés au même rang.</li></ul>',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/R%C3%A8glements_sportifs_et_arbitrage_saison_2027_version_20260721.pdf#page=355',
        discipline: 'Tir Nature',
      },
      {
        title: 'II.6.A / B – U11, nouvelles catégories et distances en 3D',
        content:
          '<ul><li>Intégration des U11 : <strong>piquet rose</strong> de 5 à 20 m (piquet blanc ou rose s’il est présent) ; inscription obligatoire à J-7, sinon le piquet rose n’est pas installé.</li><li>Ordre de piquetage : jaune – rouge – bleu – blanc – rose.</li><li>Le cumul des distances du <strong>piquet bleu</strong> sur 24 cibles passe de 490–520 m à <strong>460–490 m</strong>.</li><li>Tableau des catégories mis à jour (ouvertures de nouvelles catégories).</li></ul>',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/R%C3%A8glements_sportifs_et_arbitrage_saison_2027_version_20260721.pdf#page=365',
        discipline: 'Tir 3D',
        added: true,
      },
      {
        title: 'II.6.B.5.2 / B.7 – Zonage du 11 en 3D',
        content:
          '<ul><li>Les 4 zones marquantes sont celles tracées par le fabricant ; interdiction de les modifier.</li><li>Si la zone 11 n’est pas tracée, elle est tracée par l’arbitre responsable ou l’organisateur : cercle au centre de la zone 10, de rayon égal à la <strong>moitié du rayon du 10</strong>.</li><li>Lorsque plusieurs petits cercles existent, seul celui au milieu de la zone 10 vaut 11.</li><li>Interdiction de surligner les tracés (vernis...) ou de matérialiser le 11 par une couleur tranchante.</li></ul>',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/R%C3%A8glements_sportifs_et_arbitrage_saison_2027_version_20260721.pdf#page=372',
        discipline: 'Tir 3D',
      },
      {
        title: 'II.7.A.4 – Tolérance des boucles en Run Archery',
        content:
          'La tolérance sur la longueur des boucles de course et de pénalité passe de <strong>±10 % à ±2 %</strong>, la distance étant mesurée à la corde de la boucle. Objectif : fiabiliser le classement national basé sur le temps de course (4K : boucle de 980 à 1020 m ; sprint : 392 à 408 m).',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/R%C3%A8glements_sportifs_et_arbitrage_saison_2027_version_20260721.pdf#page=389',
        discipline: 'Run Archery',
      },
      {
        title: 'Lexique',
        content:
          'Ajout en fin de document d’un <strong>lexique</strong> définissant les principaux termes du règlement sportif et arbitrage (10X, arrêté sélectif, Arrow Head, ATP...).',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/R%C3%A8glements_sportifs_et_arbitrage_saison_2027_version_20260721.pdf#page=427',
        added: true,
      },
    ],
  },
  '2026-05-v20260502': {
    name: 'Mai 2026 v20260502 (saison sportive 2026)',
    topics: [
      {
        title: 'Refonte du document',
        content:
          '<ul><li>Document entièrement recomposé : nouvelle mise en page, nouvelle pagination (438 pages) et nouveau sommaire.</li><li>Intègre les modifications votées par le Conseil d’Administration de la FFTA en mars 2026.</li><li><i>La page des changements référence les championnats 3D sous « II.3.C.3 » et « II.3.C.4 » : il s’agit en réalité du chapitre II.6 (Tir sur cibles 3D).</i></li></ul>',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/R%C3%A8glements_sportifs_et_arbitrage_saison_2026_version_20260502.pdf',
      },
      {
        title: 'I.C.3.1.1 – Les U11 : puissance d’arc',
        content:
          'La puissance marquée par le fabricant sur les branches passe de <strong>18 à 20 livres</strong> maximum. Au-delà de 20 livres, certificat médical obligatoire délivré par un médecin agréé FFTA (puissance contrôlée par l’arbitre).',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/R%C3%A8glements_sportifs_et_arbitrage_saison_2026_version_20260502.pdf#page=43',
      },
      {
        title: 'II.3.B.2.1.1 – Blasons : zones bleues autorisées',
        content:
          '<ul><li>Les zones "1-4" des blasons de tir en campagne peuvent être <strong>noires ou bleues</strong>.</li><li>Tous les blasons d’une compétition doivent être de la même couleur.</li><li>En cas de retransmission télévisuelle ou de captation audiovisuelle, les blasons à zones bleues sont à privilégier.</li></ul>',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/R%C3%A8glements_sportifs_et_arbitrage_saison_2026_version_20260502.pdf#page=294',
        discipline: 'Tir en campagne',
      },
      {
        title: 'II.3.D – Championnat de France par équipes de clubs',
        content:
          '<ul><li>Nouveau format : suppression des matchs de poule, remplacés par un <strong>tir de qualification sur 12 cibles à distances inconnues</strong> (9 flèches par cible, 3 par archer), puis ¼, ½ et finales sur boucles de 4 cibles à distances connues.</li><li>Contrôle du temps : 360 s par cible en qualification, 180 s en match.</li><li>Arrêté sélectif au plus tard 10 jours avant le championnat ou le 31 août.</li><li>La composition de l’équipe peut être modifiée <strong>le jour</strong> du championnat.</li><li>Disparition des quotas explicites (12 équipes femmes / 24 équipes hommes).</li></ul>',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/R%C3%A8glements_sportifs_et_arbitrage_saison_2026_version_20260502.pdf#page=314',
        discipline: 'Tir en campagne',
      },
      {
        title: 'II.3.E – Championnat de France double-mixte',
        content:
          '<ul><li>Nouveau format : suppression des 3 poules de 4, remplacées par un <strong>tir de qualification sur 12 cibles à distances inconnues</strong> (4 flèches par cible, 2 par archer), puis ¼, ½ et finales sur boucles de 4 cibles à distances connues.</li><li>Contrôle du temps : 160 s par cible en qualification, 120 s en match.</li><li>Arrêté sélectif au plus tard 10 jours avant le championnat ou le 31 août.</li></ul>',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/R%C3%A8glements_sportifs_et_arbitrage_saison_2026_version_20260502.pdf#page=322',
        discipline: 'Tir en campagne',
      },
      {
        title: 'II.6.C.3 – Championnat de France 3D par équipe de club',
        content:
          '<ul><li>L’épreuve de qualification passe de <strong>24 à 18 cibles</strong>, avec répartition imposée par groupes (G1 : 3, G2 : 5, G3 : 6, G4 : 4) et cumuls de distances par piquet (rouge 470–500 m, bleu 345–375 m, blanc 260–280 m).</li><li>Suppression des quotas de sélection (30 équipes femmes / 40 équipes hommes retenues).</li><li>Phases finales inchangées : 16 équipes, 1/8 à finale sur 4 cibles.</li></ul>',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/R%C3%A8glements_sportifs_et_arbitrage_saison_2026_version_20260502.pdf#page=382',
        discipline: 'Tir 3D',
      },
      {
        title: 'II.6.C.4 – Championnat de France 3D Double-Mixte',
        content:
          '<ul><li>L’épreuve de qualification passe de <strong>24 à 18 cibles</strong>, avec la même répartition par groupes et les mêmes cumuls de distances que pour les équipes de clubs.</li><li>En phases finales, le Double-Mixte tire désormais <strong>4 flèches (2 par archer)</strong> en 90 s par cible, au lieu de 2 flèches (1 par archer).</li></ul>',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/R%C3%A8glements_sportifs_et_arbitrage_saison_2026_version_20260502.pdf#page=385',
        discipline: 'Tir 3D',
      },
    ],
  },
  '2025-11-v20251126': {
    name: 'Novembre 2025 v20251126 (saison sportive 2026)',
    topics: [
      {
        title: 'I.C.1 – Les compétiteurs étrangers',
        content:
          '<ul><li>Clarification sur la participation des étrangers en championnats nationaux.</li><li>Mention nouvelle : <em>Les étrangers apparaissent dans le classement des qualifications mais ne participent pas aux phases finales.</em></li><li>Ajout : <em>En Championnat de France Jeune par équipe de club, les archers étrangers ne sont pas autorisés.</em></li></ul>',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/Reglements_Sportifs_Arbitrage_Saison_Sportive_2026_Version_20251126.pdf',
      },
      {
        title: 'I.C.5.1.2 – Sélection',
        content:
          '<ul><li>Refonte complète des règles de sélection.</li><li>Processus unifié : pré-inscription, modalités annuelles, quotas, extraction à J-10.</li><li>Suppression de la zone tampon détaillée.</li><li>Disparition des distinctions désuètes entre Elite et autres formats.</li><li>Texte réécrit pour couvrir toutes les disciplines de manière cohérente.</li></ul>',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/Reglements_Sportifs_Arbitrage_Saison_Sportive_2026_Version_20251126.pdf#%5B%7B%22num%22%3A408%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C54.48%2C258.96%2C0%5D',
      },
      {
        title: 'I.D.3 – Substances dopantes et alcool',
        content:
          '<ul><li>Titre modifié : passage à <em>Substances dopantes et alcool</em>.</li><li>Section restructurée en sous-chapitres : lutte antidopage, contrôles hors compétition, alcool.</li><li>Réécriture complète du chapitre sur l’alcool : procédure arbitre, gestion des incidents, obligations fédérales.</li><li>Clarification des contrôles hors compétition.</li></ul>',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/Reglements_Sportifs_Arbitrage_Saison_Sportive_2026_Version_20251126.pdf#%5B%7B%22num%22%3A548%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C75.6%2C486%2C0%5D',
      },
      {
        title: 'I.G.3.2 – Arc à Poulies – Le viseur',
        content:
          "Clarification sur l'utilisation des points de visées multiples",
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/Reglements_Sportifs_Arbitrage_Saison_Sportive_2026_Version_20251126.pdf#%5B%7B%22num%22%3A704%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C54.48%2C415.44%2C0%5D',
      },
      {
        title: 'I.G.3.4 – Arc Nu (Barebow) – Stabilisateurs et amortisseurs',
        content:
          "Clarification sur le passage dans l'anneau : <em>sans plier les amortisseurs</em>",
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/Reglements_Sportifs_Arbitrage_Saison_Sportive_2026_Version_20251126.pdf#%5B%7B%22num%22%3A722%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C54.48%2C785.28%2C0%5D',
      },

      {
        title: 'II.1.B.5.4 – Temps de tir et séquence de tir',
        content: 'Ajout du temps de tir <em>international</em>.',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/Reglements_Sportifs_Arbitrage_Saison_Sportive_2026_Version_20251126.pdf#%5B%7B%22num%22%3A1083%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C54.48%2C250.08%2C0%5D',
        discipline: "Tir à l'arc Extérieur",
      },

      {
        title: 'II.1.C.1.1 – Championnat de France Élite TAE',
        content:
          'Aucun changement détécté par rapport à la version précédente. (???)',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/Reglements_Sportifs_Arbitrage_Saison_Sportive_2026_Version_20251126.pdf#%5B%7B%22num%22%3A1309%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C54.48%2C748.56%2C0%5D',
        discipline: "Tir à l'arc Extérieur",
      },
      {
        title: 'II.1.C.3.1 – Championnat de France D1 Arc Classique',
        content:
          '<ul><li>La Saison Régulière (SR) se réalise sur les <strong>deux premières manches</strong> par la rencontre de toutes les équipes entre elles <strong>une fois</strong>, soit <strong>15 rencontres</strong>.</li><li>Pour les 8 premières équipes de la SR, une phase de play-off est organisée.</li><li>Les 4 premières équipes au classement de la phase de Play-Off sont qualifiées pour participer à la phase finale du Championnat de France de D1.</li></ul>',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/Reglements_Sportifs_Arbitrage_Saison_Sportive_2026_Version_20251126.pdf#%5B%7B%22num%22%3A1369%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C54.48%2C772.08%2C0%5D',
        discipline: "Tir à l'arc Extérieur",
      },
      {
        title: 'II.1.C.3.2 – Championnat de France D2',
        content:
          'Le déroulement de la saison se fait à présent en 2 manches permettant la rencontre de toutes les équipes entre elles <strong>deux fois</strong> dans la saison, soit 14 matchs par équipe répartis en 7 matchs par manche.',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/Reglements_Sportifs_Arbitrage_Saison_Sportive_2026_Version_20251126.pdf#%5B%7B%22num%22%3A1402%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C54.48%2C772.08%2C0%5D',
        discipline: "Tir à l'arc Extérieur",
      },
      {
        title: 'II.1.C.3.4 – Championnat de France Jeune par équipe de club',
        content: 'Précisions sur le déroulement de la phase de qualification.',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/Reglements_Sportifs_Arbitrage_Saison_Sportive_2026_Version_20251126.pdf#%5B%7B%22num%22%3A1419%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C54.48%2C772.08%2C0%5D',
        discipline: "Tir à l'arc Extérieur",
      },
      {
        title: 'II.1.C.3.5 – Championnat de France D1 Arc à Poulies',
        content:
          "Le Championnat de France D1 Arc à Poulies, se dispute en deux ou 3 phases sur la durée d'une saison sportive :<ul><li>Une phase de Saison Régulière (SR) sur les 2 premières manches, pour les hommes et sur les 3 manches pour les femmes</li><li>Une phase de Play-Off ou de Play-Down chez hommes en fonction du classement obtenu par les équipes sur la SR.</li><li>Une phase finale pour l’attribution des places sur le podium chez les hommes et chez les femmes.</li></ul>",
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/Reglements_Sportifs_Arbitrage_Saison_Sportive_2026_Version_20251126.pdf#%5B%7B%22num%22%3A1497%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C54.48%2C772.08%2C0%5D',
        discipline: "Tir à l'arc Extérieur",
      },
      {
        title: 'II.1.C.4 – Tournois Nationaux Jeunes',
        content:
          'Ouverture de U13 à U21 en classique et de U18 à U21 en arc à poulies.',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/Reglements_Sportifs_Arbitrage_Saison_Sportive_2026_Version_20251126.pdf#%5B%7B%22num%22%3A1524%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C54.48%2C670.8%2C0%5D',
        discipline: "Tir à l'arc Extérieur",
      },
      {
        title:
          "II.2.C.1.1 – Championnat de France Adulte Tir à 18m par Catégorie d'âge",
        content: 'Plus de mention de championnat de France "élite".',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/Reglements_Sportifs_Arbitrage_Saison_Sportive_2026_Version_20251126.pdf#%5B%7B%22num%22%3A1937%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C54.48%2C785.28%2C0%5D',
        discipline: 'Tir à 18m',
      },
      {
        title: 'II.3.B.6.3 – Résolution des égalités',
        content:
          '<ul><li>Explications détaillées sur la procédure des tirs de barrages.</li><li>Ajout de la procédure pour le double-mixte.</li></ul>',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/Reglements_Sportifs_Arbitrage_Saison_Sportive_2026_Version_20251126.pdf#%5B%7B%22num%22%3A2099%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C289.2%2C687.36%2C0%5D',
        discipline: 'Tir en campagne',
      },
      {
        title: 'II.3.C – Règlements spécifiques des épreuves fédérales',
        content:
          '<ul><li>Réorganisation des sections.</li><li>Suppression de la section concernant la sélection pour le championnat de France élite.</li></ul>',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/Reglements_Sportifs_Arbitrage_Saison_Sportive_2026_Version_20251126.pdf#%5B%7B%22num%22%3A2161%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C54.48%2C708.72%2C0%5D',
        discipline: 'Tir en campagne',
      },
      {
        title: 'II.5.B.6.5.1 – Zones marquantes suivant le type de gibiers',
        content:
          'Clarifications sur les zones marquantes en fonction des types de gibiers.',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/Reglements_Sportifs_Arbitrage_Saison_Sportive_2026_Version_20251126.pdf#%5B%7B%22num%22%3A2573%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C54.48%2C785.28%2C0%5D',
        discipline: 'Tir Nature',
      },

      {
        title: 'II.6.B.8 – Résolution des égalités',
        content:
          '<ul><li>Le départage se fait uniquement au nombre de 11 puis de 10.</li><li>Ajout de la procédure de départage pour les phases finales, progressions et attribution des médailles en championnat.</li></ul>',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/Reglements_Sportifs_Arbitrage_Saison_Sportive_2026_Version_20251126.pdf#%5B%7B%22num%22%3A2761%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C68.64%2C785.28%2C0%5D',
        discipline: 'Tir 3D',
      },

      {
        title: 'II.6.C – Règlements spécifiques des épreuves fédérales',
        content:
          '<ul><li>Réorganisation des sections.</li><li>Suppression de la section concernant la sélection pour le championnat de France élite.</li><li>Réorganisation des jours de compétition pour le tir en individuel.</li></ul>',
        link: 'https://www.fftiralarc.org/DOCUMENTS/ARBITRES/Reglements_Sportifs_Arbitrage_Saison_Sportive_2026_Version_20251126.pdf#%5B%7B%22num%22%3A2761%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C68.64%2C720.48%2C0%5D',
        discipline: 'Tir 3D',
      },
    ],
  },
  '2025-07-v2': {
    name: 'Juillet 2025 v2 (saison sportive 2026)',
    topics: [
      {
        title: 'I.G.2 : Matériel commun',
        content:
          'Ajout du paragraphe concernant le repérage des flèches pour le Parcours Nature.',
        discipline: 'Tir Nature',
        added: true,
      },
    ],
  },
  '2025-07-v1': {
    name: 'Juillet 2025 v1 (saison sportive 2026)',
    topics: [
      {
        title: 'I.G.3.2 : Arc à Poulies',
        content:
          'Retour des points de visée multiples autorisés en 3D et Campagne, avec interdiction de les modifier sur les distances inconnues.',
        link: 'https://www.ffta.fr/sites/default/files/2025-07/R%C3%A8glements%20Sportifs%20et%20Arbitrage_Saison%20Sportive%202026_Juillet%202025%20V1.pdf#%5B%7B%22num%22%3A697%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C54.48%2C415.44%2C0%5D',
        discipline: 'Tir 3D / Tir en Campagne',
      },
      {
        title: 'II.6.B.5.3 : Positionnement',
        content:
          'Suppression de la limite de distance pour dédoubler des cibles en 3D.',
        link: 'https://www.ffta.fr/sites/default/files/2025-07/R%C3%A8glements%20Sportifs%20et%20Arbitrage_Saison%20Sportive%202026_Juillet%202025%20V1.pdf#%5B%7B%22num%22%3A2682%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C68.64%2C232.8%2C0%5D',
        discipline: 'Tir 3D',
      },
    ],
  },
  '2025-07-v0': {
    name: 'Juillet 2025 (saison sportive 2025)',
    topics: [
      {
        title: 'I.C.3.1.1 : U11 / Surclassement',
        content:
          'Ouverture de la catégorie U11 à toutes les armes, pas uniquement arc classique.',
        link: 'https://www.ffta.fr/sites/default/files/2025-07/R%C3%A8glements%20Sportifs%20et%20Arbitrage_Saison%20Sportive%202026_Juillet%202025%20V1.pdf#%5B%7B%22num%22%3A361%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C54.48%2C685.68%2C0%5D',
      },
      {
        title: 'Article I.C.3.2 alinéa c : Les regroupements de catégories',
        content: ' Article supprimé',
        deleted: true,
      },
      {
        title:
          'I.C.5.1.2 : Cas particulier pour les championnats de France Para-tir à l’arc TAE',
        content:
          "Les para-archers ne peuvent se pré-inscrire qu'en TAE DI ou DN, pas aux 2.<br />Dans la version précédente, ils pouvaient se pré-inscrire aux 2 et la sélection en DI les faisait sortir du DN.",
        link: 'https://www.ffta.fr/sites/default/files/2025-07/R%C3%A8glements%20Sportifs%20et%20Arbitrage_Saison%20Sportive%202026_Juillet%202025%20V1.pdf#%5B%7B%22num%22%3A411%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C54.48%2C493.44%2C0%5D',
      },
      {
        title:
          'I.C.5.1.3 alinéa 3.2 : Para Tir à l’Arc : Catégories d’âge ouvertes dans le classement national',
        content:
          'Tableau des catégries para revu.<br /><i>Erreur dans le titre sur la page des changements.</i>',
        link: 'https://www.ffta.fr/sites/default/files/2025-07/R%C3%A8glements%20Sportifs%20et%20Arbitrage_Saison%20Sportive%202026_Juillet%202025%20V1.pdf#%5B%7B%22num%22%3A433%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C54.48%2C785.28%2C0%5D',
      },
      {
        title: 'II.6.C.3.6 : Le contrôle du temps',
        content:
          'Précisions sur le début du décompte et les évènements sanctionnés sur un tir 3D par équipe.<br />NB : Un seul dépassement autorisé en qualification, aucun en finales.',
        link: 'https://www.ffta.fr/sites/default/files/2025-07/R%C3%A8glements%20Sportifs%20et%20Arbitrage_Saison%20Sportive%202026_Juillet%202025%20V1.pdf#%5B%7B%22num%22%3A2738%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C68.64%2C427.44%2C0%5D',
        discipline: 'Tir 3D',
      },
      {
        title: 'II.6.C.4.6 : Le contrôle du temps',
        content:
          'Précisions sur le début du décompte et les évènements sanctionnés sur un tir 3D en Double-Mixte.<br />NB : Un seul dépassement autorisé en qualification, aucun en finales.',
        link: 'https://www.ffta.fr/sites/default/files/2025-07/R%C3%A8glements%20Sportifs%20et%20Arbitrage_Saison%20Sportive%202026_Juillet%202025%20V1.pdf#%5B%7B%22num%22%3A2769%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C68.64%2C709.2%2C0%5D',
        discipline: 'Tir 3D',
      },
    ],
  },
};
