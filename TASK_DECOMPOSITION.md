# Work Breakdown Structure (WBS)

## 1.0 Exercise Planning

### 1.1 Review the acceptance criteria

- [ ] Confirm the deliverable is an `index.html` page with a semantic DOM architecture and accessibility contract.
- [ ] Record the constraint that `<div>` elements are not permitted.
- [ ] Record the required landmark elements: `header`, `nav`, and `main`.
- [ ] Record the required accessibility attributes: a skip link, `role="banner"` on the header, `aria-label="Primary"` on the navigation, and `role="main"` on the main content.

### 1.2 Inspect the starter project

- [ ] Identify the current HTML entry point and its existing content.
- [ ] Check the repository status before editing.

## 2.0 Build the Semantic Landmark Structure

### 2.1 Add the skip-navigation link

- [ ] Add an early-page link targeting `#main-content`.
- [ ] Use meaningful link text, such as “Skip to Content”.

### 2.2 Create the page header

- [ ] Add a `<header role="banner">` landmark.
- [ ] Include the page owner or role heading inside the header (for example, “Jane Doe, Lead Engineer”).

### 2.3 Create the primary navigation

- [ ] Add a `<nav aria-label="Primary">` landmark after the header.
- [ ] Use an unordered list for navigation items.
- [ ] Add internal links for the About and Projects sections.

### 2.4 Create the main-content landmark

- [ ] Add `<main id="main-content" role="main">` after navigation.
- [ ] Ensure its `id` exactly matches the skip link target.

### 2.5 Add semantic content sections

- [ ] Add an `<section id="about">` for About content.
- [ ] Add an `<section id="projects">` for Projects content.
- [ ] Give each section an appropriate heading and content.

### 2.6 Enforce the HTML constraint

- [ ] Review the document and remove or replace any `<div>` elements with appropriate semantic HTML.

## 3.0 Validate Accessibility and Structure

### 3.1 Verify keyboard behavior

- [ ] Tab to the skip link from the top of the page.
- [ ] Activate the skip link and confirm focus or navigation reaches `#main-content`.

### 3.2 Verify the landmark tree

- [ ] Open browser DevTools.
- [ ] Open the Accessibility panel.
- [ ] Verify the landmark tree exposes the banner, primary navigation, and main regions in the intended order.

### 3.3 Final HTML review

- [ ] Confirm navigation links point to existing section IDs.
- [ ] Confirm headings and landmarks form a logical reading order.
- [ ] Confirm no forbidden `<div>` elements remain.

## 4.0 Version-Control Submission

### 4.1 Stage the semantic HTML change

- [ ] Review the diff to ensure it contains only the HTML landmark work for this exercise.
- [ ] Stage the completed HTML file.

### 4.2 Create the atomic commit

- [ ] Commit using: `git commit -m "feat(html): semantic landmark tree"`.
- [ ] Do not combine CSS work with this HTML commit.

### 4.3 Confirm completion

- [ ] Verify the commit appears in Git history.
- [ ] Confirm the working tree is clean or document any unrelated pre-existing changes.
