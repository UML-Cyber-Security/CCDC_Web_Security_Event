resource "aws_security_group" "blueteam_ssh_access" {

  name        = "Allow SSH and RDP"
  description = "Allows inbound ssh access"
  vpc_id      = module.vpc.vpc_id

  ingress {

    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["129.63.0.0/16"]
  }

  ingress {

    from_port   = 3389
    to_port     = 3389
    protocol    = "tcp"
    cidr_blocks = ["129.63.0.0/16"]
  }
  egress {

    from_port   = 0
    to_port     = 0
    protocol    = -1
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "Web_Day_SSH"
  }

}

resource "aws_security_group" "telnet_access" {

  name        = "Allow_Telnet "
  description = "Allows inbound Telnet access"
  vpc_id      = module.vpc.vpc_id

  ingress {
    from_port   = 23
    to_port     = 23
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = -1
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "Web_Day_Telnet"
  }

}

resource "aws_security_group" "web_access" {
  name        = "Web_Access"
  description = "Inbound Web access + Portainer"
  vpc_id      = module.vpc.vpc_id

  ingress {
    description = "Web_Container Access"
    from_port   = 8080
    to_port     = 8080
    protocol    = "tcp"
    cidr_blocks = ["129.63.0.0/16"]

  }
  ingress {
    description = "HTTP Access"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["129.63.0.0/16"]

  }

  ingress {
    description = "HTTPS Access"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["129.63.0.0/16"]

  }
  ingress {

    from_port   = 9443
    to_port     = 9443
    protocol    = "tcp"
    cidr_blocks = ["129.63.0.0/16"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]

  }

  tags = {
    Name = "Web_Day_HTTPS"
  }
}

resource "aws_security_group" "Score_Check_Access" {

  name        = "Scoring_Check_Access"
  description = "Scoring Engine access to BlueTeam instances"
  vpc_id      = module.vpc.vpc_id
  ingress {

    from_port   = 5000
    to_port     = 5000
    protocol    = "tcp"
    cidr_blocks = ["129.63.0.0/16"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]

  }
  tags = {
    Name = "score_check_access"
  }

}

resource "aws_security_group" "BlackTeam_Access" {
  name        = "BlackTeam_Access"
  description = "BlackTeam access to machines from EC2"
  vpc_id      = module.vpc.vpc_id
  ingress {
    description = "HTTP_Access"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["${aws_instance.blackteam.public_ip}/32"]

  }

  ingress {
    description = "HTTPS_Access"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["${aws_instance.blackteam.public_ip}/32"]

  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]

  }
  tags = {
    Name = "blackteam_access"
  }

}