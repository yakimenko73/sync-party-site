export default class RoomMemberDto {
  /**
   * @param {{id: string, nickname: string, color: string}|null} data
   */
  constructor(data = null) {
    this.id = data?.id;
    this.nickname = data?.nickname;
    this.color = data?.color;
  }

  /** @type {string} */
  id;
  /** @type {string} */
  nickname;
  /** @type {string} */
  color;
}