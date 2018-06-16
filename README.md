# angular
Here I'm gonna share with you  what I'm learning about Angular.

## Lesson nr. 1
There is not such thing as Angular 2,4,5,6...there is **AngularJS (1.x)** and **Angular**.

It's really weird when people say: "I am an Angular 5 developer". 

So yeah...please don't do that.

## Lesson nr. 2
ANGULAR WITH SASS
======
###This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.


##Step 1: Use Visual Studio Code

I decided to use Visual Studio Code (VS Code), a lightweight code editor that I was somewhat familiar with. The VS Code documentation is excellent, and even provides a tutorial for getting started using VS Code and Angular.

 VS Code is customizable through extensions. One of my favorite extension is called “Debugger for Chrome.” It allows me to set breakpoints and debug JavaScript without leaving VS Code. The VS Code team provides a recipe for configuring Chrome Debugging with Angular CLI.

##Step 2: Use Angular CLI

Initially, I did not realize that Angular had its own Command Line Interface (CLI). Although it is not required to use, I found it to be essential. Angular CLI helps the developer fall into the pit of success by implementing “best practices.” For example, using Angular CLI to create a new Angular app will create the recommended folder structure. I use Angular CLI all the time to generate Components and Services, thus making it part of my regular workflow.

Like other aspects of Angular, the documentation for Angular CLI is excellent. You can find documentation that describes how to install Angular CLI as well so that you can get up and running quickly.

Once installed, you can use the “ng new” command within a terminal window to create a new Angular solution. The documentation details various switches that you can use. For example, I used this command to create my application:

`ng new myApp --style sass`

This creates a new folder called “myApp” and is already configured to use Sass. The “myApp” folder contains the entire folder and file structure for the Angular App. I can open this folder using VS Code and can start the application with the terminal built into VS Code using the CLI Command:

`ng serve`

In the terminal, you should see the starter template building and then the default browser display the home page.

Bonus: Webpack and Typescript

It was a pleasant surprise to see that the Angular CLI has an opinion about its build process. In the past, creating a build pipeline was a startup task that the Developer undertook. It involved using libraries such as Grunt or Gulp. But, why does JavaScript even need this build process?

Looking at the files generated by Angular CLI, notice that they all have a “.ts” extension. These aren’t JavaScript files, but rather TypeScript files. TypeScript brings static typing during development which will be really familiar to anyone coming from C# like I did. Having static typing improves the tooling that can be added to editors such as Visual Studio Code. But remember, TypeScript is primarily a tool to help the developer. The build process will transpile TypeScript into JavaScript for the browsers.

The second reason why we need a build process is because we are using Sass. Like TypeScript, the Sass files need to be compiled to CSS so that the browser understands them.

Angular CLI uses a library called WebPack for its build pipeline. What is really helpful is that this is already set up for you. Angular provides a file called “.angular-cli.json” that allows you configure different aspects of the build process. But, I’ve found that I rarely need to touch this file.

##Step 3: Using Bootstrap 4

Adding Bootstrap 4 to the project is accomplished by using NPM:

`npm install bootstrap@4.0.0`

This will add a dependency to the package.json file and download the Bootstrap files into the node_modules folder. Included in the download are the Sass files that are needed. Font-Awesome can also added the same way:

`npm install font-awesome`

We need to import the Sass files from both projects in order to use them. This can be done by editing the file named “main.scss,” which was by the Angular CLI when the project was created. Specifically, it was the “—style sass” switch that created it. If you forgot to use this switch, then Angular will expect you to use CSS. However, you can configure Angular to use Sass by running the command:

`ng set defaults.styleExt scss`

To add the Sass imports, edit the “main.scss” and add the following imports:

`@import "~bootstrap/scss/bootstrap"`

`$fa-font-path: "~font-awesome/fonts"`

`@import "~font-awesome/scss/font-awesome"`

That is all you have to do. Now the build process will compile the CSS for Bootstrap and Font Awesome and use them in your project.

###Step 4: NG Bootstrap

Some of the components provided by Bootstrap require a JavaScript reference. Initially, I had to add some configuration to the “scripts” section of the “.angular-cli.json” file. However, this required me to also add configurations for JQuery and Popper.js.

Then I discovered a library called NG Bootstrap that provides Bootstrap 4 components powered by Angular. Since this is an Angular re-implementation of the Bootstrap components, it removes the external references such as JQuery and Popper.

Have I said how much I like the documentation I have found? The documentation for NG Boostrap is also excellent. It provides instructions for their widgets as well as step by step instructions for installing NG Bootstrap.
