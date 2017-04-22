export class Chat {
  private usersIds;
  private name;
  constructor(usersIds: number[], name: string) {
    this.usersIds = usersIds;
    this.name = name;
  }
}
