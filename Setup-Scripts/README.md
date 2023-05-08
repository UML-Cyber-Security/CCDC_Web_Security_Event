This is a place for the scripts used to setup and configure the (basic) infrastructure

# Black Team Infrastructure 
The black team will need two machines 
* One machine for the score stack 
* One additional machine to act as a "Trusted Machine" by the others (ACL Check)
  * This machine can also be the one generating traffic for each team (Wireshark task) or that will be locally generated...

# Blue Team Infrastructure 
This "Infrastructure" is quite simple, so the main focus of this will be **what** needs to be installed on the system

The Infrastructure will be the following
* One Machine to host everything
* Optionally one additional machine if they wish to explore docker swarm


The Machine will need to have the following installed
* Docker
  * This would be done the method described on the docker website
* Nginx (Or HAProxy)
  * This would be installed but not started
* xrdp 
  * This would be what students use to get a GUI interface
  * Are configurations needed?
* Create 2 accounts 
  * Normal user account they will initially use
  * Sudo user account they will gain access to once the Wireshark task is completed  
* Wireshark
  * Used to complete Wireshark Task
* TCPdump
  * Backup to Wireshark
* Telnet
  * Install and configure so it can be used to login to the machine (Using the normal account)
* Pull Docker website container to the machine
* Pull the Proxy container to the machine 

 