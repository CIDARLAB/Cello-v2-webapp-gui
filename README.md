[![Build Status](https://travis-ci.org/CIDARLAB/Cello-v2-webapp-gui.svg?branch=develop)](https://travis-ci.org/CIDARLAB/Cello-v2-webapp-gui)

This is the GUI that supports the [Cello v2 webapp][webapp]. This repository is used only for development. If you want to run the webapp, navigate to [its repository][webapp].

# Developer usage

This GUI uses the following web frameworks:

  + [Ionic Framework](https://ionicframework.com/)
  + [Angular](https://angular.io/)

## Prepare environment

Clone the repository.

	git clone https://github.com/CIDARLAB/Cello-v2-webapp-gui.git

Prepare the repository.

	npm install -g @ionic/cli
	cd Cello-v2-webapp-gui
	npm install

## Build for production

	ionic build browser --prod

## Serve during development

Serve locally and refresh on changes. Run the build step above at least once before this step.

	ionic serve --platform browser

## Deploy to the production branch

	sh deploy-gh.sh

[webapp]: https://github.com/CIDARLAB/Cello-v2-webapp
