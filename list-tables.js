const { ListTablesCommand } = require('@aws-sdk/client-dynamodb')
const { newClient } = require('./client')

const run = async () => {
  try {
    const client = newClient()
    const data = await client.send(new ListTablesCommand({}))
    console.log(data.TableNames.join('\n'))
  } catch (err) {
    console.error(err)
  }
}

run()
