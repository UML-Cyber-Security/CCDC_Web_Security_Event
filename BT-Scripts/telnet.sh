#! /usr/bin/expect -f
set IP [lindex $argv 0];
spawn telnet $IP
expect -re "login"
send "manager\n"
expect -re "Password"
send "WellThisIsGood\n" 
sleep 5
expect "WAP" 
send "exit\n"