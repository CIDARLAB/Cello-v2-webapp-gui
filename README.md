This is the GUI that supports the [Cello v2 webapp][webapp]. This repository is used only for development. If you want to run the webapp, navigate to [its repository][webapp].

# Developer usage

This GUI uses the following web frameworks:

  + [Ionic Framework](https://ionicframework.com/)
  + [Angular](https://angular.io/)

## Prepare environment

Clone the repository.

	git clone https://github.com/CIDARLAB/Cello-v2-webapp-gui.git

Prepare the repository.

	npm install -g @ionic/cli cordova
	cd Cello-v2-webapp-gui
	npm install

## Build for production

	ionic cordova build browser --prod

## Serve during development

Serve locally and refresh on changes. Run the build step above at least once before this step.

	ionic serve --cordova --platform browser

## Deploy to the gh-pages branch

	sh deploy.sh

[webapp]: https://github.com/CIDARLAB/Cello-v2-webapp
