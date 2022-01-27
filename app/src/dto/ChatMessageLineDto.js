export default class ChatMessageLineDto {
  /**
   * @param {{color: string, author: string, text: string}|null} data
   */
  constructor(data = null) {
    this.author = data?.author;
    this.text = data?.text;
    this.color = data?.color;
  }

  /** @type {string} */
  author;
  /** @type {string} */
  text;
  /** @type {string} */
  color;
}