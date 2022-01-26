export default class ChatMessageLineDto {
  /**
   * @param {{color: string, author: string, message: string}} data
   */
  constructor(data = null) {
    this.author = data?.author;
    this.message = data?.message;
    this.color = data?.color;
  }

  /** @type {string} */
  author;
  /** @type {string} */
  message;
  /** @type {string} */
  color;
}