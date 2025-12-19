# Complete Gitea Installation Guide
## From Zero to Deployment in Your Home Lab

This guide will walk you through setting up Gitea from scratch on your server.

---

## Table of Contents
1. [Prerequisites Check](#prerequisites-check)
2. [Installing Docker (if needed)](#installing-docker)
3. [Preparing Your Environment](#preparing-your-environment)
4. [Starting Gitea](#starting-gitea)
5. [Initial Gitea Configuration](#initial-gitea-configuration)
6. [Creating Your First Repository](#creating-your-first-repository)
7. [Migrating Your Code](#migrating-your-code)
8. [Setting Up SSH Access](#setting-up-ssh-access)
9. [Daily Usage](#daily-usage)
10. [Troubleshooting](#troubleshooting)

---

## Prerequisites Check

### Step 1: Check if Docker is installed

```bash
# Check Docker version
docker --version

# Check Docker Compose version
docker-compose --version
```

**Expected output:**
```
Docker version 20.10.x or higher
Docker Compose version 2.x.x or higher
```

If you see these versions, **skip to [Preparing Your Environment](#preparing-your-environment)**.

If not installed, continue to the next section.

---

## Installing Docker

Choose your operating system:

### For Ubuntu/Debian:

```bash
# Update package index
sudo apt update

# Install prerequisites
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common

# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Add Docker repository
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Start Docker service
sudo systemctl start docker
sudo systemctl enable docker

# Add your user to docker group (to run docker without sudo)
sudo usermod -aG docker $USER

# Log out and log back in for group changes to take effect
# Or run: newgrp docker
```

### For CentOS/RHEL/Fedora:

```bash
# Remove old versions
sudo yum remove -y docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine

# Install prerequisites
sudo yum install -y yum-utils

# Add Docker repository
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

# Install Docker
sudo yum install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Start Docker service
sudo systemctl start docker
sudo systemctl enable docker

# Add your user to docker group
sudo usermod -aG docker $USER
```

### Verify Docker Installation:

```bash
# Test Docker
docker run hello-world

# You should see: "Hello from Docker!"
```

---

## Preparing Your Environment

### Step 1: Transfer your project to the server

If you're working from your local machine, transfer the project files to your server:

```bash
# From your local machine (run this on your Mac):
# Replace SERVER_IP and SERVER_USER with your actual values
scp -r /Users/naspadstudio/Documents/Github/NaspadStudioWeb SERVER_USER@SERVER_IP:~/

# Example:
# scp -r /Users/naspadstudio/Documents/Github/NaspadStudioWeb admin@192.168.1.100:~/
```

Alternatively, you can clone from GitHub directly on your server:

```bash
# On your server:
cd ~
git clone https://github.com/yourusername/NaspadStudioWeb.git
cd NaspadStudioWeb
```

### Step 2: Navigate to your project directory

```bash
# SSH into your server (if not already)
ssh SERVER_USER@SERVER_IP

# Navigate to the project
cd ~/NaspadStudioWeb
```

### Step 3: Create environment file

```bash
# Copy the example environment file
cp .env.example .env

# Edit the environment file
nano .env
```

**Edit these values in `.env`:**

```bash
# Next.js Web Application Configuration
WEBAPP_PORT=3000

# Gitea Configuration
GITEA_HTTP_PORT=3001
GITEA_SSH_PORT=2222
GITEA_DOMAIN=192.168.1.XXX  # Replace with your server's IP address

# Gitea Database Configuration
GITEA_DB_NAME=gitea
GITEA_DB_USER=gitea
GITEA_DB_PASSWORD=YourSecurePassword123!  # CHANGE THIS to a strong password
```

**To save in nano:**
- Press `Ctrl + O` (to write out/save)
- Press `Enter` (to confirm)
- Press `Ctrl + X` (to exit)

### Step 4: Find your server's IP address

```bash
# Find your IP address
ip addr show | grep "inet " | grep -v 127.0.0.1

# Or on some systems:
hostname -I
```

**Note the IP address** (e.g., 192.168.1.100) and update `GITEA_DOMAIN` in `.env` file.

---

## Starting Gitea

### Step 1: Start only Gitea services first

We'll start with just Gitea (without the web app) to make sure it works:

```bash
# Start Gitea and its database
docker-compose up -d gitea gitea-db
```

**What this does:**
- Downloads Gitea and PostgreSQL Docker images (first time only, may take 2-5 minutes)
- Creates Docker volumes for data persistence
- Starts Gitea on port 3001
- Starts PostgreSQL database

### Step 2: Check if services are running

```bash
# Check status
docker-compose ps

# You should see:
# gitea       Running
# gitea-db    Running
```

### Step 3: View logs (optional, but helpful)

```bash
# Watch Gitea startup logs
docker-compose logs -f gitea

# Wait until you see: "Starting new Web server: tcp:0.0.0.0:3000"
# Press Ctrl+C to stop watching logs
```

### Step 4: Verify Gitea is accessible

```bash
# Test if Gitea is responding
curl -I http://localhost:3001

# You should see: HTTP/1.1 200 OK
```

---

## Initial Gitea Configuration

### Step 1: Open Gitea in your browser

Open a web browser and go to:
- From the server: `http://localhost:3001`
- From another device: `http://YOUR_SERVER_IP:3001` (e.g., http://192.168.1.100:3001)

### Step 2: Initial Configuration Page

You'll see the "Initial Configuration" page. Most settings are pre-filled from your `.env` file.

**Database Settings** (Already configured, verify these):
- Database Type: `PostgreSQL`
- Host: `gitea-db:5432`
- Username: `gitea` (or what you set in .env)
- Password: (your password from .env)
- Database Name: `gitea`

**General Settings:**

1. **Site Title**
   - Enter: `Naspad Studio Git` (or your preferred name)

2. **Server Domain**
   - Enter your server's IP: `192.168.1.XXX`
   - Or use: `localhost` if only accessing locally

3. **Gitea Base URL**
   - Enter: `http://192.168.1.XXX:3001/`
   - Or: `http://localhost:3001/` if only local

4. **SSH Server Port**
   - Keep: `22` (this is the port inside the container)
   - External SSH will use port `2222` (already configured in docker-compose)

5. **HTTP Listen Port**
   - Keep: `3000` (this is inside the container)
   - External access uses `3001` (already configured)

**Optional Settings** (Click "Optional Settings" to expand):

1. **Email Settings** (Optional for home lab)
   - Can skip if you don't need email notifications

2. **Server and Third-Party Service Settings**
   - **Disable Gravatar**: Check this if you want faster loading
   - **Enable Local Mode**: Check this for home lab (no external connections)
   - **Require Sign-In to View Pages**: Check this if you want private Git server

3. **Administrator Account Settings** (IMPORTANT!)
   - **Administrator Username**: `admin` (or your preferred username)
   - **Password**: Enter a strong password
   - **Confirm Password**: Re-enter password
   - **Email Address**: Your email (can be fake for home lab like `admin@homelab.local`)

### Step 3: Complete Installation

Click the **"Install Gitea"** button at the bottom.

**Wait 10-30 seconds** while Gitea sets up the database.

### Step 4: First Login

After installation completes, you'll be redirected to the home page.

1. Click **"Sign In"** in the top right
2. Enter your admin username and password
3. You're now logged in to your Gitea instance!

---

## Creating Your First Repository

### Step 1: Create a new repository

1. Click the **"+"** icon in the top right
2. Select **"New Repository"**

### Step 2: Fill in repository details

- **Owner**: Your username (pre-selected)
- **Repository Name**: `NaspadStudioWeb`
- **Description**: `Naspad Studio website repository`
- **Visibility**:
  - ✅ Make Repository Private (for home lab)
  - Or ⬜ Public if you want
- **Initialize Repository**:
  - ⬜ Do NOT check any boxes (we'll push existing code)

### Step 3: Create repository

Click **"Create Repository"**

You'll see an empty repository with instructions. We'll use these in the next section.

---

## Migrating Your Code

You have two options: migrate from your existing GitHub or from your local repository.

### Option A: Migrate from GitHub (Easiest)

If your code is already on GitHub, Gitea can clone it directly:

1. In Gitea, click **"+"** → **"New Migration"**
2. Select **"GitHub"** as the source
3. Fill in:
   - **Clone Address**: Your GitHub repository URL
     - Example: `https://github.com/yourusername/NaspadStudioWeb`
   - **Owner**: Your username
   - **Repository Name**: `NaspadStudioWeb`
   - **Visibility**: Private or Public
4. Click **"Migrate Repository"**
5. Wait for migration to complete (30 seconds to 2 minutes)

**Done!** Your code is now in Gitea.

### Option B: Push from Local Repository

If you want to push your current code:

#### On your development machine (your Mac):

```bash
# Navigate to your project
cd /Users/naspadstudio/Documents/Github/NaspadStudioWeb

# Add your Gitea server as a remote
# Replace SERVER_IP with your actual server IP
git remote add homelab http://SERVER_IP:3001/admin/NaspadStudioWeb.git

# Example:
# git remote add homelab http://192.168.1.100:3001/admin/NaspadStudioWeb.git

# Push your code
git push homelab Feat/Hero:main

# You'll be prompted for username and password
# Username: admin (or your Gitea username)
# Password: your Gitea password
```

#### On your server:

If you want to push from the server where the code is:

```bash
# Navigate to your project
cd ~/NaspadStudioWeb

# Remove existing remote (if any)
git remote remove origin

# Add Gitea as the origin
git remote add origin http://localhost:3001/admin/NaspadStudioWeb.git

# Push your code
git push -u origin Feat/Hero:main

# Or push main branch:
# git push -u origin main
```

---

## Setting Up SSH Access

SSH access makes pushing/pulling code easier (no password needed each time).

### Step 1: Generate SSH key (if you don't have one)

**On your development machine (Mac):**

```bash
# Check if you already have an SSH key
ls -la ~/.ssh

# If you see id_rsa.pub or id_ed25519.pub, you already have a key, skip to Step 2

# Generate new SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Press Enter to accept default location
# Enter a passphrase (or press Enter for no passphrase)
```

### Step 2: Copy your public key

```bash
# Display your public key
cat ~/.ssh/id_ed25519.pub

# Or if you have RSA key:
# cat ~/.ssh/id_rsa.pub

# Copy the entire output (starts with ssh-ed25519 or ssh-rsa)
```

### Step 3: Add SSH key to Gitea

1. In Gitea, click your **profile picture** → **Settings**
2. Go to **"SSH / GPG Keys"** tab
3. Click **"Add Key"**
4. Fill in:
   - **Key Name**: `My Mac` (or any name you want)
   - **Content**: Paste your public key
5. Click **"Add Key"**

### Step 4: Test SSH connection

```bash
# Test SSH connection to Gitea
# Replace SERVER_IP with your server IP
ssh -T -p 2222 git@SERVER_IP

# Example:
# ssh -T -p 2222 git@192.168.1.100

# You should see: "Hi there, admin! You've successfully authenticated..."
```

### Step 5: Update your Git remote to use SSH

```bash
# Navigate to your project
cd /Users/naspadstudio/Documents/Github/NaspadStudioWeb

# Update remote URL to use SSH
# Replace SERVER_IP with your server IP
git remote set-url homelab ssh://git@SERVER_IP:2222/admin/NaspadStudioWeb.git

# Example:
# git remote set-url homelab ssh://git@192.168.1.100:2222/admin/NaspadStudioWeb.git

# Test by pushing
git push homelab Feat/Hero

# This time, no password needed!
```

---

## Daily Usage

### Common Git Commands with Gitea

```bash
# Clone a repository from your Gitea
git clone http://SERVER_IP:3001/admin/NaspadStudioWeb.git
# Or with SSH:
git clone ssh://git@SERVER_IP:2222/admin/NaspadStudioWeb.git

# Check remotes
git remote -v

# Push changes
git add .
git commit -m "Your commit message"
git push homelab main

# Pull changes
git pull homelab main

# Create a new branch
git checkout -b feature/new-feature
git push homelab feature/new-feature
```

### Accessing Gitea

- **Web Interface**: `http://SERVER_IP:3001`
- **Git Clone (HTTPS)**: `http://SERVER_IP:3001/username/repo.git`
- **Git Clone (SSH)**: `ssh://git@SERVER_IP:2222/username/repo.git`

### Managing Gitea with Docker

```bash
# View Gitea logs
docker-compose logs -f gitea

# Restart Gitea
docker-compose restart gitea

# Stop Gitea
docker-compose stop gitea

# Start Gitea
docker-compose start gitea

# Stop everything
docker-compose down

# Start everything
docker-compose up -d
```

---

## Troubleshooting

### Problem: Can't access Gitea web interface

**Check if services are running:**
```bash
docker-compose ps
```

**Check if port is accessible:**
```bash
# On server
curl http://localhost:3001

# From another device
curl http://SERVER_IP:3001
```

**Check firewall:**
```bash
# Ubuntu/Debian
sudo ufw status
sudo ufw allow 3001/tcp

# CentOS/RHEL
sudo firewall-cmd --permanent --add-port=3001/tcp
sudo firewall-cmd --reload
```

**View logs:**
```bash
docker-compose logs gitea
```

### Problem: Database connection failed

**Restart database:**
```bash
docker-compose restart gitea-db
docker-compose restart gitea
```

**Check database logs:**
```bash
docker-compose logs gitea-db
```

### Problem: "Repository does not exist" when pushing

**Ensure repository was created in Gitea web interface first.**

**Check remote URL:**
```bash
git remote -v

# Should show:
# homelab  http://SERVER_IP:3001/username/repo.git
```

### Problem: SSH connection refused

**Check SSH port:**
```bash
# Test connection
telnet SERVER_IP 2222

# Or
nc -zv SERVER_IP 2222
```

**Check firewall:**
```bash
# Ubuntu/Debian
sudo ufw allow 2222/tcp

# CentOS/RHEL
sudo firewall-cmd --permanent --add-port=2222/tcp
sudo firewall-cmd --reload
```

### Problem: Forgot admin password

**Reset password:**
```bash
# Enter Gitea container
docker-compose exec gitea bash

# Change user password (replace 'admin' with your username)
gitea admin user change-password --username admin --password NewPassword123

# Exit container
exit
```

### Problem: Need to completely reset Gitea

```bash
# Stop everything
docker-compose down

# Remove all data
docker volume rm naspadstudioweb_gitea-data naspadstudioweb_gitea-db-data

# Start fresh
docker-compose up -d gitea gitea-db
```

---

## Backup Your Gitea Data

### Quick Backup

```bash
# Stop Gitea
docker-compose stop gitea

# Create backup directory
mkdir -p ~/gitea-backups

# Backup data
docker run --rm \
  -v naspadstudioweb_gitea-data:/data \
  -v ~/gitea-backups:/backup \
  alpine \
  tar czf /backup/gitea-backup-$(date +%Y%m%d-%H%M%S).tar.gz /data

# Backup database
docker-compose exec -T gitea-db pg_dump -U gitea gitea > ~/gitea-backups/gitea-db-$(date +%Y%m%d-%H%M%S).sql

# Start Gitea
docker-compose start gitea

echo "Backup completed! Files saved in ~/gitea-backups"
```

### Restore from Backup

```bash
# Stop everything
docker-compose down

# Restore data
docker run --rm \
  -v naspadstudioweb_gitea-data:/data \
  -v ~/gitea-backups:/backup \
  alpine \
  sh -c "cd /data && tar xzf /backup/gitea-backup-YYYYMMDD-HHMMSS.tar.gz --strip-components=1"

# Start database
docker-compose up -d gitea-db

# Wait a few seconds
sleep 10

# Restore database
cat ~/gitea-backups/gitea-db-YYYYMMDD-HHMMSS.sql | docker-compose exec -T gitea-db psql -U gitea gitea

# Start everything
docker-compose up -d
```

---

## What's Next?

Now that Gitea is running, you can:

1. **Deploy your website**: Start the Next.js app
   ```bash
   docker-compose up -d webapp
   ```

2. **Create more repositories**: Use Gitea for all your projects

3. **Set up automated backups**: Use cron to run backup script daily

4. **Configure a reverse proxy**: Use Nginx or Traefik for SSL/TLS

5. **Enable CI/CD**: Gitea has built-in Actions (similar to GitHub Actions)

---

## Quick Reference Card

```bash
# Start Gitea
docker-compose up -d gitea gitea-db

# Stop Gitea
docker-compose stop gitea gitea-db

# View logs
docker-compose logs -f gitea

# Access Gitea
http://SERVER_IP:3001

# Clone repo (HTTPS)
git clone http://SERVER_IP:3001/username/repo.git

# Clone repo (SSH)
git clone ssh://git@SERVER_IP:2222/username/repo.git

# Backup
docker-compose exec -T gitea-db pg_dump -U gitea gitea > backup.sql
```

---

## Success Checklist

- ✅ Docker installed and running
- ✅ Project files on server
- ✅ `.env` file configured with secure password
- ✅ Gitea web interface accessible
- ✅ Administrator account created
- ✅ First repository created
- ✅ Code migrated to Gitea
- ✅ SSH key added (optional but recommended)
- ✅ Git operations working (push/pull)

**Congratulations! Your Gitea server is now fully operational!** 🎉

---

For more information:
- Gitea Documentation: https://docs.gitea.io
- Docker Documentation: https://docs.docker.com
- Git Documentation: https://git-scm.com/doc
