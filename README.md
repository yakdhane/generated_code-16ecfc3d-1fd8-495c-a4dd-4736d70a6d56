# Todo List Application

A simple Todo List application built with React.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Docker](#docker)
- [Files](#files)

## Installation

To install the dependencies, run the following command:

```
npm install
```

## Usage

To start the application, run the following command:

```
npm start
```

This will start the application at `http://localhost:3000`.

## Docker

To run the application using Docker, first build the Docker image:

```
docker build -t todo-list .
```

Then, run the Docker container:

```
docker run -p 3000:3000 todo-list
```

This will start the application at `http://localhost:3000`.

## Files

- `App.js`: The main component that renders the Todo List application.
- `Form.js`: The component that renders the form for adding new tasks to the Todo List.
- `TodoList.js`: The component that renders the list of tasks in the Todo List.
- `TodoItem.js`: The component that renders a single task in the Todo List.
- `Dockerfile`: The Dockerfile used to build the Docker image for the application.