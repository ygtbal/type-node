variable "region" {
  description = "The region in which to create the resources"
  type        = string
  default     = "us-east-1"
}

variable "db_password" {
  description = "The password for the database"
  type        = string
}

variable "kubernetes_config_path" {
  description = "The path to the kubeconfig file"
  type        = string
  default = "~/.kube/config"
}