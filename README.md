# NgMatStarter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


Step 1: Install Angular Material and Angular CDK
npm install --save @angular/material @angular/cdk
Step 2: Animations
npm install --save @angular/animations

Step 3: Import the component modules
#MaterialModule
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule],
  exports: [MatButtonModule, MatCheckboxModule],
})
export class MyOwnCustomMaterialModule { }

Step 4: Include a theme
## Material theme
To get started with a prebuilt theme, include one of Angular Material's prebuilt themes globally in your application. If you're using the Angular CLI, you can add this to your styles.css:

@import "~@angular/material/prebuilt-themes/indigo-pink.css";

Step 5: Gesture Support
## Gestures

npm install --save hammerjs
After installing, import it on your app's entry point (e.g. src/main.ts).

import 'hammerjs';

 Step 6 (Optional): Add Material Icons
 <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
