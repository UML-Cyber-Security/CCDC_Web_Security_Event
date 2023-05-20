# Task 1 - Wireshark     

Type1:
The "website name" is still communicating with HTTP. This protocol is known to have a vulnerability that lets an attacker sniff user id and password. Find a way to exploit this vulnerability by capturing the credentials once entered in the website. Additionally we cannot give you the password to the manager account, as we have lost it. You may be able to capture it as we have detected some logins.

## Expected Outcome  
* Access the remote machine using rdp
  * This will be done with the provided credentials
* Utilize Wireshark to see unencrypted HTTP traffic
* Utilize Wireshark to gather credentials of the manager account
  * What could they use to login? (Some of these are random words)
    * SSH
    * FTP
    * rlogin
    * SFTP
    * FSTPS
    * HTTP
    * Telnet
    * PHD
    * Telephone
    * rsh
* Login to Manager Account
