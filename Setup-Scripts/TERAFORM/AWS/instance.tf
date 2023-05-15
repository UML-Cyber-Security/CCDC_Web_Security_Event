resource "aws_instance" "team" {

  ami                         = var.image_id
  count                       = var.team_count
  key_name                    = var.key_name
  instance_type               = "t2.micro"
  private_ip                  = "10.0.1.${5 + count.index}"
  subnet_id                   = module.vpc.public_subnets[0]
  associate_public_ip_address = true

  vpc_security_group_ids = [
    aws_security_group.blackteam_ssh_access.id,
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

#resource "aws_eip" "bt_eip" {

# vpc = true

#}

#resource "aws_eip_association" "bt_eip_association" {

# instance_id   = aws_instance.blackteam.id
#allocation_id = aws_eip.bt_eip.id
#}