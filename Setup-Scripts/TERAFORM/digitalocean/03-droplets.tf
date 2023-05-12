resource "digitalocean_droplet" "vms" {
  for_each = toset(var.vm_list)

  name     = "${each.key}-web"
  size     = "s-1vcpu-512mb-10gb"
  image    = "ubuntu-22-04-x64"
  region   = "nyc1"
  ssh_keys = []
}
