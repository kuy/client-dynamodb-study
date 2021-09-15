const { ScanCommand } = require('@aws-sdk/client-dynamodb')
const { newClient } = require('./client')

const run = async () => {
  try {
    const client = newClient()
    const input = {
      TableName: 'Wahoo',
      FilterExpression: 'emailAddress = :email_val',
      ExpressionAttributeValues: {
        ':email_val': { S: 'hoge@example.com' },
      },
    }
    const data = await client.send(new ScanCommand(input))
    console.log(data.Items.map(JSON.stringify).join('\n'))
  } catch (err) {
    console.error(err)
  }
}

run()
