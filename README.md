# generator-duraark

'generator-duraark' is CLI tool for bootstrapping RESTful microservices. It was developed to ease the work on the [DURAARK Service Platform](https://github.com/DURAARK/duraark-platform-api), regarding the integration of polyglot software components into an integrated web-application.

The microservice uses [SailsJS](http://sailsjs.org) as REST-API layer and comes with scripts supporting the deployment process with docker and with scripts supporting daily development, e.g. in providing automatic reload of code on changes. The source code of the blueprint service can be found on Github at [microservice-base](https://github.com/DURAARK/microservice-base). 

We are happy to discuss new features and enhancements. Feel free to drop us a note, open issues, or send us a PR!

## Usage

1. Install [Yeoman](http://yeoman.io): npm install -g yo

2. Install the generator: npm install -g generator-duraark

3. Create a new directory to host the service and change into it

4. Execute 'yo duraark:service $NAME', where $NAME is your service name

5. The directory is populated with the necessary files. See the 'scripts' folder for the development scripts and the 'deployment' folder for scripts to deploy the service with docker.

This is the first public version of the CLI. Documentation and functionality will be extended over the next months within the [DURAARK project](http://duraark.eu).

Enjoy!
