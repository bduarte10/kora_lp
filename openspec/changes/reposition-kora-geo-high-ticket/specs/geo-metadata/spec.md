## ADDED Requirements

### Requirement: GEO-focused metadata

The application SHALL expose metadata that describes KORA's GEO, AI search visibility, atendimento automation, and diagnostic positioning.

#### Scenario: Metadata is generated
- **WHEN** metadata consumers read the home page metadata
- **THEN** title, description, keywords, OpenGraph, and Twitter metadata reflect GEO and diagnostic positioning
- **AND** they do not describe site subscription pricing.

### Requirement: Structured data reflects new services

JSON-LD SHALL describe KORA as a professional service provider for GEO, AI search visibility, atendimento automation, knowledge bases, agents, and copilots.

#### Scenario: Search engines parse JSON-LD
- **WHEN** JSON-LD is rendered on the page
- **THEN** Organization, ProfessionalService, OfferCatalog, FAQPage, and BreadcrumbList describe the new business direction.

### Requirement: GEO-readable page content

FAQ and page sections SHALL be written in answer-first, citability-friendly language.

#### Scenario: Generative engines summarize the page
- **WHEN** the page content is extracted or summarized
- **THEN** it clearly states what GEO is, who KORA serves, what the diagnostic includes, and that results are not guaranteed.
