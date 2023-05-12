module "vpc" {
  source = "terraform-aws-modules/vpc/aws"

  name = var.vpc_name
  cidr = var.vpc_cidr

  azs             = var.Availability_Zones
  public_subnets  = var.Public_Subnets
  private_subnets = var.Private_Subnets


  enable_nat_gateway   = true
  single_nat_gateway   = true
  enable_dns_hostnames = true
  enable_dns_support   = true



  tags = {
    name      = var.vpc_name
    Terraform = "true"

  }
}