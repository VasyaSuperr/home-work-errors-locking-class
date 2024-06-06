class Post {
  constructor(id, name, author, text, dateAdded, likes, image, hashtags) {
    this._id = id;
    this._name = name;
    this._author = author;
    this._text = text;
    this._dateAdded = dateAdded;
    this._likes = likes;
    this._image = image;
    this._hashtags = hashtags;
  }

  static TAG_COLORS = {
    web: "green",
    javascript: "yellow",
    fullstack: "blue",
    education: "orange",
    technology: "purple",
    coding: "red",
    html: "brown",
    css: "cyan",
    react: "lime",
    angular: "magenta",
    nodejs: "pink",
    vuejs: "teal",
    python: "indigo",
    java: "coral",
    php: "violet",
  };

  changeText(newText) {
    this._text = newText;
  }

  changeLikes(action, count) {
    switch (action) {
      case "+":
        this._likes += count;
        break;
      case "-":
        this._likes -= count;
        break;

      default:
        console.log("Unknown operation");
        break;
    }
  }

  increaseLikes() {
    this._likes++;
  }

  decreaseLikes() {
    if (this._likes > 0) {
      this._likes--;
    }
  }

  render() {
    const { _name, _author, _text, _dateAdded, _likes, _image, _hashtags } =
      this;

    let postHTML = `
      <article>
          <img src="${_image}" alt="${_name}">
          <h2>${_name}</h2>
          <p>Author: ${_author}</p>
          <p>${_text}</p>
          <p>Date Added: ${_dateAdded}</p>
          <p>Likes: ${_likes}</p>
          <p>Hashtags: `;

    _hashtags.forEach((hashtag) => {
      const color = Post.TAG_COLORS[hashtag] || "black";
      postHTML += `<span style="color: ${color};"> #${hashtag}</span> `;
    });

    postHTML += `</p></article>`;

    document.write(postHTML);
  }

  set likes(newLikes) {
    if (typeof newLikes !== "number" || !Number.isInteger(newLikes)) {
      throw new TypeError("Кількість лайків повинна бути цілим числом !!!");
    }
    if (newLikes < 0) {
      throw new RangeError("Кількість лайків повинна бути більше нуля !!!");
    }

    this._likes = newLikes;
  }

  get likes() {
    return this._likes;
  }

  set hashtags(newHashtag) {
    let validateHashtags = [
      "web",
      "javascript",
      "fullstack",
      "education",
      "technology",
      "coding",
      "html",
      "css",
      "react",
      "angular",
      "nodejs",
      "vuejs",
      "python",
      "java",
      "php",
    ];

    if (this._hashtags.length >= 6) {
      throw new RangeError("Maximum number of hashtags reached");
    }

    if (validateHashtags.includes(newHashtag)) {
      if (!this._hashtags.includes(newHashtag)) {
        this._hashtags.push(newHashtag);
      }
    } else {
      throw new RangeError("Input other hashtag");
    }
  }

  get hashtags() {
    return this._hashtags;
  }

  removeHashtag(hashtagToRemove) {
    const index = this._hashtags.indexOf(hashtagToRemove);
    if (index !== -1) {
      this._hashtags.splice(index, 1);
      console.log(`Hashtag '${hashtagToRemove}' successfully removed.`);
    } else {
      console.log(`Hashtag '${hashtagToRemove}' not found.`);
    }
  }
}

const post1 = new Post(
  1,
  "neural network",
  "Vasya",
  "The program that Vasya wrote",
  new Date(),
  157,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSbqbzaUyp-PvyvN4a1Evzm0B9ORyNmnCPHIUWHuaahzbOPiwfwP7q6GKu4SoxQRQrKbs&usqp=CAU",
  ["web", "javascript", "fullstack"]
);

console.log(post1);
post1.changeText("The program that Vasya didn't finish");
post1.changeLikes("+", 50);
post1.changeLikes("-", 20);
post1.increaseLikes();
post1.increaseLikes();
post1.decreaseLikes();
post1.render();

try {
  post1.likes = 45;
} catch (error) {
  if (error instanceof TypeError) {
    console.error(`Помилка типу: ${error.message}`);
  } else if (error instanceof RangeError) {
    console.error(`Помилка діапазону: ${error.message}`);
  } else {
    console.error(`Інша помилка: ${error.message}`);
  }
}

post1.render();
const postLikes = post1.likes;
console.log(postLikes);

try {
  post1.hashtags = "coding";
} catch (error) {
  console.error(error);
}

post1.removeHashtag("coding");
