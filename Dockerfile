FROM ruby:2.6.4

RUN apt-get update \
    && apt-get install -y \
    sqlite3 \
    && rm -rf /var/lib/apt/lists/*

RUN mkdir /app
ENV APP_ROOT /app
WORKDIR $APP_ROOT

COPY Gemfile $APP_ROOT/Gemfile
COPY Gemfile.lock $APP_ROOT/Gemfile.lock
COPY . .

RUN bundle install

CMD [ "ruby -v" ]
