const LinkRoutes = {
  Home: "/",
  Universities: "/universities",
  Courses: "/courses",
  FAQs: "/faqs",
  Blog: "/blog",
  AboutUs: "/about-us",
  ContactUs: "/contact-us",

  Accomodation: "https://www.google.com",
  Terms: "https://www.lockandstock.app/terms-conditions",
  Privacy: "https://www.lockandstock.app/privacy-policy",
  Cookies: "https://www.lockandstock.app/cookies-policy",

  Facebook: "https://www.facebook.com/LnSApp",
  Twitter: "https://twitter.com/lockandstockapp",
  Instagram: "https://www.instagram.com/lockandstock.app",

  University: (id: number) => "/universities/" + id,
  UniversityScholarships: (id: number) =>
    "/universities/" + id + "#scholarships-available",
  Course: (id: number) => "/courses/" + id,
  CourseScholarships: (id: number) =>
    "/courses/" + id + "#scholarships-available",
  Scholarship: (institute_id: number, course_id?: number) =>
    "/apply/securemyscholarship/" +
    institute_id +
    (course_id ? `?course_id=${course_id}` : ``),

  Articles: {
    CNN: "https://www.cnn.com/2021/07/02/middleeast/lockstock-app-students-dubai-spc-intl/index.html",
    TechRadar:
      "https://www.techradar.com/news/stay-away-from-digital-devices-while-learning-from-home-or-campus-and-get-rewarded",
    TheNational:
      "https://www.thenationalnews.com/uae/education/app-that-rewards-students-for-not-using-phones-in-class-launched-in-the-uae-1.662284",
    Mashable:
      "https://me.mashable.com/tech/14384/dubai-based-app-lures-students-away-from-phones-by-offering-rewards",
    Entrepreneur: "https://www.entrepreneur.com/article/353223",
    ArabianBusiness:
      "https://www.arabianbusiness.com/startup/450014-dubai-based-start-up-reveals-launchpad-for-young-entrepreneurs",
  },
};

export default LinkRoutes;
