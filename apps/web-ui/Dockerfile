# Stage 1: Install dependencies and build
FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Run production server
FROM node:20-alpine
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app ./
EXPOSE 3000

CMD [ "npm", "start" ]
