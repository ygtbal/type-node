resource "aws_db_instance" "postgres" {
    allocated_storage = 20
    engine = "postgres"
    engine_version = "15"
    instance_class = "db.t3.micro"
    db_name = "postgres_db"
    username = "postgres"
    password = var.db_password
    vpc_security_group_ids = [aws_security_group.rds_sg.id]
    publicly_accessible = false
   db_subnet_group_name   = aws_db_subnet_group.rds_subnet_group.name 
}

resource "aws__db_subnet_group" "rds_subnet_group"  {
    name = "rds-subnet-group"
    subnet_ids = module.vpc.private_subnets
}

resource "aws_security_group" "rds_sg" {
    name = "rds-sg"
    vpc_id = module.vpc.vpc_id
    ingress {
        from_port = 5432
        to_port = 5432
        protocol = "tcp"
        cidr_blocks = ["10.0.0.0/16"]
    }
    egress {
        from_port = 0
        to_port = 0
        protocol = "-1"
        cidr_blocks = ["0.0.0.0/0"]
    }
}