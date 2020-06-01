sudo rm -rf \$(xcode-select -print-path)
xcode-select --install

npm run generate -- class @shared/user-constraints-file/UserConstraintsFile --type=model
