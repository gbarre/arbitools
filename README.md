# ArbiTools

ArbiTools is a lightweight Angular web application designed to help users
review and practice parts of the French Archery Federation (FFTA) regulations.
It is an educational tool only — it is not an official FFTA product and has no
legal value.

## Key information

- Framework: Angular 19
- Project version: 1.7.0
- License: GNU General Public License v3 (see [LICENSE](./LICENSE) file)

## Main dependencies

The project uses the following notable dependencies (see [package.json](./package.json) for full
list and versions):

- @angular/* (core Angular packages, v19.2.x)
- bootstrap (UI styles)
- @fortawesome/fontawesome-free (icons)
- ng-toggle-button (UI toggle component)
- rxjs, zone.js, tslib

Dev dependencies include the Angular CLI and TypeScript compiler:

- @angular/cli
- @angular-devkit/build-angular
- typescript

## Prerequisites

- Node.js (recommend Node 18 or newer)
- npm (or yarn) _Ensure you have a compatible Node.js and npm installed._

## Local setup and development

1. Clone the repository: `git clone https://github.com/gbarre/arbitools`
2. Install dependencies: `npm install`
3. Run the development server: `npm start` \
   Then open <http://localhost:4200/> in your browser. The app will reload when
   you change files.

## Building for production

Build the app for production: `npm run build`. The build artifacts will be
stored in the `dist/` directory.
