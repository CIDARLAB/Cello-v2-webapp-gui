#!/bin/bash
git checkout develop
git branch -D production
git push origin --delete production
git checkout -b production
npm install
ionic build --prod
rm -rf $(ls | grep -v www)
cp -r www/* .
rmdir www
rm .travis.yml
git add .
git commit -S -m 'Publishing to `production` branch.'
git push -u origin production
git checkout develop
