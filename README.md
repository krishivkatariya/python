# WatchHub – Premium E-Commerce Watch Collection

A full-stack e-commerce web application inspired by Apple's minimalist aesthetic. Built with React (Vite) and Django REST Framework.

## Features
- Minimalist, premium UI/UX typography and layout design
- Dynamic Product Catalog sourced from a relational database
- Global Shopping Cart with LocalStorage persistence 
- Explicit Checkout Route with simulated Payment gateway
- Secure User Authentication (Registration & Token Login)

## How to Run the Project Locally

### Prerequisites
- Python 3.8+
- Node.js (v18+)
- MySQL Server (e.g., XAMPP running on port 3306)

### 1. Database Setup
Ensure you have a database named `watchhub` created in your local MySQL server.
```sql
CREATE DATABASE watchhub;
```

### 2. Backend Setup (Django)
Navigate to the `backend/` folder and set up the Python environment:
```bash
cd backend
python -m venv venv

# On Windows:
.\venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

# Install requirements
pip install -r requirements.txt

# Run migrations
python manage.py makemigrations
python manage.py migrate

# Seed the database with demo products:
python seed.py

# Start the Django server
python manage.py runserver
```
The backend API will run at `http://localhost:8000`.

### 3. Frontend Setup (React)
Open a new terminal, navigate to the `frontend/` folder:
```bash
cd frontend

# Install dependencies
npm install

# Start the Vite development server
npm run dev
```

### 4. View the App
Open your browser and navigate to `http://localhost:5173`. You can create an account, add watches to your bag, and complete the checkout funnel. The admin dashboard is available at `http://localhost:8000/admin`.
