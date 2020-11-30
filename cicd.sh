#!/bin/bash

set -e

function install
{
    echo "Not applicable";
}

function build
{
    echo "Not applicable";
}


function test
{
    echo "Not applicable";
}

function deploy
{
    cd $TRAVIS_BUILD_DIR/Template
    
    ARTIFACTS_FOLDER=./artifacts

    echo "TRAVIS_BRANCH is: $TRAVIS_BRANCH"

    rm -Rf $ARTIFACTS_FOLDER
    mkdir $ARTIFACTS_FOLDER

    echo "Copying..."
    cp -Rvp ../Source/* ./content/

    echo "Packing..."
    nuget pack *.nuspec -NoDefaultExcludes -OutputDirectory $ARTIFACTS_FOLDER

    echo "Pushing..."
    dotnet nuget push $ARTIFACTS_FOLDER/*.nupkg --source https://api.nuget.org/v3/index.json --api-key $NUGET_API_KEY
}

$@
