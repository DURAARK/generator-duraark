# generator-duraark

'generator-duraark' is CLI to bootstrap (micro)services for the DURAARK platform. It can also be used outside the DURAARK project, as it provides very generic blueprints for services.

The bootstrapped service is [SailsJS](http://sailsjs.org) based and comes with scripts for automatic docker deployment and with convenience scripts for deployment. For more information on the functionality see the Github repository [microservice-base](https://github.com/DURAARK/microservice-base), which forms the base of the CLI.

The CLI is based on [Yeoman](http://yeoman.io).

## Usage

1. Install [Yeoman](http://yeoman.io): npm install -g yeoman
2. Install the generator: npm install -g generator-duraark
3. Create a new directory to host the service and change into it
4. Execute 'yo duraark:service $NAME', where $NAME is your service name
5. The directory is populated with the necessary files. See the 'scripts' folder for the development scripts and the 'deployment' folder for scripts to deploy the service with docker.

This is the first public version of the CLI. Documentation and functionality will be extended over the next months within the [DURAARK project](http://duraark.eu).

Feedback is welcome. Enjoy!
