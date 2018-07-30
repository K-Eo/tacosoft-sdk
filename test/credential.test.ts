import Credential from '../src/credential'

describe('Credential', () => {
  it('exists', () => {
    expect(Credential).toBeDefined()
  })

  describe('accessors', () => {
    let credential: Credential = null

    beforeEach(() => {
      credential = new Credential('foo', 'bar')
    })

    it('returns identity', () => {
      expect(credential.Identity).toBe('foo')
    })

    it('returns token', () => {
      expect(credential.Token).toBe('bar')
    })
  })

  describe('.toJSON', () => {
    it('converts credential to json', () => {
      const credential = new Credential('foo', 'bar')
      expect(credential.toJSON()).toBe('{"identity":"foo","token":"bar"}')
    })
  })

  describe('#fromJSON', () => {
    it('parses json credential', () => {
      const credential = Credential.fromJSON('{"identity":"foo","token":"bar"}')
      expect(credential.Identity).toBe('foo')
      expect(credential.Token).toBe('bar')
    })
  })
})
