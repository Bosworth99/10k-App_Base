module.exports = {
    createView: {
        options: {
            questions: [
                {
                    config: 'viewName', // arbitray name or config for any other grunt task
                    type: 'input', // list, checkbox, confirm, input, password
                    message: 'What is the view name?',
                    default: 'def', // default value if nothing is entered
                    //choices: 'Array|function(answers)',
                    validate: function (value) {
                        var resp = (value === "def") ? "enter a name!" : true;
                        return resp;
                    }, // return true if valid, error message if invalid
                    //filter:  function(value), // modify the answer
                    // when: function(answers) // only ask this question when this function returns true
                },
                {
                    config: 'hasSubFolder', // arbitray name or config for any other grunt task
                    type: 'confirm', // list, checkbox, confirm, input, password
                    message: 'Will this live in a sub-folder?',
                },
                {
                    config: 'subFolder', // arbitray name or config for any other grunt task
                    type: 'input', // list, checkbox, confirm, input, password
                    message: 'What is the sub folder path?',
                    default: '',
                    when: function (answers) {
                        return answers['hasSubFolder'];
                    }
                },
                {
                    config: 'addModel', // arbitray name or config for any other grunt task
                    type: 'confirm', // list, checkbox, confirm, input, password
                    message: 'Want to add a model?',
                },
                {
                    config: 'sameNameAsView', // arbitray name or config for any other grunt task
                    type: 'confirm', // list, checkbox, confirm, input, password
                    message: 'Does the model have the same name as the view?',
                    when: function (answers) {
                        return answers['addModel'];
                    }
                },
                {
                    config: 'modelName', // arbitray name or config for any other grunt task
                    type: 'input', // list, checkbox, confirm, input, password
                    message: 'What is the model name?',
                    default: 'def', // default value if nothing is entered
                    validate: function (value) {
                        var resp = (value === "def") ? "enter a name!" : true;
                        return resp;
                    },
                    when: function (answers) {
                        return !answers['sameNameAsView'] && answers['addModel'];
                    }
                },
                {
                    config: 'whichParent', // arbitray name or config for any other grunt task
                    type: 'input', // list, checkbox, confirm, input, password
                    message: 'What is FULL the name and path from Javascript/.. (not including .js) of the parent module this belongs to?',
                    default: 'def', // default value if nothing is entered
                    validate: function (value) {
                        var resp = (value === "def") ? "enter a name!" : true;
                        return resp;
                    }
                }
            ]
        }
    },
    createModel: {
        options: {
            questions: [
                {
                    config: 'modelName', // arbitray name or config for any other grunt task
                    type: 'input', // list, checkbox, confirm, input, password
                    message: 'What is the model name?',
                    default: 'def', // default value if nothing is entered
                    validate: function (value) {
                        var resp = (value === "def") ? "enter a name!" : true;
                        return resp;
                    }
                },
                {
                    config: 'hasSubFolder', // arbitray name or config for any other grunt task
                    type: 'confirm', // list, checkbox, confirm, input, password
                    message: 'Will this live in a sub-folder?',
                },
                {
                    config: 'subFolder', // arbitray name or config for any other grunt task
                    type: 'input', // list, checkbox, confirm, input, password
                    message: 'What is the sub folder path?',
                    default: '',
                    when: function (answers) {
                        return answers['hasSubFolder'];
                    }
                },
                {
                    config: 'whichParent', // arbitray name or config for any other grunt task
                    type: 'input', // list, checkbox, confirm, input, password
                    message: 'What is FULL the name and path from Javascript/.. (not including .js) of the parent module this belongs to?',
                    default: 'def', // default value if nothing is entered
                    validate: function (value) {
                        var resp = (value === "def") ? "enter a name!" : true;
                        return resp;
                    }
                }
            ]
        }
    },
    createCollection: {
        options: {
            questions: [
                {
                    config: 'collectionName', // arbitray name or config for any other grunt task
                    type: 'input', // list, checkbox, confirm, input, password
                    message: 'What is the collection name?',
                    default: 'def', // default value if nothing is entered
                    validate: function (value) {
                        var resp = (value === "def") ? "enter a name!" : true;
                        return resp;
                    }
                },
                {
                    config: 'hasSubFolder', // arbitray name or config for any other grunt task
                    type: 'confirm', // list, checkbox, confirm, input, password
                    message: 'Will this live in a sub-folder?',
                },
                {
                    config: 'subFolder', // arbitray name or config for any other grunt task
                    type: 'input', // list, checkbox, confirm, input, password
                    message: 'What is the sub folder path?',
                    default: '',
                    when: function (answers) {
                        return answers['hasSubFolder'];
                    }
                },
                {
                    config: 'whichParent', // arbitray name or config for any other grunt task
                    type: 'input', // list, checkbox, confirm, input, password
                    message: 'What is FULL the name and path from Javascript/.. (not including .js) of the parent module this belongs to?',
                    default: 'def', // default value if nothing is entered
                    validate: function (value) {
                        var resp = (value === "def") ? "enter a name!" : true;
                        return resp;
                    }
                }
            ]
        }
    },
    createRouter: {
        options: {
            questions: [
                {
                    config: 'routerName', // arbitray name or config for any other grunt task
                    type: 'input', // list, checkbox, confirm, input, password
                    message: 'What is the router name?',
                    default: 'def', // default value if nothing is entered
                    validate: function (value) {
                        var resp = (value === "def") ? "enter a name!" : true;
                        return resp;
                    }
                },
                {
                    config: 'hasSubFolder', // arbitray name or config for any other grunt task
                    type: 'confirm', // list, checkbox, confirm, input, password
                    message: 'Will this live in a sub-folder?',
                },
                {
                    config: 'subFolder', // arbitray name or config for any other grunt task
                    type: 'input', // list, checkbox, confirm, input, password
                    message: 'What is the sub folder path?',
                    default: '',
                    when: function (answers) {
                        return answers['hasSubFolder'];
                    }
                },
                {
                    config: 'whichParent', // arbitray name or config for any other grunt task
                    type: 'input', // list, checkbox, confirm, input, password
                    message: 'What is FULL the name and path from Javascript/.. (not including .js) of the parent module this belongs to?',
                    default: 'def', // default value if nothing is entered
                    validate: function (value) {
                        var resp = (value === "def") ? "enter a name!" : true;
                        return resp;
                    }
                }
            ]
        }
    },
    createController: {
        options: {
            questions: [
                {
                    config: 'controllerName', // arbitray name or config for any other grunt task
                    type: 'input', // list, checkbox, confirm, input, password
                    message: 'What is the controller name?',
                    default: 'def', // default value if nothing is entered
                    validate: function (value) {
                        var resp = (value === "def") ? "enter a name!" : true;
                        return resp;
                    }
                },
                {
                    config: 'hasSubFolder', // arbitray name or config for any other grunt task
                    type: 'confirm', // list, checkbox, confirm, input, password
                    message: 'Will this live in a sub-folder?',
                },
                {
                    config: 'subFolder', // arbitray name or config for any other grunt task
                    type: 'input', // list, checkbox, confirm, input, password
                    message: 'What is the sub folder path?',
                    default: '',
                    when: function (answers) {
                        return answers['hasSubFolder'];
                    }
                }
            ]
        }
    }
}