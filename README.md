# Cheating Chelsea

A Next.js application built to expose harmful activities and support Kristen Jacobs through her GoFundMe campaign. This project uses modern web technologies to create an impactful platform for sharing important stories and curated content.

## 🚀 Features

- **Homepage** - Main landing page with campaign information
- **Gallery** - YouTube video integration showcasing relevant content
- **Dadvocate** - Curated video collection highlighting advocacy efforts
- **Long Story** - Detailed narrative and documentation
- **Dark/Light Mode** - Theme switching for better accessibility
- **Responsive Design** - Mobile-first approach using Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.3 with App Router
- **Language**: TypeScript
- **UI Components**: shadcn/ui component library
- **Styling**: Tailwind CSS with custom theming
- **Hosting**: AWS S3 static hosting
- **AI Integration**: Google Genkit (minimal implementation)

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- YouTube API key (for video galleries)

## 🔧 Installation

1. Clone the repository:
```bash
git clone ssh://gitea@git.deco.sh/signal-works/cheatingchelsea.git
cd cheatingchelsea
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Create a .env.local file in the root directory
YOUTUBE_API_KEY=your_youtube_api_key_here
```

## 🚀 Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:9002`

### Additional Development Commands

```bash
# Start Genkit AI development server
npm run genkit:dev

# Start Genkit with file watching
npm run genkit:watch

# Run linting
npm run lint

# Run TypeScript type checking
npm run typecheck
```

## 📦 Building for Production

Build the application:
```bash
npm run build
```

Start the production server:
```bash
npm run start
```

## 🌐 Deployment

This application supports multiple deployment platforms:

### Static Hosting (AWS S3)
The project includes CI/CD workflow for automatic deployment to AWS S3.


## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── gallery/           # YouTube video gallery
│   ├── dadvocate/         # Curated video content
│   └── long-story/        # Detailed narrative
├── components/            # React components
│   └── ui/               # shadcn/ui components
├── lib/                  # Utility functions
└── styles/              # Global styles
```

## 🔑 Key Features Explained

### Static Generation with ISR
Pages use static generation with Incremental Static Regeneration for optimal performance while keeping data fresh.

### YouTube Integration
Gallery and Dadvocate pages fetch video data from YouTube API with 1-hour caching for performance.

### Theme Support
Built-in dark/light mode switching using next-themes for better user experience.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 💖 Support

This project supports Kristen Jacobs' GoFundMe campaign. Visit the homepage to learn more and contribute.

---

Built with ❤️ using Next.js and TypeScript
