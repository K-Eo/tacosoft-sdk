import Client from '../src/client'
import Credential from '../src/credential'

describe('Client', () => {
  it('exists', () => {
    expect(Client).toBeDefined()
  })

  it('returns credential', () => {
    const credential = new Credential('foo', 'bar')
    const client = new Client(credential)
    expect(client.Credential).toBe(credential)
  })

  describe('login', () => {
    expect(Client.login('foo', 'bar')).not.toBeNull()
  })
})
