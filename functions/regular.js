class Experiment {


    constructor() {
        console.log("==========================");
        console.log("Regular Functions")
        console.log("--------------------------");
    }

    // static function to be passed
    static staticPrintFunction = function (string) {
        console.log(string)
    }

    // logging the contents of the parameter
    printStringArgument = function (string) {
        console.log(string);
        return this;
    }

    // running a function parameter and a string parameter as the function argument
    runFunction = function( fn, string ) {
        fn(string);
        return this;
    }

    // taking in an object as a parameter instead to do the same as above
    consumeAndRunFunctionInsideObject = function({fn, ...object}) {
        // console.log(object);
        fn(object.argument);
        return this;
    }

    // taking in an object as a parameter to do the same as above plus extra properties
    consumeAndRunFunctionWithAddedPropertiesInsideObject = function({extra_property = "with added properties", ...object}) {
        object.fn(object.argument + " " + extra_property)
        return this;
    }

}

module.exports = {
    Experiment: Experiment
}