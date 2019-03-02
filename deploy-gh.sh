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
rm -rf www
rm ionic.config.json
rm package.json
rm package-lock.json
rm tsconfig.json
rm tslint.json
rm -rf node_modules
rm -rf resources
rm -rf e2e
rm config.xml
git add .
git reset deploy-gh.sh
git commit -m "Publishing to gh-pages"
git push -u origin gh-pages
git checkout develop
