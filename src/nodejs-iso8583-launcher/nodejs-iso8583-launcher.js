// Global const and var for CLI arguments parser
const appName = "nodejs-iso8583-launcher";
const appDescription = "See more https://github.com/josemarsilva/apm-labs";
const appVersion = "2020.11.20.1650";
const argvOptionHelp = "-h";
const argvOptionHelpWord = "--help";
const argvOptionHelpDescription = "shows usage help message. " + appDescription ;
const argvOptionQuantity = "-q";
const argvOptionQuantityWord = "--quantity";
const argvOptionQuantityDescription = "Quantity of iterations (Default = 1). Ex: -q 1000";
var quantity = 1;

// Extract argv from CLI (Command Line Interface) arguments
var argv = process.argv; // argv[2][0]: path-to-nodejs.exe; argv[2][1]: path-to-application.js; argv[2][2 .. n]: command line parameters


// appTitle()
function appTitle() {
    console.log(appName + " - " + appVersion + " - "  + appDescription);
}

// optionHelp() - Show command line help
function optionHelp() {
    console.log("usage: " + appName + " [<argv-options-list>]" );
    console.log(argvOptionHelp + ", " + argvOptionHelpWord.concat(" ".repeat(10)).substring(0,10) + "  " + argvOptionHelpDescription);
    console.log(argvOptionQuantity + ", " + argvOptionQuantityWord.concat(" ".repeat(10)).substring(0,10) + "  " + argvOptionQuantityDescription);
}

// optionQuantity(argvQuantity) - 
function optionQuantity(argvQuantity) {
    if ( argvQuantity == "") {
        console.log("Missing -q or --quantity parameter option argument value!");
        process.exit(1); // failure
    }
    if ( isNaN(argvQuantity) ) {
        console.log("Invalid Number '" + argvQuantity + "' -q or --quantity parameter option argument value!");
        process.exit(1); // failure
    }
    quantity = Number(argvQuantity);
} 

// optionQuantity(argvQuantity) - 
function optionIsInvalid(argv) {
    console.log("Invalid option argument '" + argv + "'. See -h or --help !");
    process.exit(1); // failure
} 


// Print application title 
appTitle()

// Parse CLI 
for (i = 2; i < argv.length; i++) {
    switch (argv[i]) {
        case argvOptionHelp:
        case argvOptionHelpWord:
            optionHelp();
            process.exit(0); // Success 
            break 
        case argvOptionQuantity:
        case argvOptionQuantityWord:
            if (i + 1 < argv.length ) {
                optionQuantity(argv[i+1]);
            } else {
                optionQuantity("");
            }
            i++; // skip value: -q <value>
            break 
        default:
            optionIsInvalid(argv[i])
    }
}

if (argv.length == 0) {
    optionHelp();
    process.exit(1); // failure
} else  {
    for (i = 1; i <= quantity; i++) {
        console.log("[" + i + "]: ");
    }
}
