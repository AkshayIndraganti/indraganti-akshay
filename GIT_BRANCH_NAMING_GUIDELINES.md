# Git Branch Naming Convention

Please follow this naming convention for git branches:

- `Main`: This is the main branch for all code. It contains production code only.
- `Develop`: This branch is for development code.

## Branches for specific purposes:

- `Feature/feature-name`: For adding a new feature. These branches are created from the `Develop` branch.
- `Bugfix/issue-number`:
  For fixing a bug. These branches can be created from the `Main` or `Develop` branch as needed.
- `Docs/documentation-changes`:
  For changes in documentation. These branches can be created from the `Main` or `Develop` branch as needed.
- `Style/style-changes`:
  For everything related to styling. These branches can be created from the `Main` or `Develop` branch as needed.
- `Refactor/code-refactoring`:
  For code changes that neither fix a bug nor add a feature. These branches can be created from the `Main` or `Develop` branch as needed.
- `Test/testing-related`:
  For everything related to testing. These branches can be created from the `Main` or `Develop` branch as needed.
- `Chore/build-tasks-updates`:
  For updating build tasks and package manager configuration. These branches can be created from the `Main` or `Develop` branch as needed.
- `Release/release-version`:
  For creating a branch dedicated to preparing and finalizing a specific release version. These branches are created from the `Develop` branch.
- `Hotfix/hotfix-issue-number`:
  For quickly addressing critical bugs or issues. These branches are created from the `Main` branch.
- `Support/support-issue-number`:
  For providing support or maintenance for a specific version or release. These branches can be created from the `Main` or `Develop` branch as needed.
- `Experiment/experiment-name`:
  For testing new ideas, technologies, or approaches. These branches can be created from the `Main` or `Develop` branch as needed.
- `Configuration/config-updates`:
  For making changes to configuration files or settings. These branches can be created from the `Main` or `Develop` branch as needed.
- `Security/security-fix`:
  For addressing security vulnerabilities or implementing security-related improvements. These branches can be created from the `Main` branch.

By adhering to this convention, we can maintain a clear and structured workflow.
