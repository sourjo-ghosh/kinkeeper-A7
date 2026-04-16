# KeenKeeper

## Description
KeenKeeper is a small web app to help you keep meaningful friendships on track. Browse your friends, log interactions, and view simple analytics on how often you reach out.

## Technologies
- Next.js (App Router) + React
- Tailwind CSS (with DaisyUI)
- Recharts (charts)
- Next/Image + React Icons
- React Toastify (notifications)

## Key Features
1. Friend Cards with Status Pills: at-a-glance relationship status (for example: `ON-TRACK`, `OVERDUE`) with tag badges.
2. Interaction Timeline: log `Call`, `Text`, and `Video` interactions using the shared `ContextProvider`.
3. Friendship Analytics Dashboard: donut-chart visualization of interaction counts on the Stats page.

## Run Locally
1. Install dependencies
   ```bash
   npm install
   ```
2. Start the development server
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000`

## Project Scripts
- `npm run dev` - start Next.js dev server
- `npm run build` - build for production
- `npm start` - run the production server
- `npm run lint` - run ESLint
