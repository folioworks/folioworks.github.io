---
sidebar_position: 1
---

# Folio Release & Upgrade Process

This document outlines the release process for the [Folio web app](https://github.com/folioworks/folio-web). Our release process ensures that new features and improvements are properly tested and deployed in a controlled manner.

## Overview

Folio uses a branching strategy where:
- `develop` branch contains the latest features and changes
- `main` branch is used for releases
- Releases are managed through GitHub's release system

## Standard Release Process

### 1. Preparing for Release

1. Merge changes from `develop` to `main` branch
   - This is typically done with a hard reset to match the `develop` branch
   - This ensures `main` is identical to `develop`

### 2. Creating the Release

1. Go to [GitHub Releases](https://github.com/folioworks/folio-web/releases)
2. Create a new release with the following steps:
   - Create a new tag that increments the version number
   - Set the target to `main`
   - Set the previous tag to the last released version
   - Click "Generate Notes" to create an initial list of commits

### 3. Release Notes

Modify the generated release notes to include:

1. A brief, engaging description of the release
2. **New Features/Improvements** section
   - List new features and improvements in human-readable format
3. **Fixes** section
   - List bug fixes with brief descriptions
4. **Commits** section
   - Update commit messages to link ticket numbers to their corresponding Linear tickets

Here's an example of a well-formatted release note:

```markdown
## What's Changed

A bunch of fixes and improvements. This release follows on from the last release that included the new "Assessments" tab on student profiles. This release doesn't include any major new features, but does include a number of smaller features and fixes.

### Improvements

 - Restores payment fees for Folio - 5% for employers and students
 - Adds new fields for workplace type, location, start date, and hiring date to job postings
 - Projects are no longer required on a student's profile for it to be considered "complete"
 - Increases the size of search instance on staging environment to improve performance

### Fixes

 - Fixes an issue where emails could contain malicious links
 - Fixes an issue where admins are sometimes blocked by the firewall due to rate limiting causing it to appear as if Folio stopped working, and causing the admin to be redirected to the home page, with no search results.
 - Fixes an issue where a job poster who was a "member" level of an organization couldn't edit their own job posting. All levels of organization member can now edit their own job postings, with admins and owners being able to edit all job postings.

### Commits

* Bump elliptic from 6.6.0 to 6.6.1 in /web in the npm_and_yarn group by @dependabot in https://github.com/folioworks/folio-web/pull/906
* Staging search instance size bump by @pkabra in https://github.com/folioworks/folio-web/pull/959
* [FOL-1472](https://linear.app/folioworks/issue/FOL-1472) Restore Folio payment fees by @pkabra in https://github.com/folioworks/folio-web/pull/958
* [FOL-1460](https://linear.app/folioworks/issue/FOL-1460): FAFSA Consent Flow by @salehkaddoura-folio in https://github.com/folioworks/folio-web/pull/954
* [FOL-1469](https://linear.app/folioworks/issue/FOL-1469) [FOL-1470](https://linear.app/folioworks/issue/FOL-1470) UI: Job Posting Workplace Type, Location, Start Date, Hiring Date by @pkabra in https://github.com/folioworks/folio-web/pull/961
* [FOL-1445](https://linear.app/folioworks/issue/FOL-1445): Showing FAFSA Modal for existing users by @salehkaddoura-folio in https://github.com/folioworks/folio-web/pull/955
* [FOL-1464](https://linear.app/folioworks/issue/FOL-1464) - Allow Org Members to Edit Their Own Job Posting by @mhotwagner in https://github.com/folioworks/folio-web/pull/971
* Bump WAF Rate Limits for Prod by @pkabra in https://github.com/folioworks/folio-web/pull/970
* [FOL-1462](https://linear.app/folioworks/issue/FOL-1462) Strip links from templated email fields by @jason-lee-folio in https://github.com/folioworks/folio-web/pull/972
* [FOL-1465](https://linear.app/folioworks/issue/FOL-1465) Project requirement not required for complete profile by @pkabra in https://github.com/folioworks/folio-web/pull/973


**Full Changelog**: https://github.com/folioworks/folio-web/compare/v1.5.4...v1.5.5
```

### 4. Publishing the Release

1. Set the release as "Pre-release" (not "Latest release")
   - This is **CRUCIAL** as builds are only triggered for pre-releases
2. Publish the release
   - This automatically triggers a pre-release build
   - The build deploys to staging environment

### 5. Testing and Deployment

1. **Staging Deployment**
   - If there are infrastructure changes (Terraform), deploy them now
   - Wait for the build to complete
   - Perform smoke tests on staging to verify functionality

2. **Production Deployment**
   - Once staging is verified, edit the release
   - Change status from "Pre-release" to "Latest release"
   - Note: This promotion doesn't automatically deploy to production
   - Manually trigger production deployment using:
     - The Folio helper tool, or
     - Terraform for infrastructure changes

### 6. Completion

After successful production deployment, the release process is complete!

## Important Notes

- Always set releases as "Pre-release" first
- Ensure all infrastructure changes are properly deployed
- Keep release notes clear and user-friendly
- Link all tickets to their Linear counterparts 
