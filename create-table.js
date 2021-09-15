const { CreateTableCommand } = require('@aws-sdk/client-dynamodb')
const { newClient } = require('./client')

const run = async () => {
  try {
    const client = newClient()
    const input = {
      TableName: 'Wahoo',
      AttributeDefinitions: [
        {
          AttributeName: 'Id',
          AttributeType: 'S',
        },
      ],
      KeySchema: [
        {
          AttributeName: 'Id',
          KeyType: 'HASH',
        },
      ],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
      StreamSpecification: {
        StreamEnabled: false,
      },
    }
    const data = await client.send(new CreateTableCommand(input))
  } catch (err) {
    console.error(err)
  }
}

run()
