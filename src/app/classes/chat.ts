export class Chat {
  private userIds: number[];
  private name: string;
  public id: number;

  constructor(userIds: number[], name: string, id?: number) {
    this.userIds = userIds;
    this.name = name;
    this.id = id;
  }
}
