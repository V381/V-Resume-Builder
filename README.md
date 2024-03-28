# V-Resume Builder by Pavle Paunovic (https://www.pavlepaunovic.com)

V-Resume Builder is a user-friendly web application built with Vue 3 and Pinia that simplifies the process of creating professional-looking curricula vitae (CVs). It is designed to provide users with a seamless experience as they input their personal information, education, experience, and skills to craft a CV that stands out.

## Features

- **Interactive Forms:** Fill out your details through a series of intuitive forms.
- **Export Options:** Download your CV in PDF format or print it directly or in DOC file.

## Project Structure

The project is structured as follows:

- `src`: This directory contains the main source code for the application.
  - `assets`: Static assets like images and global styles.
  - `components`: Reusable Vue components.
  - `helpers`: Utility functions and common helpers.
  - `i18n`: Internationalization setup and language files.
  - `router`: Vue Router setup for navigation.
  - `stores`: Pinia store modules for state management.
  - `views`: Vue components representing pages.

- `public`: Contains the index.html and any assets that will not be processed by Webpack.

- `App.vue`: Root Vue component.
- `main.js`: Entry point for the application where Vue instance is created.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have `npm` installed on your machine. To install `npm`, follow the instructions here: [Get npm](https://www.npmjs.com/get-npm).

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
Navigate to the project directory:
sh
Copy code
cd your-repo-name
Install NPM packages:
sh
Copy code
npm install
Run the application in development mode:
sh
Copy code
npm run dev
Now, the application should be running on http://localhost:${depentsOnYourFreePort}.

Usage
To start building your CV:

Go to the Home page.
Follow the step-by-step process to add your information.
Customize the layout and style according to your preference.
Once completed, you can download or print your CV.
Contributing
Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repository and create a pull request. You can also simply open an issue with the tag "enhancement".
