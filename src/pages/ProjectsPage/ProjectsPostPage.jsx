// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

// import Projects from './Projects';

// function ProjectsPostPage({ posts }) {
//   let { id } = useParams();

//   // Находим пост блога по id
//   const post = posts.find((post) => post.id === id);

//   if (!post) {
//     return (
//       <div className="blog-post-back-container">
//         <div className="blog-post-back">
//           <h3>Пост не найден</h3>
//         </div>
//         <div className="back-to-blog">
//           <Link to="/">Назад к блогу</Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <section className="container">
//       <div className="page-content">
//         <h2>{post.title}</h2>
//         <p>{post.content}</p>
//       </div>
//       <div>
//         <Link to="/" className="button">
//           Назад к блогу
//         </Link>
//       </div>
//     </section>
//   );
// }

// export default ProjectsPostPage;
