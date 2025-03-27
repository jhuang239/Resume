# Stage 1: Building the Next.js app
FROM node:20-alpine AS builder

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set working directory
WORKDIR /app

# Copy package files
COPY pnpm-lock.yaml package.json ./

# Enable pnpm store
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source files
COPY . .

# Build the application
RUN pnpm build

# Stage 2: Setting up the final image with Node.js and Nginx
FROM nginx:alpine

# Install Node.js in the Nginx image
RUN apk add --no-cache nodejs

# Create a directory for the app
WORKDIR /app

# Set environment to production
ENV NODE_ENV=production

# Copy Nginx configuration
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy the built Next.js app from builder
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Create a startup script
RUN echo '#!/bin/sh' > /start.sh && \
    echo 'cd /app && node server.js &' >> /start.sh && \
    echo 'nginx -g "daemon off;"' >> /start.sh && \
    chmod +x /start.sh

# Expose port 80 for Nginx
EXPOSE 80

# Command to run both services
CMD ["/start.sh"]