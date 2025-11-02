export const mockQuestions = [
  {
    id: 1,
    title: "How to center a div with CSS?",
    content: "I'm trying to center a div both horizontally and vertically. What's the best way to do this in modern CSS?",
    author: "john_doe",
    votes: 15,
    answers: [
      {
        id: 1,
        content: "You can use flexbox:\n\n```css\n.parent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n```",
        author: "css_expert",
        votes: 25
      },
      {
        id: 2,
        content: "Another option is using CSS grid:\n\n```css\n.parent {\n  display: grid;\n  place-items: center;\n  height: 100vh;\n}\n```",
        author: "grid_master",
        votes: 18
      }
    ],
    tags: ["css", "html", "flexbox"]
  },
  {
    id: 2,
    title: "React useState hook not updating immediately",
    content: "When I call setState, the state doesn't update right away. Why is this happening?",
    author: "react_beginner",
    votes: 8,
    answers: [],
    tags: ["react", "javascript", "hooks"]
  }
];