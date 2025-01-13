provider "aws" {
    region = var.region
}

provider "kubernetes" {
    config_path = var.kubernetes_config_path
}