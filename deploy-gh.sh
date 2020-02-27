#!/bin/bash
git checkout develop
git branch -D gh-pages
git push origin --delete gh-pages
git checkout -b gh-pages
npm install
ionic cordova build browser --prod
rm -rf $(ls | grep -v www)
cp -r www/* .
rmdir www
rm .travis.yml
git add .
git commit -S -m "Publishing to gh-pages."
git push -u origin gh-pages
git checkout develop
