# syntax = docker/dockerfile:1

# Use Ubuntu 22.04 as the base image
FROM ubuntu:22.04

# Update package list
RUN apt-get update -qq

# Install software-properties-common to enable apt-add-repository
RUN apt-get install -y software-properties-common

# Add RVM PPA and install RVM (https://github.com/rvm/ubuntu_rvm)
RUN apt-add-repository -y ppa:rael-gc/rvm
RUN apt-get update
RUN apt-get install -y rvm

# Source RVM in the shell
RUN echo 'source "/usr/share/rvm/scripts/rvm"' >> ~/.bashrc

# Install Ruby 3.2.6 and Bundler
ARG RUBY_VERSION=3.2.6
ENV RUBYGEMS_VERSION=3.4.10
SHELL ["/bin/bash", "-l", "-c"]
RUN rvm requirements
RUN rvm install ${RUBY_VERSION}
RUN rvm use ${RUBY_VERSION} --default
RUN gem update --system ${RUBYGEMS_VERSION}
RUN gem install bundler -N

# Ensure Ruby binaries are in PATH
ENV PATH="/usr/share/rvm/rubies/ruby-${RUBY_VERSION}/bin:${PATH}"

# Install additional libraries and dependencies
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get install -y \
    git-core \
    curl \
    nodejs \
    libjemalloc2 \
    libvips \
    default-mysql-client \
    libmysqlclient-dev \
    pkg-config
RUN npm install --global yarn

# Set working directory for the Rails app
WORKDIR /app

# Set development environment variables
ENV RAILS_ENV="development" \
    BUNDLE_PATH="/usr/local/bundle" \
    BUNDLE_WITHOUT="production"

# Install application gems
COPY Gemfile Gemfile.lock ./
RUN bundle install && \
    rm -rf ~/.bundle/ "${BUNDLE_PATH}"/ruby/*/cache "${BUNDLE_PATH}"/ruby/*/bundler/gems/*/.git

# Copy application code
COPY . .

# Expose port 3000 for the Rails server
EXPOSE 3000

# Start the Rails server with RVM sourced
# CMD ["/bin/bash", "-l", "-c", "bin/rails server -b 0.0.0.0"]
