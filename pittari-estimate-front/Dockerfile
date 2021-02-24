FROM node:14.15.5

ENV APP_HOME /app
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

# `package.json` と `package-lock.json` （あれば）を両方コピーする
COPY package.json $APP_HOME/package.json

# カレントワーキングディレクトリ(つまり 'app' フォルダ)にプロジェクトのファイルやフォルダをコピーする
COPY . .

RUN yarn install
