---
sidebar_position: 1
---

# Installation

## What does Folio look like on the inside?

Before jumping into setup, let's dissect Folio.

The app itself is made up of 3 components that run simultaneously:

-   Celery worker (handles execution of background tasks)
-   Django server
-   React frontend built with Next.js

These components rely on a several external services:

-   PostgreSQL – for storing ordinary data (users, projects, saved insights)
-   Redis – for caching and inter-service communication
-   Opensearch - for storing, indexing and querying data using search
-   S3 – for uploading and storing user media files
-   Cognito - for handling authentication and storing user credentials
-   Stripe (optional) - for handling payments and transfers
-   Brevo (optional) - for sending email
-   Cal.com (optional) - for handling calendaring (booking and scheduling events)
-   Google Maps (optional) - for Geocoding location data
-   Coderbyte (optional) - for administering assessments to users

When spinning up an instance of Folio for development, the app components + PostgreSQL, Redis and Opensearch all run locally through Docker. Other external services are hosted either by the service provider, or in our AWS Cloud.

> Optional external services aren't required for core Folio features to function properly, but you'll lose that additional functionality that each service provides

The instructions here assume you're running macOS or the current Ubuntu Linux LTS (24.04).

For other Linux distros, adjust the steps as needed (e.g. use `dnf` or `pacman` in place of `apt`).

Windows isn't supported natively. But, Windows users can run a Linux virtual machine. The latest Ubuntu LTS Desktop is recommended. (Ubuntu Server is not recommended as debugging the frontend will require a browser that can access localhost.)

In case some steps here have fallen out of date. If you see something out of date, fix it! Its everyone's responsibility to maintain our docs. Pay it forward by not leaving broken instructions for the next person who comes along.

## Setting Up

### Step 1. Get access to the tools

Make sure you get started by logging in to your company provided email address (should be yourname@folio.works).

Your Google account/email should already have granted you access to all the tools we use:

- Slack - For talking to each other
- Linear - For figuring out what to do next, and staying organized
- Zoom - Also for talking to each other but better?
- Notion - For stuff that isn't documented here (going away soon hopefully)

The one thing you won't have created for you is a Github account. Either sign up for one yourself, or use your existing Github account. Slack your github account to Pratik, and he'll get you added to our Github organization.

### Step 2. Setup the Folio web app

First step is to clone the [Folio web app repo](https://github.com/folioworks/folio-web).

```
git clone git@github.com:folioworks/folio-web.git
```

This is the primary repo we use for developing the Folio web app. There are others, you can feel free to browse them, but this is the "main" one.

Once you've cloned the repo, use an editor of your choice to open up the codebase. We don't have any "required" editors, but we HIGHLY recommend using either Cursor, VSCode or a VSCode derivative. All of our project settings and configurations are pre-created for VSCode, so you'll get a head start on staying organized if you use it.

Take a look at the [README](https://github.com/folioworks/folio-web/blob/develop/README.md) file to get started with the rest of setup for the Folio web app.

## Where to find documentation

For code we tend to document things where it leaves. This might be a README file in the folder you're looking at which contains instructions for setup and anything else you may need to know.

"How to work" related docs will exist here on the docs site.
