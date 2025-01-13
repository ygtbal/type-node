output "eks_endpoint" {
    value = module.eks.cluster_endpoint
}

output "rds_endpoint" {
    value = aws_db_instance.postgres.endpoint
}