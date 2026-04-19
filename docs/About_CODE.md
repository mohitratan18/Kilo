⚙️ AI GENERATION CONSTRAINTS:
1. STRICTLY follow the src/ folder structure provided.
2. NO duplicates. If a pattern repeats, extract to src/components/ or utils/.
3. MAX 250 lines per file. If exceeded, auto-split into components/hooks.
4. page.tsx must ONLY contain UI composition & hook imports. Zero business logic.
5. All hooks must return typed interfaces. All API calls must be in api.ts.
6. Use explicit TypeScript types. NO `any`, `// @ts-ignore`, or implicit types.
7. Add loading, error, and empty states to all data-driven UI.
8. If code grows complex, proactively break it down before outputting.


[SYSTEM CONSTRAINTS]
1. Follow the 'src/' folder structure exactly (screens/SCREEN_NAME/page.tsx, useScreenName.ts, Api.ts).
2. Check for duplicates: Reuse src/components/ if possible.
3. Size Limit: Max 250 lines per file. Break down large components into src/screens/SCREEN_NAME/components/.
4. Logic Separation: No business logic in page.tsx. All logic in useScreenName.ts.
5. Typing: Strict TypeScript. No 'any'. Define interfaces for all props and API responses.
6. API: All fetch calls must be in Api.ts.
7. State: Handle loading, error, and empty states in UI.

*** Follow This Code Structure ***

src/
├── utils/                  # Shared helper functions, constants, formatters, global configs
│
├── components/             # 🌍 GLOBAL COMMON COMPONENTS
│   ├── Button.tsx          # Reusable across ALL screens
│   ├── Input.tsx           # Reusable across ALL screens
│   ├── Modal.tsx           # Reusable across ALL screens
│   └── ...                 # Any component used in 2+ screens goes here
│
├── screens/                # 📱 FEATURE SCREENS
│   └── SCREEN_NAME/        # PascalCase Folder (e.g., UserProfile, Login, Dashboard)
│       ├── page.tsx        # Main Entry Point (UI Composition Only)
│       ├── useScreenName.ts# Custom Hook (State, Logic, Effects for this screen)
│       ├── Api.ts          # Dedicated API calls specific to this screen
│       └── components/     # 🧩 SCREEN-LEVEL COMPONENTS
│           └── ...         # Components used ONLY in this screen (not global)
│
└── public/
    └── assets/             # Static files (images, fonts, icons, svgs)