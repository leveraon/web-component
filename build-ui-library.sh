#!/bin/bash
# Environment Variables
ARTIFACT=ui
BUILD_TARGET_FOLDER=dist/$ARTIFACT
echo "========================Building " $ARTIFACT " Component Start========================";
ng build $ARTIFACT --configuration $1
echo "========================Building " $ARTIFACT " Component End========================";

cd $BUILD_TARGET_FOLDER;
echo "========================UnPublish " $ARTIFACT " Start========================";
npm unpublish @leveraon/$ARTIFACT --force
echo "========================UnPublish " $ARTIFACT " End========================";
echo "========================Publish " $ARTIFACT " Start========================";
npm publish
echo "========================Publish " $ARTIFACT " End========================";


