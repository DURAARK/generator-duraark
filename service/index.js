'use strict';
var yeoman = require('yeoman-generator'),
    path = require('path');

module.exports = yeoman.generators.NamedBase.extend({
    initializing: function() {
        this.log('You called the Duraark subgenerator with the argument ' + this.name + '.');

        // this.argument('name', {
        //     required: true,
        //     type: String,
        //     desc: 'The subgenerator name'
        // });

        this.bootstrapRoot = this.destinationRoot();
    },

    writing: function() {
        var templateRoot = path.join(__dirname, '..', 'node_modules', 'duraark-microservice-base', 'src') + '/**',
            deploymentScriptsRoot = path.join(__dirname, '..', 'node_modules', 'duraark-microservice-base', 'deployment') + '/**',
            developmentScriptsRoot = path.join(__dirname, '..', 'node_modules', 'duraark-microservice-base', 'src', 'scripts') + '/**';

        console.log('Copying template files from "' + templateRoot + '" to "' + this.bootstrapRoot + '"');

        this.fs.copy(
            templateRoot,
            this.bootstrapRoot
        );

        var deploymentTarget = this.bootstrapRoot + '/deployment';

        console.log('Copying deployment scripts from "' + deploymentScriptsRoot + '" to "' + deploymentTarget + '"');

        this.fs.copy(
            deploymentScriptsRoot,
            deploymentTarget
        );

        var serviceInfoPath = path.join(deploymentTarget, 'service-info.txt');

        console.log('Configuring deployment scripts ...');

        this.write(serviceInfoPath, this.name);

        var developmentTarget = this.bootstrapRoot + '/scripts';

        console.log('Copying development scripts from "' + developmentScriptsRoot + '" to "' + developmentTarget + '"');

        this.fs.copy(
            developmentScriptsRoot,
            developmentTarget
        );

        console.log('Configuring development scripts ...');

        serviceInfoPath = path.join(developmentTarget, 'service-info.txt');

        this.write(serviceInfoPath, this.name);
    }
});