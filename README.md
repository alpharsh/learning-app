# Learning App – React Native

This project is a **React Native Learning App** built as part of a case study assignment for a **React Native App Development Intern** role.

The goal of the app is to allow users to browse courses, explore lessons, and read lesson content, while also being able to track lesson completion locally.

While building the project, I focused on writing **clean, modular, and maintainable code** while also demonstrating how **AI-assisted development tools** can be used effectively during development.

---

## Features

### Course List Screen

- Displays a list of courses fetched from a mock API
- Each course displays:
  - Course title
  - Short description
  - Number of lessons
- Includes search functionality to filter courses by title or description

### Lesson List Screen

- Displays lessons for a selected course
- Each lesson shows:
  - Lesson title
  - Short description
- Lessons can be marked as completed

### Progress Tracking

- Shows number of lessons completed
- Displays a progress bar and completion percentage

### Lesson Detail Screen

- Displays the full lesson content
- Lessons contain text-based learning content

### State Handling

The app handles:

- **Loading states** while fetching course data
- **Error states** if the API fails
- **Empty states** when no data is available

---

## 🛠 Tech Stack

The project was built using:

- **React Native**
- **Expo**
- **React Navigation**
- **TypeScript**

The focus of the project was on **clean architecture**, **reusable components**, and **maintainable code structure**.

---

## Project Structure

The project is organized to keep UI, logic, and utilities separated.

```
src
 ├── api
 │    └── mockClient.ts
 │
 ├── components
 │    ├── CourseCard.tsx
 │    ├── LessonItem.tsx
 │    ├── SearchBar.tsx
 │    └── StateView.tsx
 │
 ├── hooks
 │    ├── useCourses.ts
 │    └── useLessons.ts
 │
 ├── navigation
 │    └── RootNavigator.tsx
 │
 ├── screens
 │    ├── CourseListScreen.tsx
 │    ├── LessonListScreen.tsx
 │    └── LessonDetailScreen.tsx
 │
 ├── theme
 │    ├── colors.ts
 │    ├── spacing.ts
 │    └── typography.ts
 │
 ├── types
 │    └── course.ts
 │
 └── utils
      └── search.ts
```

### Why this structure?

- **components** → reusable UI components
- **screens** → screen-level UI logic
- **hooks** → reusable data and state logic
- **api** → handles data fetching
- **utils** → helper utilities such as search logic
- **types** → TypeScript interfaces
- **theme** → centralized styling system

This structure helps keep the codebase **clean, scalable, and easier to maintain**.

---

## AI-Assisted Development

AI tools were used during the development of this project to assist with planning and implementation.

However, the final code structure, improvements, and architectural decisions were **reviewed and refined manually**.

### AI Tools Used

During development I used:

- **Cursor AI** (Planning Mode)
- **GitHub Copilot** in VS Code

### How I Used AI During Development

#### 1️⃣ Project Planning with Cursor

I started the project in **Cursor** using **Planning Mode**.

In this step, I used AI to help outline the overall structure of the project, including:

- recommended folder structure
- screen organization
- reusable components
- hooks for data handling

This helped me quickly establish a clean and scalable project structure before starting development.

#### 2️⃣ Implementation with VS Code + GitHub Copilot

After the project structure was planned, I moved to **VS Code** and used **GitHub Copilot** to help speed up development.

Copilot assisted with:

- generating component boilerplate
- suggesting TypeScript interfaces
- helping implement reusable UI components
- assisting with hook patterns and state handling

This made development faster, especially for repetitive parts of the code.

### Example Prompts Used

Some examples of prompts used during development include:

- _"Generate a reusable React Native course card component with title, description and lesson count."_
- _"Create a search filter function for courses based on title and description."_
- _"Create a React Native component that handles loading, error and empty states."_
- _"Generate a custom React hook to fetch courses from a mock API."_

### What I Implemented or Refined Manually

Although AI helped with initial scaffolding, many parts were **implemented or refined manually**, including:

- designing the final project architecture
- structuring reusable components
- implementing lesson completion logic
- calculating course progress
- refining UI layout and spacing
- improving TypeScript typings

These manual improvements ensured the code remained **clear, maintainable, and production-like**.

### How I Validated the Implementation

To ensure everything worked correctly, I manually tested:

- navigation between screens
- course search filtering
- lesson completion toggles
- progress calculation
- lesson detail display
- loading, error, and empty states

Testing was performed using the **Expo development environment**.

---

## Architecture Thinking

### Project Structure Decisions

The project was designed using a **modular approach** where:

- UI components are separated from logic
- data fetching is handled inside hooks
- screens only handle screen-level rendering
- reusable components reduce code duplication

This keeps the project **easy to maintain and extend**.

### Reusing Code with a React Web Application

If a React web version of this application existed, much of the logic could be reused, including hooks, API layer, utility functions and TypeScript models.
The main difference would be the **UI components**, since React Native and React Web render differently.

### Scaling the App to 50+ Screens

If the application grows significantly, the following improvements could help maintain scalability:

- **feature-based folder architecture**
- **global state management** (Redux or Zustand)
- **API service abstraction layer**
- **lazy loading for screens**
- **improved caching strategies**

These changes would allow the project to scale while maintaining performance and maintainability.

---

## Running the Project

### Install dependencies

```bash
npm install
```

### Start Expo

```bash
npx expo start
```

You can then run the app using:

- **Expo Go** on a mobile device
- **Android Emulator**
- **iOS Simulator**

---

## Screenshots

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/799191ed-0077-4d58-a2ba-a1dbe7939344" alt="Course List Screen" width="250"/>
      <br/>
      <b>Course List Screen</b>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/cfc1812d-019a-442f-9eee-5124ed2fe39a" alt="Lesson List Screen" width="250"/>
      <br/>
      <b>Lesson List Screen</b>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/4378012f-6673-4037-aaeb-eaf06ce66c7a" alt="Lesson Detail Screen" width="250"/>
      <br/>
      <b>Lesson Detail Screen</b>
    </td>
  </tr>
</table>
