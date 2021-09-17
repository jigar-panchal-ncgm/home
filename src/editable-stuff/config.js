// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Kinjal",
  middleName: "",
  lastName: "Panchal",
  message: "Trainee Scientist - II in Quality (Regulatory Affairs) Department at Torrent Pharmaceuticals Ltd",
  icons: [
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/kinjal.panchal.1213",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/kinjal.panchal/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/kinjal-panchal-ab9411162/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/kp.jpg"),
  imageSize: 375,
  message:
    "I am completed Master degree in the field of Regulatory Affairs from Gujarat Technological University. The comprehensive curriculum including courses such as regulations for both Pharmaceutical and Medical Devices, A regulatory overview gave me obligatory knowledge in regulatory aspects and procedures related to drugs and medical device development. I am passionate about challenges, I tend to grasp and learn from these challenges and try to tackle them with logic and critical thinking. I aim to work along with health care companies that comply with FDA regulations to promote safe and effective products that promote public health. This can be achieved by hands-on experience and knowledge of regulatory submissions like 510(k), PMA, IND, NDA, ANDA, ACTD, BLA, eCTD submissions, compliance with GMP, GCP, GLP, QSR, Patent Law, IPR and most importantly thorough knowledge of Code of Federal Regulations. I strongly feel my candidacy offers a strong blend of pharmaceutical and regulatory affairs knowledge.",
  resume: "",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "ggarpanchal", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Regulatory Affairs", value: 90 },
    { name: "Clinical Trials", value: 75 },
    { name: "Good Manufacturing Practice (GMP)", value: 85 },
    { name: "Regulatory Submissions", value: 65 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Public Speaking", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: false,
  heading: "Get In Touch",
  message:
    "Messaage",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Executive Trainee in Quality (Regulatory Affairs) Department - Torrent Pharmaceuticals Ltd',
      companylogo: require('../assets/img/torrent.png'),
      date: 'Jun 2018 – Aug 2018',
    },    
    {
      role: 'Internship Trainee - Stallion Laboratories pvt. ltd',
      companylogo: require('../assets/img/stallion.png'),
      date: 'Sep 2019 – Mar 2020',
    },    
    {
      role: 'Patient Care Pharmacist - Kyle Tech Consulting LLP',
      companylogo: require('../assets/img/kyleTech.png'),
      date: 'Jun 2018 – Aug 2018',
    },
    {
      role: 'Industrial Trainee - Vital Formulation Limited',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'May 2017 – Jun 2017',
    },

  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
