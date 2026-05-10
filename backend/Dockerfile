# Etapa 1: Builder (Le ponemos nombre 'builder')
FROM node:18-alpine AS builder
WORKDIR /app
COPY server.js .

# Etapa 2: Producción
FROM node:18-alpine
WORKDIR /app

# Crear usuario para no usar root
RUN addgroup -S duocgroup && adduser -S duocuser -G duocgroup
USER duocuser

# IMPORTANTE: Aquí debe decir 'builder' igual que arriba
COPY --from=builder /app/server.js .

EXPOSE 3000
CMD ["node", "server.js"]