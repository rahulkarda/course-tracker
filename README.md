<p align="center">
    <img src="https://github.com/rahulkarda/course-tracker/blob/main/assets/100devslogo.png?raw=true" alt="100Devs Logo"> 
</p>

# 100Devs Course Tracker

## Database Setup

1. Set up MongoDB atlas string with an authorized user.
2. Create `.env` file
3. Copy and paste info from `.env.example` & fill in `DB_PASSWORD` and `DB_USER` that you created during mongo setup.
4. Add `REACT_APP_BACKEND=` to `.env` for backend endpoint (this should be set to `http://localhost:5000/` currently). 

## Installing Yarn

Before you start using Yarn, you'll first need to install it on your system. There are many different ways to install Yarn, but a single one is recommended and cross-platform.

### Install via npm

It is recommended to install Yarn on your system through the [npm package manager](https://www.npmjs.com/), which comes bundled with [Node.js](https://nodejs.org/en/) when you install it on your system.

Once you have npm installed you can run the following both to **install** and **upgrade** Yarn.

    npm install --global yarn

### Alternative Installation Options

#### MacOS

Yarn install via Homebrew

You can install Yarn through the Homebrew package manager. This will also install Node.js if it is not already installed.

    brew install yarn

#### Upgrade Yarn via Homebrew

Yarn will warn you if a new version is available. To upgrade Yarn, you can do so with Homebrew.

    brew upgrade yarn

#### Windows

Yarn install via installer.

This will give you a `.msi` file that when run will walk you through installing Yarn on Windows.

If you use the installer you will first need to install Node.js.

[![Download installer](https://img.shields.io/badge/download_installer-0A66C2?style=for-the-badge&logo=windows&logoColor=white)](https://classic.yarnpkg.com/latest.msi)

#### Windows Notice

Please whitelist your project folder and the Yarn cache directory `(%LocalAppData%\Yarn)` in your antivirus software, otherwise installing packages will be significantly slower as every single file will be scanned as it’s written to disk.

### Check installation

Check that Yarn is installed by running the following command

    yarn --version

I have Yarn installed successfully now what?

## Running the project locally

Clone this repository locally

    git clone https://github.com/100devs/course-tracker.git

Install the dependencies. Inside the root

    yarn install

## Available Scripts

In the project root directory, you can run:

    yarn client

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

    yarn build

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

    yarn server

Runs the server in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

    yarn dev

Runs the `client` and `server` scripts to run in parallel.
