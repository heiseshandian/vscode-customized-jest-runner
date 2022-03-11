# vscode-customized-jest-runner

A customized version of [vscode-jest-runner](https://github.com/firsttris/vscode-jest-runner).

## configs

![Change Configs as below](https://github.com/heiseshandian/vscode-customized-jest-runner/raw/master/public/config.png)

## Supports

- yarn & vscode workspaces (monorepo)
- dynamic jest config resolution
- yarn 2 pnp
- CRA & and similar abstractions

![Extension Example](https://github.com/heiseshandian/vscode-customized-jest-runner/raw/master/public/vscode-jest.gif)

## Extension Settings

Jest Runner will work out of the box, with a valid Jest config.  
If you have a custom setup use the following options to configure Jest Runner:

| Command                                   | Description                                                                                                                      |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| jestrunner.configPath                     | Jest config path (relative to ${workFolder} e.g. jest-config.json)                                                               |
| jestrunner.jestPath                       | Absolute path to jest bin file (e.g. /usr/lib/node_modules/jest/bin/jest.js)                                                     |
| jestrunner.debugOptions                   | Add or overwrite vscode debug configurations (only in debug mode) (e.g. `"jestrunner.debugOptions": { "args": ["--no-cache"] }`) |
| jestrunner.runOptions                     | Add CLI Options to the Jest Command (e.g. `"jestrunner.runOptions": ["--coverage", "--colors"]`) https://jestjs.io/docs/en/cli   |
| jestrunner.jestCommand                    | Define an alternative Jest command (e.g. for Create React App and similar abstractions)                                          |
| jestrunner.disableCodeLens                | Disable CodeLens feature                                                                                                         |
| jestrunner.codeLensSelector               | CodeLens will be shown on files matching this pattern (default \*_/_.{test,spec}.{js,jsx,ts,tsx})                                |
| jestrunner.codeLens                       | Choose which CodeLens to enable, default to `["run", "debug"]`                                                                   |
| jestrunner.enableYarnPnpSupport           | Enable if you are using Yarn 2 with Plug'n'Play                                                                                  |
| jestrunner.projectPath                    | Absolute path to project directory (e.g. /home/me/project/sub-folder)                                                            |
| jestrunner.changeDirectoryToWorkspaceRoot | Changes directory to workspace root before executing the test                                                                    |
| jestrunner.preserveEditorFocus            | Preserve focus on your editor instead of focusing the terminal on test run                                                       |
| jestrunner.jestCommandAlias               | Define jest command alias(such as my-custom-jest-command)                                                                        |
