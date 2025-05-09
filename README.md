# AI Content Generator

AI Content Generator is a Next.js-based web application that allows users to generate AI-powered content using customizable templates. The application includes features like user authentication, subscription management, and a dashboard for managing content and usage.

## Features

- **User Authentication**: Sign up and sign in functionality for users.
- **Subscription Management**: Manage user subscriptions and payment details.
- **AI Content Generation**: Generate content using AI models with customizable templates.
- **Dashboard**: Access and manage generated content, usage history, and settings.
- **Responsive Design**: Optimized for various screen sizes.

## Folder Structure

- **app/**: Contains the main application pages and layouts.
  - `auth/`: Handles user authentication (sign-in and sign-up).
  - `context/`: Context providers for managing global state.
  - `data/`: Contains static data like templates.
  - `api/`: API routes for server-side functionality.
  - `dashboard/`: User dashboard with sections for billing, content, history, and settings.
- **components/**: Reusable UI components like buttons, inputs, and text areas.
- **lib/**: Utility functions used across the application.
- **public/**: Static assets like images and icons.
- **services/**: Backend services for database and AI model integration.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ai-contentgenerator.git
   cd ai-contentgenerator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the environment variables:
   Create a `.env.local` file in the root directory and add the required environment variables.

4. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm start`: Start the production server.

## Technologies Used

- **Next.js**: React framework for building server-side rendered applications.
- **Drizzle ORM**: Lightweight ORM for database management.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **TypeScript**: Strongly typed programming language for JavaScript.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch.
4. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For questions or support, please contact [your-email@example.com].
