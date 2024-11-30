FROM node:22-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

RUN mkdir /app

FROM base AS prod

COPY . /app

RUN cd /app && pnpm i && \
    pnpm build

FROM base

COPY --from=prod /app/build /app/build
COPY --from=prod /app/package.json /app/pnpm-lock.yaml /app/

RUN cd /app && \
    pnpm i --prod

WORKDIR /app
EXPOSE 3000
CMD ["node", "build/index.js"]