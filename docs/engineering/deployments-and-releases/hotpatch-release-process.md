---
sidebar_position: 2
---

# Hotpatch Release Process

This document outlines the process for creating a hotpatch release for the Folio web app. Much of this process is similar to the standard release process ([Release Process for Folio](./release-process-for-folio.md)), but with some initial steps to create a release with only the changes that are needed.

## Overview

### 1. Preparing for Release

1. Find the commit that contains the changes that are needed and copy the commit hash.

2. Head to the [GitHub Actions/Hotpatch Release](https://github.com/folioworks/folio-web/actions/workflows/hotpatch-prerelease.yml) page.

  ![hotpatch-release-actions](/img/hotpatch-release-actions.png)

3. Click the "Run workflow" ...action?, and paste the commit hash into the "Commit hash" field, and click the "Run workflow" ...button.

   ![hotpatch-release-workflow-run](/img/hotpatch-release-run-workflow.png)

4. This will create a new draft release with the the commit cherry-picked in. Wait for the workflow to complete.

5. Head to the [GitHub Releases](https://github.com/folioworks/folio-web/releases) page, select the draft release you just created, and click "Edit".  Update the release notes to include a description of the changes.

6. Set the draft to "Pre-release" (not "Latest release", THIS IS IMPORTANT), and click "Publish release".

    ![hotpatch-release-publish](/img/hotpatch-release-pre-release.png)

7. From here, the process is the same as the standard release process ([Release Process for Folio](./release-process-for-folio.md))., starting at step 5.

## Important Notes

- Always set releases as "Pre-release" first
- Ensure all infrastructure changes are properly deployed
- Keep release notes clear and user-friendly
- Link all tickets to their Linear counterparts 
