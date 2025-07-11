import { Rules } from 'src/app/models/rules.model';

export const reglements: Rules = {
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
