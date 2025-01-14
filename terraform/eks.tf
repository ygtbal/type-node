module "eks" {
  source = "terraform-aws-modules/eks/aws"
  version = "19.21.0"
  cluster_name = "type-node-app-eks-v3"
  cluster_version = "1.24"
  vpc_id = module.vpc.vpc_id
  subnet_ids = module.vpc.public_subnets



  eks_managed_node_groups = {
    eks_nodes = {
      desired_capacity = 1
      max_capacity = 3
      min_capacity = 1
      instance_types = ["t2.micro"]
      subnet_ids = module.vpc.public_subnets
    }
  }
}