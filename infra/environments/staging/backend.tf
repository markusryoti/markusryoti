terraform {
  backend "gcs" {
    bucket = "markusryoti-tfstate"
    prefix = "env/staging"
  }
}