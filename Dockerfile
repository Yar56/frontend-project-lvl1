FROM mhart/alpine-node
WORKDIR /app
COPY . .
RUN apk add make \
  && make install \
  && make publish \
  && npm link
ENTRYPOINT ["/bin/sh"]
