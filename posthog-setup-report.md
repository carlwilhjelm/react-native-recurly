# PostHog post-wizard report

The wizard has completed a deep integration of PostHog into this Expo subscription tracking app. Here's a summary of what was done:

- **`src/config/posthog.ts`** — New PostHog client instance configured with `EXPO_PUBLIC_POSTHOG_KEY` and `EXPO_PUBLIC_POSTHOG_HOST` env vars, batching settings, lifecycle capture, and graceful no-op when the key is absent.
- **`app/_layout.tsx`** — Replaced inline `PostHogProvider` with the shared client; added `usePathname`/`useGlobalSearchParams` screen tracking via `useEffect` so every route change is recorded. Autocapture is enabled for touches with `testID` prop capture; screen autocapture is disabled in favour of manual tracking.
- **`app/(auth)/sign-up.tsx`** — Added `usePostHog()`; captures `email_verification_submitted` when the user submits the verification code, then `user_signed_up` + `posthog.identify()` (with `$set_once: sign_up_date`) when sign-up completes.
- **`app/(auth)/sign-in.tsx`** — Added `usePostHog()`; captures `user_signed_in` + `posthog.identify()` immediately after a successful password sign-in.
- **`app/(tabs)/settings.tsx`** — Added `usePostHog()`; sign-out button now fires `user_signed_out` then `posthog.reset()` before calling Clerk's `signOut()`.
- **`app/(tabs)/index.tsx`** — Added `usePostHog()`; captures `subscription_expanded` with `subscription_id` and `subscription_name` when a card is expanded (not collapsed).
- **`app/(tabs)/subscriptions/[id].tsx`** — Added `usePostHog()` and a `useEffect` that fires `subscription_details_viewed` with `subscription_id` on mount.
- **`.env`** — `EXPO_PUBLIC_POSTHOG_KEY` and `EXPO_PUBLIC_POSTHOG_HOST` written with correct values.
- **`react-native-svg`** — Installed as a required peer dependency of `posthog-react-native`.

## Events

| Event name | Description | File |
|---|---|---|
| `user_signed_up` | User completed the sign-up flow and their account was created. | `app/(auth)/sign-up.tsx` |
| `email_verification_submitted` | User submitted the email verification code during sign-up. | `app/(auth)/sign-up.tsx` |
| `user_signed_in` | User completed sign-in and was authenticated. | `app/(auth)/sign-in.tsx` |
| `user_signed_out` | User tapped the sign-out button on the settings screen. | `app/(tabs)/settings.tsx` |
| `subscription_expanded` | User expanded a subscription card on the home screen to see more details. | `app/(tabs)/index.tsx` |
| `subscription_details_viewed` | User navigated to the subscription details screen for a specific subscription. | `app/(tabs)/subscriptions/[id].tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behaviour, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/436684/dashboard/1796973)
- [New Sign-Ups](https://us.posthog.com/project/436684/insights/wmq26Syk)
- [Daily Active Sign-Ins](https://us.posthog.com/project/436684/insights/AOu1lY8t)
- [New vs Returning Users](https://us.posthog.com/project/436684/insights/JduQGoQA)
- [Subscription Engagement](https://us.posthog.com/project/436684/insights/yLX3pkNf)
- [Sign-Outs (Churn Signal)](https://us.posthog.com/project/436684/insights/mrtzwfGa)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `EXPO_PUBLIC_POSTHOG_KEY` and `EXPO_PUBLIC_POSTHOG_HOST` to `.env.example` and any onboarding scripts so collaborators know what to set.
- [ ] Confirm the returning-visitor path also calls `identify` — currently `identify` is only called on fresh sign-in/sign-up; if a user reopens the app with an active Clerk session, consider calling `posthog.identify()` in the Clerk `useUser` effect in the root layout to keep returning sessions identified.

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-expo/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
