#!/bin/bash

curl "https://app.salsify.com/api/v1/products/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}" \

echo
