# theNewsRoo

Repo for the creation of The NewsRoo- Americas next favorite way to get their
news

# The NewsRoo — Feature List and Minimum Viable Product Specification

**Status:** Product definition based on the current Breach News prototype (Now
NewsRoo) **Product promise:** Help readers discover and compare credible local
reporting across the United States by issue and place. **Tagline:**
Democratizing Journalism

## 1. Product summary

The NewsRoo is a national discovery and publishing platform for local
journalism. It brings stories from many communities into one searchable,
map-based experience, groups reporting around shared civic issues, and gives
approved contributors a structured way to submit original local reporting.

The MVP should prove one core hypothesis:

> Readers will use a single destination to find and compare local reporting by
> topic and geography, and contributors will submit useful stories when the
> process is simple and editorially reviewed.

Games and video support the broader product vision, but a full multi-game
platform and original video operation are not required to prove that hypothesis.

## 2. Feature list

### P-1 — Investor Demo

1. **Responsive private website**
    - Desktop, tablet, and mobile layouts
    - Global header, navigation, footer, and accessible mobile navigation
    - Pages for Home, Map, Search Results, Article, Submit, About, Contact,
      Privacy, Terms, Submission Rules, and Accessibility

2. **"Curated" home page**
    - Some news groups, "featured" stories (statically set)
    - Story cards with headline, summary, date, author, publisher, location,
      image, and tags

3. **Article reading experience**
    - Headline, deck/summary, author/byline, publisher, publication date,
      dateline/location, hero image, body, article type, and tags
    - Original-source attribution and link when republished or aggregated
    - Share/copy-link action
    - Related stories based on location and tags
    - Corrections/update note support

4. **The Apperance of Search and filtering**
    - Full-text keyword search--can only work for statically set keywords. Don't
      actually need an algorithim.
    - Filters for topic/tag, location, author, article type, and publication
      date/date range
    - Sort by newest and relevance
    - Clear empty state and reset-filters action
    - Searchable section links such as Politics, Business, Health, Science,
      Education, Art/Culture, Sports, and Opinion
    - Buttons with no functionallity fine.

5. **Interactive United States map**
    - Story markers clustered at national/state or regional zoom levels
    - Search by city, state, or ZIP code
    - Filter map results by topic and article type
    - Selecting a cluster or marker opens a chronological story list
    - Selecting a story opens its article page
    - List-based fallback for keyboard, screen-reader, and low-bandwidth users

### P0 — Required for MVP launch

1. **Actually Curated home page**
    - Featured and recent stories
    - Story groups based on common civic issues
    - Dedicated Good News group
    - Story cards with headline, summary, date, author, publisher, location,
      image, and tags
    - Editorial control over ordering and featured placement

2. **Proper Search and filtering**
    - Full-text keyword search
    - Filters for topic/tag, location, author, article type, and publication
      date/date range
    - Sort by newest and relevance
    - Clear empty state and reset-filters action
    - Searchable section links such as Politics, Business, Health, Science,
      Education, Art/Culture, Sports, and Opinion

3. **Accounts and authentication**
    - Email/password or passwordless sign-in
    - Email verification, password reset, sign-out, and session management
    - Roles: Reader, Contributor, Editor, and Administrator
    - Public browsing requires no account

4. **Article submissions**
    - Authenticated contributor submission form
    - Fields: email/account, display name/byline, contributor location,
      publisher or freelance status, story location, publication date, headline,
      summary, article body, sources/citations, tags, article type, rights
      declaration, and image/upload rights
    - Save draft, preview, submit, confirmation, and status tracking
    - Required agreement to submission rules and content/license terms
    - Rate limiting, spam protection, file validation, and server-side
      validation

5. **Editorial CMS and review workflow**
    - Create, edit, preview, publish, unpublish, schedule, archive, and correct
      articles
    - Submission states: Draft, Submitted, In Review, Changes Requested,
      Accepted, Rejected, Scheduled, Published, and Archived
    - Editors can assign reviewers, leave internal notes, request changes, and
      notify contributors
    - Manage authors, publishers, locations, tags, topic hierarchy, article
      types, media, and home-page placement
    - Preserve an audit trail of status and editorial changes

6. **Content integrity and moderation**
    - Clear distinction between News, Analysis, Opinion, and Good News
    - Source and rights declarations required for submissions
    - Editor approval required before publication
    - Report-content/contact mechanism
    - Correction, takedown, copyright, privacy, and abuse processes

7. **SEO, sharing, and discovery basics**
    - Human-readable URLs
    - Unique page titles and descriptions
    - Open Graph/social images
    - Article, author, publisher, and breadcrumb structured data where
      applicable
    - XML sitemap, robots controls, canonical URLs, and RSS feed

8. **Operations and analytics**
    - Privacy-respecting analytics for page views, searches, filters, map use,
      article reads, sign-ups, and submission funnel
    - Error monitoring, uptime monitoring, backups, and CMS activity logs
    - Cookie/consent behavior appropriate to the analytics and services actually
      used

### P1 — Add soon after the core MVP is stable

1. Reader profiles with saved locations, topics, and bookmarks
2. Email newsletter and followed-topic/location alerts
3. Contributor profiles and published-work pages
4. Publisher/publication profile pages
5. One production-ready daily puzzle, initially Connections-style
6. Puzzle submission and editorial review
7. Puzzle timer, saved progress, result sharing, streaks, and basic leaderboard
8. Video articles with captions, transcripts, poster images, and related stories
9. Contributor compensation tracking and payout administration
10. More precise county, district, and neighborhood geography
11. Syndication/import feeds for trusted local publishers

### P2 — Longer-term product vision

1. Full games hub with Connections, Spelling Bee, Sudoku, and Crossword
2. Daily and all-time leaderboards with anti-cheat controls
3. Native video publishing and live streams
4. Personalized recommendation feed
5. Comments or community discussion with moderation
6. Membership/subscription and direct reader support
7. Native mobile apps
8. Public API and publisher integrations
9. Automated tagging, transcription, summarization, or recommendation assistance
   with human review
10. Multi-language publishing and translation

## 3. MVP scope

### In scope

- Public discovery and reading of editorially approved local journalism
- Home-page curation around common civic issues
- Search across all published content
- Geographic discovery through a US map and equivalent list
- Contributor authentication and article submission
- End-to-end editorial review and publishing
- Essential legal, accessibility, privacy, SEO, analytics, and operational
  foundations

### Explicitly out of scope for initial launch

- Full games platform, leaderboards, streaks, and puzzle economy
- Original video hosting/production workflow
- Comments, direct messaging, or social network features
- Paid subscriptions, donations, advertising, or payouts
- Personalized algorithmic feed
- Native apps
- Automatic ingestion from arbitrary publishers
- Automated publication without human editorial approval

The prototype may retain Games and Video as labeled previews, but they should
not appear production-ready or distract from the MVP’s core promise.

## 4. Users and roles

### Reader

Wants to understand what is happening locally or compare how a shared issue
appears across communities. Can browse, search, use the map, read, and share
without an account.

### Contributor

An independent reporter, student journalist, community member, or local
publication representative who submits original or properly licensed work. Can
manage drafts, submit work, respond to requested changes, and see submission
status.

### Editor

Reviews submissions, verifies sourcing and rights, edits metadata and copy,
requests changes, rejects or schedules stories, curates the home page, and
publishes corrections.

### Administrator

Manages users, roles, taxonomies, site settings, legal copy, integrations, audit
access, and emergency unpublishing.

## 5. Information architecture

### Primary navigation

- Home
- Map
- Sections
- Search
- Submit

### Sections

- Politics/Government
- Business/Economy
- Health
- Science/Environment
- Education
- Art/Culture
- Sports
- Opinion
- Good News

The taxonomy should use one canonical set of parent topics. Article type is a
separate field, not a topic: News, Analysis, Opinion, Explainer, Investigation,
or Feature.

### Required routes

- `/` — home
- `/map` — geographic discovery
- `/search` — search and filters
- `/articles/[slug]` — article
- `/topics/[slug]` — topic archive
- `/locations/[slug]` — location archive
- `/authors/[slug]` — author page
- `/submit` — contributor entry point/form
- `/account/*` — sign-in, verification, password reset, dashboard
- `/about`, `/contact`, `/faq`
- `/terms`, `/privacy`, `/submissions`, `/accessibility`, `/corrections`
- `/admin/*` — CMS, protected by role

## 6. Core user journeys and acceptance criteria

### Journey A: Discover and compare a civic issue

1. Reader lands on the home page.
2. Reader sees featured groupings by common issue.
3. Reader opens a topic and receives a newest-first list from multiple
   locations.
4. Reader opens an article and can move to related stories.

**Acceptance criteria**

- Home content is loaded from the CMS, not hard-coded.
- Every published article has at least one parent topic and one valid location.
- Topic results can be filtered by location and article type.
- Cards and article pages clearly display source/publisher, date, byline,
  location, and type.

### Journey B: Find reporting near a location

1. Reader opens Map.
2. Reader enters a city, state, or ZIP code or browses clusters.
3. Reader narrows results by topic.
4. Reader selects a cluster/marker and opens a story.

**Acceptance criteria**

- Only published content appears.
- Map and list views represent the same result set.
- Changing location or filters updates the results and URL state.
- An empty result explains what happened and offers a reset.
- The complete journey works using keyboard only.

### Journey C: Search for a story

1. Reader enters a term.
2. Results match headline, summary, body, tags, author, publisher, and location
   as appropriate.
3. Reader filters or sorts results.
4. Reader opens a result.

**Acceptance criteria**

- Search returns only published, indexable content.
- Queries and filters are shareable through the URL.
- Results show total count, active filters, and clear/reset controls.
- Typical searches return within one second at the initial expected data volume.

### Journey D: Submit original reporting

1. Visitor opens Submit and is asked to sign in or create an account.
2. Contributor verifies email and completes the article template.
3. Contributor saves a draft, previews it, agrees to the rules, and submits.
4. Contributor receives confirmation and sees `Submitted` in the dashboard.

**Acceptance criteria**

- Anonymous users cannot submit data.
- Required fields and uploads are validated on client and server.
- Drafts persist between sessions.
- A contributor cannot publish or change editorial-only fields.
- Submission creates an audit event and notifies the editorial team.
- Contributor receives email when changes are requested, accepted, rejected,
  scheduled, or published.

### Journey E: Review and publish a submission

1. Editor opens the submission queue.
2. Editor filters by status, topic, location, date, or assignee.
3. Editor checks sourcing, rights, copy, metadata, and media.
4. Editor requests changes, rejects, or accepts.
5. Editor previews and publishes or schedules the story.

**Acceptance criteria**

- Only Editors/Admins can publish or unpublish.
- Publication requires headline, slug, summary, body, byline, date, location,
  article type, parent topic, source/publisher, SEO description, and rights
  status.
- Every status change records actor and timestamp.
- Published corrections show a reader-visible note and remain in revision
  history.
- Emergency unpublish is available to an Administrator.

## 7. Functional requirements

### Home and editorial curation

- Editors can define home-page modules, title/copy, topic source, manual
  selections, item limit, and order.
- System falls back to recent qualifying stories if a manually selected item
  becomes unavailable.
- No unpublished or archived item can appear in a public module.

### Search

- Index title, summary, body, tags, author, publisher, city, county, state, and
  article type.
- Support exact phrase and tolerant prefix matching where practical.
- Provide pagination or incremental loading.
- Do not expose drafts in public indexes, site search, sitemap, or feeds.

### Geography and map

- Store normalized country, state, county, city, postal code when applicable,
  latitude, longitude, and display label.
- Geocode on editorial save and allow an editor to correct coordinates.
- Cluster markers based on zoom level.
- Avoid revealing a contributor’s private address; only story geography is
  public.

### Accounts and permissions

- Reader role is default.
- Contributor access may be automatic after verification or manually approved;
  choose before launch.
- Role checks must be enforced server-side.
- Admin actions and authentication events are logged.
- Offer account deletion/request workflow consistent with retention obligations.

### Submissions

- Auto-save drafts and warn before leaving with unsaved changes.
- Permit plain text or structured rich text with a restricted safe element set.
- Scan and validate uploads; strip dangerous metadata where appropriate.
- Limit accepted media types, file size, and number of files.
- Prevent duplicate rapid submissions and provide a moderation queue.

### Notifications

- Transactional email for account verification, password reset, submission
  received, changes requested, accepted/rejected, scheduled, and published.
- Emails link to the relevant dashboard record and never expose internal notes.

## 8. Content and data model

### Article

- `id`, `title`, `slug`, `summary`, `body`
- `status`, `articleType`, `featured`, `goodNews`
- `authorIds`, `publisherId`, `sourceUrl`, `sourceLabel`
- `locationId`, optional additional locations
- `topicIds`, `tagIds`, `entityNames`
- `heroMediaId`, `heroAltText`, `caption`, `credit`
- `originalPublishedAt`, `publishedAt`, `updatedAt`, `scheduledAt`
- `seoTitle`, `seoDescription`, `canonicalUrl`, `socialMediaId`
- `rightsStatus`, `editorId`, `correctionNote`
- created/updated timestamps and revision history

### Submission

- Article content fields plus `contributorId`
- `submissionStatus`, `assignedEditorId`, `submittedAt`
- source/citation details, rights declaration, conflict disclosure
- contributor-visible message and separate internal notes
- review history and linked published article ID

### User/Profile

- `id`, email, verification state, role, display name/byline, biography, public
  location, avatar, organization, notification preferences, status, timestamps

### Publisher

- name, slug, description, location, website, logo, verification status, contact
  information, rights/syndication notes

### Location

- display label, country, state, state code, county, city, postal code,
  latitude, longitude, geographic identifier

### Taxonomy

- Topics are hierarchical and editorially controlled.
- Tags are flatter and more specific.
- Article types are controlled values and visually prominent.
- Aliases redirect/normalize inconsistent labels to canonical terms.

### Media

- file, type, dimensions, duration where relevant, alt text, caption, credit,
  rights holder, license, focal point, uploader, and timestamps

## 9. Editorial and trust requirements

Before publication, an editor must verify:

- Contributor identity or accountable publisher identity
- Story location and date
- Source/citation sufficiency
- Permission to publish the text and media
- Correct labeling of News, Analysis, or Opinion
- Headline and summary accuracy
- Conflicts, privacy concerns, defamation risk, and sensitive personal data
- Image captions, credits, and alt text

The launch process must include written policies for submissions, editorial
standards, corrections, copyright complaints, privacy/takedown requests,
contributor conduct, and any compensation promise. Legal counsel should approve
the final versions; prototype placeholder copy must not ship.

## 10. Non-functional requirements

### Accessibility

- Target WCAG 2.2 AA.
- Semantic headings, landmarks, labels, visible focus, keyboard operation,
  sufficient contrast, reduced-motion support, descriptive link text, and useful
  alt text.
- Map has an equivalent list experience.
- Videos, when introduced, require captions and transcripts.
- Automated checks plus manual keyboard and screen-reader testing before launch.

### Performance

- Target 75th-percentile mobile Core Web Vitals: LCP under 2.5 seconds, INP
  under 200 ms, CLS under 0.1.
- Responsive images, lazy loading, caching/CDN, server-rendered public pages,
  and limited third-party scripts.
- Search p95 under one second for expected MVP scale; map result API p95 under
  1.5 seconds.

### Security and privacy

- TLS everywhere; secure, HttpOnly, SameSite cookies where cookies are used.
- Strong password hashing or managed passwordless authentication.
- CSRF/XSS/SQL injection protections, output escaping, content sanitization,
  rate limits, least-privilege roles, dependency scanning, and secret
  management.
- Encrypted backups and documented restore test.
- Collect only necessary personal information; publish retention and deletion
  rules.
- Do not place private contributor data in analytics, logs, public metadata, or
  map coordinates.

### Reliability

- Initial availability target: 99.9% monthly for public reading.
- Daily automated database and media backup, with a documented recovery
  objective.
- Friendly error pages and graceful behavior when map, search, email, or
  analytics providers fail.

### Browser support

- Current and previous major releases of Chrome, Safari, Firefox, and Edge;
  current mobile Safari and Chrome.

## 11. Recommended implementation architecture

The prototype itself recommends Payload CMS. A practical MVP architecture is:

- **Frontend:** Next.js with server-rendered/indexable public pages
- **CMS/API:** Payload CMS with role-based access and draft/version support
- **Database:** PostgreSQL
- **Search:** PostgreSQL full-text search initially; move to a dedicated service
  only when relevance or scale requires it
- **Map:** MapLibre with a licensed/open basemap provider and a geocoding
  service
- **Media:** S3-compatible object storage plus CDN and image transformation
- **Authentication:** Payload authentication or a managed provider, with
  verified email and secure reset flow
- **Email:** Transactional email provider with delivery/event logging
- **Hosting:** Managed application and database hosting with staging and
  production environments

The final vendor choices are implementation decisions, not user-facing
requirements. Data export and backups should prevent lock-in.

## 12. Analytics and success metrics

### North-star behavior

Readers open and meaningfully engage with local stories they discovered through
an issue grouping, search, or map.

### Launch metrics

- Weekly unique readers
- Article view and engaged-read rate
- Home group → article click-through rate
- Search success rate: result click after a search
- Map success rate: article open after map interaction
- Percentage of readers viewing stories from two or more locations in a session
- Account verification completion rate
- Submission start → submitted conversion rate
- Accepted/published submission rate
- Median submission-to-first-review and submission-to-publication time
- Return-reader rate
- Accessibility, error, and performance health

Analytics events should include `search_submitted`, `filter_applied`,
`map_location_selected`, `map_story_opened`, `article_viewed`, `share_clicked`,
`account_verified`, `submission_started`, `draft_saved`, `submission_completed`,
and editorial status transitions. Do not send article bodies, citations, emails,
or private form fields to analytics.

## 13. Launch content requirements

The product will feel empty without breadth. Before public launch, target:

- At least 75–100 fully reviewed articles
- Coverage across at least 10 states and 20 distinct localities
- At least 6 active parent topics
- Enough stories for 3 home-page issue groups, Good News, and meaningful map
  clusters
- Complete metadata, source attribution, rights status, and imagery/alt text for
  every launch article
- At least 5 vetted contributors or publisher partners for post-launch
  continuity

These are launch-readiness targets, not hard technical limits.

## 14. QA and release gates

The MVP is ready to launch only when:

1. All P0 journeys pass on desktop and mobile.
2. Anonymous, Contributor, Editor, and Admin permissions are tested server-side.
3. No draft or private contributor data is publicly accessible or indexed.
4. Search and map return consistent published results.
5. Submission → review → changes → publish → correction works end to end.
6. Accessibility review finds no launch-blocking WCAG A/AA issue.
7. Performance targets are met on representative mobile connections.
8. Backup restoration, monitoring, error reporting, and emergency unpublish are
   tested.
9. Legal pages contain approved production copy rather than placeholders.
10. Analytics is verified without collecting private submission content.

## 15. Suggested delivery sequence

### Phase 1 — Foundation

Set up environments, CMS collections, roles, design system, public shell,
article pages, and editorial authoring.

### Phase 2 — Discovery

Build home curation, topic/location archives, search, map/list experience, SEO,
feeds, and sharing.

### Phase 3 — Contribution

Build authentication, contributor dashboard, drafts, submissions, review
workflow, notifications, and audit history.

### Phase 4 — Launch hardening

Migrate launch content, complete policies, run
accessibility/security/performance QA, verify analytics, test backup
restoration, and complete editor training.

### Phase 5 — Post-MVP experiments

Test saved topics/newsletters, contributor profiles, and one fully implemented
puzzle before investing in the full games or video vision.

## 16. Decisions still required

The current prototype does not resolve these product decisions:

1. Is Breach primarily republishing licensed stories, linking to source
   publications, commissioning originals, or accepting community reporting?
2. Must contributors be manually approved before they can submit?
3. What geographic granularity is editorially safe and useful: city, county,
   ZIP, district, or coordinates?
4. Will accepted contributors be paid at launch; if so, under what terms and
   workflow?
5. Which topics are canonical at launch, and who owns taxonomy governance?
6. What minimum sourcing and verification standard applies to community
   submissions?
7. Who carries publisher-of-record responsibility and handles
   complaints/takedowns?
8. Are Games and Video hidden at launch, labeled as coming soon, or included as
   limited pilots?
9. What initial audience/geography and editorial staffing level define a
   sustainable launch?
10. What is the policy for AI-assisted submissions, editing, tagging, and
    disclosure?

Until these are answered, the safest MVP assumptions are: human-reviewed
original/licensed content only, no public comments, no automated publishing, no
contributor compensation promise, city/county-level public geography, and
Games/Video treated as post-MVP pilots.
