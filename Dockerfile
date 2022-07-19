FROM alpine:latest
FROM jarredsumner/bun:edge

RUN apk update

RUN mkdir -p /home/bun-play
COPY . /home/bun-play
WORKDIR /home/bun-play

RUN bun install

EXPOSE 3000

CMD ["bun", "src/index.ts"]
