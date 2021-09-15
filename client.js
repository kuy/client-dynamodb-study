const { DynamoDBClient } = require('@aws-sdk/client-dynamodb')

const newClient = () => {
  return new DynamoDBClient({
    region: 'ap-northeast-1',
    endpoint: 'http://localhost:8888',
    credentials: {
      accessKeyId: 'dummy',
      secretAccessKey: 'dummy',
    },
  })
}

exports.newClient = newClient
