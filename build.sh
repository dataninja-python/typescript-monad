#!/bin/bash

# Navigate to the directory containing the TypeScript files
#projectPath="/Users/ajigherighe/Code/Problems/typescript-monad"

# Use the variable properly with $ sign
#cd "$projectPath"

# Find all .ts files and compile them with tsc
#for file in *.ts; do
#    echo "Compiling $file"
#    tsc "$file"
#done

for i in `find . -name '*.ts'` ; do tsc "$i" ;  done

echo "Compilation complete."

node ./src/run.js