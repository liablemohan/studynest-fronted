# StudyNest Frontend

A complete Next.js 14 marketplace platform connecting international students with local service vendors.

## 🚀 Features

- **Public Pages**: Landing page, service listings, service details, blog
- **Authentication**: Login/Signup with mock credentials
- **Student Dashboard**: Order management, document uploads, profile settings
- **Admin Dashboard**: Order management, service CRUD, user management
- **Mock Checkout**: Simulated Stripe payment flow
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router, TypeScript)
- **Styling**: Tailwind CSS + shadcn/ui components
- **State Management**: Zustand with persistence
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **File Upload**: react-dropzone (UI only)

## 📦 Installation

1. **Install Node.js** (v18+ recommended)
   ```bash
   # Using Homebrew on Mac
   brew install node
   ```

2. **Install dependencies**
   ```bash
   cd studynest-frontend
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🔐 Demo Credentials

| Role    | Email                  | Password    |
|---------|------------------------|-------------|
| Student | student@example.com    | password123 |
| Admin   | admin@studynest.com    | password123 |

## 📁 Project Structure

```
studynest-frontend/
├── app/                    # Next.js App Router pages
│   ├── (public)/          # Public pages (landing, services, auth)
│   ├── student/           # Student dashboard
│   └── admin/             # Admin dashboard
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── layout/            # Header, Footer, Sidebar
│   ├── services/          # Service-related components
│   ├── orders/            # Order-related components
│   └── files/             # File upload components
├── lib/
│   ├── mock-data/         # Mock services, orders, users
│   ├── store/             # Zustand stores
│   ├── types/             # TypeScript types
│   └── utils/             # Utility functions
└── public/                # Static assets
```

## 📝 Pages

### Public (No Auth)
- `/` - Landing page
- `/services` - Service listing with filters
- `/services/[id]` - Service detail
- `/login` - Login form
- `/signup` - Registration form
- `/checkout` - Mock payment
- `/blog` - Blog posts
- `/privacy` - Privacy policy
- `/terms` - Terms of service

### Student Dashboard
- `/student` - Orders overview
- `/student/orders/[id]` - Order detail with document upload
- `/student/profile` - Profile settings
- `/student/transactions` - Payment history

### Admin Dashboard
- `/admin` - Dashboard stats
- `/admin/orders` - All orders management
- `/admin/orders/[id]` - Order detail with status updates
- `/admin/services` - CRUD services
- `/admin/users` - User management

## 🧪 Testing Flows

### Student Flow
1. Sign up or login as student
2. Browse services at `/services`
3. Click "Purchase Now" on a service
4. Complete checkout (use pre-filled test card)
5. View order in dashboard
6. Upload documents to order

### Admin Flow
1. Login as admin
2. View dashboard stats
3. Manage orders - change status, add notes
4. Upload deliverables to completed orders
5. Add/edit services
6. View all users

## 🚀 Deployment

```bash
# Build for production
npm run build

# Deploy to Vercel
npx vercel
```

## 📄 License

MIT
