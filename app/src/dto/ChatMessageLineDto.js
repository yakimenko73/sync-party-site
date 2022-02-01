export default class ChatMessageLineDto {
  /**
   * @param {{color: string, nickname: string, text: string}|null} data
   */
  constructor(data = null) {
    this.nickname = data?.nickname;
    this.text = data?.text;
    this.color = data?.color;
  }

  /** @type {string} */
  nickname;
  /** @type {string} */
  text;
  /** @type {string} */
  color;
}