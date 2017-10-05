module.exports = {
    "parser": "babel-eslint",
    "extends": [                   // A configuration file can extend the set of enabled rules from base configurations.
      "eslint:recommended",
      "plugin:node/recommended"
    ],
    "plugins": [                   // third-party plugin e.g. "react" (must run `npm install eslint-plugin-react`)
      "node",
      "lodash",
    ],
    "env": {
      "browser": true,             // browser global variables.
      "node": true,                // Node.js global variables and Node.js scoping.
      "commonjs": true,            // CommonJS global variables and CommonJS scoping (use this for browser-only code that uses Browserify/WebPack).
      "shared-node-browser": true, // Globals common to both Node and Browser.
      "es6": true,                 // enable all ECMAScript 6 features except for modules (this automatically sets the ecmaVersion parser option to 6).
      "worker": true,              // web workers global variables.
      "amd": false,                // defines require() and define() as global variables as per the amd spec.
      "mocha": true,               // adds all of the Mocha testing global variables.
      "jasmine": false,            // adds all of the Jasmine testing global variables for version 1.3 and 2.0.
      "jest": false,               // Jest global variables.
      "phantomjs": false,          // PhantomJS global variables.
      "protractor": false,         // Protractor global variables.
      "qunit": false,              // QUnit global variables.
      "jquery": false,             // jQuery global variables.
      "prototypejs": false,        // Prototype.js global variables.
      "shelljs": false,            // ShellJS global variables.
      "meteor": false,             // Meteor global variables.
      "mongo": false,              // MongoDB global variables.
      "applescript": false,        // AppleScript global variables.
      "nashorn": false,            // Java 8 Nashorn global variables.
      "serviceworker": false,      // Service Worker global variables.
      "atomtest": false,           // Atom test helper globals.
      "embertest": false,          // Ember test helper globals.
      "webextensions": false,      // WebExtensions globals.
      "greasemonkey": false,       // GreaseMonkey globals.
    },
    "parserOptions": {
      "ecmaVersion": 7,
      "sourceType": "module",
      "ecmaFeatures": {
        "binaryLiterals": true,                    // enable binary literals
        "blockBindings": true,                     // enable let and const (aka block bindings)
        "defaultParams": true,                     // enable default function parameters
        "forOf": true,                             // enable for-of loops
        "generators": true,                        // enable generators
        "objectLiteralComputedProperties": true,   // enable computed object literal property names
        "objectLiteralDuplicateProperties": true,  // enable duplicate object literal properties in strict mode
        "objectLiteralShorthandMethods": true,     // enable object literal shorthand methods
        "objectLiteralShorthandProperties": true,  // enable object literal shorthand properties
        "octalLiterals": true,                     // enable octal literals
        "regexUFlag": true,                        // enable the regular expression u flag
        "regexYFlag": true,                        // enable the regular expression y flag
        "templateStrings": true,                   // enable template strings
        "unicodeCodePointEscapes": true,           // enable code point escapes
        "jsx": true                                // enable JSX
      }
    },
    "globals": {
      "_": true,
      "Immutable": true,
      "React": true,
      "log": true
    },
    "rules": {
      ////////// Possible Errors //////////

      "comma-dangle": 0,             // disallow trailing commas in object literals
      "no-cond-assign": 2,           // disallow assignment in conditional expressions
      "no-console": 2,               // disallow use of console (off by default in the node environment)
      "no-constant-condition": 2,    // disallow use of constant expressions in conditions
      "no-control-regex": 2,         // disallow control characters in regular expressions
      "no-debugger": 2,              // disallow use of debugger
      "no-dupe-args": 2,             // disallow duplicate arguments in functions
      "no-dupe-keys": 2,             // disallow duplicate keys when creating object literals
      "no-duplicate-case": 2,        // disallow a duplicate case label
      "no-empty-character-class": 2, // disallow the use of empty character classes in regular expressions
      "no-empty": 2,                 // disallow empty statements
      "no-ex-assign": 2,             // disallow assigning to the exception in a catch block
      "no-extra-boolean-cast": 2,    // disallow double-negation boolean casts in a boolean context
      "no-extra-parens": 0,          // disallow unnecessary parentheses (off by default)
      "no-extra-semi": 2,            // disallow unnecessary semicolons
      "no-func-assign": 2,           // disallow overwriting functions written as function declarations
      "no-inner-declarations": 2,    // disallow function or variable declarations in nested blocks
      "no-invalid-regexp": 2,        // disallow invalid regular expression strings in the RegExp constructor
      "no-irregular-whitespace": 2,  // disallow irregular whitespace outside of strings and comments
      "no-negated-in-lhs": 2,        // disallow negation of the left operand of an in expression
      "no-obj-calls": 2,             // disallow the use of object properties of the global object (Math and JSON) as functions
      "no-regex-spaces": 2,          // disallow multiple spaces in a regular expression literal
      "no-reserved-keys": 0,         // disallow reserved words being used as object literal keys (off by default)
      "no-sparse-arrays": 2,         // disallow sparse arrays
      "no-unreachable": 2,           // disallow unreachable statements after a return, throw, continue, or break statement
      "use-isnan": 2,                // disallow comparisons with the value NaN
      "valid-jsdoc": 0,              // Ensure JSDoc comments are valid (off by default)
      "valid-typeof": 0,             // Ensure that the results of typeof are compared against a valid string
      "no-unexpected-multiline": 2,  // Avoid code that looks like two expressions but is actually one (off by default)
      ////////// Best Practices //////////

      "accessor-pairs": 2,        // enforces getter/setter pairs in objects (off by default)
      "block-scoped-var": 2,      // treat var statements as if they were block scoped (off by default)
      "complexity": 2,            // specify the maximum cyclomatic complexity allowed in a program (off by default)
      "consistent-return": 0,     // require return statements to either always or never specify values
      "curly": 2,                 // specify curly brace conventions for all control statements
      "default-case": 2,          // require default case in switch statements (off by default)
      "dot-notation": 2,          // encourages use of dot notation whenever possible
      "dot-location": 0,          // enforces consistent newlines before or after dots (off by default)
      "eqeqeq": 2,                // require the use of === and !==
      "guard-for-in": 2,          // make sure for-in loops have an if statement (off by default)
      "no-alert": 2,              // disallow the use of alert, confirm, and prompt
      "no-caller": 2,             // disallow use of arguments.caller or arguments.callee
      "no-div-regex": 2,          // disallow division operators explicitly at beginning of regular expression (off by default)
      "no-else-return": 2,        // disallow else after a return in an if (off by default)
      "no-eq-null": 2,            // disallow comparisons to null without a type-checking operator (off by default)
      "no-eval": 2,               // disallow use of eval()
      "no-extend-native": 2,      // disallow adding to native types
      "no-extra-bind": 2,         // disallow unnecessary function binding
      "no-fallthrough": 2,        // disallow fallthrough of case statements
      "no-floating-decimal": 2,   // disallow the use of leading or trailing decimal points in numeric literals (off by default)
      "no-implied-eval": 2,       // disallow use of eval()-like methods
      "no-iterator": 2,           // disallow usage of __iterator__ property
      "no-labels": 2,             // disallow use of labeled statements
      "no-lone-blocks": 2,        // disallow unnecessary nested blocks
      "no-loop-func": 2,          // disallow creation of functions within loops
      "no-multi-spaces": 0,       // disallow use of multiple spaces
      "no-multi-str": 2,          // disallow use of multiline strings
      "no-native-reassign": 2,    // disallow reassignments of native objects
      "no-new-func": 2,           // disallow use of new operator for Function object
      "no-new-wrappers": 2,       // disallows creating new instances of String, Number, and Boolean
      "no-new": 2,                // disallow use of new operator when not part of the assignment or comparison
      "no-octal-escape": 2,       // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
      "no-octal": 2,              // disallow use of octal literals
      "no-param-reassign": 0,     // disallow reassignment of function parameters (off by default)
      "no-process-env": 2,        // disallow use of process.env (off by default)
      "no-proto": 2,              // disallow usage of __proto__ property
      "no-redeclare": 2,          // disallow declaring the same variable more then once
      "no-return-assign": 2,      // disallow use of assignment in return statement
      "no-script-url": 2,         // disallow use of javascript: urls
      "no-self-compare": 2,       // disallow comparisons where both sides are exactly the same (off by default)
      "no-sequences": 2,          // disallow use of comma operator
      "no-throw-literal": 2,      // restrict what can be thrown as an exception (off by default)
      "no-unused-expressions": 2, // disallow usage of expressions in statement position
      "no-void": 2,               // disallow use of void operator (off by default)
      "no-warning-comments": 2,   // disallow usage of configurable warning terms in comments, e.g. TODO or FIXME (off by default)
      "no-with": 2,               // disallow use of the with statement
      "radix": 2,                 // require use of the second argument for parseInt() (off by default)
      "vars-on-top": 2,           // requires to declare all vars on top of their containing scope (off by default)
      "wrap-iife": 2,             // require immediate function invocation to be wrapped in parentheses (off by default)
      "yoda": 2,                  // require or disallow Yoda conditions

      ////////// Variables //////////

      "no-catch-shadow": 2,             // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
      "no-delete-var": 2,               // disallow deletion of variables
      "no-label-var": 2,                // disallow labels that share a name with a variable
      "no-shadow": 2,                   // disallow declaration of variables already declared in the outer scope
      "no-shadow-restricted-names": 2,  // disallow shadowing of names such as arguments
      "no-undef": 2,                    // disallow use of undeclared variables unless mentioned in a /*global */ block
      "no-undef-init": 2,               // disallow use of undefined when initializing variables
      "no-undefined": 2,                // disallow use of undefined variable (off by default)
      "no-unused-vars": 1,              // disallow declaration of variables that are not used in the code
      "no-use-before-define": 2,        // disallow use of variables before they are defined


      ////////// Node.js //////////

      "handle-callback-err": 2,   // enforces error handling in callbacks (off by default) (on by default in the node environment)
      "no-mixed-requires": 2,     // disallow mixing regular variable and require declarations (off by default) (on by default in the node environment)
      "no-new-require": 2,        // disallow use of new operator with the require function (off by default) (on by default in the node environment)
      "no-path-concat": 2,        // disallow string concatenation with __dirname and __filename (off by default) (on by default in the node environment)
      "no-process-exit": 2,       // disallow process.exit() (on by default in the node environment)
      "no-restricted-modules": 2, // restrict usage of specified node modules (off by default)
      "no-sync": 2,               // disallow use of synchronous methods (off by default)


      ////////// Stylistic Issues //////////

      "array-bracket-spacing": 2,       // enforce spacing inside array brackets (off by default)
      "brace-style": [2,                // enforce one true brace style (off by default)
        "1tbs", {
          "allowSingleLine": true
        }
      ],
      "camelcase": 2,                   // require camel case names
      "comma-spacing": 2,               // enforce spacing before and after comma
      "comma-style": 2,                 // enforce one true comma style (off by default)
      "computed-property-spacing": 2,   // require or disallow padding inside computed properties (off by default)
      "consistent-this": 0,             // enforces consistent naming when capturing the current execution context (off by default)
      "eol-last": 2,                    // enforce newline at the end of file, with no multiple empty lines
      "func-names": 0,                  // require function expressions to have a name (off by default)
      "func-style": 2,                  // enforces use of function declarations or expressions (off by default)
      "indent": [1, 2, {                // this option sets a specific tab width for your code (off by default)
          "SwitchCase": 2,
          "VariableDeclarator": {
            "var": 2,
            "let": 2,
            "const": 3
          }
        }
      ],
      "key-spacing": 2,                 // enforces spacing between keys and values in object literal properties
      "lines-around-comment": 0,        // enforces empty lines around comments (off by default)
      "linebreak-style": 2,             // disallow mixed 'LF' and 'CRLF' as linebreaks (off by default)
      "max-nested-callbacks": 2,        // specify the maximum depth callbacks can be nested (off by default)
      "new-cap": 1,                     // require a capital letter for constructors
      "new-parens": 2,                  // disallow the omission of parentheses when invoking a constructor with no arguments
      "new-parens": 2,                  // disallow the omission of parentheses when invoking a constructor with no arguments
      "newline-after-var": 0,           // allow/disallow an empty newline after var statement (off by default)
      "no-array-constructor": 2,        // disallow use of the Array constructor
      "no-continue": 1,                 // disallow use of the continue statement (off by default)
      "no-inline-comments": 0,          // disallow comments inline after code (off by default)
      "no-lonely-if": 2,                // disallow if as the only statement in an else block (off by default)
      "no-mixed-spaces-and-tabs": 2,    // disallow mixed spaces and tabs for indentation
      "no-multiple-empty-lines": 0,     // disallow multiple empty lines (off by default)
      "no-nested-ternary": 2,           // disallow nested ternary expressions (off by default)
      "no-new-object": 2,               // disallow use of the Object constructor
      "no-spaced-func": 2,              // disallow space between function identifier and application
      "no-ternary": 0,                  // disallow the use of ternary operators (off by default)
      "no-trailing-spaces": 2,          // disallow trailing whitespace at the end of lines
      "no-underscore-dangle": 0,        // disallow dangling underscores in identifiers
      "one-var": 0,                     // allow just one var statement per function (off by default)
      "operator-assignment": 2,         // require assignment operator shorthand where possible or prohibit it entirely (off by default)
      "operator-linebreak": 0,          // enforce operators to be placed before or after line breaks (off by default)
      "padded-blocks": 0,               // enforce padding within blocks (off by default)
      "quotes": [2, "single"],          // require quotes around object literal property names (off by default)
      "quote-props": [2, "as-needed"],  // specify whether double or single quotes should be used
      "semi-spacing": [2, {             // enforce spacing before and after semicolons
        "before": false,
        "after": true
      }],
      "semi": [2, "always"],            // require or disallow use of semicolons instead of ASI
      "sort-vars": 0,                   // sort variables within the same declaration block (off by default)
      "space-after-keywords": 0,        // require a space after certain keywords (off by default)
      "space-before-blocks": 2,         // require or disallow space before blocks (off by default)
      "space-before-function-paren": 0, // require or disallow space before function opening parenthesis (off by default)
      "space-in-parens": 2,             // require or disallow spaces inside parentheses (off by default)
      "space-infix-ops": 2,             // require spaces around operators
      "space-unary-ops": 2,             // require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
      "spaced-comment": 0,              // require or disallow a space immediately following the // or /* in a comment (off by default)
      "wrap-regex": 2,                  // require regex literals to be wrapped in parentheses (off by default)


      ////////// ECMAScript 6 //////////

      "constructor-super": 2,      // verify super() callings in constructors (off by default)
      "generator-star-spacing": 2, // enforce the spacing around the * in generator functions (off by default)
      "no-this-before-super": 2,   // disallow to use this/super before super() calling in constructors (off by default)
      "no-var": 2,                 // require let or const instead of var (off by default)
      "object-shorthand": 0,       // require method and property shorthand syntax for object literals (off by default)
      "prefer-const": 1,           // suggest using of const declaration for variables that are never modified after declared (off by default)
      "require-await": 0,          // warns async functions which have no await expression.


      ////////// Lodash PLugin //////////

      "lodash/import-scope": [2, "member"],


      ////////// Node PLugin //////////

      "node/no-extraneous-import": 0,
      "node/no-unsupported-features": 0,
      "node/no-unpublished-require": 0,
    }
};
