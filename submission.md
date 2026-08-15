# Mini-Project Git Workflow Challenge — Submission

## 1. Student Details

* Full Name: Abuga Eugene Mogeni
* GitHub Username: abugaeugene
* Email: abugaeugene@gmail.com

## 2. Deployed Project Link

* Live GitHub Pages URL: https://is-project-2026.github.io/clinic-landing-154293/

## 3. Reflection — Grounded in Your Git History

### A. Your Best Commit

**Commit URL:** https://github.com/IS-PROJECT-2026/clinic-landing-154293/commit/812a13d0fa6345a6c2a9575f5cb020784001e465

**Why this one?** It's a `chore:` commit resolving the modify/delete merge
conflict on `css/style.css` — the subject line is a clear imperative under 50
characters, and the body explains *why* the file was kept (main had added
print styles while this branch had deleted the file to explore an inline-CSS
approach) rather than just describing the mechanical change.

### B. A Mistake or Struggle

**Link to the evidence:** https://github.com/IS-PROJECT-2026/clinic-landing-154293/pull/11

**What happened and how did you recover?** PR #11 (the hero section trust-line
change) failed to merge with the error "the base branch policy prohibits the
merge." The `main` branch protection rule had "Require approvals" set to 1 —
exactly the solo-project trap the assignment brief warns about — so I
couldn't approve my own PR. I fixed it by patching the branch protection
rule via the GitHub API (`required_approving_review_count: 0`) while keeping
"require a pull request before merging" active, then merged the PR.

### C. A Pull Request You're Proud Of

**PR URL:** https://github.com/IS-PROJECT-2026/clinic-landing-154293/pull/26

**What did you check before merging?** This PR resolved a modify/delete
conflict, so before merging I confirmed the resolved file matched main's
intended state (the print stylesheet rules were still present), checked
there were no leftover conflict markers, and reviewed the diff to make sure
it told a coherent story: abandon the delete, keep the edit.

### D. One Thing You Would Do Differently

**What would you change?** I'd configure branch protection correctly from
the very start — no required approvals on a solo repo — instead of
discovering the lockout mid-workflow on my first PR.

**Link to the evidence of the original decision:**
https://github.com/IS-PROJECT-2026/clinic-landing-154293/pull/11

## 4. Screenshots of Key GitHub Features

> Paste screenshots directly into this file using the GitHub web editor
> (Edit this file on github.com, click the blank line below each prompt,
> then paste with Cmd+V) so GitHub generates working image links.

### A. Milestones and Issues

<img width="2940" height="1674" alt="image" src="https://github.com/user-attachments/assets/0f027c44-3c6c-4aca-9738-1db34caec9b3" />


<img width="2940" height="1896" alt="image" src="https://github.com/user-attachments/assets/697aad58-a9d3-489a-a204-f006e304cc8e" />

Three milestones (Phase 1: Core page & content, Phase 2:
Interactivity & UX, Phase 3: Deployment & docs) each with granular issues
linked before development began.

### B. Project Board

<img width="2940" height="1872" alt="image" src="https://github.com/user-attachments/assets/639ef2c1-6bd6-4205-b59c-ae3c5b9989f8" />



### C. Branching Architecture

<img width="2940" height="1912" alt="image" src="https://github.com/user-attachments/assets/adc14bc4-01e1-4b9b-9525-fe77df11cb87" />

Feature branches follow `feat/`, `fix/`, `style/`, `chore/`, and
`docs/` naming tied to their issue numbers (e.g. `feat/9-form-validation-polish`,
`chore/23-remove-legacy-css`).

### D. Pull Requests & Traceability

<img width="2940" height="1894" alt="image" src="https://github.com/user-attachments/assets/a3c416a8-3d0c-446d-ba0e-3414589be055" />

<img width="2940" height="1878" alt="image" src="https://github.com/user-attachments/assets/07baebca-c28f-467d-8169-d2b35953212a" />

Caption: [Pick one merged PR, e.g. PR #26, and describe the issue it closes]

## 5. Merge Conflict Evidence

### Conflict 1 — Full Chronology

**What cause did you use?** Same-line content divergence — two branches
(`feat/14-footer-tagline` and `feat/15-footer-disclaimer`) both edited the
same footer copyright `<p>` line with different wording, starting from the
same base commit.

**Step 1 — Generating the Clash**
Merging `main` (with the tagline change already merged) into
`feat/15-footer-disclaimer` produced `CONFLICT (content): Merge conflict in
index.html`.

**Step 2 — Inside the Code Editor (Conflict Markers)**
Both branches changed the same footer line — one added a tagline,
the other added a rights disclaimer. Resolved by keeping the rights
disclaimer as the final wording, since it's the more standard footer
convention for a real business site.

**Step 3 — Resolution & Clean Merge**
Resolved and merged via PR: https://github.com/IS-PROJECT-2026/clinic-landing-154293/pull/18

<img width="2940" height="1846" alt="image" src="https://github.com/user-attachments/assets/4187425b-1aa8-43b2-b915-451d0a9addf7" />

<img width="2940" height="1900" alt="image" src="https://github.com/user-attachments/assets/64433210-0cad-49b1-ad4b-96376fc65a6a" />



### Conflict 2 — Different Cause

**What cause did you use?** Modify/delete — `chore/23-remove-legacy-css`
deleted `css/style.css` entirely (exploring an inline-CSS approach) while
`style/24-print-stylesheet` edited that same file on `main` in the meantime.

**Why does this cause trigger a conflict?** Git has no way to auto-resolve
"delete this file" against "here's an edited version of it" — there's no
shared line to merge, so it must ask a human to decide whether the file
should exist at all.

<img width="2940" height="1864" alt="image" src="https://github.com/user-attachments/assets/03bd95f9-63b1-4a8f-9341-9f007ee66c90" />


No inline `<<<<<<<` markers appear for a modify/delete conflict —
the terminal warning (`CONFLICT (modify/delete): css/style.css deleted in
HEAD and modified in main`) and `git status` showing `deleted by us:
css/style.css` are the equivalent evidence. Resolved by keeping the file
via PR: https://github.com/IS-PROJECT-2026/clinic-landing-154293/pull/26

### Conflict 3 — Different Cause

**What cause did you use?** Add/add — `feat/27-robots-allow` and
`feat/28-robots-disallow` each independently created a new `robots.txt` at
the same path with opposite rules, both branching from the same base
commit before either existed.

**Why does this cause trigger a conflict?** Both branches introduce a file
Git has never seen before at that path, with different content — Git can't
guess which version (or neither) is correct, so it surfaces both as a
conflict rather than silently picking one.

<img width="2920" height="1856" alt="image" src="https://github.com/user-attachments/assets/a17d2e44-6f26-413e-821b-97244241b9c0" />


`robots.txt` conflict markers showing `Disallow: /` (HEAD) versus
`Allow: /` plus a sitemap reference (origin/main). Resolved by keeping the
allow-crawling version, since the site is already live and public. Merged
via PR: https://github.com/IS-PROJECT-2026/clinic-landing-154293/pull/30
