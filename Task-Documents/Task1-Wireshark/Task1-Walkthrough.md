# Task 1 - Wireshark Walkthrough    
  


**AIM :**
  The task is to prove that the credentials entered in the admin part of this page can be captured.
  
**Tools:**
  Wireshark (Installed on your device), tcpdump (needs to be installed), patience.
  
**Wireshark Implementation**

Wireshark is a network protocol analyzer, or an application that captures packets from a network connection, such as from your computer to your home office or the internet.
  
So when communication happen on the browser this wireshark captures those packets which can be analyzed.
Here in our task, when user credentials are entered in the admin site these are captured by wireshark and can be viewed by using proper filters.
As the website is using http, the credentials are communicated unencrypted, due to which once there are captured by the wireshark the attacker can view the actual credentials.

**Procedure**

 step1: Start wireshark. 
 
 step2: Add "/admin" at the end of the current url to open the admin site, where you can see placeholders for the credentials.
 
 step3: Wireshark in the background will be capturing the data packets, now enter the login credentials in the admin page.
 
 step4: Stop the capturing process in the wireshark. As wireshark captures every data packet its obivious the output is overwhelming.
 
 step5: Now to fetch necessary data (credentials in our case) from that heap, wireshark filters need to used.
 
 step6: There are several different filters that can be used to eliminate unnecessary data from the generated output. Few easy examples of those filters are, using protocol name (http), using source ip ().
 
 step7: The filtered output will be relatively less complex. When a packet is selected, at the bottom, detailed information about the packet is given. Unencrypted user credentials are available in one of these lines.
  
  This proves that, a http website transfers unencrypted data and if a attacker captures these packets plain text data is leaked.
  
  
  
  
**tcpdump Implementation**

  Tcpdump is a network packet analyzer which mostly works like the wireshark but tcpdump is cli (command line interface) tool.
  
  Similar to wireshark, even here we filter the collected packets using certain filters but these filter and the capturing process is done by CLI commands.
  
  
**Procedure**

  step1: Install tcpdump on your system. In terminal/command prompt enter installation commands 
  
                                  sudo apt-get update
                                  sudo apt-get install tcpdump
  
  step2: Just like in wireshark, where we select which interface to work on, even in tcpdump interface needs to be mentioned before the process starts.
  to see the list of interfaces that are elibible to list use the command:
  
                                  sudo tcpdump -D
                                  
  step3: Without using proper filters the output given by tcpdump will be closely impossible to understand. To avoid this the ideal way is to mention certain things like, port number, protocol, source ip, destination ip. 
                              
                                  sudo tcpdump -i all -A port 8000
                                  
  This command runs using sudo privilages. where:
                                                -i all says to listen on app interfaces, in place of all proper interface can be used to reduce complexity.
                                                -A Prints the packet contents as ASCII text. This allows you to see the HTTP payload data in a readable format.
                                                port 8000 role is to listen on 8000 port. 

  


