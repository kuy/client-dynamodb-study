const { ScanCommand, UpdateItemCommand } = require('@aws-sdk/client-dynamodb')
const { newClient } = require('./client')

const run = async () => {
  try {
    const client = newClient()
    const input = {
      TableName: 'Wahoo',
      FilterExpression:
        'emailAddress = :email_val and #status_key = :status_val',
      ExpressionAttributeValues: {
        ':email_val': { S: 'hoge@example.com' },
        ':status_val': { S: 'PENDING' },
      },
      ExpressionAttributeNames: {
        '#status_key': 'status',
      },
    }
    const data = await client.send(new ScanCommand(input))
    console.log(data.Items.map(JSON.stringify).join('\n'))

    const params = {
      TableName: 'Wahoo',
      Key: { Id: { S: data.Items[0].Id.S } },
      UpdateExpression:
        'set #status_key = :status_val, updatedOn = :updated_on_val',
      ExpressionAttributeValues: {
        ':status_val': { S: 'DONE' },
        ':updated_on_val': { S: new Date().toISOString() },
      },
      ExpressionAttributeNames: {
        '#status_key': 'status',
      },
    }
    const data2 = await client.send(new UpdateItemCommand(params))
  } catch (err) {
    console.error(err)
  }
}

run()
