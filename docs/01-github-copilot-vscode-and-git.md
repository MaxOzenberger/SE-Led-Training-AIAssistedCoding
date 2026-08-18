# GitHub, Copilot access, VSCode, and Git

[Back to the pre-work overview](../README.md)

## Step 1: Create your GitHub account

> [!IMPORTANT]
> Do this first. Everything else connects through your GitHub account.

Your GitHub account is how you will sign in to Esri's enterprise GitHub Copilot. You only need a free **personal** account.

1. Go to [GitHub sign-up](https://github.com/signup) and create a free account with your **Esri email address**.
2. Verify your email when GitHub sends the confirmation.
3. In your GitHub profile, set your **company/workplace to "Esri."** This links your personal account to Esri's organization so your Copilot access connects through SSO (single sign-on).

> [!NOTE]
> Use a personal GitHub account, not a separate Esri-issued account, and associate it with Esri as your workplace. Esri's SSO grants your enterprise Copilot seat through that account. You can use the same account for personal projects and work access.

### Quick check

You can log in at [github.com](https://github.com) and see your profile. You are ready for the Copilot request in Step 2.

## Step 2: Request GitHub Copilot access

> [!IMPORTANT]
> Submit this request before installing anything. It is often approved the same day, but allow up to **2-3 business days**.

1. Open the [IST GitHub Copilot request form](https://esri.service-now.com/sp?id=sc_cat_item&sys_id=ae174b1f1b0131d03db90f66624bcb4d&table=sc_cat_item&searchTerm=github%20copilot).
2. Submit the request with your Esri credentials.
3. Watch for a confirmation that access has been granted.

You do not need to wait for approval before continuing. You will need approved access when you [sign in to Copilot in VS Code](02-visual-studio-code.md#step-3-sign-in-to-github-copilot).

## Step 3: Install Visual Studio Code

Visual Studio Code (VS Code) is the free editor you will use to write code and work with Copilot.

1. Go to the [VS Code download page](https://code.visualstudio.com/download) and download the installer for your operating system.

   > [!NOTE]
   > **macOS:** Download the **Universal** build, unzip it, and drag `Visual Studio Code.app` into `/Applications`. On the first launch, right-click the application and select **Open** if macOS displays an unidentified-developer prompt.

2. Run the installer.
   On Windows, select these options on the **Select Additional Tasks** screen:
   - **Add to PATH**
   - **Add "Open with Code" to the context menu** (recommended)
3. Launch VS Code to confirm that it opens.

## Step 4: Install or Verify you have Git installed

1. Open a powershell terminal and run the following command to check if Git is installed:

   ```shell
   git --version
   ```

> [!NOTE]
> **macOS:** Running `git --version` for the first time may prompt you to install the Xcode Command Line Tools, which include Git. Accept the prompt, or run `brew install git` if you use Homebrew.

You should see a version number. If you do not, follow the instructions below.

### Installing Git

Git tracks changes to code and communicates with GitHub.

1. Go to the [Git downloads page](https://git-scm.com/downloads) and download the installer.
2. Accept the defaults, with one change: when prompted to select Git's editor, choose **Use Visual Studio Code as Git's default editor**.
3. Open a new powershell and verify the installation:

   ```shell
   git --version
   ```

Next: [Set up Visual Studio Code](02-visual-studio-code.md)
