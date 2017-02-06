#!/usr/bin/env bash
echo "What is DB's IP?"
read ip
echo "DB's IP : $ip"
mongoimport --host=$ip -d test -c products --type csv --file data.csv --headerline
echo $?
exit
