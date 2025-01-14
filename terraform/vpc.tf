module "vpc" {
    source = "terraform-aws-modules/vpc/aws"
    name = "type-node-app-vpc-v4"
    cidr    = "10.0.0.0/16"
    azs     = ["us-east-1a", "us-east-1b"]
    
    
    public_subnets  = ["10.0.1.0/24", "10.0.2.0/24"]
    private_subnets = ["10.0.3.0/24", "10.0.4.0/24"]

    enable_nat_gateway = true
    enable_dns_support = true
    enable_dns_hostnames = true

  public_subnet_tags = {
    "kubernetes.io/role/elb" = "1"
    "kubernetes.io/cluster/type-node-app-eks-v1" = "shared"
  }

  private_subnet_tags = {
    "kubernetes.io/role/internal-elb" = "1"
    "kubernetes.io/cluster/type-node-app-eks-v1" = "shared"
  }

    
}

resource "aws_subnet" "public" {
  for_each                 = toset(module.vpc.public_subnets)
  vpc_id                   = module.vpc.vpc_id
  cidr_block               = each.value
  availability_zone        = element(module.vpc.azs, index(module.vpc.public_subnets, each.value))
  map_public_ip_on_launch  = true
}