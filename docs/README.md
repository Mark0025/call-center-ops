# Voice-Agents

## Overview
This project is a call center agency application that manages agents, calls, KPIs, and users.

## Backend
The backend is built with Node.js and Express. It includes the following controllers and services:

### Controllers
- `agent-controller.js`: Handles agent creation and retrieval.
- `call-controller.js`: Manages call creation and retrieval.
- `kpi-controller.js`: Manages KPI creation, retrieval, and CSV upload.
- `user-controller.js`: Handles user creation and retrieval.

### Services
- `Kpi-service.js`: Provides methods to create and get KPIs.
- `call-service.js`: Provides methods to create and get calls.
- `csvService.js`: Processes CSV files.
- `user-service.js`: Provides methods to create and get users.

## Frontend
The frontend is built with React. It includes the following components:

- `Home.js`: Displays a welcome message.

## Plan for Building the Next Frontend
1. **Set Up Routing**:
   - Create routes for different pages (e.g., Home, Agents, Calls, KPIs, Users).

2. **Create Components**:
   - **Agents**: List agents, create new agents.
   - **Calls**: List calls, create new calls.
   - **KPIs**: List KPIs, create new KPIs, upload CSV for KPIs.
   - **Users**: List users, create new users.

3. **Integrate with Backend**:
   - Use `fetch` or `axios` to call backend APIs from the frontend components.

4. **State Management**:
   - Use React's `useState` and `useEffect` hooks for state management.
   - Consider using a state management library like Redux for more complex state. have to use use client on that need to process data back to us. 

5. **Styling**:
   - Use CSS or a CSS-in-JS library like styled-components for styling.

## Getting Started
To get started with the project, follow these steps:

1. Clone the repository.
2. Install dependencies for both backend and frontend.
3. Run the backend and frontend servers.

## AI Voice Agent

The AI Voice Agent is responsible for handling calls using Twilio, managing conversation scripts, and integrating with CRM systems. It uses Langchain for natural language understanding and AI models to handle common queries and responses.

## License
This project is licensed under the MIT License.
