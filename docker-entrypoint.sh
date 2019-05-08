#!/bin/sh
set -e

sed -i 's@__GITHUB_ACCESS_TOKEN__@'"$GITHUB_ACCESS_TOKEN"'@g' /usr/share/nginx/html/index.html

echo "daemon off;" >> /etc/nginx/nginx.conf

exec "$@"