#!/bin/bash

APP_STAGE="staging"

export AWS_ACCESS_KEY_ID=YOLO
export AWS_SECRET_ACCESS_KEY=YOLO

if [ "$TRAVIS_BRANCH" == "master" ]; then
  APP_STAGE="production"
fi

if [ "$TRAVIS_BRANCH" == "master" ]; then
  echo ""
  echo "Setting Node.js runtime environment"
  echo ""

  sed -i "s|local|$APP_STAGE|g" $TRAVIS_BUILD_DIR/serverless.yml

  echo ""
  echo "Deploying to AWS Lambda"
  echo ""

  npm install serverless --global

  serverless deploy --stage $APP_STAGE
fi