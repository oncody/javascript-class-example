export default class Line {
  constructor(length) {
    this.length = length;
  }

  static fromJson(json) {
    return Object.assign(new Line(), JSON.parse(json));
  }
}

var x = Object.assign(new Line(), JSON.parse('{"length":2}'));
var y = Line.fromJson('{"length":2}');
