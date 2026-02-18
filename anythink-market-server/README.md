# Anythink Market Server

This project is an Express server that listens on port 8001. It is designed to be a simple starting point for building a web application using Node.js and Express.

## Project Structure

```
anythink-market-server
├── src
│   └── index.js          # Entry point of the application
├── package.json          # Project configuration and dependencies
├── yarn.lock             # Dependency version lock file
├── .gitignore            # Files and directories to ignore in Git
├── Dockerfile            # Instructions for building the Docker image
├── .dockerignore         # Files and directories to ignore when building the Docker image
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- Yarn (for package management)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Wilcolab/Anythink-Market-ro7j4ckh.git
   cd Anythink-Market-ro7j4ckh
   ```

2. Install dependencies:
   ```
   yarn install
   ```

### Running the Server

To start the server with automatic code reloading, run:

```
yarn start
```

The server will be available at `http://localhost:8001`.

### Docker

To build and run the Docker container, use the following commands:

1. Build the Docker image:
   ```
   docker build -t anythink-market-server .
   ```

2. Run the Docker container:
   ```
   docker run -p 8001:8001 anythink-market-server
   ```

The server will be accessible at `http://localhost:8001` from your host machine.

## License

This project is licensed under the MIT License. See the LICENSE file for details.