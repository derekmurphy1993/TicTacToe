#!/bin/bash

curl 'https://tic-tac-toe-wdi.herokuapp.com/games/:id' \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{
    "games": {
        {
          "id": 1,
          "cells": ["","","","","","","","",""],
          "over": true,
          "player_x": {
            "id": 1,
            "email": "and@and.com"
          },
          "player_o": null
        }
      }
    }'
echo
