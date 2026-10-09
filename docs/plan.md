# Bedekbyte website plan

## Goal

Create a modern, responsive, single-page website for Bedekbyte that introduces the company, highlights its developer tools, and gives visitors a clear way to learn more or get in touch. The site is published with GitHub Pages from this repository on the configured `www.bedekbyte.com` custom domain, with the apex domain intended to redirect to the `www` host.

Search and AI-assistant discoverability for the OpenAPI products is a primary business requirement and must be considered from the start, not added as a final polish step.

## Audience and positioning

- **Audience:** software developers, engineering teams, and organizations looking to improve API work and development workflows.
- **Positioning:** Bedekbyte builds practical tools developers actually need, combining a close understanding of requirements with high-quality implementation and faster delivery.
- **Primary product emphasis:** [`openapi-skills-pro`](https://github.com/tzurp/openapi-skills-pro), a CLI toolkit for OpenAPI and GraphQL exploration and API artifact generation, with an agent skill bundle for safe, efficient CLI use.
- **Free OpenAPI offering:** [`openapi-skills-cli`](https://github.com/tzurp/openapi-skills-cli), presented as “Anything OpenAPI in One CLI.”
- **Additional tools:** performance and cleanup services, plugins, and pytest extensions.
- **Performance differentiator:** performance tooling is available across three major open-source testing ecosystems: Playwright, WebdriverIO, and Python/pytest.
- **Complimentary extra:** [Get A Move!](https://apps.microsoft.com/detail/9NCR9WLQL4SR), a free Windows app that reminds developers to take movement and screen breaks during long desk sessions. Present it as a developer-wellbeing gift, separate from the regular developer-tool catalog.

## Page structure

Use a fixed top navigation that remains available while scrolling. Its links should smoothly scroll to the corresponding page sections, with sufficient scroll offset so section headings are not hidden behind the menu.

1. **Header and navigation**
   - Use the Bedekbyte brand asset as the logo/brand mark.
   - Include links to About, Featured, Products, and Contact.
   - Provide a compact, usable navigation treatment on small screens.
2. **Hero**
   - Introduce Bedekbyte with a short, direct headline, such as “Tools developers actually need.”
   - Briefly explain the focus on developer tools and API workflows.
   - Offer a primary link to the featured `openapi-skills-pro` content and a secondary link to About or Contact.
3. **About**
   - Explain how Bedekbyte helps organizations reach their objectives by discovering requirements and applying suitable methods and technology.
   - Retain the core company principles: thorough understanding of customer needs, creative and high-fidelity implementation, and timely execution.
   - Edit the supplied traditional introduction for clear, concise website copy without changing its meaning.
4. **Featured**
   - Provide a flexible, prominent feature area for launches, announcements, or marketing highlights.
   - Initially feature `openapi-skills-pro`, including its API-focused CLI and agent-skill capabilities, with a link to its free companion `openapi-skills-cli`.
   - Use `assets/openapi-skills-pro-stripe.jpg` as the product banner above the CLI workflow illustration; preserve its aspect ratio and provide descriptive alternative text.
   - Keep this area adaptable so a future announcement can replace or accompany the initial feature.
5. **Products**
   - Present the OpenAPI flagship and related performance/cleanup tools with concise descriptions and links to their GitHub repositories.
   - Organize the supporting tools by ecosystem: WebdriverIO service, Playwright plugins, and pytest extensions.
   - Include `performancetotal-cli` as a companion analysis CLI for reviewing existing performance results from the supported integrations.
   - Make room for additional developer tools without needing to restructure the whole page.
   - After the regular developer-tool catalog, include a visually separate “A little extra” / “Developer wellbeing” feature for Get A Move! as a complimentary gift. Link to its Microsoft Store listing and describe its reminder functionality without making medical or health-outcome claims.
   - Use `assets/openapi-skills-free-stripe.jpg` in the free CLI banner, keeping the wordmark legible and the image proportional across desktop and mobile layouts.

### Initial product catalog

- [OpenAPI Skills Pro](https://github.com/tzurp/openapi-skills-pro) — flagship CLI toolkit for OpenAPI and GraphQL schemas, operation artifacts, validators, and tests, including an agent skill bundle.
- [Anything OpenAPI in One CLI](https://github.com/tzurp/openapi-skills-cli) — free OpenAPI CLI offering.
- [Performance Total](https://github.com/tzurp/performance-total) — free, open-source WebdriverIO service for analyzing performance across test flows. Highlight that it peaked at more than 100,000 weekly downloads, with the [npm package page](https://www.npmjs.com/package/wdio-performancetotal-service) as the source.
- [Cleanup Service](https://github.com/tzurp/cleanup-total) — cleanup service.
- [Performance Plugin](https://github.com/tzurp/playwright-performance) — Playwright performance plugin.
- [Cleanup Plugin](https://github.com/tzurp/playwright-cleanup) — Playwright cleanup plugin.
- [Performance Extension](https://github.com/tzurp/pytest_performancetotal) — pytest performance extension.
- [Cleanup Extension](https://github.com/tzurp/pytest_cleanuptotal) — pytest cleanup extension.
- [PerformanceTotal CLI](https://www.npmjs.com/package/performancetotal-cli) — companion CLI for analyzing existing Playwright, WebdriverIO, and pytest performance logs without rerunning tests; exports CSV, JSON, and HTML chart reports.

Use each repository's README as the source of truth when writing detailed descriptions. Keep the flagship visually prominent, group the six test-framework integrations by ecosystem, and present the performance analysis CLI as a cross-ecosystem companion so the page remains easy to scan.

Emphasize that performance support spans Playwright, WebdriverIO, and Python/pytest through dedicated integrations, rather than presenting it as one universal plugin.

### Complimentary developer-wellbeing extra

- [Get A Move!](https://apps.microsoft.com/detail/9NCR9WLQL4SR) — free Windows app that reminds developers to take movement and screen breaks during long desk sessions.
- Treat it as a separate complimentary gift, not as one of the regular API, performance, or cleanup tools. Give it a distinct visual treatment after the product catalog so the core developer-tool lineup remains clear.
6. **Contact**
   - Include a clear invitation to discuss a project, product, or collaboration.
   - Provide a direct email link to `bedekbyte@outlook.com`. GitHub Pages does not provide a server for handling form submissions; do not imply that a form works unless a service/backend is selected.
7. **Footer**
   - Repeat the brand, include a copyright notice, and provide any confirmed social, repository, or contact links.

## Visual and interaction direction

- Aim for a polished, modern software-company feel: clear typography, generous spacing, strong contrast, and a restrained accent palette guided by the supplied Bedekbyte artwork.
- Use the transparent full logo where it is legible and the compact icon for small brand placements such as a favicon, if the assets suit those uses.
- Use responsive layouts and visible focus states; keep motion subtle and honor reduced-motion preferences.
- Keep the page lightweight, accessible, and usable without JavaScript where practical. Smooth scrolling should fall back to normal anchor navigation when motion is reduced or JavaScript is unavailable.
- Use meaningful headings, semantic landmarks, descriptive link text, and appropriate alternative text for informative brand imagery.

## Search and AI-assistant discoverability

Optimize the single-page site so Google, Bing, and AI-assisted search experiences can understand and accurately summarize Bedekbyte and its OpenAPI products.

- Keep product names, descriptions, differentiating capabilities, and links in visible, crawlable HTML. Do not rely on image text, client-side-only rendering, or hidden content to explain products.
- Give the document a specific title and description; use a logical heading hierarchy, descriptive copy, useful internal anchor links, and social sharing metadata.
- Distinguish the flagship `openapi-skills-pro` from the free `openapi-skills-cli` clearly. Describe their actual capabilities and link directly to their GitHub repositories.
- Add accurate structured data for the organization and software products where applicable. Keep schema values consistent with visible page content and validate them before launch.
- Provide a `robots.txt` and `sitemap.xml` using the canonical domain consistently across page metadata, structured data, and crawler directives. The configured canonical host is `https://www.bedekbyte.com/`; on the GitHub Pages project URL, `robots.txt` would be served below the origin root rather than at the conventional root location.
- Keep the page fast, mobile-friendly, accessible, and available as static HTML on GitHub Pages. These quality factors support both usability and discovery.
- Do not promise that a search engine will index the site or that any particular AI assistant will surface it. Verify technical discoverability and monitor indexing after publishing.

**Scope decision:** The site remains a single page with dedicated, well-structured product sections and anchor links. This keeps the agreed layout, but each product will share one document title, description, and canonical URL; it may be harder to target independent product searches than with separate crawlable product pages. Revisit dedicated product URLs if independent product discovery becomes more important than keeping the site strictly single-page.

## Implementation and GitHub Pages

- First inspect the existing page and assets, then implement the site in the repository's existing static-site setup. Prefer plain HTML, CSS, and only the JavaScript needed for navigation behavior unless the repository's actual requirements call for more.
- Keep asset references relative to the repository so the page works both at the GitHub Pages project-site path and at the future custom domain; avoid assuming the site is hosted at the URL root.
- The repository's `CNAME` configures `www.bedekbyte.com` for GitHub Pages; keep the apex domain's DNS and HTTPS redirect configuration consistent with that canonical host.
- Use the confirmed GitHub repository URLs for product calls to action and `bedekbyte@outlook.com` for contact. Avoid shipping dead or misleading calls to action.
- Update the repository's README with local preview and GitHub Pages publishing instructions if the implementation introduces steps beyond opening the static page.

## Delivery steps

1. Confirm brand asset usage and the wording for product and contact calls to action.
2. Build the semantic page sections and responsive fixed navigation.
3. Add the visual system, responsive styling, and only necessary interaction behavior.
4. Verify page content, navigation, images, accessibility basics, and links locally.
5. Use the Playwright CLI during development to inspect desktop and mobile layouts, exercise each navigation link and call to action, and check for browser-console errors or failed asset requests.
6. Confirm the published site, custom-domain HTTPS, and asset loading. The canonical host is `www.bedekbyte.com`; verify that the apex domain redirects there.

## Acceptance criteria

- A visitor can identify Bedekbyte's purpose and featured offering from the first screen.
- Search crawlers can read the OpenAPI product descriptions and follow links to both CLI repositories without requiring client-side rendering.
- Page title, description, canonical URL, social metadata, and structured data are accurate; the sitemap points to the active site URL. Ensure the robots file is available at the origin root when the custom domain is active.
- The About section communicates the supplied company introduction's core message in readable, polished copy.
- The fixed navigation reaches every section and does not obscure its heading; navigation remains usable on mobile.
- Featured content and products are visually distinct and can be updated or extended without redesigning the page.
- All displayed brand assets load from both a repository project-site path and the future domain root.
- Contact and product actions have real, confirmed destinations or are clearly left out until those destinations are confirmed.
- The page is keyboard navigable, responsive, and checked in Playwright at desktop and mobile sizes.

## Decisions to confirm before launch

- Whether to link social profiles or public repositories in the footer.
- Final visual preference (for example, light, dark, or brand-led mixed theme) after reviewing the supplied assets.