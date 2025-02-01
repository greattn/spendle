# syntax = docker/dockerfile:1

# This Dockerfile is designed for development. Use with docker-compose or build'n'run by hand:
# docker build -t my-app-dev .
# docker run -d -p 3000:3000 --name my-app-dev my-app-dev

# Make sure RUBY_VERSION matches the Ruby version in .ruby-version
ARG RUBY_VERSION=3.2.6
FROM docker.io/library/ruby:$RUBY_VERSION AS base

# Rails app lives here
WORKDIR /rails

# Install base packages
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y curl libjemalloc2 libvips default-mysql-client && \
    rm -rf /var/lib/apt/lists /var/cache/apt/archives \
    apt-get install libmysqlclient-dev

# Set development environment
ENV RAILS_ENV="development" \
    BUNDLE_PATH="/usr/local/bundle" \
    BUNDLE_WITHOUT="production"

# Install packages needed to build gems
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential git pkg-config && \
    rm -rf /var/lib/apt/lists /var/cache/apt/archives

# Install application gems
COPY Gemfile Gemfile.lock ./
RUN bundle install && \
    rm -rf ~/.bundle/ "${BUNDLE_PATH}"/ruby/*/cache "${BUNDLE_PATH}"/ruby/*/bundler/gems/*/.git

# Copy application code
COPY . .

# Install Node.js and Yarn for frontend dependencies
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g yarn

# Set the working directory back to the Rails app
WORKDIR /rails

# Expose port 3000 for the Rails server
EXPOSE 3000

# Start the Rails server
CMD ["bin/rails", "server", "-b", "0.0.0.0"]
