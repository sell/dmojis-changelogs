import axios from 'axios';

export default class Backend {
  constructor(extension) {
    this.url = extension ? `https://api.dmojis.com/${extension}` : 'https://api.dmojis.com/';
  }

  async Get(extension) {
    const { data } = await axios.get(`${this.url}${extension || ''}`);
    return data;
  }

  async Post(body, extension) {
    const BODY = body || {};
    const { data } = await axios.post(`${this.url}${extension || ''}`, BODY);
    return data;
  }
}
