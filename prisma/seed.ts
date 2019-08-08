import Photon from '@generated/photon';

const photon = new Photon();

async function main() {
  const user1 = await photon.users.create({
    data: {
      email: 'tim@prisma.io',
      name: 'Tim',
      posts: {
        create: {
          title: 'Join us for Prisma Day 2020 in Los Angeles',
          content: 'https://www.prisma.io/day/',
          published: true
        }
      }
    }
  });
  const user2 = await photon.users.create({
    data: {
      email: 'tomy@prisma.io',
      name: 'Tomy',
      todos: {
        create: [
          {
            title: 'Subscribe to React Weekly for community news',
            prioritize: false,
            completed: false
          },
          {
            title: 'Follow Prisma on Instagram',
            prioritize: false,
            completed: false
          }
        ]
      }
    }
  });

  console.log({ user1, user2 });
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect();
  });
