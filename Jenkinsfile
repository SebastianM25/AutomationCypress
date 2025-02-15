pipeline {
    agent any

    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/e2e/Api/GoRest/**/*.cy.js', description: "We will run all smoke tests n")
        choice(name: 'BROWSER', choices: ['chrome'], description: "Choose the browser where you want to execute your script")
    }

    options {
        timestamps()
    }

    stages {
        stage('Building') {
            steps {
                echo "Building the application"
            }
        }
        stage('Testing') {
            steps {
                sh "npm install"
                sh "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploying') {
            steps {
                echo "Deploy in progress"
            }
        }
    }
}
