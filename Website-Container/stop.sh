docker stop database website api-server
#Idk man it is handy to have the command to delete the containers. They aren't changing or anything
docker rm -f $(docker ps -aq)