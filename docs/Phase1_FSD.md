# Kilo — Phase 1 Functional Specification Document (FSD)

## Version: 1.1 (Refined MVP)
## Goal: Build a high-retention calorie tracking app for Indian users

---

# 1. 🎯 Objective

Build a calorie tracking app that wins on:

- ⚡ Logging speed (<5 seconds)
- 🇮🇳 Indian food accuracy
- 🧠 Simple, clean, intuitive UI

---

# 2. 🧠 Core Product Principle

> Open app → log food instantly → close app

If this loop works → retention happens  
If this loop fails → product fails  

---

# 3. 📱 Tech Stack

## Frontend
- React Native (Expo)
- Zustand (state management)
- React Query (API sync)
- MMKV (offline/local storage)

## Backend
- Supabase (PostgreSQL + Auth)

---

# 4. 🧩 Core Functionalities

---

## 4.1 Onboarding Flow

### Screens:
1. Welcome / Auth
2. Body Metrics
3. Goal & Diet
4. Calorie Reveal

### Features:
- Google login (primary)
- Phone OTP login (secondary)

### Inputs:
- Age
- Gender
- Height
- Weight
- Goal (lose / maintain / gain)
- Diet type (veg / non-veg / vegan / jain)
- Activity level

### Output:
- Daily calorie target
- Macro targets (protein / carbs / fat)

---

## 4.2 Home Screen (Primary Screen)

### Components:
- Greeting + date
- Calorie ring (remaining kcal)
- Macro progress bars:
  - Protein
  - Carbs
  - Fat
- Meal slots:
  - Breakfast
  - Lunch
  - Dinner
  - Snacks
- "+ Add" button per meal
- Water tracker

### Behavior:
- Real-time updates after logging
- No navigation required for logging

---

## 4.3 Food Logging System (Core Feature)

### Flow:
1. Tap "+ Add"
2. Select food (recent / search / barcode / quick add)
3. Adjust quantity → Add

### UI:
- Bottom sheet interaction
- Auto-focused search bar

### Features:
- Search Indian food database
- Recent foods (last 14 days)
- Favourites
- Portion selection:
  - katori
  - grams
  - pieces
- Instant calorie update

---

## 4.4 Food Database

### Phase 1 Scope:
- 100–150 high-frequency Indian foods

### Fields:
- Name
- Calories
- Protein / carbs / fat
- Portion sizes
- Aliases (dal / daal / dhal)

### Strategy:
- Start small
- Expand via user input
- Weekly verification

---

## 4.5 Barcode Scanner

### Features:
- Scan packaged food
- Fetch via Open Food Facts API
- Log instantly

### Fallback:
- "Food not found → Add manually"

---

## 4.6 Quick Add Calories (Critical Feature)

### Purpose:
Handles missing food data

### Features:
- Manual calorie input
- Direct logging

---

## 4.7 Recent & Smart Logging

### Features:
- Recent foods (last 14 days)
- Frequency-based ranking
- One-tap re-log

---

## 4.8 Diary / Log Screen

### Features:
- Full day breakdown
- Meal-wise entries
- Edit / delete logs
- Daily totals

---

## 4.9 Progress Tracking

### Features:
- Weight logging
- Weight graph (simple)

---

## 4.10 Water Tracking

### Features:
- Add water (fixed increments like 250ml)
- Daily progress bar

---

## 4.11 Profile & Settings

### Features:
- Edit profile
- Update goals
- Units (kg/lbs)
- Basic settings

---

# 5. 🎨 UI/UX Requirements

---

## 5.1 Design Goals

- Clean, modern UI
- Faster than MyFitnessPal
- Minimal cognitive load

---

## 5.2 UX Rules

- Max 3 taps to log food
- Bottom sheet interactions
- No confirmation dialogs
- Large touch targets
- Haptic feedback on actions

---

## 5.3 First Impression Strategy

- Pre-filled suggested foods
- No empty states
- Immediate usability

---

# 6. ⚙️ System Behavior

---

## 6.1 Performance Requirements

- Search response < 300ms
- Logging flow < 5 seconds
- Instant UI updates (optimistic updates)

---

## 6.2 Offline Handling

### Features:
- Store logs locally (MMKV)
- Sync when online
- No data loss

---

## 6.3 State Management

Separate stores:
- User store
- Food log store
- UI state

---

# 7. 🚧 Problems & Solutions

---

## Problem 1: Food Not Found

### Issue:
Users can't find their food → frustration

### Solution:
- Add food flow
- Quick add calories
- Weekly DB updates

---

## Problem 2: Slow or Inaccurate Search

### Issue:
Search delays or wrong results → breaks core flow

### Solution:
- Fuzzy search (pg_trgm)
- Aliases support
- Ranking:
  - recent > frequent > match

---

## Problem 3: Slow Logging Experience

### Issue:
Too many steps → user drop-off

### Solution:
- Bottom sheet UX
- Default portions
- One-tap recent foods

---

## Problem 4: Offline Usage

### Issue:
Users log in low network environments

### Solution:
- Local storage (MMKV)
- Background sync

---

## Problem 5: Barcode Failures

### Issue:
Indian products missing in database

### Solution:
- Manual fallback
- Cache successful scans

---

## Problem 6: Low Retention

### Issue:
Users stop logging after day 1

### Solution:
- Reduce friction
- Instant feedback
- Habit loop optimization

---

## Problem 7: Overbuilding

### Issue:
Too many features delay launch

### Solution:
- Focus only on food tracking
- Defer complexity

---

# 8. ❌ Excluded from Phase 1

- AI coach
- Photo food recognition
- Voice logging
- Wearable integrations
- Social features
- Advanced workout tracking

---

# 9. 📊 Success Metrics

- Logging time < 5 sec
- Day 7 retention > 40%
- Daily log rate > 40%
- Search success rate > 80%

---

# 10. 🧠 Final Principles

> Speed > Features  
> Accuracy > Quantity  
> Habit > Everything  

---

# 11. 🔥 Core Success Indicator

If users say:

- "This is faster than MyFitnessPal"
- "This understands Indian food"
- "I don’t have to think while using it"

👉 Phase 1 is successful