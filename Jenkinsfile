pipeline{

agent any
parameters{
    string(name:'SPEC', defaultValue:'cypress/e2e/SmokeTesting/Doc/**/*.cy.js", description:"We will run all smoke tests on the DOC application')
    choise(name:'BROWSER', choises: ['chrome'], description:"Choise the broswer where you want to execute your script")

}

options{
    ansiColor('xterm')
}
stages{
    stage('Building'){
         steps{
            echo "Building the application"
         }
    }
    stage('Testing'){
        steps{
            bat "npm i"
            bat "npx cypress runn --browser ${BROWSER} --spec ${SPEC}"
        }
    }
    stage('Deploying'){
        steps{
        echo "Deploy in progress"
        }
    }
     
   
}
}