#!/bin/bash

curl "https://app.salsify.com/api/v1/products/${SKU}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}" \

echo
