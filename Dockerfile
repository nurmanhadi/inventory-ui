FROM oven/bun:canary-alpine as builder
WORKDIR /app

COPY . .

RUN bun install --frozen-lockfile
RUN bun run build

FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]