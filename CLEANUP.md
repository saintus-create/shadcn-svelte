# Repository Cleanup Documentation

## Date: December 1, 2025

### Summary
This repository has been cleaned up to remove external projects and temporary directories that were not part of the core shadcn-svelte project.

### Directories Identified for Cleanup

#### 1. `spectrum-main/` - **Removed from tracking**
- **Description**: A complete Next.js project (Spectrum UI) with its own package.json, dependencies, and application structure
- **Reason for removal**: This is an entirely separate project that should be in its own repository
- **Status**: Added to .gitignore to prevent future tracking

#### 2. `scratch/` - **Removed from tracking**
- **Description**: Temporary/experimental directory containing a single "sortable" file
- **Reason for removal**: Appears to be scratch work/temporary files not intended for the repository
- **Status**: Added to .gitignore to prevent future tracking

#### 3. `repro/` - **Kept**
- **Description**: Reproduction template for issue reporting
- **Reason for keeping**: This is a useful template for bug reproductions and is referenced in issue templates
- **Status**: Remains in the repository

### Changes Made

1. **Updated `.gitignore`**:
   - Added `spectrum-main/` to exclusion list
   - Added `scratch/` to exclusion list
   - Added comment explaining these are external projects and temporary directories

### Core Project Structure (Preserved)

The following directories remain as part of the core shadcn-svelte project:
- `docs/` - Documentation site
- `packages/` - Core packages (cli, mcp-server, registry)
- `registry-template/` - Template for registry components
- `repro/` - Issue reproduction template
- `.changeset/` - Changeset configuration
- `.github/` - GitHub workflows and configurations
- Configuration files in root

### Recommendations for Developers

1. **For spectrum-main**: If you need this project, it should be moved to a separate repository
2. **For scratch work**: Use local directories or separate branches that aren't committed
3. **For temporary files**: Always add them to .gitignore before committing

### Next Steps

If these directories are needed:
- **spectrum-main**: Create a new repository at `github.com/[user]/spectrum-ui`
- **scratch**: Keep locally or in a private branch

---

_This cleanup ensures the repository remains focused on the shadcn-svelte project and follows best practices for monorepo organization._
