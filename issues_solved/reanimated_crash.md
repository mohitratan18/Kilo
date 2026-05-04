# Issue: Reanimated `makeMutable` TypeError

## Error Log
`ERROR [TypeError: Cannot read property 'makeMutable' of undefined]`
`ERROR [Error: Exception in HostFunction: <unknown>]`

## Observed Behavior
The app crashed specifically when navigating to the `GoalsAndDiet` page. Other navigations worked, but any screen using complex animations or experimental NativeWind transitions failed.

## Root Cause
1. **Initialization Timing**: `react-native-reanimated` (v4) needs to be initialized very early in the bundle to register its JSI (JavaScript Interface) functions.
2. **NativeWind 4 Instability**: Using `transition-all` classes in NativeWind 4 with Reanimated 4 on the New Architecture can lead to race conditions where the Reanimated runtime is accessed before it's ready.

## Solution
1. **Early Import**: Added `import 'react-native-reanimated';` at the top of the entry file (`App.tsx`).
2. **Refactored Animations**: Replaced experimental NativeWind transitions in `src/screens/GoalsAndDiet/page.tsx` with a dedicated `GoalCard` component using stable Reanimated `useSharedValue` and `useAnimatedStyle` hooks. This provided a more robust and professional spring animation.
3. **Enhanced Logging**: Implemented a global error handler in `App.tsx` using `ErrorUtils` to capture and print full stack traces for "unknown" host function exceptions.
