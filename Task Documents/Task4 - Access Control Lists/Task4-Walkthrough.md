# Task 4 - Access Control Lists Walkthrough 
## What is a Access Control List
Access Control Lists (ACL) are structures, that we use to define as set of rules. We use these rules to determine if the connection we are receiving is going to be accepted or rejected. This is of course based off of the conditions that we specify in the ACL. We have just described (in a simple way!) what a Network ACL is, there are additional catagories and applications of ACLs; One such example is their use in File Systems - in that case they determine if actions can be taken on certain files or directories based on the rules we define.
## Why do we want to utilize Access Control List 
This is hopefully a simple question. We use ACLs to limit and control access to some resource.
## Common Use cases of Access Control List
Access Control Lists are not only found in proxies, we can find them implemented in routers, both physical and virtual (in the case of AWS). Their implementation in the routers, are used in a similar manner to their use in proxies. We can use them to limit or grant access based on a set of conditions that we define. There is also the use of ACLs in a filesystem as was mentioned earlier. 

## Solutions
As with the firewall solution, we have provided two equivalent solutions. Students are only required to produce the <ONE-OF-Them> solution. 

We wish to point out theses solutions do not utilize TLS, the addition of TLS and other options will not affect the use of ACLs as they are used in this manner. 

### Nginx Implementation 
1. Open the configuration file. Below is an example file with a single front end, and a single backend 
```
server {
    listen 80
    <whatever>

    proxy_pass <whatever> # Does this work for proxy? Will there need to be a location
}

```
1. Add the following block to the frontend to
```
# This will be the line inserted to the frontend
# Something Like this I think... Never done NGINX before - Dont even have one running yet
location /admin {
    allow <IP>
    allow <LOCALHOST>
    deny all
    proxy_pass 
}
```
1. Add similar sections for each page you would like to block

We will have the following configuration file once we have added the line specified above
```
    Entire Config
```

We must then restart the nginx service

**Docker**
1. Remove the existing Nginx container 
    * docker ps 
    * docker rm -f \<container-Name/ID\>
1. Start the new container, with the new configuration 
    * docker run -d -p 80:80 -p 443:443 --name \<name\> --network \<Proxy-Server-Network\>

**Non-Docker**
1. Restart Nginx
    * sudo systemctl restart nginx

####  Resources
1. https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/
1. https://docs.nginx.com/nginx/admin-guide/security-controls/controlling-access-proxied-tcp/
1. https://docs.nginx.com/nginx/admin-guide/security-controls/controlling-access-proxied-http/


### HaProxy Implementation
1. Open the configuration file. Below is an example file with a single front end, and a single backend 
```
This will be an example file
```
1. Add the following line to the frontend. This will handle allowing access to a page if the user is from a specific IP 
```
    acl network_allowed src \<ip1\> \<ip2\>
```
1. Add the following line to the frontend. This is the one that would be repeated for all paths we would like to block. 
```
    acl restricted_page path_beg /admin
```
1. Add the following line to the frontend, this is the instruction that will actually block the connection if the conditions listed are true.
```
    block if restricted_page !network_allowed
```

We will have the following configuration 
```
frontend fe
    bind *:80
    bind *:443
    acl network_allowed src <ip1> <ip2>
    acl restricted_page path_beg, url_dec -i /admin
    block if restricted_page !network_allowed
    use_backend be

backend be
    mode http 
    server s1 <IP-S1>:8080
```


Resources:
* https://raymii.org/s/snippets/haproxy_restrict_specific_urls_to_specific_ip_addresses.html -- This gives the whole thing... May want to find smaller docs to share