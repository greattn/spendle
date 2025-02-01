
# Build BASE
FROM node:20-alpine AS BASE

WORKDIR /app

COPY package.json yarn.lock ./

RUN apk add --no-cache git \
    && yarn install --frozen-lockfile \
    && yarn cache clean

# Build Image
FROM node:20-alpine AS BUILD

WORKDIR /app

COPY --from=BASE /app/node_modules ./node_modules

COPY . .

RUN apk add --no-cache git curl \
    && curl -sf https://gobinaries.com/tj/node-prune | sh \
    && yarn build \
    && rm -rf node_modules \
    && yarn install --production --frozen-lockfile --ignore-scripts --prefer-offline\
    && node-prune

# Build production
FROM node:20-alpine AS PRODUCTION

WORKDIR /app

COPY --from=BUILD /app/public ./.next/standalone/public
COPY --from=BUILD /app/next.config.js ./

# Set mode "standalone" in file "next.config.js"
COPY --from=BUILD /app/.next/standalone ./.next/standalone
COPY --from=BUILD /app/.next/static ./.next/standalone/.next/static

EXPOSE 3000

CMD ["node", ".next/standalone/server.js"]
