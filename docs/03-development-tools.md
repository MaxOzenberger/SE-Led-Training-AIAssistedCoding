# Development tools

[Back to the pre-work overview](../README.md)

## Install Node.js and Python

> [!NOTE]
> We will be using Python 3.13 and Node version 24.19.0
> See below for notes on Node version.
> If you have Node and Python already configured on your machine and don't want to use the same versions, that's fine; just proceed at your own risk :)
> If you are unsure, follow the steps below.

### Step 1: Node.js

Node.js runs JavaScript outside the browser so you can develop on localhost.

#### Windows

- Open a new Powershell terminal as an Administrator.
  > If you don't have Admin access on your machine, download the Windows installer from [Node Download](https://nodejs.org/en/download). Accept all defaults. Then skip to Python install.
- Copy, paste, and run the following command to install Node.js:

  ```powershell
   # Download and install Chocolatey:
   powershell -c "irm https://community.chocolatey.org/install.ps1|iex"

   # Download and install Node.js:
   choco install nodejs --version="24.19.0"

   # Verify the Node.js version:
   node -v # Should print "v24.19.0".

   # Verify npm version:
   npm -v # Should print "11.17.0".
  ```

  See below for the expected output once it has finished installing. If you are prompted during the installation, select/enter "Y" or "Yes" to continue.

  ![A Windows PowerShell terminal showing a completed Node.js installation and version checks](assets/nodejs-install-terminal.png)

#### Mac

Mac users can use `nvm` (Node Version Manager) to install Node.js. If you already have `nvm` installed, you can skip the first two commands in the script below.

- Open a new terminal.
- Copy, paste, and run the following commands to install Node.js:

```shell
  # Download and install nvm:
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.6/install.sh | bash

  # in lieu of restarting the shell
  \. "$HOME/.nvm/nvm.sh"

  # Download and install Node.js:
  nvm install 24

  # Verify the Node.js version:
  node -v # Should print "v24.19.0".

  # Verify npm version:
  npm -v # Should print "11.17.0".
```

### Step 2: Python

Python is used for the ArcGIS Notebooks and ArcPy section. We will install the popular `uv` Python environment manager to manage versions and dependencies. You will install Python using `uv` later in the workshop.

#### Windows

- Install the **uv** package to support Python in VS Code:

  ```powershell
  powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
  ```

  See below for the expected output once it has finished installing. If you are prompted during the installation, select/enter "Y" or "Yes" to continue.
  ![A Windows PowerShell terminal showing a completed uv installation](assets/uv-install-terminal.png)

- Close Powershell and reopen it.
- Verify that uv is installed:

  ```powershell
  uv --version
  ```

  ![A Windows PowerShell terminal showing a completed uv installation](assets/uv-post-install-confirm.png)

#### Mac

- Open a terminal and run the following command to install uv:

```shell
  curl -LsSf https://astral.sh/uv/install.sh | sh
```

- Close and reopen the terminal.
- Verify that uv is installed:

```shell
  uv --version
```

Next: [Set up Experience Builder Developer Edition (optional)](04-experience-builder.md)
