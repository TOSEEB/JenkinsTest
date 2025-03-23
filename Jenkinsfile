pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/TOSEEB/JenkinsTest.git'  // Apne repo ka URL replace karein
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Application') {
            steps {
                sh 'node index.js'
            }
        }
    }
}
