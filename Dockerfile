FROM ghcr.io/railwayapp/nixpacks:ubuntu-1727136237

WORKDIR /app/

COPY .nixpacks/nixpkgs-e05605ec414618eab4a7a6aea8b38f6fbbcc8f08.nix .nixpacks/nixpkgs-e05605ec414618eab4a7a6aea8b38f6fbbcc8f08.nix
RUN nix-env -if .nixpacks/nixpkgs-e05605ec414618eab4a7a6aea8b38f6fbbcc8f08.nix && nix-collect-garbage -d

RUN apt-get update && \
    apt-get install -y --no-install-recommends curl wget

ARG CI NIXPACKS_METADATA NODE_ENV NPM_CONFIG_PRODUCTION SOURCE_COMMIT

# Rest of your Dockerfile... 