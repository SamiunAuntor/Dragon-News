# Dragon News

## Live Link
[Visit Dragon News Live Site](https://dragon-news-7fc7b.web.app/)

## Overview
Dragon News is a modern news portal built with React and Firebase. It provides users with the latest news across various categories, user authentication, and personalized news reading experience.

## Features
- **User Authentication**: Secure login and registration system using Firebase Authentication
- **News Categories**: Browse news by different categories
- **Latest News**: Stay updated with the most recent news articles
- **Responsive Design**: Fully responsive layout for all devices
- **Private Routes**: Protected routes for authenticated users
- **News Details**: Detailed view for each news article

## Technologies Used
- **Frontend**: React 19, React Router 7
- **Styling**: Tailwind CSS, DaisyUI
- **Authentication**: Firebase Authentication
- **Deployment**: Firebase Hosting
- **Build Tool**: Vite
- **Additional Libraries**:
  - react-fast-marquee
  - date-fns
  - sweetalert2

## Project Structure
```
dragon-news/
├── public/
│   ├── categories.json
│   └── news.json
├── src/
│   ├── assets/
│   ├── components/
│   ├── firebase/
│   ├── layouts/
│   ├── pages/
│   ├── provider/
│   └── routes/
└── ...
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository
   ```bash
   git clone <repository-url>
   cd dragon-news
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env` file in the root directory with your Firebase configuration
   ```
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Build for Production
```bash
npm run build
# or
yarn build
```

## Deployment
The project is configured for Firebase Hosting. After building the project:

```bash
firebase deploy
```

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License.
