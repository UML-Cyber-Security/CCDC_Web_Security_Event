# Briefing 
## Why they want to do this
At this point we have implemented SSL and access controls on the site using a reverse proxy. However we can still bypass the proxy by directing our traffic directly to the web application on **port 8080**

**Show Example using a preset site**:
1. Ensure Site is up and proxy is configured
2. Direct web browser to 443, attempt to access admin page (fail)
3. Direct web browser to 8080, attempt to access admin page (hopefully work)

**NOTE**: The Proxy will be a local nginx instance
## Why Docker will work
Docker networks are separate from the one the host system uses. Unless we use port mappings the **-p \<host-port\>:\<container-port\>** flag, a container is not accessible over the network. 