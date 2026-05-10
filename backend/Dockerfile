# Etapa 1: Builder (Le ponemos nombre 'builder')
FROM node:18-alpine AS builder
WORKDIR /app
COPY server.js .

# Etapa 2: Producción
FROM node:18-alpine
WORKDIR /app

# IMPORTANTE: Aquí debe decir 'builder' igual que arriba
COPY --from=builder /app/server.js .

EXPOSE 3000
CMD ["node", "server.js"]