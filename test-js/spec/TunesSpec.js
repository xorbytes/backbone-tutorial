var albumData = [{
    "title":  "专集 A",
    "artist": "艺术家 A",
    "tracks": [
        {
            "title": "歌曲 A",
            "url": "/music/Album A Track A.mp3"
        },
        {
            "title": "歌曲 B",
            "url": "/music/Album A Track B.mp3"
        }]
}, {
    "title": "专集 B",
    "artist": "艺术家 B",
    "tracks": [
        {
            "title": "歌曲 A",
            "url": "/music/Album B Track A.mp3"
        },
        {
            "title": "歌曲 B",
            "url": "/music/Album B Track B.mp3"
    }]
}];

describe("测试创建Album实例，并测试基各种方法的使用", function () {

  beforeEach(function () {
    this.album = new Album(albumData[0]);
  });

  it("测试获取数据", function () {
    expect(this.album.get('title')).toEqual("专集 A");
    expect(this.album.get('artist')).toEqual("艺术家 A")
    expect(this.album.get('tracks').length).toEqual(2)
  });

});

