#! /bin/bash

if [ "$EUID" -ne 0 ]
  then echo "Please run as root"
  exit
fi

python3 -m pip --no-input install --user ansible

apt-get install expect -y 