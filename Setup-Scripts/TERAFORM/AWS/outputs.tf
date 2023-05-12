output "team_pub_ip" {
  description = "Outputs the public ip address of every team's instance"
  value       = aws_instance.team.*.public_ip
}

