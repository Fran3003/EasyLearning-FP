const {
  Category,
  Course,
  Review,
  User,
  Video,
  Comments,
  ReviewPage,
} = require("../../db.js");
const axios = require("axios");
const { createReview } = require("../createReview/controllers.js");

//ruta para mockear toda la data, tiene que ser ejecutada una unica sola vez, sino rompe todo.

const test = async () => {
  try {
    const coursesDB = await Course.findAll();
    if (!coursesDB.length) {
      //Lista de Usuarios
      const listUsers = [
        {
          fullName: "Fermin",
          password: "1234",
          phoneNumber: 12345,
          emailAddress: "fermin@gmail.com",
          avatar: "urlAvatar",
          status: "BANNED",
        },
        {
          fullName: "Joaco",
          password: "1234",
          phoneNumber: 12345,
          emailAddress: "joaco@gmail.com",
          avatar: "urlAvatar",
          status: "DELETED",
        },
        {
          fullName: "Santi",
          password: "1234",
          phoneNumber: 12345,
          emailAddress: "santi@gmail.com",
          avatar: "urlAvatar",
        },
        {
          fullName: "Franco",
          password: "1234",
          phoneNumber: 12345,
          emailAddress: "franco@gmail.com",
          avatar: "urlAvatar",
        },
        {
          fullName: "Benja",
          password: "1234",
          phoneNumber: 12345,
          emailAddress: "benja@gmail.com",
          avatar: "urlAvatar",
        },
      ];

      //Lista de Categorias
      const listCategories = [
        {
          name: "Photography",
        },
        {
          name: "Music",
        },
        {
          name: "Development",
        },
        {
          name: "Design",
        },
        {
          name: "Marketing",
        },
        {
          name: "Business",
        },
      ];

      //Lista de Cursos
      const listCourses = [
        {
          archieved: false,
          status: "APPROVED",
          name: "Marketing Research: support your marketing decisions",
          description: `The course is intended as a practical step by step guide to market research, to provide a structure for those who plan to undertake a research project or may wish to commission an agency to conduct research on their behalf. Each of the stages of the market research process are covered individually- starting with an understanding that market research is not the same as " see what you can find" on a particular topic or issue- but rather a structured and systematic approach to building a picture which can support business decisions, form part of a business development or act as a foundation for marketing strategy.`,
          teacherId: 1,
          teacherName: "Fermin",
          price: Math.round(Math.random() * 100),
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24NWufPfgGcSUVtrvswMJ2FLa4b4ukIud9w&usqp=CAU",
        },
        {
          archieved: false,
          status: "APPROVED",
          name: "Adventures in Classical Music—Music Appreciation for All!",
          description: `Music appreciation for the 21st century. Learn about Classical Music in the Western world from the Middle Ages to the present.  
        Youll begin with an introduction to the various elements of music -- for example, melody, rhythm, pitch and harmony – to give you the basics and vocabulary of music theory to understand and appreciate any type of music.  You’ll then explore the History of Classical Music through its various stylistic periods, from medieval chant right up to the current cutting edge. Anyone interested in classical music will benefit from this course. `,
          teacherId: 2,
          teacherName: "Joaco",
          price: Math.round(Math.random() * 100),
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToqWogOMB_wu-tFExETa1ANWYcUBPk2AkGsDJiS2My20ORzu4y9PxEhZh45rRuhEOeQWY&usqp=CAU",
        },
        {
          archieved: false,
          status: "APPROVED",
          name: "Photoshop Master Course: From Beginner to Photoshop Pro",
          description: `My approach is:

        One thing I have learned through all the years of working with Adobe Photoshop is that knowing and understanding the essentials of adobe photoshop is just as fundamental as the heavier and trickier Photoshop techniques when it comes to honing your craft.
        
        This Photoshop Beginner course is multifaceted. You do not need any previous knowledge of Photoshop, Design or Photography. We start by going through the essentials of Photoshop.
        
        A step-by-step guide on photoshop workspace, every single tool and its function(s). After we've established the essentials, we can now build on our foundation. In the next part of the photoshop course, we head into a basic Photoshop Portrait Retouching Course. From here the following lectures will deal with the more advanced photoshop techniques to really improve your Photoshop skills and the pace at which you work.
        
        I've added a bonus lecture towards the end of the course. That focuses on what & how when it comes to using a Wacom tablet in photoshop. I've also added a bonus lecture that focuses on the next steps. Where to find more free photoshop lectures and how to progress with your photoshop workflow.`,
          teacherId: 3,
          teacherName: "Santi",
          price: Math.round(Math.random() * 100),
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj_GdHpmBeaN7ekedpCN9-M9Iijnty6ieCWvmwr6upJoAO2uuqC22faDeO8pBGczxy_lU&usqp=CAU",
        },
        {
          archieved: false,
          status: "APPROVED",
          name: "Sales and Persuasion Skills for Startups",
          description: `Start-ups and entrepreneurs are a mixed bunch. But one thing the winners all have in common Is the ability to influence others. The ability to sell their ideas, sell their products, sell their service.

        And the graveyard of business startups is littered with companies that failed to grasp that most important, essential skill - the art of persuasion.
        
        That's what this course delivers in spades. The ability to get people to say 'YES'.`,
          teacherId: 4,
          teacherName: "Franco",
          price: Math.round(Math.random() * 100),
          iamge:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5f3htE9RJTy9hJTdUbqd71HqZfoRmPeQuFw&usqp=CAU",
        },
        {
          archieved: false,
          status: "PENDING",
          name: "LinkedIn Training CourseLinkedIn Training",
          description: `Learn to use Linkedin effectively and responsibly in this definitive Linkedin Training Course.

        Learn how to use Linkedin for business, how to use Linkedin for job searches and get tips on how to use Linkedin for social recruiting in this comprehensive online social media training course packed with training videos and tutorials by the coauthor of the first book on B2B social media.
        
        Leverage the world's largest online professional network with more than 200 million members in over 200 countries and territories, 2 million company pages and corporate hiring managers from 85 of the Fortune 100.`,
          teacherId: 5,
          teacherName: "Benja",
          price: Math.round(Math.random() * 100),
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi6Cm0MTYcZHuMrVEPANdz9K-OEFt44rA2gg&usqp=CAU",
        },
      ];

      //Lista de Videos
      const listVideos = [
        {
          nameVideo: "Sequelize ORM #1 Integración con ExpressJS.",
          urlVideo:
            "https://www.youtube.com/watch?v=5wvvyrx6Fvw&list=PLUM1vMi4p6_vUR3FVaTpsspg0zMFUG6_K&index=1&ab_channel=AZRMedia",
          description: "description video 1",
          courseId: 1,
        },
        {
          nameVideo: "Sequelize ORM #2 CRUD/API básicos",
          urlVideo:
            "https://www.youtube.com/watch?v=5wvvyrx6Fvw&list=PLUM1vMi4p6_vUR3FVaTpsspg0zMFUG6_K&index=2&ab_channel=AZRMedia",
          description: "description video 2",
          courseId: 1,
        },
        {
          nameVideo: "Sequelize ORM # 3 Validaciones en el BackEnd",
          urlVideo:
            "https://www.youtube.com/watch?v=f9JQUBiBWsI&list=PLUM1vMi4p6_vUR3FVaTpsspg0zMFUG6_K&index=3&ab_channel=AZRMedia",
          description: "description video 3",
          courseId: 1,
        },
        {
          nameVideo: "Sequelize ORM #4 | Relaciones: hasOne & belongsTo",
          urlVideo:
            "https://www.youtube.com/watch?v=rUDn4ITQUFQ&list=PLUM1vMi4p6_vUR3FVaTpsspg0zMFUG6_K&index=4&ab_channel=AZRMedia",
          description: "description video 4",
          courseId: 1,
        },
        {
          nameVideo: "Sequelize ORM #5 | Relaciones: hasMany & belongsTo",
          urlVideo:
            "https://www.youtube.com/watch?v=ocysQ07G4PQ&list=PLUM1vMi4p6_vUR3FVaTpsspg0zMFUG6_K&index=5&ab_channel=AZRMedia",
          description: "description video 5",
          courseId: 1,
        },
        {
          nameVideo: "Name video 1",
          urlVideo: "www.youtube.com (video1)",
          description: "description video 1",
          courseId: 2,
        },
        {
          nameVideo: "Name video 2",
          urlVideo: "www.youtube.com (video2)",
          description: "description video 2",
          courseId: 2,
        },
        {
          nameVideo: "Name video 3",
          urlVideo: "www.youtube.com (video3)",
          description: "description video 3",
          courseId: 2,
        },
        {
          nameVideo: "Name video 4",
          urlVideo: "www.youtube.com (video4)",
          description: "description video 4",
          courseId: 2,
        },
        {
          nameVideo: "Name video 5",
          urlVideo: "www.youtube.com (video5)",
          description: "description video 5",
          courseId: 2,
        },
        {
          nameVideo: "Name video 1",
          urlVideo: "www.youtube.com (video1)",
          description: "description video 1",
          courseId: 3,
        },
        {
          nameVideo: "Name video 2",
          urlVideo: "www.youtube.com (video2)",
          description: "description video 2",
          courseId: 3,
        },
        {
          nameVideo: "Name video 3",
          urlVideo: "www.youtube.com (video3)",
          description: "description video 3",
          courseId: 3,
        },
        {
          nameVideo: "Name video 4",
          urlVideo: "www.youtube.com (video4)",
          description: "description video 4",
          courseId: 3,
        },
        {
          nameVideo: "Name video 5",
          urlVideo: "www.youtube.com (video5)",
          description: "description video 5",
          courseId: 3,
        },
        {
          nameVideo: "Name video 1",
          urlVideo: "www.youtube.com (video1)",
          description: "description video 1",
          courseId: 4,
        },
        {
          nameVideo: "Name video 2",
          urlVideo: "www.youtube.com (video2)",
          description: "description video 2",
          courseId: 4,
        },
        {
          nameVideo: "Name video 3",
          urlVideo: "www.youtube.com (video3)",
          description: "description video 3",
          courseId: 4,
        },
        {
          nameVideo: "Name video 4",
          urlVideo: "www.youtube.com (video4)",
          description: "description video 4",
          courseId: 4,
        },
        {
          nameVideo: "Name video 5",
          urlVideo: "www.youtube.com (video5)",
          description: "description video 5",
          courseId: 4,
        },
        {
          nameVideo: "Name video 1",
          urlVideo: "www.youtube.com (video1)",
          description: "description video 1",
          courseId: 5,
        },
        {
          nameVideo: "Name video 2",
          urlVideo: "www.youtube.com (video2)",
          description: "description video 2",
          courseId: 5,
        },
        {
          nameVideo: "Name video 3",
          urlVideo: "www.youtube.com (video3)",
          description: "description video 3",
          courseId: 5,
        },
        {
          nameVideo: "Name video 4",
          urlVideo: "www.youtube.com (video4)",
          description: "description video 4",
          courseId: 5,
        },
        {
          nameVideo: "Name video 5",
          urlVideo: "www.youtube.com (video5)",
          description: "description video 5",
          courseId: 5,
        },
      ];

      //Lista de Comentarios_Videos
      const listCommentVideos = [
        {
          videoId: 1,
          userId: 1,
          userName: "Fermin",
          title: "Titulo video",
          description: "This video is very good",
        },
        {
          videoId: 2,
          userId: 2,
          userName: "Joaco",
          title: "Titulo video",
          description: "This video is very good",
        },
        {
          videoId: 3,
          userId: 3,
          userName: "Santi",
          title: "Titulo video",
          description: "This video is very good",
        },
        {
          videoId: 4,
          userId: 4,
          userName: "Franco",
          title: "Titulo video",
          description: "This video is very good",
        },
        {
          videoId: 5,
          userId: 5,
          userName: "Benja",
          title: "Titulo video",
          description: "This video is very good",
        },
      ];

      //Lista de Reviews Course
      const listReviewsCourses = [
        {
          userId: 1,
          courseId: 1,
          score: 5,
          title: "Title review course",
          comments: "This course is very good",
        },
        {
          userId: 2,
          courseId: 1,
          score: 3,
          title: "Title review course",
          comments: "This course is very good",
        },
        {
          userId: 1,
          courseId: 2,
          score: 5,
          title: "Title review course",
          comments: "This course is very good",
        },
        {
          userId: 2,
          courseId: 2,
          score: 3,
          title: "Title review course",
          comments: "This course is very good",
        },
        {
          userId: 1,
          courseId: 3,
          score: 5,
          title: "Title review course",
          comments: "This course is very good",
        },
        {
          userId: 2,
          courseId: 3,
          score: 3,
          title: "Title review course",
          comments: "This course is very good",
        },
        {
          userId: 1,
          courseId: 4,
          score: 5,
          title: "Title review course",
          comments: "This course is very good",
        },
        {
          userId: 2,
          courseId: 4,
          score: 3,
          title: "Title review course",
          comments: "This course is very good",
        },
        {
          userId: 1,
          courseId: 5,
          score: 5,
          title: "Title review course",
          comments: "This course is very good",
        },
        {
          userId: 2,
          courseId: 5,
          score: 3,
          title: "Title review course",
          comments: "This course is very good",
        },
      ];

      const listReviewsPage = [
        {
          score: 5,
          userId: 1,
          title: "Excelent page",
          comments: "10/10",
        },
        {
          score: 4,
          userId: 2,
          title: "Good page",
          comments: "I love the variety of courses that the site has.",
        },
        {
          score: 3,
          userId: 3,
          title: "Good page",
          comments: "Very good site and courses",
        },
        {
          score: 2,
          userId: 4,
          title: "Good page",
          comments: "Good site",
        },
        {
          score: 1,
          userId: 5,
          title: "Bad page",
          comments:
            "I didn't like this site very much and the prices are very expensive.",
        },
      ];

      //Create Users
      const listUsersDB = await User.bulkCreate(listUsers);

      //Create Courses
      const listCoursesDB = await Course.bulkCreate(listCourses);

      //Create Categories
      const listCategoriesDB = await Category.bulkCreate(listCategories);
      await listCoursesDB[0].addCategory(listCategoriesDB[0]);
      await listCoursesDB[0].addCategory(listCategoriesDB[4]);
      await listCoursesDB[1].addCategory(listCategoriesDB[1]);
      await listCoursesDB[2].addCategory(listCategoriesDB[2]);
      await listCoursesDB[2].addCategory(listCategoriesDB[3]);
      await listCoursesDB[2].addCategory(listCategoriesDB[4]);
      await listCoursesDB[4].addCategory(listCategoriesDB[4]);
      await listCoursesDB[3].addCategory(listCategoriesDB[5]);

      //Create Videos
      const listVideosDB = await Video.bulkCreate(listVideos);

      //Create Comments Videos
      const listCommentVideosDB = await Comments.bulkCreate(listCommentVideos);

      //Create Reviews Course
      const listReviewsCoursesDB = await Review.bulkCreate(listReviewsCourses);

      //Create ReviewsPage
      const listReviewsPageDB = await ReviewPage.bulkCreate(listReviewsPage);

      for (let i = 0; i < 6; i++) {
        createReview(i, {
          userId: i,
          score: Math.round(Math.random() * 5),
          title: `Title review course${i + 1}`,
          comments: "This course is very good",
        });
      }

      return `Successfully created courses`;
    }
    return `[ERROR]: Tu base de datos ya contiene info, limpia TODA la base de datos para volver a ejecutar test.`;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { test };
