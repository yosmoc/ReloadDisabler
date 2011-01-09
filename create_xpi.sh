#!/bin/zsh
# this code is based on https://github.com/mooz/keysnail/blob/master/createpackage.sh

# create jar file
rm -f chrome/ReloadDisabler.jar
zip -r -0 chrome/ReloadDisabler.jar \
    content/*.{js,xul}

# create xpi file
rm -f xpi/ReloadDisabler.xpi
zip -r -9 xpi/ReloadDisabler.xpi \
    chrome/ReloadDisabler.jar \
    install.rdf
cp chrome.manifest.pack xpi/chrome.manifest
zip -j -9 xpi/ReloadDisabler.xpi xpi/chrome.manifest
rm -f xpi/chrome.manifest


    