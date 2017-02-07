#!/usr/bin/env bash

echo "deploy start"
echo "Project Name : NBP_Project"

#SCP File Transfer
while read ssh_user ssh_ip;
do
    echo "scp($(dirname "$PWD") to ${ssh_user}@${ssh_ip}:/home/ubuntu1"
    scp -prq $(dirname "$PWD") "${ssh_user}@${ssh_ip}:/home/ubuntu1" &
done < server_list


#IP Address Change(web1, web2)
while read ssh_user ssh_ip;
do
    echo "ssh "${ssh_user}@${ssh_ip}" sh < ssh_change_ip.sh"
    ssh "${ssh_user}@${ssh_ip}" sh < ssh_change_ip.sh &
done < server_list

echo "deploy end"
exit 0


#echo "deploy start"
#
#cd ..
#DevDirectory=$PWD
#cd ..
#
#DeployDirectory=$PWD'/Deploy'
#if [ -d "$DeployDirectory" ]
#then
#    rm -rf Deploy
#    echo "$DeployDirectory found."
#fi
#
#cp -r $DevDirectory Deploy
#cd Deploy/shell_script
#python change_ip.py
#
#echo "current directory : $PWD"
#
#while read ssh_user ssh_ip;
#do
#    echo "ssh : ${ssh_user}@${ssh_ip} delete Deploy Directory"
#    ssh ${ssh_user}@${ssh_ip} sh < deleteDeply.sh
#    echo "scp : ${ssh_user}@${ssh_ip}"
#    scp -r ../../Deploy "${ssh_user}@${ssh_ip}:/home/ubuntu1"
#done < server_list