---
sidebar_position: 1
---

# The Basics: Typescript

## What is it?
Typescript is a "superset" of Javascript, that adds typechecking and other features to the Javascript language. Typescript doesn't have its own runtime, instead it is _compiled_ into Javascript, which is then run on the Javascript runtime.

Why do we use it instead of plain Javascript?
- adds a semblance of "type checking" to Javascript, which can reduce many common bugs ([15% of all Javascript bugs according to this study](https://earlbarr.com/publications/typestudy.pdf))
- adds new features that Javascript doesn't have, and compiles them down to be compatible with any JS version
- makes it easier to understand an unfamiliar codebase
- A good way to get started with learning static types if languages like Rust or Java are interesting but you want to start out slow

## Setup
### 1. Install NVM (Node Version Manager)
- [Installing & Updating NVM](https://github.com/nvm-sh/nvm#installing-and-updating)

### 2. Install Node (a Javascript Runtime) via NVM
- [Instructions](https://github.com/nvm-sh/nvm#usage)
```sh
nvm install node
```
**in a new terminal window, test that it works:**
```
node --version
```

### 3. Install Typescript Globally
`node` automatically comes with `npm` a Package Manager for Javascript/Typescript projects
```sh
npm install -g typescript
```

