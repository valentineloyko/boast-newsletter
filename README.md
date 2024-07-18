```markdown
# Boast.ai Newsletter Subscription Component

██████╗░░█████╗░░█████╗░░██████╗████████╗  ░█████╗░██╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝╚══██╔══╝  ██╔══██╗██║
██║██░░║██║░░██║██║████║╚█████╗░░░░██║░░░  ███████║██║
██║░░██║██║░░██║██║░░██║░╚═══██╗░░░██║░░░  ██╔══██║██║
██████╔╝╚█████╔╝██░░░██ ╔╝██████░░░██║░░░  ██║░░██║██║
╚═════╝░░╚════╝░░╚════╝░╚═════╝░░░░╚═╝░░░  ╚═╝░░╚═╝╚═╝
```

This project is a test assignment by Valentyn Loiko to implement a "Subscribe" floating card component with advanced functionality. The component features transitions, controlled visibility, scheduled reappearance for users who rejected (in demo mode - 5 seconds), and subscription state is maintained in local storage from the parent component. Additionally, a couple of unit tests for the component are included.

IMPORTANT: You can watch a LOOM demo for this project here -->

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Technologies](#technologies)
- [Author](#author)

## Features

- **Floating Subscribe Card:** A card that floats at the bottom of the screen prompting users to subscribe.
- **Transitions:** Smooth transitions for showing and hiding the card.
- **Controlled Visibility:** The card can be shown or hidden based on user interactions and scroll position.
- **Scheduled Reappearance:** For users who reject the subscription, the card will reappear after a set period (demo mode: 5 seconds).
- **State Maintenance:** The subscription state is maintained in session storage to remember user actions across sessions.
- **Responsive Design:** The card adjusts its size and layout based on the screen size, providing a seamless experience across devices.
- **Unit Tests:** Basic unit tests for the component to ensure functionality.

## Installation

To get started with the project, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/valentineloyko/boast-newsletter.git
cd boast-newsletter
npm install
```

## Usage

To run the project locally, use the following command:

```bash
npm run dev
```

This will start the development server and you can view the project in your browser at `http://localhost:3000`.

## Testing

To run the unit tests for the project, use the following command:

```bash
npm test
```

## Technologies

- **React**
- **TypeScript**
- **Tailwind CSS**
- **Ant Design**
- **Vite**
- **Jest**
- **React Testing Library**

## Author

Valentyn Loiko

This project was created as a test assignment to demonstrate the implementation of a floating subscribe card component with advanced functionality and basic unit tests.

```
https://github.com/valentineloyko/boast-newsletter.git
```
