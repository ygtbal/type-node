module "vpc" {
    source = "terraform-aws-modules/vpc/aws"
    name = "type-node-app-vpc"
    cidr    = "10.0.0.0/16"
    azs     = ["us-east-1a", "us-east-1b"]
    
    
    public_subnets  = ["10.0.1.0/28", "10.0.2.0/28"]
    private_subnets = ["10.0.3.0/28", "10.0.4.0/28"]
}