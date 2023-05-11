#! /usr/bin/expect -f
spawn telnet $1
expect -re "login"
send "manager\n"
expect -re "Password"
send "WellThisIsGood\n" # Will need to change passwords 
sleep 5
expect "WAP" # What is this - A telnet specific thing as far as I can tell...
send "exit\n"