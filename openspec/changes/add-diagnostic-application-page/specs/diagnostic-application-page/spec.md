## ADDED Requirements

### Requirement: Dedicated diagnostic application page

The system SHALL provide a focused diagnostic application page at `/diagnostico`.

#### Scenario: Visitor opens the diagnostic page
- **WHEN** the visitor navigates to `/diagnostico`
- **THEN** the page presents a compact diagnostic application experience
- **AND** the page includes minimal navigation, diagnostic context, the progressive form, and privacy links.

### Requirement: Landing CTAs route to application page

The public landing SHALL route primary diagnostic CTAs to `/diagnostico`.

#### Scenario: Visitor clicks primary diagnostic CTA
- **WHEN** the visitor clicks a primary diagnostic CTA
- **THEN** the visitor is taken to `/diagnostico`
- **AND** the CTA click is tracked through the existing GTM event helper.

### Requirement: Progressive application form

The application form SHALL collect lead data across three progressive steps.

#### Scenario: Visitor completes all steps
- **WHEN** the visitor submits the final step
- **THEN** the payload is sent to `/api/lead`
- **AND** successful submission redirects to `/obrigado`.

#### Scenario: Visitor has validation errors
- **WHEN** the visitor attempts to continue with invalid data
- **THEN** only errors for the current step are shown
- **AND** the visitor is not shown errors for later steps.

### Requirement: Existing lead delivery remains canonical

The dedicated page SHALL use the existing lead API and delivery channels.

#### Scenario: Lead is submitted
- **WHEN** `/api/lead` accepts the payload
- **THEN** the lead continues through Resend and Google Sheets
- **AND** optional CNPJ enrichment remains server-side and fail-open.

### Requirement: Tracking identifies the new experience

The application flow SHALL identify the new form variant in analytics.

#### Scenario: Form is submitted
- **WHEN** the visitor submits the application
- **THEN** `form_submit` includes `form_id: "diagnostic-application"` and `form_variant: "dedicated_progressive_v1"`.

#### Scenario: Lead is qualified
- **WHEN** lead delivery succeeds
- **THEN** `lead_qualified` includes the same form identity and the selected priority.
