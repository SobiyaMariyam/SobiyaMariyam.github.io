# Sobiya Vhora — Tactile Portfolio (Version 3)

An original, responsive and editable portfolio for Canadian technical employers and research faculty. Inspired by the *visual language* of the user-supplied references: cream, black, lime, cobalt, bold editorial typography, paper layers and tactile elements. **This is not a copy of any third-party portfolio template.**

## Files

- `index.html` — content and layout
- `styles.css` — responsive tactile design system
- `script.js` — 10 verified project entries, category filters, project details modal, mobile navigation, copy-email button
- `assets/Sobiya_Vhora_Canadian_Technical_Resume.pdf` — one-page job resume
- `assets/Sobiya_Vhora_Research_Focused_Resume.pdf` — two-page professor/research resume
- `assets/favicon.svg` — custom favicon

## How to publish it

1. Download the portfolio ZIP and extract it.
2. Create a **public** GitHub repository named `portfolio` (or `SobiyaMariyam.github.io`).
3. Upload the **contents** of the extracted folder (not the parent folder), so `index.html` is in the repository root.
4. In Settings > Pages, choose **Deploy from a branch**, select `main`, and choose `/ (root)`.
5. After deployment, add the actual live URL to your resumes and LinkedIn.

No build step or npm packages are required. The site is plain HTML, CSS and JavaScript, so it works on GitHub Pages without configuration.

## Professional portrait and favicon

The hero portrait is a self-contained edited formal portrait based on Sobiya's uploaded photo, with a navy suit, white blouse, and no earrings. The transparent cutout is stored as `assets/sobiya-formal.webp`, not loaded from GitHub or any third-party avatar service. `assets/favicon.svg` and the PNG browser icons contain the SV monogram and starburst inspired by the site's cobalt/lime identity. This version is ready for publishing with the portrait included.

## Data integrity and confidentiality

- AI CaliPros: academic minor project spanning about six months in the 7th semester in 2025; Best Project Award dated **12 Nov 2025**. GitHub repository is **private** and was created later (Feb 2026), so its creation date must not be misrepresented as the project start date.
- SignSync.AI: 2025 published research; GitHub repository currently **private**, but the publication is public.
- Public project dates are based on actual observed GitHub activity when precise development dates were not available. The website makes that distinction explicit in each case-study popup.
- PowerProfs is shown as **one continuous employer experience** with nested roles: Cybersecurity Intern **Dec 2025–Jun 2026**, Junior Cybersecurity Engineer **Jun 2026–Present**. Do not claim the intended Dec 2027 end date has happened.
- Work-related descriptions intentionally exclude private employer source code, architecture, internal product ideas, sensitive detection logic and proprietary implementation details.
- The Grras IT Solutions internship was corroborated in public LinkedIn activity (26 May–26 Jun 2025).

## QA

Visually checked at desktop (1440 px) and mobile (390 px). Verified no horizontal page overflow, all 10 project cards, working category filters, accessible native dialog and responsive mobile navigation. Client-side contact button uses a `mailto:` link; no backend or information collection form is included.

## Updates

Project cards are defined in `script.js` in the `projects` array; update project descriptions, timelines and URLs there. Resume files in the `assets` folder can be replaced with newer versions while keeping the same filenames.
