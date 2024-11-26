# DeviceSubscription

This is a TypeScript-based web application with two main pages: **Subscription** and **Device**. The application is responsive, offering an optimized experience for both desktop and mobile screens. Data in this app persists across page reloads to ensure a seamless user experience.


## Features

- **Two Main Pages**:
  - **Subscription**: A page for managing user subscriptions.
  - **Device**: A page for managing device details, including image upload functionality.
- **Responsive Design**: Adaptable for both desktop and mobile devices.
- **State Persistence**: Data persists across page reloads, preserving user input and selections.
- **Redux Integration**: Used for state management across pages, ensuring a robust data flow.

## Tech Stack

- **TypeScript**
- **React**
- **Redux** for state management
- **React Router** for page navigation
- **Styled Components / CSS Modules** (optional, based on your setup) for styling
- **LocalStorage** for persisting state data across reloads

## Getting Started

### Prerequisites

- **Node.js** and **npm** installed on your machine.

### Installation

Install dependencies:

    npm install

### Running the Project
Start the development server:

    npm run start

This will launch the project on http://localhost:3000 by default.

## Usage
Subscription Page
Manage subscriptions through a user-friendly interface.
Updates are saved across sessions using persistent state.

## Device Page
Manage device details, with support for image uploads.
State persists using local storage and Redux, maintaining data even on page reload.

## Scripts
npm run start - Runs the app in development mode.
npm run build - Builds the app for production to the build folder.
npm run test - Launches the test runner.


