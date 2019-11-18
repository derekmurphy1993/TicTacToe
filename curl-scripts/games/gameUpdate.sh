#!/bin/bash

curl 'https://tic-tac-toe-wdi.herokuapp.com/games/:id' \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{{
  "game": {
    "cell": {
      "index": "'"${INDEX}"'"
      "value": "'"${VALUE}"'"
}
}
    }'
echo
