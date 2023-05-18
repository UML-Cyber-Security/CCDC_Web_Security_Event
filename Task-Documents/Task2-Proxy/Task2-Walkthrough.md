# Task 3 - Proxy Implementation Walkthrough
You must set up the nginx proxy on the proxy machine available for this task. You can either use a docker container or run the proxy on the machine directly (called bare-metal).

I will first show the solution with docker in part a, and then bare-metal in part b.

## a. Docker
Here is the nginx docker image: <https://hub.docker.com/_/nginx/> 

You can create the configuration file on your system and link it to the docker container as a volume to /etc/nginx/nginx.conf. In this file, you must define to the proxy how to accept connections and where to forward those connections to. Skip to part c to see what to put in this file.

Then you can start the container with: 
```
docker run --name my-nginx --hostname nginx -p 8080:80 \
--volume /path/to/file/on/your/system/nginx.cfg:/etc/nginx/nginx.conf \
--restart always nginx:latest
```
The proxy server should work now if you visit its IP address.

## b. Bare-metal
Otherwise, you can simply install it on the proxy machine with `sudo apt install nginx`

You must create the configuration file in `/etc/nginx/sites-enabled/default`
In this file, you must define to the proxy how to accept connections and where to forward those connections to. Skip to part c to see what to put in this file.

Once your configuration file is complete, run `sudo apt start nginx` to start the proxy server. It should work now.

## c. Configuration file
```
# Set the user and group for nginx to run under
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

# Configure the HTTP module
http {
  # Define the main server block
  server {
    # Listen on port 8080 for incoming requests
    listen 8080;
  
    # Redirect requests for hello.com to the backend server
    if ($host = <WEBSITE NAME>.com) {
        return 301 http://<BACKEND IP>:80$request_uri;
    }    

    # Define the proxy settings
    location / {
      # Proxy all requests to the specified backend server
      proxy_pass http://<BACKEND IP>:80;
  
      # Preserve the original client IP address in the X-Forwarded-For header
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
  }
}
```
