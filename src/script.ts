//import Photon from '@generated/photon';
import Photon from '@generated/photon';
const photon = new Photon();

// A `main` function so that we can use async/await
async function main() {
  // Retrieve all users
  const allUsers = await photon.users.findMany({
    include: { todos: true }
  });
  console.log(`Retrieved all user ordered by name: `, JSON.stringify(allUsers, null, 2));

  // // Create a new post (written by an already existing user with email alice@prisma.io)
  // const newTodo = await photon.todos.create({
  //   data: {
  //     title: 'Join the React Slack community',
  //     prioritize: false,
  //     completed: false,
  //     author: {
  //       connect: {
  //         email: 'alison@prisma.io' // Should have been created during initial seeding
  //       }
  //     }
  //   }
  // });
  // console.log(`Created a new todo: `, newTodo);

  // // Retrieve all non completed todos
  // const allTodos = await photon.todos.findMany({
  //   where: { completed: false }
  // });
  // console.log(`Retrieved all non completed todos: `, allTodos);

  // // Retrieve all published posts
  // const allPosts = await photon.posts.findMany({
  //   where: { published: true }
  // });
  // console.log(`Retrieved all published posts: `, allPosts);

  // // Create a new post (written by an already existing user with email alice@prisma.io)
  // const newPost = await photon.posts.create({
  //   data: {
  //     title: 'Join the Prisma Slack community',
  //     content: 'http://slack.prisma.io',
  //     published: false,
  //     author: {
  //       connect: {
  //         email: 'alice@prisma.io' // Should have been created during initial seeding
  //       }
  //     }
  //   }
  // });
  // console.log(`Created a new post: `, newPost);

  // // Create a new post (written by an already existing user with email alice@prisma.io)
  // const newPost2 = await photon.posts.create({
  //   data: {
  //     title: 'Join the Remote developer community!',
  //     content: 'http://slack.remote.io',
  //     published: false,
  //     author: {
  //       connect: {
  //         email: 'bob@prisma.io' // Should have been created during initial seeding
  //       }
  //     }
  //   }
  // });
  // console.log(`Created a new post: `, newPost2);

  // // Publish the new post
  // const updatedPost = await photon.posts.update({
  //   where: {
  //     id: newPost.id
  //   },
  //   data: {
  //     published: true
  //   }
  // });
  // console.log(`Published the newly created post: `, updatedPost);

  // // Publish the new post
  // const updatedPost2 = await photon.posts.update({
  //   where: {
  //     id: newPost2.id
  //   },
  //   data: {
  //     title: 'Join the remote developer community!',
  //     published: true
  //   }
  // });
  // console.log(`Published the newly created post: `, updatedPost2);

  // // Retrieve all posts by user with email alice@prisma.io
  // const postsByUser = await photon.users
  //   .findOne({
  //     where: {
  //       email: 'alice@prisma.io'
  //     }
  //   })
  //   .posts();
  // console.log(`Retrieved all posts from a specific user BEFORE deleting: `, postsByUser);

  // // Create a new post from an existing user
  // const deletePost = await photon.posts.delete({
  //   where: {
  //     id: 'cjz1ut0rq0000529n1q3sd7xa'
  //   }
  // });

  // console.log(`Deleted a post: `, deletePost);

  // // Retrieve all posts by user with email alice@prisma.io
  // const postsByUser = await photon.users
  //   .findOne({
  //     where: {
  //       email: 'bob@prisma.io'
  //     }
  //   })
  //   .posts();
  // console.log(`Retrieved all posts from a specific user: `, postsByUser);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect();
  });
