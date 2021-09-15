const { PutItemCommand } = require('@aws-sdk/client-dynamodb')
const { newClient } = require('./client')

const run = async () => {
  try {
    const client = newClient()
    const input = {
      TableName: 'Wahoo',
      Item: {
        Id: { S: 'xxxx' },
        emailAddress: { S: 'hoge@example.com' },
        eventId: { S: 'A-B-C' },
        status: { S: 'PENDING' },
        createdOn: { S: new Date().toISOString() },
        updatedOn: { S: new Date().toISOString() },
      },
    }
    const data = await client.send(new PutItemCommand(input))
  } catch (err) {
    console.error(err)
  }
}

run()
