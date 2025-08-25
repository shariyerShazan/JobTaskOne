# Blog Management App (Next.js 15)

A simple blog management application using Next.js 15 (App Router) and NextAuth.js for authentication.

## Features

- **Landing Page** with Navbar, Hero, Blog Highlights, and Footer
- **Login** using Google via NextAuth.js
- **Blog List Page** to view all blogs
- **Blog Details Page** for full blog view
- **Protected Page**: Admin can add a new blog (only accessible when logged in)
- **Responsive Design** using Tailwind CSS

## Technologies

- Next.js 15 (App Router)
- NextAuth.js
- MongoDB (via Mongoose)
- Tailwind CSS

## Setup & Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd your-project
Install dependencies:

npm install
Setup environment variables:

cp .env.example .env.local
# edit .env.local with your credentials
Run locally:

npm run dev