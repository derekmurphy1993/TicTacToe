#!/bin/bash

curl --include --request PATCH "https://sei-library-api.herokuapp.com/books/" \
  --header "Content-type: application/json" \
  --data '{}'
echo
