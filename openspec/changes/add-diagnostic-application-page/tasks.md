## 1. OpenSpec

- [x] 1.1 Create and validate change `add-diagnostic-application-page`.

## 2. Content And Routing

- [x] 2.1 Add centralized content for the dedicated diagnostic application page.
- [x] 2.2 Add `/diagnostico` marketing route with metadata, minimal header, context, form, and footer links.
- [x] 2.3 Route primary landing CTAs to `/diagnostico` while preserving WhatsApp as secondary.

## 3. Progressive Form

- [x] 3.1 Implement a code-native three-step diagnostic application form.
- [x] 3.2 Scope validation to the active step and show only current-step errors.
- [x] 3.3 Keep CNPJ optional behind a reveal control and reduce context friction.

## 4. Lead Flow And Tracking

- [x] 4.1 Relax lead API validation for fields removed from the dedicated flow while preserving existing payload compatibility.
- [x] 4.2 Add analytics support for the dedicated progressive form variant.

## 5. Verification

- [x] 5.1 Run `openspec validate add-diagnostic-application-page`.
- [x] 5.2 Run `pnpm lint` and `pnpm build`.
- [x] 5.3 Start the app and verify `/diagnostico` desktop/mobile rendering and form interactions.
