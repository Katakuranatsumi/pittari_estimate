FROM ruby:2.6.4

RUN apt-get update \
    && apt-get install -y \
    sqlite3 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/pittari_estimate
COPY Gemfile* ./
Run bundle install
COPY . .

EXPOSE 3000
CMD ["rails", "server", "-b", "0.0.0.0"]
