# Docker & Gitea Home Lab Setup

This guide will help you run your Naspad Studio website and Gitea on Docker in your home lab.

## What's Included

This setup provides:
- **Next.js Web Application** - Your Naspad Studio website running in a production-optimized container
- **Gitea** - Self-hosted Git service for version control
- **PostgreSQL** - Database backend for Gitea

## Prerequisites

- Docker Engine installed (version 20.10+)
- Docker Compose installed (version 2.0+)
- At least 2GB of free RAM
- Ports available: 3000 (webapp), 3001 (Gitea HTTP), 2222 (Gitea SSH)

## Quick Start

### 1. Configure Environment Variables

```bash
# Copy the example environment file
cp .env.example .env

# Edit the .env file and change the default values
nano .env  # or use your preferred editor
```

**Important:** Change `GITEA_DB_PASSWORD` to a secure password!

### 2. Build and Start Services

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Check status
docker-compose ps
```

### 3. Access Your Services

- **Web Application:** http://localhost:3000
- **Gitea:** http://localhost:3001

## Initial Gitea Setup

1. Open http://localhost:3001 in your browser
2. You'll see the initial configuration page
3. The database settings are pre-configured (via environment variables)
4. Configure the following:
   - **Site Title:** Your preferred name
   - **Administrator Account:** Create your admin user
   - **Server Domain:** Use your home lab IP or domain (e.g., `192.168.1.100` or `homelab.local`)
   - **Gitea Base URL:** Update to match your domain (e.g., `http://192.168.1.100:3001/`)
5. Click "Install Gitea"

## Migrating Your Repository to Gitea

### Option 1: Push Existing Repository

```bash
# Add Gitea as a new remote
git remote add homelab http://localhost:3001/yourusername/naspad-studio-web.git

# Push your code
git push homelab main
```

### Option 2: Mirror from GitHub

1. In Gitea, click "+" → "New Migration"
2. Select "GitHub"
3. Enter your GitHub repository URL
4. Click "Migrate Repository"

## Docker Commands Cheat Sheet

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# Restart services
docker-compose restart

# View logs
docker-compose logs -f [service-name]

# Rebuild after code changes
docker-compose up -d --build webapp

# Remove everything (including volumes/data)
docker-compose down -v
```

## Port Configuration

Default ports (configurable in `.env`):

| Service | Port | Environment Variable |
|---------|------|---------------------|
| Web App | 3000 | WEBAPP_PORT |
| Gitea HTTP | 3001 | GITEA_HTTP_PORT |
| Gitea SSH | 2222 | GITEA_SSH_PORT |

## Data Persistence

All data is stored in Docker volumes:
- `gitea-data` - Gitea repositories and configuration
- `gitea-db-data` - PostgreSQL database

To backup:
```bash
docker-compose down
docker run --rm -v naspadstudioweb_gitea-data:/data -v $(pwd):/backup alpine tar czf /backup/gitea-backup.tar.gz /data
docker-compose up -d
```

## Accessing from Other Devices

To access from other devices on your network:

1. Find your server's IP address:
   ```bash
   # macOS
   ifconfig | grep "inet "

   # Linux
   ip addr show
   ```

2. Update `.env`:
   ```
   GITEA_DOMAIN=192.168.1.XXX  # Your server IP
   ```

3. Access from other devices:
   - Web App: `http://192.168.1.XXX:3000`
   - Gitea: `http://192.168.1.XXX:3001`

## Using a Custom Domain

If you have a local DNS or host file setup:

1. Update `.env`:
   ```
   GITEA_DOMAIN=git.homelab.local
   ```

2. Update your DNS or `/etc/hosts`:
   ```
   192.168.1.XXX  git.homelab.local
   ```

3. Access Gitea at: `http://git.homelab.local:3001`

## Troubleshooting

### Container won't start
```bash
# Check logs
docker-compose logs [service-name]

# Check if ports are already in use
lsof -i :3000
lsof -i :3001
```

### Can't connect to Gitea
- Ensure the database is healthy: `docker-compose ps`
- Wait 30-60 seconds for initial startup
- Check logs: `docker-compose logs gitea`

### Web app shows 500 error
- Check build logs: `docker-compose logs webapp`
- Rebuild: `docker-compose up -d --build webapp`

### Need to reset Gitea
```bash
docker-compose down
docker volume rm naspadstudioweb_gitea-data naspadstudioweb_gitea-db-data
docker-compose up -d
```

## Production Considerations

For production use, consider:
- Use a reverse proxy (Nginx/Traefik) with SSL/TLS
- Set up automated backups
- Configure firewall rules
- Use stronger passwords and enable 2FA in Gitea
- Set resource limits in docker-compose.yml
- Use Docker secrets for sensitive data

## Updating

```bash
# Update Gitea
docker-compose pull gitea
docker-compose up -d gitea

# Update your web app
git pull  # Get latest code
docker-compose up -d --build webapp
```

## Support

For issues specific to:
- **Next.js app:** Check the application logs
- **Docker:** Check Docker documentation
- **Gitea:** Check https://docs.gitea.io/

---

Enjoy your self-hosted home lab setup!
