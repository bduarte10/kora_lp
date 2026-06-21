## ADDED Requirements

### Requirement: Diagnostic application form

The lead form SHALL collect a qualified application for a paid GEO diagnostic.

#### Scenario: Visitor applies for the diagnostic
- **WHEN** the visitor submits the application
- **THEN** the payload includes name, company, role, phone, email, segment, company size, optional CNPJ, main challenge, priority, urgency, and paid diagnostic openness
- **AND** the visitor is redirected to the thank-you page after at least one delivery channel accepts the lead.

### Requirement: Optional CNPJ enrichment

The lead API SHALL enrich company-level public CNPJ data when a valid CNPJ is provided.

#### Scenario: CNPJ lookup succeeds
- **WHEN** the lead includes a CNPJ and BrasilAPI returns company data
- **THEN** the lead notification and sheet row include company-level fields such as razao social, nome fantasia, city, state, CNAE, activity, and registration status.

#### Scenario: CNPJ lookup fails
- **WHEN** the CNPJ lookup fails, times out, or returns no data
- **THEN** the lead submission still proceeds through email and Sheets
- **AND** the failure is not shown as a form-blocking error.

### Requirement: No person-level CNPJ data

The application flow SHALL NOT display or persist socios or person-level CNPJ data.

#### Scenario: CNPJ provider returns partner data
- **WHEN** the provider response includes socios or personal data
- **THEN** the application flow ignores those fields.
