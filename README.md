# Approach, Code Quality & Decision-Making

## 1. Component & Styling Decisions

- **Component Structure:** The UI is built around a main `PracticeSummaryCard` component, with smaller subcomponents (e.g., trend chart, page title) to keep responsibilities clear and code maintainable.
- **Reusability:** The card is self-contained, making it easy to reuse across different pages or dashboards.
- **Styling:** Tailwind CSS was chosen for its utility-first approach, enabling consistent spacing, typography, and layout without extra CSS files.
- **Visual Consistency:** A limited set of text sizes, colors, and spacing utilities were used for uniformity across all cards.
- **Responsiveness:** Grid and flex utilities ensure the layout adapts well to both mobile and desktop screens.

## 2. Scaling & Real-World Use

- **Reusability:** In a larger dashboard, the card can accept real API data instead of mock data.
- **Design System:** Common colors, spacing, and typography can be extracted into theme tokens for alignment with a shared design system.
- **Potential Improvements (with more time):**
  - Enhance accessibility (keyboard focus states, ARIA labels)
  - Add unit tests for the card component
  - Implement light animations for hover and state changes
  - Support theming and localization

## 3. Time Management

- **Setup and project structure:** ~5 minutes
- **Layout and component structure:** ~30 minutes
- **Styling and visual polish:** ~20 minutes
- **README and explanation:** ~10 minutes


## 4. How to Run the Project

- Clone the repository:
  ```bash
  git clone <repository-url>
  ```
- Install dependencies:
  ```bash
  npm install
  ```
- Start the development server:
  ```bash
  npm run dev
  ```
- Open the URL shown in the terminal in your browser to view the project.

