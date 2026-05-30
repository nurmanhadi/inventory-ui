# Inventory Management UI

A modern inventory management application to manage products, categories, and stock transactions with an easy-to-use interface.

## 🎯 Main Features

- **Dashboard** - Stock summary and important statistics
- **Product Management** - Add, view, edit, and delete products
- **Category Management** - Organize products by categories
- **Track Transactions** - Monitor all stock inflows and outflows
- **Search** - Search products quickly
- **Responsive** - Works on desktop, tablet, and mobile devices

## 🛠️ Technology

- **Frontend**: Solid.js + Vite + Tailwind CSS
- **Language**: TypeScript
- **Package Manager**: Bun

## ⚙️ Requirements

- Node.js 18+ or Bun
- npm, yarn, or bun

## 🚀 How to Run

### 1. Download and navigate to the folder
```bash
git clone https://github.com/nurmanhadi/inventory-ui.git
cd inventory-ui
```

### 2. Install dependencies
```bash
bun install
```

### 3. Run the application
```bash
bun run dev
```

The application will open at http://localhost:3000

### Build for production
```bash
bun run build
```

## 📁 Folder Structure

```
src/
├── apis/              → Connection to backend server
├── components/        → Display components
├── configs/           → Application settings
├── helpers/           → Helper functions
└── pages/             → Main pages
```

## 📱 Main Menu

**Dashboard** - View stock summary and statistics
- Total products
- Total categories
- Stock in today
- Stock out today

**Products** - Manage all products
- View product list
- Add new product
- Edit product information
- Delete product

**Categories** - Organize product categories
- View all categories
- Add new category
- Edit or delete category

**Transactions** - Monitor stock movement
- View transaction history
- Record stock in/out
- Filter by type and time

## 📸 Application Views

### Dashboard
![Dashboard](./docs/dashboard.png)

### Categories
![Categories](./docs/categories.png)

### Products
![Products](./docs/products.png)

### Transactions
![Transactions](./docs/transanctions.png)

## 🔗 Connect to Server

The application connects to the backend server via API at:
- **Products**: `src/apis/products-api.ts`
- **Categories**: `src/apis/category-api.ts`
- **Transactions**: `src/apis/stock-api.ts`
- **Dashboard**: `src/apis/summary-api.ts`

## 📄 License

MIT - Free to use for personal or commercial purposes