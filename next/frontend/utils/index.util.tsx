import { SuggestionCardProps, TestimonialCardProps } from "pages";

const suggestions: SuggestionCardProps[] = [
  {
    id: 9830,
    course: "BA (Hons) English Language and Literature",
    university: "University of Wolverhampton",
    country: "United Kingdom",
    logo: "https://ucpbucket.s3.us-east-2.amazonaws.com/Production/UniImages/LogoImages/129_UniversityofWolverhampton.png",
    banner:
      "https://ucpbucket.s3.us-east-2.amazonaws.com/Production/UniImages/BannerImages/UniversityofWolverhamptonBanner.jpeg",
  },
  {
    id: 41379,
    course: "Master of Arts - Screen Production (Screenwriting)",
    university: "University of the West of England - UWE Bristol - City Campus",
    country: "United Kingdom",
    logo: "https://ucpbucket.s3.us-east-2.amazonaws.com/Production/UniImages/LogoImages/UniversityoftheWestofEngland-UWEBristol-CityCampus_Logo.png",
    banner:
      "https://ucpbucket.s3.us-east-2.amazonaws.com/Production/UniImages/BannerImages/UniversityoftheWestofEngland-UWEBristol-CityCampusBanner.jpeg",
  },
  {
    id: 85569,
    course: "BSc (Hons) COMPUTING SCIENCE",
    university: "University of the West of Scotland",
    country: "United Kingdom",
    logo: "https://ucpbucket.s3.us-east-2.amazonaws.com/Production/UniImages/LogoImages/1010_UniversityoftheWestofScotland_Logo.png",
    banner:
      "https://ucpbucket.s3.us-east-2.amazonaws.com/Production/UniImages/BannerImages/1010_UniversityoftheWestofScotland_Banner.jpeg",
  },
  {
    id: 41532,
    course: "Bachelor of Forensic Science (Honours)",
    university: "University of Windsor",
    country: "Canada",
    logo: "https://ucpbucket.s3.us-east-2.amazonaws.com/Production/UniImages/LogoImages/UniversityofWindsor_Logo.png",
    banner:
      "https://ucpbucket.s3.us-east-2.amazonaws.com/Production/UniImages/BannerImages/UniversityofWindsorBanner.jpeg",
  },
  {
    id: 25791,
    course: "Master of Science",
    university: "St. Francis College",
    country: "United States of America",
    logo: "https://ucpbucket.s3.us-east-2.amazonaws.com/Production/UniImages/LogoImages/St.FrancisCollege_Logo.png",
    banner:
      "https://ucpbucket.s3.us-east-2.amazonaws.com/Production/UniImages/BannerImages/St.FrancisCollegeBanner.jpeg",
  },
];

Array(5)
  .fill(null)
  .map((_, i) => ({
    id: i + 1,
    logo: "https://picsum.photos/100/100",
    banner: "https://picsum.photos/400/100",
    course:
      "Bachelor's in Computer Science (Artifical Intelligence) " + (i + 1),
    university: "University of Wollongong Dubai",
    country: "Dubai, United Arab Emirates",
  }));

const testimonials: TestimonialCardProps[] = [
  {
    img: "https://s3.us-east-2.amazonaws.com/com.locknstock.bucket/uploads/user/img_14_605c8df7758a9.jpeg",
    name: "Faizaan Khan",
    university: "Seneca College",
    text: "Thank you so much for all the assistance and guidance of Secure My Scholarship and especially Maria Butt. Me and my family are very grateful to Secure My Scholarship and Maria Butt.",
  },
  {
    img: "https://s3.us-east-2.amazonaws.com/com.locknstock.bucket/uploads/user/img_13_605c8d3b0c247.jpeg",
    name: "Deepraj Rajesh",
    university: "Canadian University of Dubai",
    text: "I actually downloaded the Lock&Stock app for its student offers but then also used them to secure a scholarship into University - truly an amazing app and company.",
  },
  {
    img: "https://s3.us-east-2.amazonaws.com/com.locknstock.bucket/uploads/user/img_12_605c8bfb86551.jpeg",
    name: "Aliya Tasmin Amina",
    university: "University of Greenwich",
    text: "The team at Secure My Scholarship is extremely warm, friendly and helpful. Even though I had many basic questions and doubts they assisted me diligently and assisted me throughout the entire process.",
  },
  {
    img: "https://s3.us-east-2.amazonaws.com/com.locknstock.bucket/uploads/user/img_11_605c8b2f63661.jpeg",
    name: "Farrooqi Adib",
    university: "American University of Dubai",
    text: "Thank you so much for all the assistance and guidance of Secure My Scholarship and especially Maria Butt. We love Secure My Scholarship!",
  },
  {
    img: "https://s3.us-east-2.amazonaws.com/com.locknstock.bucket/uploads/user/img_10_605c890e2d254.jpeg",
    name: "Mahmood Ahmad Hasan",
    university: "Amity University Dubai",
    text: "University is very expensive, but Secure My Scholarship helps reduce that burden by providing students with fee waivers and bursaries. Thanks guys!",
  },
  {
    img: "https://s3.us-east-2.amazonaws.com/com.locknstock.bucket/uploads/user/img_9_605c88b2447b0.jpeg",
    name: "Rajeshar Ashok",
    university: "Wilfrid Laurier University",
    text: "It has always been been my dream to study in Wilfrid Laurier University and Secure My Scholarship made that a reality. Not only did they help me apply and enrol, but also provided me with a fee waiver which was awesome!",
  },
  {
    img: "https://s3.us-east-2.amazonaws.com/com.locknstock.bucket/uploads/user/img_8_605c885626cc4.jpeg",
    name: "Jay Mehta",
    university: "University of Wollongong Dubai",
    text: "I honestly can't believe more people don't know about Secure My Scholarship. It's a life-saver!",
  },
  {
    img: "https://s3.us-east-2.amazonaws.com/com.locknstock.bucket/uploads/user/img_7_605c87e175cf9.jpeg",
    name: "Aaditi Achariya",
    university: "Royal Holloway University of London",
    text: "Going overseas is usually a complicated affair but through Secure My Scholarship it was made very simple and easy.",
  },
  {
    img: "https://s3.us-east-2.amazonaws.com/com.locknstock.bucket/uploads/user/img_6_605c876fefcab.jpeg",
    name: "Hussainy Ahmed",
    university: "Murdoch University Dubai",
    text: "I would have been unable to afford my tuition for my undergrad degree if not for Secure My Scholarship. Thank you SMS! <3",
  },
  {
    img: "https://s3.us-east-2.amazonaws.com/com.locknstock.bucket/uploads/user/img_5_605c8703d99b9.jpeg",
    name: "Senthil Prakash",
    university: "Middlesex University Dubai",
    text: "Zahra at Secure My Scholarship was very responsive and was available 24/7 to assist me. Applying to university through them was the best decision I could make.",
  },
  {
    img: "https://s3.us-east-2.amazonaws.com/com.locknstock.bucket/uploads/user/img_4_605c86ad68f8a.jpeg",
    name: "Kunal Prem",
    university: "Manipal Academy of Higher Education Dubai",
    text: "I used Secure My Scholarship to assist me with my enrolment for my Undergrad degree. They didn't charge me anything but i nfact helped me save thousands of dirhams in tuition.",
  },
  {
    img: "https://s3.us-east-2.amazonaws.com/com.locknstock.bucket/uploads/user/img_3_605c86561dcfe.jpeg",
    name: "Joe Mathew",
    university: "Heriot-Watt University Dubai",
    text: "Applied through SecureMyScholarship. Seamless process and would highly recommend it to anybody looking for university.",
  },
];

const HomePageUtil = { suggestions, testimonials };

export default HomePageUtil;
