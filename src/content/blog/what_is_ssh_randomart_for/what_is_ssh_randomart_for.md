---
title: 'Exploring the purpose of SSH randomart'
description: 'If you have generated SSH keys before, you probably have seen a randomart. Here we explore what they are used for.'
author: 'Javier'
timestamp: '2025-12-04T12:43:00.000Z'
# devtoUrl: ''
image: './what_is_randomart_cover.png'
social_image: './what_is_randomart_og.png'
draft: false
type: 'Explainer'
---

Updated <time datetime="2026-02-19T16:30:00.000Z">February 19, 2026</time>

---

## Table of contents

- [What is randomart?](#what-is-randomart)
  - [How randomart is generated](#how-randomart-is-generated)
- [Closing thoughts](#closing-thoughts)
- [References](#references)

---

Back when I was learning to code, one of the first things I did was to create a GitHub account and add a public key to connect via SSH. When I ran `ssh-keygen`, I thought that the output I should paste into GitHub was this peculiar-looking thing that showed up on my terminal:

```
+--[ED25519 256]--+
|        o..      |
|       o   .     |
|      . .   .    |
|     . o  o.    .|
|      . S .=   o.|
|     o   o= o . B|
|  . o R .o..  .=*|
|   =.+o+..o +..=o|
|  .+B*=..  . ooo+|
+----[SHA256]-----+
```

When I clicked save, the GitHub interface showed an error, since that is not the public key, but I was curious. Recently, while writing about SSH, I got curious and thought that this was my chance to explore what randomart is and why it exists.

Was it worth it? Not really, but it was fun. 😊

---

## What is randomart?

Plainly, randomart is a way to inspect content visually. Yep, that's it. Basically, if you have something that's hard to differentiate side by side, like hex values or encrypted content, you would use randomart images to differentiate them with (ideally) one glance.

Now, keep in mind that what is called "randomart" is applied to SSH key fingerprints only, so my plain explanation is not exactly true, but I like to explain things like we are all five.

Say you have these two values,

`20N5cT7sElnmVyqBCd3uMdY5f8bOuM7l` and `2ONSc7TsElnVmyqBCd3uMdY5f8b0vNTI`

They are quite similar to each other, but if we use randomart, the output looks like this instead,

```
20N5cT7sElnmVyqBCd3uMdY5f8bOuM7l becomes
+-----------------+
|         Eo      |
|         .o.     |
|           oo.   |
|         +oo.    |
|     o.+S=o+*=   |
|     o oo+  *B.. |
|     .. o+o=*=o+*|
|      .oo +o*=*OX|
|      .+**B==o=OE|
+---[TEXT  32]----+
```

and

```
2ONSc7TsElnVmyqBCd3uMdY5f8b0vNTI becomes
+-----------------+
|       ..        |
|     =Eoo.       |
|     Oo=..       |
|    .o.o =o      |
|    .. oS.=o     |
|    oo.OO.=o     |
|    o=o^E*==. =. |
|     **=*=O*O==  |
|     o*oOX%X^O.  |
+---[TEXT  32]----+
```

Which makes it much easier to catch that the two strings are, in fact, different.

We made an API where you can generate randomart from a string https://gen--randomart.diploi.me/

### How randomart is generated

When you generate an SSH key pair with `ssh-keygen`, OpenSSH calculates a **fingerprint** for your new public key. The fingerprint is a hash (for example, SHA256) of the public key, usually shown as a string like:

```text
SHA256:CmZUx6gCjQ7WdKC+...something-long...
```

That value is then passed to an algorithm, which takes each value on the fingerprint and calculates a position and a character on a grid of 9x17 cells. The algorithm starts from the center of the grid.

```
+-----------------+
|-----------------|
|-----------------|
|-----------------|
|-----------------|
|--------+--------|
|-----------------|
|-----------------|
|-----------------|
|-----------------|
+-----------------+
```

The algorithm used is called "Drunken Bishop", although in the original commit where randomart was introduced by Alexander von Gernler, he described it as "a worm crawling" and leaving traces.

So, the Drunken Bishop is a chess Bishop piece, who is drunk 😅. As the story goes, the Bishop starts walking from the center of the grid, going in random diagonals, and as it moves, it leaves a trail of coins on each cell it walks.

At the end of the walk, the algorithm checks the amount of coins in each cell to assign a character to it. For cells with no coins, the algorithm assigns a blank value.

Now, this is an oversimplification, check the paper from Dirk Loss, Tobias Limmer, and Alexander Von Gernler about how the Drunken Bishop algorithm works **in detail** at [https://www.dirk-loss.de/sshvis/drunken_bishop.pdf](https://www.dirk-loss.de/sshvis/drunken_bishop.pdf).

They did a deep analysis of the algorithm, and also explored how different the original fingerprint hash values are if a randomart image looks similar to another.

You can also check [the blog post from Alexander Von Gernler](https://undeadly.org/cgi?action=article&sid=20080615022750) and [the original commit](https://marc.info/?l=openbsd-cvs&m=121321826818823&w=2), where he introduces randomart to the OpenSSH standard, after being motivated by listening to a [talk by Dam Kaminsky](https://fahrplan.events.ccc.de/congress/2006/Fahrplan/events/1713.en.html).

## Closing thoughts

One thing to note is that you only see the randomart for a key when you create it, but you can revisit it later by adding the flag `-lv` to `ssh-keygen`. If you want to view the image for a specific public key, you can use the command `ssh-keygen -lv -f <path-to-private-key>/<private-key-file>`

Additionally, you can also show the randomart image when you are connecting via SSH to a server, by running the `ssh` command as `ssh -o VisualHostKey=yes user@your-server`.

---

That was fun, but maybe not the most important part thing to know about SSH, so if you are into the topic, definitely check our other posts going into [what is SSH](/blog/what_is_ssh) and [how to create an SSH key-pair and connect to a server](/blog/how_to_generate_ssh_keys_using_ssh-keygen).

So that's all from me now, I wish you a great day! 🙂‍↕️

---

## References

- [What is the randomart image for?](https://bytes.zone/posts/what-is-the-randomart-image-for/)
- [What are SSH fingerprint randomarts and why should I care?](https://medium.com/@elg0nz/what-are-ssh-fingerprint-randomarts-and-why-should-i-care-46d68a8ec027)
- [Dirk Loss, Tobias Limmer, Alexander von Gernler paper reviewing the Drunken Bishop algorithm](https://www.dirk-loss.de/sshvis/drunken_bishop.pdf)
- [Blog post from Alexander von Gernler about his idea for randomart and why it was necessary](https://marc.info/?l=openbsd-cvs&m=121321826818823&w=2)
- [What is SSH](/blog/what_is_ssh)
- [How to generate SSH keys and connect to a service](/blog/how_to_generate_ssh_keys_using_ssh-keygen)
