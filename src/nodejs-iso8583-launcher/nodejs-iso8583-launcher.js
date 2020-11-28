// Const CLI arguments parser
const appName = "nodejs-iso8583-launcher";
const appDescription = "See more https://github.com/josemarsilva/apm-labs";
const appVersion = "2020.11.27.1930";
const argvOptionHelp = "-h";
const argvOptionHelpWord = "--help";
const argvOptionHelpDescription = "Shows usage help message. " + appDescription ;
const argvOptionQuantity = "-q";
const argvOptionQuantityWord = "--quantity";
const argvOptionQuantityDefault = 1;
const argvOptionQuantityDescription = "Quantity of iterations (default = " + argvOptionQuantityDefault + "). Ex: " + argvOptionQuantity+ " 1000";
const argvOptionUsers = "-u";
const argvOptionUsersWord = "--users";
const argvOptionUsersDefault = 1;
const argvOptionUsersDescription = "Number of concurrent users threads (default = " + argvOptionUsersDefault + "). Ex: " + argvOptionUsers + " 10";
const argvOptionDebuglevel = "-d";
const argvOptionDebuglevelWord = "--debug";
const argvOptionDebuglevelDefault = "INFO";
const argvOptionDebuglevelDescription = "Debug level in ('INFO', 'INFO-10', 'INFO-1000', 'WARN', 'ERROR') (default = " + argvOptionDebuglevelDefault + "). Ex: " + argvOptionDebuglevel + " INFO-10";
const argvOptionTcpaddress = "-a";
const argvOptionTcpaddressWord = "--address";
const argvOptionTcpaddressDefault = "127.0.0.1";
const argvOptionTcpaddressDescription = "TCP/IP Address (default = " + argvOptionTcpaddressDefault + "). Ex: " + argvOptionTcpaddress + " 127.0.0.1";
const argvOptionTcpport = "-p";
const argvOptionTcpportWord = "--port";
const argvOptionTcpportDefault = "80";
const argvOptionTcpportDescription = "TCP/IP Port (default = " + argvOptionTcpportDefault + "). Ex: " + argvOptionTcpport + " 80";

// Variables CLI arguments parser
var quantity = argvOptionQuantityDefault;
var users = argvOptionUsersDefault;
var debuglevel = argvOptionDebuglevelDefault
var tcpaddress = argvOptionTcpaddressDefault
var tcpport = argvOptionTcpportDefault

// Variables Global


// Extract argv from CLI (Command Line Interface) arguments
var argv = process.argv; // argv[2][0]: path-to-nodejs.exe; argv[2][1]: path-to-application.js; argv[2][2 .. n]: command line parameters

// appTitle() - Show Application title, version, short description, etc
function appTitle() {
    console.log(appName + " - " + appVersion + " - "  + appDescription);
}

// optionIsInvalid(argv) - Show invalid option
function optionIsInvalid(argv) {
    console.log("Invalid option argument '" + argv + "'. See -h or --help !");
    process.exit(1); // failure
} 

// optionHelp() - Show command line help
function optionHelp() {
    console.log("usage: " + appName + " [<argv-options-list>]" );
    console.log(argvOptionHelp + ", " + argvOptionHelpWord.concat(" ".repeat(10)).substring(0,10) + "  " + argvOptionHelpDescription);
    console.log(argvOptionDebuglevel + ", " + argvOptionDebuglevelWord.concat(" ".repeat(10)).substring(0,10) + "  " + argvOptionDebuglevelDescription);
    //
    console.log(argvOptionTcpaddress + ", " + argvOptionTcpaddressWord.concat(" ".repeat(10)).substring(0,10) + "  " + argvOptionTcpaddressDescription);
    console.log(argvOptionTcpport + ", " + argvOptionTcpportWord.concat(" ".repeat(10)).substring(0,10) + "  " + argvOptionTcpportDescription);
    console.log(argvOptionQuantity + ", " + argvOptionQuantityWord.concat(" ".repeat(10)).substring(0,10) + "  " + argvOptionQuantityDescription);
    console.log(argvOptionUsers + ", " + argvOptionUsersWord.concat(" ".repeat(10)).substring(0,10) + "  " + argvOptionUsersDescription);
}

// optionQuantity(argvQuantity) - Parse and check optionQuantity
function optionQuantity(argvQuantity) {
    if ( argvQuantity == "") {
        console.log("Missing " + argvOptionQuantity + " or " + argvOptionQuantityWord + " parameter option argument value!");
        process.exit(1); // failure
    }
    if ( isNaN(argvQuantity) ) {
        console.log("Invalid Number '" + argvQuantity + "'. Check " + argvOptionQuantity + " or " + argvOptionQuantityWord + " parameter option argument value!");
        process.exit(1); // failure
    }    
    quantity = Number(argvQuantity);
}     

// optionUsers(argvUsers) - Parse and check optionUsers
function optionUsers(argvUsers) {
    if ( argvUsers == "") {
        console.log("Missing " + argvOptionUsers + " or " + argvOptionUsersWord + " parameter option argument value!");
        process.exit(1); // failure
    }    
    if ( isNaN(argvUsers) ) {
        console.log("Invalid Number '" + argvUsers + "'. Check " + argvOptionUsers + " or " + argvOptionUsersWord + " parameter option argument value!");
        process.exit(1); // failure
    }    
    users = Number(argvUsers);
}     

// optionDebuglevel(argvDebuglevel) - Parse and check optionDebuglevel
function optionDebuglevel(argvDebuglevel) {
    if ( argvDebuglevel == "") {
        console.log("Missing " + argvOptionDebuglevel + " or " + argvOptionDebuglevelWord + " parameter option argument value!");
        process.exit(1); // failure
    }    
    if ( argvDebuglevel.toUpperCase() != "INFO" && argvDebuglevel.toUpperCase() != "INFO-10"  && argvDebuglevel.toUpperCase() != "INFO-1000" ) {
        console.log("Invalid Debug Level '" + argvDebuglevel + "'. Check " + argvOptionDebuglevel + " or " + argvOptionDebuglevelWord + " parameter option argument value!");
        process.exit(1); // failure
    }    
    debuglevel = argvDebuglevel.toUpperCase();
}     

// optionTcpaddress(argvTcpaddress) - Parse and check optionTcpaddress
function optionTcpaddress(argvTcpaddress) {
    if ( argvTcpaddress == "") {
        console.log("Missing " + argvOptionTcpaddress + " or " + argvOptionTcpaddressWord + " parameter option argument value!");
        process.exit(1); // failure
    }    
    if ( 0 == 1  ) {
        console.log("Invalid TCP/IP Address '" + argvTcpaddress + "'. Check " + argvOptionTcpaddress + " or " + argvOptionTcpaddressWord + " parameter option argument value!");
        process.exit(1); // failure
    }    
    tcpaddress = argvTcpaddress;
}     

// optionTcpport(argvTcpport) - Parse and check optionTcpport
function optionTcpport(argvTcpport) {
    if ( argvTcpport == "") {
        console.log("Missing " + argvOptionTcpport + " or " + argvOptionTcpportWord + " parameter option argument value!");
        process.exit(1); // failure
    }    
    if ( isNaN(argvTcpport) ) {
        console.log("Invalid TCP/IP PORT '" + argvTcpport + "'. Check " + argvOptionTcpport + " or " + argvOptionTcpportWord + " parameter option argument value!");
        process.exit(1); // failure
    }    
    tcpport = argvTcpport;
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
        case argvOptionDebuglevel:
        case argvOptionDebuglevelWord:
            if (i + 1 < argv.length ) {
                optionDebuglevel(argv[i+1]);
            } else {
                optionDebuglevel("");
            }
            i++; // skip value: -d <value>
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
        case argvOptionUsers:
        case argvOptionUsersWord:
            if (i + 1 < argv.length ) {
                optionUsers(argv[i+1]);
            } else {
                optionUsers("");
            }
            i++; // skip value: -u <value>
            break 
        case argvOptionTcpaddress:
        case argvOptionTcpaddressWord:
            if (i + 1 < argv.length ) {
                optionTcpaddress(argv[i+1]);
            } else {
                optionTcpaddress("");
            }
            i++; // skip value: -u <value>
            break 
        case argvOptionTcpport:
        case argvOptionTcpportWord:
            if (i + 1 < argv.length ) {
                optionTcpport(argv[i+1]);
            } else {
                optionTcpport("");
            }
            i++; // skip value: -u <value>
            break 
        default:
            optionIsInvalid(argv[i])
    }
}

// Case options are OK Then execute
if (argv.length <= 2) {
    optionHelp();
    process.exit(1); // failure
} else  {
    for (i = 1; i <= users; i++) {
        for (j = 1; j <= quantity; j++) {
            if ( ( debuglevel == "INFO" ) || ( debuglevel == "INFO-10" && j % 10 == 0 )  || ( debuglevel == "INFO-1000" && j % 1000 == 0 ) ) {
                console.log("[" + i + "," + j + "]: ");
            }
        }
    }
}

// Log finish message
console.log(appName + " finished!");
