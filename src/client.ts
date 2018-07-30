import Credential from './credential'

export default class Client {
  private credential: Credential

  get Credential() {
    return this.credential
  }

  constructor(credential: Credential) {
    this.credential = credential
  }

  public static login(identity: string, password: string) {
    return new Credential(identity, password)
  }
}
