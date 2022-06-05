import { v4 as uuid } from "uuid";
import { PostProps } from "./components/Post";

interface Posts extends PostProps {
  id: string;
}

export const posts: Posts[] = [
  {
    id: uuid(),
    author: {
      avatarUrl: "https://github.com/gabriel-lucas-sl.png",
      name: "Gabriel Lucas",
      role: "Backend Engineer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-29 20:00:00"),
  },
  {
    id: uuid(),
    author: {
      avatarUrl: "https://github.com/EmilyCV.png",
      name: "Emily Cunha",
      role: "Python Engineer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-06-04 18:00:00"),
  },
  {
    id: uuid(),
    author: {
      avatarUrl: "https://github.com/Thalitafs7.png",
      name: "Thalita Feitosa",
      role: ".NET Software Engineer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-29 20:00:00"),
  },
  {
    id: uuid(),
    author: {
      avatarUrl: "https://github.com/mateusflip.png",
      name: "Mateus Felipe",
      role: "Java Engineer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-29 20:00:00"),
  },
];
