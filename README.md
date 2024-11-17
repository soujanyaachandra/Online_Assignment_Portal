# Angular Project: Online Assessment Portal

## Overview

An online assessment portal which supports different types of questions as follows:
- Single-answer MCQs
- Multiple-answer selection
- Fill-in-the-blank
- Yes/No questions
Built with scalability and maintainability in mind.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Running the Application](#running-the-application)
6. [Project Structure](#project-structure)
7. [Technologies Used](#technologies-used)
8. [Contributing](#contributing)
9. [License](#license)

---

## Getting Started

Follow the instructions below to set up the project and get it running on your local environment.

---

## Features

- Responsive design with Angular Material & Bootstrap
---

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (Version 22.11.0 or latest)
- [Angular CLI](https://angular.io/cli) (Version 16.0.0 or latest)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/soujanyaachandra/Online_Assignment_Portal.git
   ```
2. Navigate to the project directory:
   ```bash
   cd online_exam_portal
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

---

## Running the Application

1. Start the development server:
   ```bash
   ng serve
   ```
2. Open a browser and navigate to:
   ```text
   http://localhost:4200/
   ```

To build the project for production:
```bash
ng build --prod
```

---

## Project Structure

```plaintext
src/
├── app/
│   ├── components/    # Reusable components
│   ├── app.module.ts  # Main application module
│   ├── app.component.ts # Root component
│
├── assets/            # Static assets (images, fonts, etc.)
├── shared/
    ├── data/          # Questionnare json file
    ├── services/      # Services for data and API calls
    ├── models/        # Interfaces and models
├── environments/      # Environment configuration files
├── index.html         # Application entry point
└── styles.css         # Global styles
```

---

## Technologies Used

- **Angular** (Version 16.0.0) - Framework for building single-page applications.
- **TypeScript** - Superset of JavaScript used for type safety.
- **Angular CLI** - Command-line interface for Angular projects.
- **[Angular Material / Bootstrap]** - UI framework.
- **[Forms, Toastr, SweetAlerts etc.,]**

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add feature-name"`).
4. Push the branch (`git push origin feature-name`).
5. Open a pull request.

---

## License

[Choose a license, e.g., MIT, Apache, etc.]

This project is licensed under the [License Name] - see the [LICENSE.md](LICENSE.md) file for details.

---

## Contact

For any inquiries or issues, contact:

- **Lakshmi Soujanya Chandra** - [lakshmisoujanyach4@gmail.com]
- GitHub Profile - [https://github.com/soujanyaachandra]
