export class Book {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly author: string,
    public readonly pages: number
  ) {}
}
