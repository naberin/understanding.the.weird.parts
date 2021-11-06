class Experiment {
    constructor() {
        console.log("==========================");
        console.log("Arrow Functions")
        console.log("--------------------------");
    }

    // logging the contents of the parameter
    printStringArgument = (string) => {
        console.log(string);
        return this
    }

    // running a function parameter and a string parameter as the function argument
    runFunction = ( fn, string ) => {
        fn(string);
        return this;
    }

    // taking in an object as a parameter instead to do the same as above
    consumeAndRunFunctionInsideObject = ({fn, ...object}) => {
        // console.log(object);
        fn(object.argument);
        return this;
    }

    // taking in an object as a parameter to do the same as above plus extra properties
    consumeAndRunFunctionWithAddedPropertiesInsideObject = ({extra_property = "with added properties", ...object}) => {
        object.fn(object.argument + " " + extra_property)
        return this;
    }
}

module.exports = {
    Experiment: Experiment
}