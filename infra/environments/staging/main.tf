locals {
  env = "staging"
}

provider "google" {
  project = "markusryoti"
  region  = "europe-north1"
  zone    = "europe-north1-a"
}

module "vpc" {
  source  = "../../modules/vpc"
  project = "${var.project}"
  env     = "${local.env}" 
}