# Briefing 
## Why they want to do this
We want to limit access to only the necessary pages, and functions a normal user would need. There is no reason a normal user would need to access the admin page. This is commonly known as the [principle of least privilege](https://csrc.nist.gov/glossary/term/least_privilege#:~:text=Definition(s)%3A,needs%20to%20perform%20its%20function). We are not directly implementing the other part which is the [separation of duties](https://csrc.nist.gov/glossary/term/separation_of_duty#:~:text=Definition(s)%3A,one%20who%20can%20prepare%20them).   
## Structure of Nginx ACLs
Server block:
This is where we define what ports we bind to and in our case additional location blocks, they define the equivalent of a site or system in Nginx

Location blocks:
These are specified within the server blocks. They can refer to specific URLS or more general ones using regular expressions (In reality when they are a page the user is accessing files on the filesystem - and this location block is specifying additional configurations)
**Note**: The block we can use to forward **all** traffic is 
```
    listen / {}
```

In these location blocks we can be define conditions that will lead to the blocking, or acceptance of a request.
## Resources they should look at
Location Block: https://www.digitalocean.com/community/tutorials/nginx-location-directive
Proxy Pass: https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/
