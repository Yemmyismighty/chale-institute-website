# Chale Institute Website

A modern, responsive website built with Next.js 14, TypeScript, and Tailwind CSS.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                    # Next.js App Router pages
├── components/
│   ├── layout/            # Layout components (Header, Footer, Container)
│   ├── sections/          # Section components (Hero, ContentGrid, etc.)
│   ├── cards/             # Card components
│   └── ui/                # UI primitives (Button, Heading, etc.)
├── content/               # Content data files
├── lib/                   # Utility functions
├── public/
│   └── images/           # Static image assets
└── types/                # Shared TypeScript types
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Image Optimization**: Next.js Image component

## Build

To create a production build:

```bash
npm run build
npm run start
```
