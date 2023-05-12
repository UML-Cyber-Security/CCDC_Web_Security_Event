resource "digitalocean_droplet" "vms" {
  for_each = toset(var.vm_list)

  name     = "${each.key}-web"
  size     = "s-1vcpu-512mb-10gb"
  image    = "ubuntu-22-04-x64"
  region   = "nyc1"
  ssh_keys = ["33:c5:bc:b9:8c:90:4b:55:1a:fa:f1:d8:63:e4:6c:24"]
}
