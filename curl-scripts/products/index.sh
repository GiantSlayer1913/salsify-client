#!/bin/sh

curl "https://app.salsify.com/api/v1/products/" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
