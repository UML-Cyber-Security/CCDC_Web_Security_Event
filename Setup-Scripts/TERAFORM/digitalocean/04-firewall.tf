resource "digitalocean_firewall" "firewall" {
  name = "uml-access"

  droplet_ids = [for vm in digitalocean_droplet.vms : vm.id]

  inbound_rule {
    protocol         = "tcp"
    port_range       = "22"
    source_addresses = ["129.63.0.0/16"]
  }

  inbound_rule {
    protocol         = "tcp"
    port_range       = "23"
    source_addresses = ["129.63.0.0/16"]
  }

  inbound_rule {
    protocol         = "tcp"
    port_range       = "80"
    source_addresses = ["129.63.0.0/16"]
  }

  inbound_rule {
    protocol         = "tcp"
    port_range       = "443"
    source_addresses = ["129.63.0.0/16"]
  }

  inbound_rule {
    protocol         = "tcp"
    port_range       = "8080"
    source_addresses = ["129.63.0.0/16"]
  }

  inbound_rule {
    protocol         = "tcp"
    port_range       = "9443"
    source_addresses = ["129.63.0.0/16"]
  }

  outbound_rule {
    protocol              = "tcp"
    port_range            = "1-65535"
    destination_addresses = ["0.0.0.0/0"]
  }

  outbound_rule {
    protocol              = "udp"
    port_range            = "1-65535"
    destination_addresses = ["0.0.0.0/0"]
  }
}
