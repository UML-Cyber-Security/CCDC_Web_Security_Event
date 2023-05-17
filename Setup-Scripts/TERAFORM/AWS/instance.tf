resource "aws_instance" "team" {

  ami                         = var.image_id
  count                       = var.team_count
  key_name                    = var.key_name
  instance_type               = var.instance_type
  private_ip                  = "10.0.1.${5 + count.index}"
  subnet_id                   = module.vpc.public_subnets[0]
  associate_public_ip_address = true

  vpc_security_group_ids = [
    aws_security_group.blueteam_ssh_access.id,
    aws_security_group.telnet_access.id,
    aws_security_group.web_access.id
  ]

  root_block_device {
    delete_on_termination = true
    volume_size           = var.hd_size

  }

  tags = {

    Name = "team-${1 + count.index}"
  }
}
