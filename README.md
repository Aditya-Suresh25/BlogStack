# BlogStack

BlogStack is a modern, responsive, and feature-rich blogging platform built with React and Tailwind CSS. It allows users to create, edit, and share blog posts, bookmark their favorites, and engage with a vibrant community—all with a beautiful, mobile-friendly UI.

## Features

- **Modern UI & UX**: Clean, responsive design with smooth animations and a consistent red theme.
- **Authentication**: Secure sign up, login, and logout functionality.
- **Create & Edit Posts**: Rich text editor for writing and editing blog posts.
- **Post Cards**: Posts are displayed as attractive cards with images, titles, and descriptions.
- **Bookmarking**: Users can bookmark (favorite) posts and view them on a dedicated page.
- **Typewriter Hero Animation**: Eye-catching animated hero text on the landing page.
- **Demo Video**: See BlogStack in action with an embedded demo video.
- **Responsive Design**: Fully mobile-friendly, works great on all devices.
- **Fixed Navbar & Footer**: Navigation and footer are always accessible and styled to match the theme.
- **Google Fonts**: Uses the Inter font for a modern, readable look.

## Tech Stack

- **Frontend**: React, Tailwind CSS v4
- **State Management**: Redux Toolkit
- **Routing**: React Router
- **Rich Text Editing**: Custom RTE component
- **Backend**: Appwrite (for authentication, database, and file storage)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/blogstack.git
   cd blogstack
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure Appwrite:**
   - Set up an Appwrite instance (see [Appwrite Docs](https://appwrite.io/docs)).
   - Update the configuration in `src/appwrite/config.js` and `src/conf/conf.js` with your Appwrite project details.
4. **Start the development server:**
   ```bash
   npm run dev
   ```
5. **Open in your browser:**
   - Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Folder Structure

- `src/components/` — Reusable UI components (Header, Footer, PostCard, etc.)
- `src/pages/` — Main pages (Home, Login, SignUp, AllPosts, BookmarkedPosts, etc.)
- `src/store/` — Redux slices and store configuration
- `src/appwrite/` — Appwrite service logic
- `src/assets/` — Images, logo, and other static assets

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

