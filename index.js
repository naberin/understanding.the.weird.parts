let RegularFunctions = require("./functions/regular");
let ArrowFunctions = require("./functions/arrow");

let example_object = {
    argument: "experiment: \tPrint string through a function inside object",
    fn: RegularFunctions.Experiment.staticPrintFunction
}

let regularFunctionsExperiment = new RegularFunctions.Experiment()
    .printStringArgument("experiment: \tPrint string with regular function")
    .runFunction(RegularFunctions.Experiment.staticPrintFunction, "experiment: \tPass function to print string")
    .consumeAndRunFunctionInsideObject(example_object)
    .consumeAndRunFunctionWithAddedPropertiesInsideObject(example_object);

let arrowFunctionsExperiment = new ArrowFunctions.Experiment()
    .printStringArgument("experiment: \tPrint string with regular function")
    .runFunction(RegularFunctions.Experiment.staticPrintFunction, "experiment: \tPass function to print string")
    .consumeAndRunFunctionInsideObject(example_object)
    .consumeAndRunFunctionWithAddedPropertiesInsideObject(example_object);
