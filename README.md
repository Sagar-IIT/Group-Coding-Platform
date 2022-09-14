# Group Coding Project

## Getting Started

Clone the repository:

```
git clone https://github.com/Sagar-IIT/Group-Coding-Platform
```

and install the dependencies

```
npm install
```

#### MongoDB

The project uses MongoDB as a database. Install [MongoDB](https://docs.mongodb.com/manual/administration/install-community/)

#### Docker

The project uses Podman containers to run the user provided source files.

Make sure that you have docker installed. Run the `createimage.sh` script and it will create a podman image according to the commands given in the `Dockerfile` which will be used to create the podman containers.

### Run the Application

The project is preconfigured with a simple development web server.

The simplest way to start this server is:
`npm start`

- Open [http://localhost:9909](http://localhost:9909/) and take a look around.
