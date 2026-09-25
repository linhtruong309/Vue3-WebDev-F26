# Vue3-WebDev-Kit Quick Reference

## Workflow Steps

The following are the main activities that you will need to do when working on this kit. Each links takes you to the appropriate section of the [`CONTRIBUTING.md`] file or other sources as appropriate.

- Tutorials Workflow
  - [Starting a Tutorial](../CONTRIBUTING.md#starting-a-tutorial)
  - [Working on Tutorial Tasks](../CONTRIBUTING.md#working-on-tutorial-tasks)
    - [Coauthor Attribution Generator](https://coauthors.me/generator)
  - [Completing a Tutorial](../CONTRIBUTING.md#completing-a-tutorial)
- Extensions Workflow
  - [Starting an Extension](../CONTRIBUTING.md#starting-an-extension)
  - [Working on Extension Tasks](../CONTRIBUTING.md#working-on-extension-tasks)
    - [Including AI Attributions](./AttributionTrailers.md)
    - [Logging Copilot Chats](../CONTRIBUTING.md#log-copilot-chat)
  - [Completing an Extension](../CONTRIBUTING.md#completing-an-extension)
- Stopping and Restarting
  - [Pausing your Work](../CONTRIBUTING.md#pausing-your-work)
  - [Resuming your Work](../CONTRIBUTING.md#resuming-your-work)

## Keyboard Shortcuts

### Visual Studio Code IDE

| Windows/Linux          | Mac                   | Action                     |
| ---------------------- | --------------------- | -------------------------- |
| `Ctrl + c`             | &#8984;`+ c`          | Copy                       |
| `Ctrl + v`             | &#8984;`+ v`          | Paste                      |
| `Ctrl + s`             | &#8984;`+ s`          | Save                       |
| `Ctrl + Z`             | &#8984;`+ z`          | Undo                       |
| `Ctrl + Y`             | &#8984;`+ Shift + Z`  | Redo                       |
| `Ctrl + f`             | &#8984;`+ f`          | Find                       |
| `` Shift + Ctrl + ` `` | &#8984;`+ Shift + C`  | Open a new terminal        |
| `Shift + Alt + F`      | `Shift +`&#8997;`+ F` | Auto format text/code      |
| `Alt + z`              | &#8997;`+ z`          | Toggle word wrap in editor |
| `Ctrl + /`             | &#8984;`+ /`          | Toggle comment             |
| `Ctrl + b`             | &#8984;`+ b`          | Toggle EXPLORER side bar   |

### GitHub Copilot

| Windows/Linux    | Mac                   | Action                        |
| ---------------- | --------------------- | ----------------------------- |
| `Ctrl + Alt + I` | `Shift +`&#8984;`+ I` | Open Copilot chat             |
| `Ctrl + .`       | &#8984;`+ .`          | Choose Copilot agent          |
| `Alt + .`        | &#8997;`+ .`          | Trigger inline suggestion     |
| `Tab`            | `Tab`                 | Accept inline suggestion      |
| `Alt + ]`        | &#8997;`+ ]`          | Next inline suggestion        |
| `Alt + [`        | &#8997;`+ [`          | Previous inline suggestion    |
| `Alt + /`        | &#8997;`+ /`          | Open Copilot Suggestions pane |

### Browser

| Windows/Linux           | Mac                       | Action                      |
| ----------------------- | ------------------------- | --------------------------- |
| `Ctrl + R`              | &#8984;`+ R`              | Standard refresh            |
| `Ctrl + Shift + R`      | &#8984;`+ Shift + R`      | Hard refresh (bypass cache) |
| `F12`                   | `F12`                     | Toggle the Developer Tools  |
| `Ctrl + Shift + Delete` | &#8984;`+ Shift + Delete` | Clear browsing history      |

## Git Commands

| Command                                                               | Action                                                          |
| --------------------------------------------------------------------- | --------------------------------------------------------------- |
| `git status`                                                          | Display the current branch, modified, and staged files.         |
| `git switch main`                                                     | Switch to the `main` branch.                                    |
| `git pull --ff-only upstream main`<br>`git push origin main`          | Synchronize with the upstream `main` branch.                    |
| `git branch <branch_name>`                                            | Create a new branch named `<branch_name>`.                      |
| `git switch <branch_name>`                                            | Switch to the branch named `<branch_name>`.                     |
| `git stage <file_1>`                                                  | Stage the file identified by `<file_1>` for commit.             |
| `git stage .`                                                         | Stage all changed files for commit.                             |
| `git commit -m "<commit message>"`                                    | Commit the staged changes using the provided message.           |
| `git commit -m "..." \`<br>`  --trailer "..."`                        | Commit with an [attribution trailer](./AttributionTrailers.md). |
| `git commit --allow-empty \`<br>`  -m "..." \`<br>`  --trailer "..."` | Add a missing [attribution trailer](./AttributionTrailers.md).  |
| `git push origin <branch_name>`                                       | Push the branch named `<branch_name>` to your GitHub space.     |

## Development Environment Commands

| Command                                                | Action                           |
| ------------------------------------------------------ | -------------------------------- |
| `cd web-projects/flashword-vite`<br>`npm run dev`      | Run the Vite development server. |
| `cd web-projects/flashword-vite`<br>`npx cypress open` | Launch the Cypress test runner.  |

## Miscellaneous

### GitHub Copilot

- [Copilot Configuration](CopilotConfig.md)
  - [Enabling Copilot](CopilotConfig.md#enabling-copilot)
  - [Setting up Copilot Completions](CopilotConfig.md#setting-up-completions)
  - [Disabling Ghost Text Completions](CopilotConfig.md#disabling-ghost-text-completions)
  - [Using OpenRouter's Free Model Router](CopilotConfig.md#using-openrouters-free-model-router)
- [Copilot Usage](https://github.com/settings/billing/ai_usage)
- [Copilot Models and Pricing for GitHub](https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing)
