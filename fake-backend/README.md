# fake-backend
---

This service allows the developer to work on a new feature or an existing one using fake data while the real service is in development.

* [**Requirements**](#requirements)
* [**Installing**](#installing)
* [**Getting Started**](#getting-started)
* [**Configuring**](#configuring)
* [**Endpoints**](#endpoints)
    * [**Properties Table**](#properties-table)
    * [**Searchable Endpoints**](#searchable-endpoints)
    * [**Paginated Endpoints**](#paginated-endpoints)

## Requirements
---

- [Node (>=10.16.0)](https://nodejs.org/en/)
- [Yarn (>=1.16.0)](https://yarnpkg.com/en/)

Alternatively you can use docker.

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Installing
---

Install it by running the yarn install command.

```
yarn install
```

## Getting Started
---

Run yarn start command to start the service.

```
yarn start
```

The service should be ready to use.

## Configuring

When creating a new server you can pass a few options to make it work as you wish.

### Options Table

Here are every property you can use when creating a new server instance:

| Name          | Description                                                 | Required | Default |
| ---           | ---                                                         | ---      | ---     |
| `proxy`       | The url of the remote server.                               | no       |         |
| `middlewares` | An array of functions to be used as middlewares. (*)        | no       | cors    |
| `pagination`  | An object used to rename the default pagination fields. (*) | no       |         |

* if set will override the defaults.

## Endpoints
---

Sometimes when you're developing a new feature you will find the need to create a new endpoint, creating a new endpoint is quite simple, all you need to do is open the `index.js` file and add as many entries you need inside the `routes` constant.

### Properties Table

 Here are every configuration property you can use when creating or modifying an endpoint:

| Name     | Description                                                      | Required | Default |
| ---        | ---                                                            | ---      | ---     |
| `code`     | The http status code.                                          | no       | 200     |
| `data`     | Define a data to be used as the endpoint response. (*)         | no       |         |
| `file`     | Define a file to be used as the endpoint response. (*)         | no       |         |
| `paginate` | Indicate that this endpoint accepts pagination parameters.     | no       |         |
| `search`   | Indicate that this endpoint accepts search parameter.          | no       |         |
| `type`     | The http method.                                               | yes      |         |

* if set the server will use one of these as the response instead of automatically reading a file, data has higher priority.

### Searchable Endpoints

This section is still in development.

### Paginated Endpoints

This section is still in development.
