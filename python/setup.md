# The Basics: Python

## What is it?
Python is a high-level general-purpose programming language that is easy to learn and fast to write. It's great for **prototyping** but is used for everything from **Backend**, **Web Development** (using Django), **DevOps** & **Security Automation** scripts, **Data Science and Analysis**, **Machine Learning** & more.

## Setup

### 1. Install PyEnv
Pyenv is an environment managment tool and the recommended way to install one or more versions of Python.
- [Installation Instructions](https://github.com/pyenv/pyenv#installation)
- don't forget to [setup your shell too](https://github.com/pyenv/pyenv#set-up-your-shell-environment-for-pyenv)

### 2. Install the latest stable Python version via PyEnv
- [Installation of Python via Pyenv](https://github.com/pyenv/pyenv#install-additional-python-versions)
- As of this writing, the latest stable is `3.10.4`

### 3. Set Global Python version to latest
In a terminal, run `pyenv global 3.10.4`

### 4. Install some helpful development dependencies
`black` is a formatter, `flake8` is a linter.
```
pip install black flake8 flake8-bugbear
```

### 4. Install this repo's Python dependencies
Python dependencies (3rd-party code we use in our programs) are typically installed via a tool called `pip`, which is automatically included with Python.

Our repo's dependencies are stored in the [./python/requirements.txt file](./requirements.txt)

```sh
cd python
pip install -r requirements.txt
```

