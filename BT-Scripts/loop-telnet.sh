#! /bin/bash

###
# This takes one command line argument this is the IP of the target 
###


# Something funny like this 
while : # infinate loop!
do
    ./telnet.sh $1 &
    sleep 20
done