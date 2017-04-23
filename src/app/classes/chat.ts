export class Chat {
  private userIds;
  private name;
  constructor(userIds: number[], name: string) {
    this.userIds = userIds;
    this.name = name;
  }
}
