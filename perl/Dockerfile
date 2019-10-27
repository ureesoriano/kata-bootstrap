FROM perl:5.30-slim

WORKDIR /code

RUN apt-get update && apt-get install -y  \
  build-essential \
  uuid-dev \
  cpanminus \
&& apt clean

RUN cpanm install Carton
