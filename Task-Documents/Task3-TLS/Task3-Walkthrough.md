# Task 3 - Transport Layer Security Walkthrough
First you must create a certificate to use. We will use certbot to do so.

Install it like so:
```
sudo apt update
sudo apt install snapd
sudo snap install core
sudo snap refresh core
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
```

Then make a certificate:
```
sudo certbot --nginx
```

Make sure you take note of the files produced by this command so you can use the right file path in the configuration file.

Edit the nginx config file to look like this:
```
http {
  # Enable HTTPS by adding an additional server block listening on port 443
  server {
    # Listen on port 443 for incoming HTTPS requests
    listen 443 ssl;

    # Define the SSL certificate and private key paths
    ssl_certificate /path/to/your_certificate.crt;
    ssl_certificate_key /path/to/your_private_key.key;

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
 
