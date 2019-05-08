#!/bin/sh
set -e

sed -i 's@GITHUB_ACCESS_TOKEN@'"$GITHUB_ACCESS_TOKEN"'@g' /usr/share/nginx/html/index.html

echo "daemon off;" >> /etc/nginx/nginx.conf

exec "$@"