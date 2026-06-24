## ADDED Requirements

### Requirement: Named GEO measurement framework
The public website SHALL present a named KORA methodology for measuring AI presence and planning GEO improvements.

#### Scenario: Visitor reviews methodology
- **WHEN** a visitor reaches the methodology content
- **THEN** the site presents a named framework for AI presence measurement
- **AND** the framework includes prompt universe, AI visibility scan, generative share of voice, entity/trust audit, and action roadmap concepts.

#### Scenario: Methodology copy is maintained
- **WHEN** implementation adds methodology copy
- **THEN** reusable business copy is centralized under `src/content`
- **AND** section components consume structured content instead of duplicating long-form strings.

### Requirement: AI presence metrics are explicit
The website SHALL explain which indicators the diagnostic can measure across a controlled set of prompts and AI surfaces.

#### Scenario: Visitor evaluates measurability
- **WHEN** a visitor reads diagnostic or methodology content
- **THEN** the site names measurable indicators including mention rate, generative share of voice, recommendation rate, context quality, competitor gap, and source influence.

#### Scenario: Visitor compares KORA against generic content agencies
- **WHEN** a visitor reads the measurement scope
- **THEN** the site clarifies that the diagnostic compares brand presence against competitors across strategic prompt clusters.

### Requirement: No guaranteed AI citation claim
The website SHALL avoid promising guaranteed citation, ranking, or recommendation inside AI-generated answers.

#### Scenario: Visitor reads claims about AI visibility
- **WHEN** the site describes improving AI presence
- **THEN** the copy states or implies baseline and evolution tracking rather than guaranteed citation
- **AND** the copy acknowledges that AI answers vary by model, context, date, location, personalization, and source updates.

### Requirement: Diagnostic scope extends beyond on-site content
The website SHALL communicate that GEO work includes entity, schema, reputation, external authority signals, distribution, and answer-first content.

#### Scenario: Visitor checks project scope
- **WHEN** a visitor reads what the diagnostic evaluates
- **THEN** the site includes site content, structured data/schema, entity clarity, external profile consistency, reputation/reviews, mentions, directories or trusted sources, and distribution signals.

### Requirement: Monitoring options are understandable
The website SHALL distinguish one-time diagnostic work from recurring monitoring or continuous GEO operation without requiring new backend functionality.

#### Scenario: Visitor reads service model
- **WHEN** the site describes what happens after the diagnostic
- **THEN** it explains that recurring monitoring can track strategic prompts, citation changes, competitor mentions, score evolution, and new content opportunities.

#### Scenario: Visitor reads the current diagnostic offer
- **WHEN** the site describes the paid diagnostic deliverable
- **THEN** it presents baseline and action roadmap as the immediate deliverables
- **AND** it does not imply that recurring monitoring is automatically included unless explicitly stated.

### Requirement: Evidence standard is audit-ready
The website SHALL describe acceptable evidence for GEO progress without fabricating named cases.

#### Scenario: Visitor asks for proof
- **WHEN** the site discusses cases, proof, or validation
- **THEN** it explains that named cases depend on client authorization
- **AND** it may offer anonymized evidence such as dated prompts, screenshots, tested models, competitor sets, source URLs, implementation records, and 30/60/90-day comparisons.

### Requirement: FAQ and structured data answer GEO objections
The website SHALL update FAQ content and structured data to answer high-intent GEO evaluation questions.

#### Scenario: Visitor reads FAQ
- **WHEN** a visitor reviews the FAQ
- **THEN** FAQ answers address measurement methodology, share-of-voice evolution, monitoring, scope beyond on-site content, and proof limitations.

#### Scenario: Search or AI crawler reads structured content
- **WHEN** FAQ JSON-LD is generated
- **THEN** it reflects the updated FAQ data through the existing SEO helper path.

### Requirement: Existing conversion path remains intact
The methodology/proof updates SHALL preserve the existing diagnostic application flow and tracking event names.

#### Scenario: Visitor clicks primary diagnostic CTA
- **WHEN** the visitor clicks a primary CTA after reading methodology content
- **THEN** the visitor is routed to the existing diagnostic application path
- **AND** CTA tracking continues to use the existing GTM helper and standardized event names.

#### Scenario: Visitor submits diagnostic application
- **WHEN** the visitor submits the existing diagnostic application form
- **THEN** lead submission continues through `/api/lead`
- **AND** no new required fields are introduced solely for the methodology content.
