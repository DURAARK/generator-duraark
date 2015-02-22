'use strict';
var yeoman = require('yeoman-generator'),
    path = require('path');

module.exports = yeoman.generators.NamedBase.extend({
    initializing: function() {
        this.log('Bootstrapping a SailsJS based microservice named ' + this.name + ':');

        // this.argument('name', {
        //     required: true,
        //     type: String,
        //     desc: 'The subgenerator name'
        // });

        this.bootstrapRoot = this.destinationRoot();
    },

    writing: {
        copyTemplateFiles: function() {
            var templateRoot = path.join(__dirname, '..', 'node_modules', 'duraark-microservice-base') + '/**';

            console.log('Copying template files from "' + templateRoot + '" to "' + this.bootstrapRoot + '"');

            this.fs.copy(
                templateRoot,
                this.bootstrapRoot
            );
        },

        setupDeployment: function() {
            var deploymentTarget = this.bootstrapRoot + '/deployment',
                serviceBaseRoot = path.join(__dirname, '..', 'node_modules', 'duraark-microservice-base'),
                deploymentScriptsRoot = path.join(__dirname, '..', 'node_modules', 'duraark-microservice-base', 'deployment') + '/**';

            var serviceInfoPath = path.join(deploymentTarget, 'service-info.txt');

            console.log('Configuring deployment scripts ...');

            this.write(serviceInfoPath, this.name);
        }
    },

    install: function() {
        this.installDependencies({
            skipInstall: this.options['skip-install']
        });
    }
});