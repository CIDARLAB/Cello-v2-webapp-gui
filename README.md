This is the GUI that supports the [Cello2-webapp](https://github.com/CIDARLAB/Cello2-webapp), ordinary users of Cello2 will not be interested. The compiled version of the GUI is deployed to the gh-pages branch and used in [Cello2-webapp](https://github.com/CIDARLAB/Cello2-webapp) as a submodule.

# Dependencies

  + npm
  + ionic-v4
  + cordova
  
# Developer usage

See the documentation for the Ionic Framework [here](https://ionicframework.com/).

## Clone the repository

	git clone https://github.com/CIDARLAB/Cello2-webapp-gui.git

## Prepare environment

	npm install -g @ionic/cli @angular/cli
	cd Cello2-webapp-gui
	npm install

## Serve for development

	ionic serve --cordova --platform browser
	
## Build for production

	ionic cordova build browser --prod

## Deploy to the gh-pages branch

	sh deploy.sh
