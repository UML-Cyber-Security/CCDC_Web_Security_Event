#! /bin/bash

declare -i teamNum
echo  "How many teams are there?"
read teamNum

# Boilerplate 
echo -e "blueteam:\n  hosts:" > inventory.yaml
for ((i=1;i<=$teamNum;i++))
do
    # Add some host information
    echo -e "    vm$i:\n      ansible_host: 10.0.$i.1" >> inventory.yaml
done

echo -e "  vars:\n    ansible_user: Default_User"