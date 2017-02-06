#!/usr/bin/env bash
echo "deploy start"

cd ..
DevDirectory=$PWD
cd ..

DeployDirectory=$PWD'/Deploy'
if [ -d "$DeployDirectory" ]
then
    rm -rf Deploy
    echo "$DeployDirectory found."
fi

cp -r $DevDirectory Deploy
cd Deploy/shell_script
python change_ip.py

echo "current directory : $PWD"

while read ssh_user ssh_ip;
do
    echo "ssh : ${ssh_user}@${ssh_ip} delete Deploy Directory"
    ssh ${ssh_user}@${ssh_ip} sh < deleteDeply.sh
    echo "scp : ${ssh_user}@${ssh_ip}"
    scp -r ../../Deploy "${ssh_user}@${ssh_ip}:/home/ubuntu1"
done < server_list