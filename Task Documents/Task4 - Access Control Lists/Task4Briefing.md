# Briefing 
## What are ACLs

## Where and why are they used

## Structure of Nginx ACLs
Server block:
This is where we define what ports we bind to and in our case additional location blocks 

Location blocks
Specified within the server blocks they can refer to specific URLS (In reality when they are a page the user is accessing files on the filesystem - and this location block is specifying additional configurations)

In these Location blocks conditions can be defined that will lead to the blocking, or acceptance of a request (possibly)
## Resources they should look at
Location Block: https://www.digitalocean.com/community/tutorials/nginx-location-directive

Proxy Pass: https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/
