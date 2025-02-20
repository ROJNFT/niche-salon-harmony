FROM ghcr.io/railwayapp/nixpacks:ubuntu-1727136237

WORKDIR /app/

# Add CloudFlare DNS and use a different mirror
RUN echo "nameserver 1.1.1.1" > /etc/resolv.conf && \
    echo "nameserver 1.0.0.1" >> /etc/resolv.conf && \
    sed -i 's|http://archive.ubuntu.com/ubuntu|http://mirror.pit.teraswitch.com/ubuntu|g' /etc/apt/sources.list && \
    sed -i 's|http://security.ubuntu.com/ubuntu|http://mirror.pit.teraswitch.com/ubuntu|g' /etc/apt/sources.list

# Try installing packages without sudo
RUN apt-get clean && \
    apt-get update && \
    apt-get install -y --no-install-recommends curl wget

COPY .nixpacks/nixpkgs-e05605ec414618eab4a7a6aea8b38f6fbbcc8f08.nix .nixpacks/nixpkgs-e05605ec414618eab4a7a6aea8b38f6fbbcc8f08.nix
RUN nix-env -if .nixpacks/nixpkgs-e05605ec414618eab4a7a6aea8b38f6fbbcc8f08.nix && nix-collect-garbage -d

ARG CI NIXPACKS_METADATA NODE_ENV NPM_CONFIG_PRODUCTION SOURCE_COMMIT

# Rest of your Dockerfile... 