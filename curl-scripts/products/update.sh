#!/bin/bash

curl "https://app.salsify.com/api/v1/products/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "comment": {
      "SKU": "'${ID}'",
      "Item Name": "'${Item_Name}'",
      "Brand": "'${Brand}'",
      "Color": "'${Color}'",
      "MSRP": "'${MSRP}'",
      "Bottle Size": "'${Bottle_Size}'",
      "Alcohol Volume": "'${Alcohol_Volume}'",
      "Description": "'${Description}'"
    }
  }'

echo
