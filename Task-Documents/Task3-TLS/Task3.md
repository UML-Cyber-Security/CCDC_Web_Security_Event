# Task 3 - Transport Layer Security  
## Outline
Now that you have the proxy set up in front of the web server, you must enable TLS so it can be accessed securely over HTTPS instead of just HTTP. We also want to make sure that all HTTP requests are simply upgraded to https. The latter would be the better one.

I would highly recommend using certbot for certificate creation.

**Read the briefing before beginning your work for some helpful information!**


## Expected Outcome
1. You are now able to access your website through `https://teamX.umlcyber.club`. Where X is your team number.
2. All HTTP requests are redirected to HTTPS.