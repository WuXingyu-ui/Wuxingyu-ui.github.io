var posts=["2024/01/16/高中生/","2024/01/16/高中生活/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };