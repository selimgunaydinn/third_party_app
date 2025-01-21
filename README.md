# Third Party App

A full-stack web application for managing third-party applications with modern technologies and secure authentication.

## 🚀 Technology Stack

### Backend
- Node.js
- NestJS Framework
- MongoDB
- JWT Authentication
- TypeScript

### Frontend
- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Shadcn/ui

## 📋 Prerequisites
- Node.js (v18 or higher)
- MongoDB database
- pnpm (recommended package manager)

## ⚙️ Installation

### Backend Setup
1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
pnpm install
```

3. Create `.env` file from example:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
pnpm run start:dev
```

### Frontend Setup
1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
pnpm install
```

3. Create `.env.local` file from example:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
pnpm run dev
```

## 🔐 Environment Variables

### Backend (.env)
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your_strong_jwt_secret_key
FRONTEND_URL=http://localhost:3000
PORT=3001
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## ✨ Features
- User registration and authentication
- JWT-based secure authentication
- Component management (CRUD operations)
- Dashboard interface
- Responsive design
- Rate limiting and CORS protection

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### Components
- `GET /api/components` - List all components
- `GET /api/components/:id` - Get component details
- `POST /api/components` - Create new component
- `PUT /api/components/:id` - Update component
- `DELETE /api/components/:id` - Delete component
- `GET /api/components/user/:userId` - Get user's components

### Widget
- `GET /api/widget/:id` - Get widget configuration
- `POST /api/widget/validate` - Validate widget settings

## 📁 Project Structure

```
├── backend/
│   ├── src/
│   │   ├── auth/           # Authentication module
│   │   ├── components/     # Components module
│   │   ├── schemas/        # MongoDB schemas
│   │   ├── widget/         # Widget module
│   │   ├── app.module.ts   # Main application module
│   │   └── main.ts         # Application entry point
│   ├── test/               # Test files
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── app/           # Next.js app directory
│   │   ├── components/    # Reusable components
│   │   ├── lib/          # Utility functions
│   │   ├── providers/    # Context providers
│   │   ├── hooks/        # Custom React hooks
│   │   ├── types/        # TypeScript types
│   │   └── services/     # API services
│   ├── public/           # Static files
│   └── package.json
```

## 🔒 Security Features
- JWT token-based authentication
- Password encryption
- Rate limiting
- CORS protection
- Input validation
- XSS protection

## 🌐 Access Points
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:3001`

## 📝 License
This project is licensed under the MIT License.

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request. 