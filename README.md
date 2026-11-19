### Acoustic Consultant Simulator v8.7.1

#### Changes
- Rewritten all 48 questions across four disciplines and four career levels.
- Balanced answer lengths so the correct option is not identifiable by detail or wording.
- Added realistic distractors based on common consultancy errors.
- Increased calculations, uncertainty, context and professional judgement at every level.
- Randomises both question order and answer order whenever a module starts.
- Retains v8.6 career progression, achievements, scoring, mobile layout, branding and saved progress.
- Updated PWA cache to `acs-v8-7`, with immediate service-worker activation.

#### Publish to GitHub
Replace all files in the repository root with the files in this pack, then run:

```bash
git add .
git commit -m "Release v8.7 question difficulty update"
git push origin main
```

If the installed PWA still shows v8.6 after GitHub Pages deploys, close and reopen it. If required, clear the site's cached data or remove and reinstall the PWA once.

#### Important
This app is for training. Users should check current standards, guidance and project-specific requirements before using any answer professionally.


#### Progress migration rule
- `CONTENT_VERSION` controls whether saved career progress remains valid.
- v8.7.1 uses `CONTENT_VERSION = '8.7-q1'`, so existing v8.6/early-v8.7 progress is reset once on first load.
- The player's saved name is retained, but XP, completed modules, scores and achievements restart.
- For future question/content changes, increment `CONTENT_VERSION` (for example `8.8-q1`).
- For visual/CSS/layout-only releases, do **not** change `CONTENT_VERSION`; user progress will remain.
- The service-worker cache version is separate and can be incremented for every deployment without resetting game progress.
