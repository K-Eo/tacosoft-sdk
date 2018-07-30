export default class Credential {
  private identity: string
  private token: string

  get Identity(): string {
    return this.identity
  }

  get Token(): string {
    return this.token
  }

  constructor(identity: string, token: string) {
    this.identity = identity
    this.token = token
  }

  public toJSON(): string {
    return JSON.stringify({ identity: this.identity, token: this.token })
  }

  public static fromJSON(text: string): Credential {
    const parsed: any = JSON.parse(text)
    return new Credential(parsed.identity, parsed.token)
  }
}
