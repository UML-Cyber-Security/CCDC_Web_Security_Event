# Task 4 - Access Control Lists Walkthrough 
## What is a Access Control List
Access Control Lists (ACL) are structures, that we use to define as set of rules. We use these rules to determine if the connection we are receiving is going to be accepted or rejected. This is of course based off of the conditions that we specify in the ACL. We have just described (in a simple way!) what a Network ACL is, there are additional catagories and applications of ACLs; One such example is their use in File Systems - in that case they determine if actions can be taken on certain files or directories based on the rules we define.
## Why do we want to utilize Access Control List 

## Common Use cases of Access Control List
Access Control Lists are not only found in proxies, we can find them implemented in routers, both physical and virtual (in the case of AWS). Their implementation in the routers, are used in a similar manner to their use in proxies. We can use them to limit  


as mentioned earlier an implementation can be found in File Systems. 

## Solutions
As with the firewall solution, we have provided two equivalent solutions. Students are only required to produce the <ONE-OF-Them> solution. 

We wish to point out theses solutions do not utilize TLS, the addition of TLS and other options will not affect the use of ACLs as they are used in this manner. 

### Nginx Implementation 

### HaProxy Implementation

