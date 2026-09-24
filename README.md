# Shivasai Chavala — portfolio

A responsive personal portfolio for a financial data analyst working across fund operations, reconciliation, business analysis and applied AI. Built with React, Vite, TypeScript, Tailwind CSS 4, Framer Motion and Lucide icons. It is a static site that can be hosted for free on GitHub Pages.

## What is included

- Photo-led introduction, CV download, founder's note, recruiter-friendly summary and measurable career highlights.
- Experience timeline, six project profiles, categorized skills, eight CV-listed credentials, education and recognition.
- Responsive navigation, project category filters, reduced-motion support, keyboard focus styles and semantic sections.
- Contact form that composes an email using `mailto:`; no server, form database or third-party submission service.
- Search metadata, Open Graph metadata, `Person` structured data and a Pages workflow with a repository-aware asset path.

## Project structure

```text
.
├── .github/workflows/pages.yml       # Pull-request build and main-branch Pages deployment
├── public/
│   ├── .nojekyll
│   ├── favicon.svg
│   └── assets/                      # Optimized photo, downloadable CV and logo assets
├── src/
│   ├── App.tsx                      # Page sections and reusable visual components
│   ├── data.ts                      # Editable career, credential and project content
│   ├── main.tsx                     # React entry
│   └── style.css                    # Tailwind import and custom responsive design
├── index.html                       # SEO and structured data
├── vite.config.ts                   # BASE_PATH for project or user Pages sites
└── package.json
```

### Component breakdown

`Header` and `Hero` provide navigation and introduction. `Metrics`, `About`, `Founder` and `Experience` present the professional and founder story. `Work` and `ProjectCard` display projects and filters. `Skills`, `Credentials` and `Achievements` organize expertise, education and recognition. `Contact` builds an email draft in the visitor's email application. `Reveal` and `SectionHeading` keep motion and section layout consistent.

## Run locally

Requires Node.js 20.19+ or 22.12+ (Node 24 is used in GitHub Actions) and npm.

```bash
npm ci
npm run dev
```

Open the URL printed by Vite. Before publishing, run:

```bash
npm run typecheck
npm run build
npm run preview
```

There is no backend, environment secret, database or migration. The same repository can deploy as a user site (`USERNAME.github.io`, root path) or a project site (`USERNAME.github.io/REPO/`, repository path). The workflow sets the base path automatically; if building a project site locally, run `BASE_PATH=/REPO/ npm run build`.

## Publish on GitHub Pages

1. Create a public GitHub repository under your account, for example `SHIVASAI234/shivasai-portfolio`. A public repository supports Pages on the free plan; check your account plan for private-repository eligibility.
2. Upload or push this directory as the **repository root**, with `main` as the branch. Example:

   ```bash
   git init
   git add .
   git commit -m "Build Shivasai portfolio"
   git branch -M main
   git remote add origin https://github.com/SHIVASAI234/shivasai-portfolio.git
   git push -u origin main
   ```

3. In the repository, open **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
4. Watch **Actions → Build and deploy portfolio**. On success, use the URL in the deployment job. For the example name, it will be `https://shivasai234.github.io/shivasai-portfolio/`.
5. The workflow builds on pull requests and deploys only `main` pushes or manual dispatches. A future custom domain should also include a `CNAME` file in `public/` and may require adjusting `BASE_PATH` to `/`.

Official deployment references: [Vite static deployment](https://vite.dev/guide/static-deploy) and [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Edit content

Edit the arrays in `src/data.ts` for experience, projects, skills, credentials and education. Update the hero, about and recognition language in `src/App.tsx`; update the static SEO metadata and JSON-LD in `index.html`. Replace the photo in `public/assets/` and the CV file when you have a newer approved version.

Content came from the supplied `Shivasai_Chavala_CV.docx`, with the attached LinkedIn profile PDF used to check organization names and the Circle K role. The CV was the primary source where documents differed. The site uses the CV's 10+ portfolios for Growth Hack Solutions and 2,500+ IICC members rather than blending differing metrics from the PDF. The role descriptions are condensed for web reading; the original CV is included for download. Skills labeled “learning” or “adjacent experience” do not represent specialist qualifications.

Credential IDs and public verification links were absent from the CV, so none are fabricated. BreakLens AI has no supplied public URL. The portfolio lists FRM Part I, GARP Risk and AI, and Microsoft DP-700 as learning goals, not completed credentials. Add official credential URLs after checking the individual certificates. Progress is expressed as use context rather than invented percentage bars.

The Bank of America, Cloudera, Anthropic, Qualcomm and MongoDB vector marks are bundled from [Simple Icons](https://simpleicons.org/) (CC0 artwork; trademarks remain with their owners). Other organizations use explicitly labeled typographic marks because a reliable, approved logo file was not supplied. Replace them with brand-approved files if available. Possible official brand sources: [State Street brand](https://www.statestreet.com/us/en/forward), [Microsoft brand](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks), and the relevant issuer brand or credential portal. Brand marks identify organizations only; they do not imply endorsement.

## Practical enhancements

1. Add verified credential links, IDs and confirmed issue dates directly from each issuer portal.
2. Add a public BreakLens URL after checking access and permissions; link individual project repositories when available.
3. Add a privacy-conscious backend or form service if direct in-browser submission is needed. The current email draft method depends on a configured email client.
4. Connect a custom domain, add a social preview image with appropriate crop, and periodically review CV dates and metrics.

## Security and privacy

The site stores no visitor data and has no analytics or third-party form processing. The email form includes visitor-entered content only in a local `mailto:` URL. Links to external sites use `rel="noopener noreferrer"`. All visible contact details and the downloadable CV are public once published; review them before pushing to a public repository. See [SECURITY.md](SECURITY.md) for reporting; contributions can follow the [pull request checklist](.github/PULL_REQUEST_TEMPLATE.md).

## License

The application source is provided for the portfolio owner's use. The owner's portrait and CV are personal material; organization names, trademarks and logos belong to their respective owners. No blanket redistribution license is granted for those assets.
