# Spendle

Spendle is a modern expense tracking application built with Next.js frontend and Ruby on Rails backend. It helps users manage their personal finances with an intuitive interface and powerful features.

## Features

- 🎯 Expense Tracking
- 📊 Financial Dashboard
- 🏷️ Category Management
- 📈 Analytics transaction
- 🌓 Dark/Light Mode Support
- 📱 Responsive Design
- 🔒 Secure Authentication

## Tech Stack

### Frontend

- Next.js 15.1
- TypeScript
- Tailwind CSS
- Redux Toolkit
- Shadcn UI Components
- Lucide Icons

### Backend

- Ruby on Rails 7.2
- MySQL Database
- Docker

## Getting Started

### Prerequisites

- Node.js 20+
- Yarn
- Ruby 3.2.6
- Docker and Docker Compose
- MySQL 8

### Frontend Setup

1. Navigate to the frontend directory:
2. Install dependencies:

```bash
yarn install
```

3. Run the development server:

```bash
yarn dev
```

### Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Start docker container

```bash
docker compose up -d
```

3. Run migrations

```bash
bundle exec rails db:migrate
```

4. Run seed

```bash
bundle exec rails db:seed
```
