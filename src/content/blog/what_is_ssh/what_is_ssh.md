---
title: 'What is SSH?'
description: 'The Secure Shell Protocol (SSH) is a way to connect to remote environments. In this article, we explore SSH and its application in more detail.'
author: 'Javier'
timestamp: '2025-11-25T15:45:05.000Z'
# devtoUrl: ''
image: './what_is_ssh_cover.png'
social_image: './what_is_ssh_og.png'
draft: false
type: 'Explainer'
---

Updated <time datetime="2026-02-19T17:40:00.000Z">February 19, 2026</time>

---

## Table of contents

- [What is SSH?](#what-is-ssh)
  - [What is SSH used for?](#what-is-ssh-used-for)
  - [How SSH Keys are created?](#how-ssh-keys-are-created)
  - [How are SSH Keys verified?](#how-are-ssh-keys-verified)
- [Common SSH commands and what they do](#common-ssh-commands-and-what-they-do)
- [Are there differences between SSH on macOS, Windows, and Linux?](#are-there-differences-between-ssh-on-macos-windows-and-linux)
- [Closing thoughts](#closing-thoughts)
- [References](#references)

---

**TLDR:** In a nutshell, SSH is a way to connect computers over the internet, while keeping messages private. Data sent over SSH is encrypted, so if someone were to listen to the communication between a client and a server that are connected via SSH, all messages would be (almost) impossible to decode, so the data stays secure.

---

## What is SSH?

SSH stands for Secure Shell, and is a protocol for remote access and authentication. It lets you log into servers without typing a password, and instead uses a set of two keys, one public and the other private, for authentication and to encrypt/decrypt messages between the server and client.

### What is SSH used for?**

Some of the applications where SSH is used are:

- **Remote Login to Servers:** To log into remote machines and run shell commands on them. For example, developers use `ssh` to connect to cloud servers (like AWS EC2, DigitalOcean droplets, Raspberry Pi devices, etc.) and manage them.
- **Secure File Transfers:** To copy files to/from a server securely, using protocols like **SFTP** and **SCP** over SSH.
- **Git and Developer Workflows:** Services like GitHub, GitLab, and Bitbucket support SSH connections for pushing or pulling code.
- **Cloud Development:** Where you can use a local IDE and connect via SSH to a remote server, where all code created is actually run, without having to run it locally.
- **Secure Automation:** To perform tasks on other machines securely. For example, an automated backup script might use SSH to sync files from various servers to a central location.

### How SSH Keys are created?

In essence, SSH Keys are created from randomness and math applied to that randomness. When you create a key pair, the SSH protocol follows these steps:

- The SSH key-pair generator asks your local OS to generate a cryptographically secure random value.
- Once the random value is generated, it is passed to an algorithm that generates the private and public keys.
- The keys are stored as files, eg. `my_key` for the private key and `my_key.pub` for the public key.

The files generated with your keys will have the following structure:

- For **Public Keys**

`<Algorithm type> <Encoded key> <comment>`

So your public key might look like this:

```
ssh-ed25519 AAAAF3aqF1lZDI2PReAAAAIAlzxkUAvswU69Gr4RFGiSJz0fFkwPqWzToFHEk1XeN myUser@myUser
```

- For **Private Keys**

```
<Header indicating the beginning of the key>
<Encoded key>
<Header indicating the end of the key>
```
Which results in the file content for your private key, to look like this:

```
-----BEGIN OPENSSH PRIVATE KEY-----
A3paeO4zaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
QpLoRtOQAAACAJc8ZFAL7MFOvBRBuERRokic9HxZMAaU7wqBRxJNV3jQAAAJjD7fquw+36
rgAAAAtzc2gtZWQyNTUxOQAAACAJc8ZFAL7MFOvBRBuERRokic9HxZMAaU7wqBRxJNV3jQ
AAAEA5pPhN6n7L7uhM55xVYz2S6rh+2Ug3cYfa55aAhH5KNAlzxkUAvswU68FEG4RFGiSJ
z0fFkwBpTvCoFHEk1XeNAAAA94PatythdGhvdUB3aWNrYXRob3UBAg==
-----END OPENSSH PRIVATE KEY-----
```

### How are SSH Keys verified?

When you connect a client (eg. your own computer) to a server using SSH for the first time, the server will check that your private key matches the public key you gave it, without knowing the contents of the private key directly. The way the server checks if your computer is, in fact, authorized and has the right private key is by sending a challenge, which can only be answered correctly by the private key holder.

If the authentication is successful, your computer will then add the server to a list of `known_hosts` and the server adds the client to a list of `authorized_keys`.

After the server and client connection is established, they can exchange packets without requiring authentication for every packet. Instead, every packet sent is encrypted and can only be deciphered by the receiver using a shared secret, which is generated when the client is authenticated by the server.

## Common SSH commands and what they do

OpenSSH, which is the most common SSH implementation, comes with a suite of commands that you don’t need to master, but it’s useful to know what they are for.

- `ssh` is the **SSH client** itself. You use this to connect to a remote SSH server.

`ssh [user]@hostname [optional command]`

If you run `ssh mikkaihminen@server.com`, it will start an interactive shell on `server.com` as `mikkaihminen`.

- `ssh-keygen` is the **SSH key-pair generator**. Besides key creation, `ssh-keygen` can also convert key formats, change the passphrase, and show the fingerprint of a key.

`ssh-keygen` by default generates a key pair using a default algorithm.

If you want to customize the algorithm used, you can add the flag `-t <algorithm>`, and to add a comment, which is necessary for services like GitHub, add the flag `-C "myGithubUser@github.com"`.

  ```
 ssh-keygen -t ed25519 -C "your_email@example.com"
  ```

- `ssh-agent` is a background process that holds your keys. It is used by the `ssh` and `ssh-add` commands to access your keys.

- `ssh-add` is used to add your private key to the **ssh-agent**. When you run `ssh-add <path-to-private-key>`, it will store the key in memory via the `ssh-agent`. After this, whenever you use SSH, the agent will offer the key for authentication.

```
eval "$(ssh-agent -s)"   # start the ssh-agent in the background (Linux/Mac)
ssh-add ~/.ssh/id_ed25519   # add your key to the agent
```

## Are there differences between SSH on macOS, Windows, and Linux?

In short, no. SSH is available on all major operating systems, and it operates in the same manner regardless of the OS.

- **Linux:** SSH is usually pre-installed on almost every Linux distro. With commands like `ssh`, `ssh-keygen`, etc., are ready to be used. The default location for keys is `~/.ssh/` in your home directory.

- **macOS:** also comes with OpenSSH client pre-installed. In the Terminal app, you have `ssh`, `ssh-keygen`, etc., ready. Key files live in `/Users/<YourUser>/.ssh/`. The usage is virtually identical to Linux. The only minor difference is how the agent ties into the OS keychain. On Mac, when you add keys to the SSH agent, you can use the **Keychain** to store passphrases.

- **Windows:** Modern Windows 10 and Windows 11 include an **OpenSSH client**. You might need to enable it in Settings or via PowerShell the first time, but on recent versions it’s enabled by default. This means you can open **PowerShell** or **Command Prompt** and run `ssh`, `ssh-keygen`, etc., just like on Linux. The default `~/.ssh` directory on Windows is usually in your user folder, eg, `C:\Users\YourName\.ssh`.

In general, the **SSH key usage is very similar across Mac/Linux/Windows**, generate keys, store them in `~/.ssh/`, add the public key to the remote, etc. The differences are mostly in path syntax and some client behaviors.

One more minor difference: the `authorized_keys` file on a server is always in the `~/.ssh/authorized_keys` of the user *on that server*. That doesn’t change with the OS of the client, it depends on the server’s OS.

## Closing thoughts

By now, you have a better understanding of how SSH works and its applications, so the next step is for you to try using SSH to connect to a remote server. You can do just that by creating an account on Diploi and connecting to a server. If you need help along the way, just check our step-by-step guide explaining how to do it https://docs.diploi.com/building/add-ssh-key

Have a good one! 👋

---

## References

- [Original release of SSH during the USENIX Security Symposium 1996](https://www.usenix.org/legacy/publications/library/proceedings/sec96/full_papers/ylonen/index.html)
- [Tatu Ylönen personal website, creator of SSH](https://ylonen.org/index.html)
- [SSH explained by ssh.com](https://www.ssh.com/academy/ssh/)
- [Adding an SSH key in Diploi](https://docs.diploi.com/building/add-ssh-key)
- [SSH authentication explained by GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh)
- [How to generate SSH keys and connect to a service](/blog/how_to_generate_ssh_keys_using_ssh-keygen)
- [What is SSH randomart for?](/blog/what_is_ssh_randomart_for)
