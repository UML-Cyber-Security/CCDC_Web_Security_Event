#! /bin/bash 

###
# This takes one command line argument which is a file containing a list of Targets (newline seperated)
# It could be combined with the other scripts into just one. But where is the fun in that. 
###

readarray -t targetIPs < $1

for ip in "${targetIPs[@]}"
do
    ./loop-telnet ip &
done

read end