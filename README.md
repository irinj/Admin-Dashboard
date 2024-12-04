
# Project Title: **RBAC UI Dashboard**

## Overview
The **RBAC UI Dashboard** is a web-based interface for managing users and roles within a system. It utilizes Role-Based Access Control (RBAC) to provide an intuitive interface for managing users and their assigned roles. The application features user authentication and allows users to perform actions based on their roles. This project is built using **React** for the frontend and uses **localStorage** for handling authentication.

## Features
- **Login Page**: Provides user authentication with a username and password.
- **User Management**: Display, add, and manage users within the system.
- **Role Management**: Manage different roles that can be assigned to users.
- **Sidebar Navigation**: Access different management pages (Users, Roles) via a sidebar.
- **Logout**: Logs the user out and redirects to the login page.
  
## Technologies Used
- **React**: Frontend framework for building the user interface.
- **React Router**: Handles routing for different views (Login, Users, Roles).
- **localStorage**: Stores authentication tokens to persist login sessions.
- **CSS/Tailwind CSS**: For styling and creating responsive layouts.

## Setup Instructions

### Prerequisites
To run this project locally, you need to have the following installed on your system:
- **Node.js** (version 12 or above)
- **npm** (Node package manager, usually comes with Node.js)

### Clone the Repository
Start by cloning the repository to your local machine:

```bash
git clone https://github.com/irinj/Admin-Dashboard.git
```

### Install Dependencies
Navigate into the project directory:

```bash
cd rbac-ui
```

Install the required dependencies:

```bash
npm install
```

### Running the Application

To start the development server, use the following command:

```bash
npm start
```

This will launch the application on `http://localhost:3000` (or another available port). You can open the browser to this address to see the project running.

### Build for Production
To build the project for production, run:

```bash
npm run build
```

This will create a `build` folder containing the optimized production files.

### GitHub Repository Structure

```
rbac-ui/
├── src/
│   ├── components/       # Contains UI components (Login, UserTable, RoleTable, etc.)
│   ├── App.js            # Main component for routing
│   └── index.js          # Entry point for React app
├── public/
│   ├── index.html        # HTML file
├── .gitignore            # Specifies files and folders to ignore in git
├── package.json          # Project metadata and dependencies
└── README.md             # This file
```

## Usage

### 1. **Login**
To login, enter the following credentials:
- **Username**: `admin`
- **Password**: `password`

Once logged in, you will be redirected to the **Users Management** page.

### 2. **Users Management**
- View a list of users.
- Option to add or manage users can be implemented based on role-based access control.

### 3. **Roles Management**
- Manage different roles and assign them to users.
  
### 4. **Logout**
Click on the **Logout** button to clear your session and redirect to the login page.

## Notes
- **Authentication**: For the purposes of this demo, the application uses a hardcoded username and password (`admin`/`password`) for login. The authentication is handled by checking these credentials and saving an authentication token in `localStorage`.
- **localStorage**: The authentication token is stored in `localStorage` to persist the session after a page refresh.

## Contributing
We welcome contributions to improve this project! If you'd like to contribute, please fork the repository and submit a pull request. Follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add feature'`).
5. Push to your forked repository (`git push origin feature-branch`).
6. Submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For questions or suggestions, feel free to contact the repository owner at `irinjossy04@gmail.com`.

