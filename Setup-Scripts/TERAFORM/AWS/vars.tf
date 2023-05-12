variable "vpc_name" {
  type    = string
  default = "Web_Security_VPC"
}

variable "vpc_cidr" {
  type    = string
  default = "10.0.0.0/16"
}

variable "Availability_Zones" {
  type    = list(string)
  default = ["us-east-1a", "us-east-1b"]
}

variable "Public_Subnets" {
  type    = list(string)
  default = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
}

variable "Private_Subnets" {
  type    = list(string)
  default = ["10.0.4.0/24", "10.0.5.0/24", "10.0.6.0/24"]
}

variable "image_id" {
  type    = string
  default = "ami-007855ac798b5175e"
}

#variable "instance_name" {
#type    = string
#default = "blackteam"
#}

variable "key_name" {
  type    = string
  default = "Blackteam"
}

variable "hd_size" {
  type    = number
  default = 12
}

#variable "BT_Pub_Ip" {

# type    = string
#default = "10.0.1.10}"
#}

variable "team_count" {

  type    = number
  default = 20
}