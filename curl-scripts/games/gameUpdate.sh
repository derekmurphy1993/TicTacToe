#!/bin/bash

curl --include --request PATCH "https://sei-library-api.herokuapp.com/books/" \
  --header "Content-type: application/json" \
  --data '{
    "games": [
        {
          "id": 1,
          "cells": ["o","x","o","x","o","x","o","x","o"],
          "over": true,
          "player_x": {
            "id": 1,
            "email": "and@and.com"
          },
          "player_o": null
        }
      },
echo
