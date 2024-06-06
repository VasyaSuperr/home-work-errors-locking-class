class Post {
  constructor(id, name, author, text, dateAdded, likes, image, hashtags) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.text = text;
    this.dateAdded = dateAdded;
    this.likes = likes;
    this.image = image;
    this.hashtags = hashtags;
  }

  changeText(newText) {
    this.text = newText;
  }

  changeLikes(action, count) {
    switch (action) {
      case "+":
        this.likes += count;
        break;
      case "-":
        this.likes -= count;
        break;

      default:
        console.log("Unknown operation");
        break;
    }
  }

  increaseLikes() {
    this.likes++;
  }

  decreaseLikes() {
    if (this.likes > 0) {
      this.likes--;
    }
  }

  render() {
    const { name, author, text, dateAdded, likes, image, hashtags } = this;

    document.write(`
    <article>
        <img src="${image}" alt="${name}">
        <h2>${name}</h2>
        <p>Author: ${author}</p>
        <p>${text}</p>
        <p>Date Added: ${dateAdded}</p>
        <p>Likes: ${likes}</p>
        <p>Hashtags: ${hashtags}</p>
  </article>
    
    `);
  }
}

const post1 = new Post(
  1,
  "Fish",
  "Vasya",
  "The fish, that Vasya catched",
  new Date(),
  157,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3fn7umVyQS2_FNEXtx12lL-ojt7iaEa25iQ&s",
  ["#fishing", "#silence"]
);

console.log(post1);
post1.changeText("The fish Vasya didn't get");
post1.changeLikes("+", 50);
post1.changeLikes("-", 20);
post1.increaseLikes();
post1.increaseLikes();
post1.decreaseLikes();
post1.render();
