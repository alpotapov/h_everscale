#!/bin/bash

# (cd ../../ && yarn deploy --network ropsten)

docker build --tag alpotapov/h_everscale:latest --platform linux/amd64 .

docker tag alpotapov/h_everscale registry.heroku.com/everscale-app/web

docker push registry.heroku.com/everscale-app/web