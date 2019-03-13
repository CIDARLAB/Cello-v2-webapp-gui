#!/bin/bash
git checkout develop
git branch -D gh-pages
git push origin --delete gh-pages
git checkout -b gh-pages
npm install
ionic cordova build browser --prod
rm README.md
rm -rf src
rm node_modules
cp -r www/* .
rm .gitignore config.xml angular.json ionic.config.json package.json package-lock.json tsconfig.json tslint.json
rm -rf www node_modules resources e2e platforms plugins
git add .
git reset deploy-gh.sh
git commit -m "Publishing to gh-pages."
git push -u origin gh-pages
git checkout develop
