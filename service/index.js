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
            var templateRoot = path.join(__dirname, '..', 'node_modules', 'duraark-microservice-base', 'src') + '/**';

            console.log('Copying template files from "' + templateRoot + '" to "' + this.bootstrapRoot + '"');

            this.fs.copy(
                templateRoot,
                this.bootstrapRoot
            );
        },

        setupDeployment: function() {
            var deploymentTarget = this.bootstrapRoot + '/deployment',
                deploymentScriptsRoot = path.join(__dirname, '..', 'node_modules', 'duraark-microservice-base', 'deployment') + '/**';

            console.log('Copying deployment scripts from "' + deploymentScriptsRoot + '" to "' + deploymentTarget + '"');

            this.fs.copy(
                deploymentScriptsRoot,
                deploymentTarget
            );

            var serviceInfoPath = path.join(deploymentTarget, 'service-info.txt');

            console.log('Configuring deployment scripts ...');

            this.write(serviceInfoPath, this.name);
        },

        setupDevelopment: function() {
            var developmentTarget = this.bootstrapRoot + '/scripts',
                developmentScriptsRoot = path.join(__dirname, '..', 'node_modules', 'duraark-microservice-base', 'src', 'scripts') + '/**';

            console.log('Copying development scripts from "' + developmentScriptsRoot + '" to "' + developmentTarget + '"');

            this.fs.copy(
                developmentScriptsRoot,
                developmentTarget
            );

            console.log('Configuring development scripts ...');

            var serviceInfoPath = path.join(developmentTarget, 'service-info.txt');

            this.write(serviceInfoPath, this.name);
        }
    },

    install: function() {
        this.installDependencies({
            skipInstall: this.options['skip-install']
        });
    }
});