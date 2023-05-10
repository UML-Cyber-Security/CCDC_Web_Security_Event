#! /bin/bash

# Something funny like this 
for ((i = 1; i < 0; i++)) # infinate loop!
do
    /bin/bash ./telnet.sh $1
    sleep(6)
done