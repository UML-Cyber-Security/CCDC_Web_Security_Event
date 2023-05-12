variable "do_token" {}

variable "vm_list" {
  type = list(any)
  default = [
    "team1",
    "team2",
  ]
}
