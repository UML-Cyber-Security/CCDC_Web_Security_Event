# Task 1 - Wireshark Walkthrough    
  


## **AIM :**
  The task is to prove that the credentials entered in the admin panel of the webpage can be captured.
  
## **Tools:**
  Wireshark (Installed on the system) or tcpdump (Installed on the system), patience.
  
## **Wireshark Implementation**

Wireshark is a network protocol analyzer, or an application that captures packets from a network connection, such as from your computer to your home office or the internet.
  
So when the communication happens between the client(your browser) and server (webpage), the Wireshark tool captures those network packets which can be analyzed.
Here in our task, when user credentials are entered in the admin site these are captured by Wireshark and can be viewed by using appropriate filters.
As the website is using http, the credentials are being sent over the network unencrypted, due to which once there are captured by the Wireshark the attacker can view the actual credentials in plain-text.

### **Procedure**

Step0: Open Wireshark, this can be done using the terminal, or the application finder. Both methods are shown below
<p float="left">
  <img src="Images/WS-OpenTerm.png" width="300" />
  <img src="Images/WS-OpenFind.png" width="300" /> 
</p>

 Step1: Select the network interface you want to listen on. Once selected, click on *Capture* and Wireshark will start sniffing network packets. We can select **eth0** or to be safe **any** as shown below by double clicking the interface.
<p float="left">
  <img src="Images/WS-Select.png" width="600" />
</p>
 Step2: In your browser, add "/admin" at the end of the current url to open the admin site, where you can see placeholders for the credentials.
 <p float="left">
  <img src="Images/BT-Admin.png" width="600" />
</p>
 Step3: Wireshark in the background will be capturing the data packets, now enter the login credentials in the admin page.
 
 Step4: Stop the capturing process in the Wireshark. As Wireshark captures every data packet it is obvious the output is overwhelming.
 
 Step5: To find the necessary data (credentials in our case) from that heap, Wireshark filters need to be used.
 
 Step6: There are several different filters that can be used to eliminate unnecessary data from the generated output. A few easy examples of those filters are, using protocol name (http, telnet, ssh), using source ip (ip.src == X.X.X.X) and destination ip (ip.dst == X.X.X.X) to name a few. Below we show captures of HTTP and Telnet traffic.
 <p float="left">
  <img src="Images/WS-HTTP.png" width="300" />
  <img src="Images/WS-Telnet.png" width="300" />
 </p>
 Step7: The filtered output will be relatively less complex. When a packet is selected, at the bottom, detailed information about the packet is given. Look for the packets which send login information and expand it to learn more about the data being sent out/received. Unencrypted user credentials are available in one of these packets.
  
This proves that, a http website transfers unencrypted data and if a attacker captures these packets plain text data is leaked.


**You should search through telnet traffic for a username and password you can use**.
  
  
  
  
## **tcpdump Implementation**

  Tcpdump is a network packet analyzer which mostly works like the wireshark but tcpdump is cli (command line interface) tool.
  
  Similar to wireshark, even here we filter the collected packets using certain filters but these filter and the capturing process is done by CLI commands.
  
  
### **Procedure**

  Step1: Install tcpdump on your system. In terminal/command prompt enter installation commands 
  
                                  sudo apt-get update
                                  sudo apt-get install tcpdump
  
  Step2: Just like in wireshark, where we select which interface to work on, even in tcpdump interface needs to be mentioned before the process starts.
  to see the list of interfaces that are elibible to list use the command:
  
                                  sudo tcpdump -D
                                  
  Step3: Without using proper filters the output given by tcpdump will be closely impossible to understand. To avoid this the ideal way is to mention certain things like, port number, protocol, source ip, destination ip. 
                              
                                  sudo tcpdump -i all -A port 8000
                                  
  This command runs using sudo privilages. where:
                                                -i all says to listen on app interfaces, in place of all proper interface can be used to reduce complexity.
                                                -A Prints the packet contents as ASCII text. This allows you to see the HTTP payload data in a readable format.
                                                port 8000 role is to listen on 8000 port. 

  


