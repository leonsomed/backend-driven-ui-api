pipeline {
  agent any
  stages {
    stage('Build') {
      agent {
        docker {
          image 'node:14-alpine'
        }

      }
      steps {
        echo 'Build demo-app'
        sh 'npm install'
      }
    }

    stage('Tests') {
      steps {
        echo 'Run Linux tests'
      }
    }

    stage('Deploy Staging') {
      steps {
        echo 'Deploy to staging environment'
        input 'Ok to deploy to production?'
      }
    }

    stage('Deploy Production') {
      steps {
        echo 'Deploy to Production'
      }
    }

  }
  environment {
    CI = 'true'
  }
  post {
    always {
      archiveArtifacts(artifacts: 'target/demoapp.jar', fingerprint: true)
    }

    failure {
      mail(to: 'leomedina.me@gmail.com', subject: "Failed Pipeline ${currentBuild.fullDisplayName}", body: " For details about the failure, see ${env.BUILD_URL}")
    }

  }
}