---
sidebar_position: 2
---

# Marketing Website Release Process

This document outlines the release process for the Folio Marketing Website (https://github.com/folioworks/folio-marketing-website).

## Overview

The release process for the Folio Marketing Website is fully automated using AWS Amplify. The website uses two main branches:
- `develop`: Deploys to marketingtest.folio.engineering
- `main`: Deploys to the production site at folioworks.com

## Deployment Process

The deployment process is automated through AWS Amplify hooks that monitor the repository for changes. When changes are detected, Amplify automatically builds and deploys the website to the appropriate environment.

### Development Deployment

1. Push your changes to the `develop` branch
2. AWS Amplify automatically detects the changes and deploys to marketingtest.folio.engineering
3. Verify that your changes look and function as expected on the test environment

### Production Deployment

Once you've verified your changes on the test environment:

1. Merge your changes from `develop` to `main`
2. AWS Amplify automatically detects the changes and deploys to folioworks.com
3. Verify that your changes are live on the production site

## Best Practices

- Always test changes on the development environment first
- Ensure all changes are working as expected before merging to main
- Keep the main branch stable and production-ready
- Use meaningful commit messages to track changes

## Technical Details

The build and deployment process is handled automatically by AWS Amplify through webhooks that listen for changes on the repository. No manual intervention is required for the deployment process itself.

For more information about the technical setup or if you encounter any issues, please contact the engineering team. 