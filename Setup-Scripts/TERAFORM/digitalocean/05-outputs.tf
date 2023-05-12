resource "local_file" "outputs" {
  filename = "${path.module}/ip_addrs.txt"
  content  = <<EOT
%{for idx in range(length(var.vm_list))~}
${var.vm_list[idx]}: ${digitalocean_droplet.vms[var.vm_list[idx]].ipv4_address}
%{endfor~}
  EOT
}
