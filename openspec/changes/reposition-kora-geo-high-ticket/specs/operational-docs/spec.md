## ADDED Requirements

### Requirement: GEO diagnostic operations docs

The repository SHALL include internal operational documentation for selling and delivering the paid GEO diagnostic.

#### Scenario: Operator prepares a diagnostic
- **WHEN** an operator reads the docs under `docs/operacao`
- **THEN** they can brief the client, run the diagnostic, and scope a high-ticket implementation.

### Requirement: Site-subscription docs removed or replaced

Old site-subscription operations docs SHALL NOT remain as the active operational playbook.

#### Scenario: Operator opens operations docs
- **WHEN** operations docs are reviewed
- **THEN** the active docs describe GEO diagnostics and high-ticket implementation, not site subscription fulfillment.
