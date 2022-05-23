---
title: 'Hello World!'
date: '2022-05-23'
spoiler: "Guide to writing blog posts, for future me."
cta: 'blog'
---

I created this blog page to document learned technologies and gained knowledges, so that I can revisit them in the future. What better way to start than a guide to writing effective blog posts?

Disclaimer: This page will make a lot more sense if you open the markdown version!

## Headers

#### Itemize using `*`
* Item 1
* Item 2

#### Enumerate using `1.`, `2.`, `...`
1. Item 1
2. Item 2

#### Emojis are available 🤔

#### Tables
|column1|column2|
|-|-|
|a|b|
|c|d|

#### Links
My [website](https://raythx.com), just go take a look, will you?

#### font
*italicize*

**bold**

~~strikethrough~~

#### HTML tags work

<u>underline</u> <p>New paragraph!</p>

#### Checklist

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

#### images

![Yoda sniffing the air. Caption: “I smell bacon.”](./yoda.jpg)

#### GIFs

![Heh?](./deja_vu.gif)

#### indent quote

>“Unlearn what you have learned.” — Yoda

#### line break

---

#### code snippets
```
print('Hello World')
```

##### Python
```py
def add_one(x):
  return x + 1

print(add_one(5))
```
##### Java

```java
System.out.println("Hello World");
```

##### JSX and highlighting

```jsx{2,4,7-9}
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

If you have other neat tricks to share, I'd love to hear from you on Linkedin! Thanks for reading.
