#! /usr/bin/expect -f
spawn telnet $1
expect -re "login"
send "worker\n"
expect -re "Password"
send "ThisIsAGreatPassword\n"
sleep 5
expect "WAP" # What is this - A telnet specific thing as far as I can tell...
send "exit\n"