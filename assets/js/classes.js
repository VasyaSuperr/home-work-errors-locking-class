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
  "First Post",
  "Vasya",
  "This is the first post.",
  new Date(),
  157,
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f4bd7a6-f763-4518-9b81-bdfd40ce3fc9/d27o815-7aeda6bb-34bd-4dcd-ada6-c6e27fbade16.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVmNGJkN2E2LWY3NjMtNDUxOC05YjgxLWJkZmQ0MGNlM2ZjOVwvZDI3bzgxNS03YWVkYTZiYi0zNGJkLTRkY2QtYWRhNi1jNmUyN2ZiYWRlMTYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.lavjAxx0egYbhZ7Bdzb2aWtfcAp5dPYotjktC0bLF0M",
  ["web", "javascript", "fullstack"]
);

console.log(post1);
post1.changeText("The program that Vasya didn't finish");
post1.changeLikes("+", 50);
post1.changeLikes("-", 20);
post1.increaseLikes();
post1.increaseLikes();
post1.decreaseLikes();

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
const postLikes = post1.likes;
console.log(postLikes);

try {
  post1.hashtags = "coding";
} catch (error) {
  console.error(error);
}

post1.removeHashtag("coding");

const post2 = new Post(
  2,
  "Second Post",
  "Alice",
  "Another post here.",
  new Date(),
  15,
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f4bd7a6-f763-4518-9b81-bdfd40ce3fc9/d26yer1-421bb5b8-9fc2-4d5a-b2d1-1e1f81b26b82.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVmNGJkN2E2LWY3NjMtNDUxOC05YjgxLWJkZmQ0MGNlM2ZjOVwvZDI2eWVyMS00MjFiYjViOC05ZmMyLTRkNWEtYjJkMS0xZTFmODFiMjZiODIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.p5vfqGmq9kIylfG3glHGa20CAPUtoWlAxKEGpIvGOi8",
  ["fullstack", "education", "technology"]
);

const post3 = new Post(
  3,
  "Third Post",
  "Bob",
  "Yet another post.",
  new Date(),
  20,
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f4bd7a6-f763-4518-9b81-bdfd40ce3fc9/d26yedh-7321e3e3-0846-4b77-b418-a30348f982f3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVmNGJkN2E2LWY3NjMtNDUxOC05YjgxLWJkZmQ0MGNlM2ZjOVwvZDI2eWVkaC03MzIxZTNlMy0wODQ2LTRiNzctYjQxOC1hMzAzNDhmOTgyZjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nvmUh7ZUbQgHUITE1Dhs97KzGb_gD2BjLiOiq73oMLY",
  ["python", "java", "css"]
);

const posts = [post1, post2, post3];
posts.forEach((post) => post.render());
