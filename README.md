

# CucumberJS Login Test Suite

This project uses **CucumberJS** and **Selenium WebDriver** to test the login functionality of a web application. The test scenarios cover both successful and unsuccessful login attempts, providing feedback for various inputs (e.g., missing username, wrong password).

## Project Setup

This project is configured using Node.js and requires the following dependencies:

- **@cucumber/cucumber**: CucumberJS framework for Behavior-Driven Development (BDD).
- **selenium-webdriver**: WebDriver for browser automation.
- **chromedriver**: WebDriver for controlling Google Chrome.

### Prerequisites

- **Node.js** (latest version recommended)
- **Google Chrome** installed on your machine

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/alnifu/cucumberjs
   cd cucumberjs


2. Install the dependencies:

   ```bash
   npm install
   ```

## Project Structure

- **features/**: Contains feature files that define test scenarios in Gherkin syntax.
- **step_definitions/**: Holds the JavaScript step definitions that implement each scenario's steps.

## Running Tests

To run the test suite, use the following command:

```bash
npm test
```

This will execute the CucumberJS tests, launching Chrome and running the scenarios defined in the feature files.
