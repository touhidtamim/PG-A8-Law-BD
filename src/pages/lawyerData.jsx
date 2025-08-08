const lawyersData = [
  {
    id: 1,
    name: "Barrister Afsana Rahman",
    speciality: "Criminal Defense Specialist",
    experience: "5+ Years Experience",
    licenseNo: "BD 12345-234",
    image: "https://i.ibb.co.com/Zp5z7mbT/nussbaum-law-IOvs-EAEjn-DE-unsplash.jpg",
    fee: 2000,
    availability: ["Suaturday" ,"Sunday", "Monday", "Thursday"],
    appointmentCount: 127,
    about: "Afsana Rahman is known for her fearless approach in criminal defense cases. She ensures justice is served with integrity and determination."
  },
  {
    id: 2,
    name: "Advocate Rahat Chowdhury",
    speciality: "Cyber Law & Digital Rights",
    experience: "6+ Years Experience",
    licenseNo: "BD 17345-234",
    image: "https://i.ibb.co.com/ZbFzHXk/cheerful-businessman-eyeglasses-office.jpg",
    fee: 2500,
    availability: ["Monday","Tuesday" , "Wednesday", "Friday"],
    appointmentCount: 987,
    about: "Rahat Chowdhury is a tech-savvy lawyer specializing in cyber law. He is passionate about protecting digital rights in the evolving digital age."
  },
  {
    id: 3,
    name: "Mahmudul Hasan Biplob",
    speciality: "Corporate Law & Mergers",
    experience: "7+ Years Experience",
    licenseNo: "BD 22845-134",
    image: "https://i.ibb.co.com/pjtVhwNr/attractive-young-lawyer-in-office-business-man-and-lawyers-discussing-contract-papers-laptop-and-tab.jpg",
    fee: 3000,
    availability: ["Saturday","Sunday", "Tuesday", "Thursday", "Friday"],
    appointmentCount: 153,
    about: "With deep expertise in corporate mergers, Biplob helps companies make strategic legal moves with confidence and precision."
  },
  {
    id: 4,
    name: "Farzana Kabir Toma",
    speciality: "Family & Divorce Law",
    experience: "4+ Years Experience",
    licenseNo: "BD 17165-234",
    image: "https://i.ibb.co.com/2YCt797j/asian-lawyer-woman-working-with-a-laptop-computer-in-a-law-office-legal-and-legal-service-concept-ph.jpg",
    fee: 2700,
    availability: ["Sunday","Monday", "Wednesday", "Saturday"],
    appointmentCount: 86,
    about: "Farzana Toma is dedicated to resolving sensitive family matters with compassion, care, and legal excellence."
  },
  {
    id: 5,
    name: "Advocate Nusrat Jahan",
    speciality: "Labour & Employment Law",
    experience: "3+ Years Experience",
    licenseNo: "BD 17345-234",
    image: "https://i.ibb.co.com/n5G7VKY/portrait-pensive-female-lawyer-her-table.webp",
    fee: 3200,
    availability: ["Tuesday","Wednesday", "Thursday", "Saturday"],
    appointmentCount: 112,
    about: "Nusrat Jahan fights for fair labor practices and protects employees' rights with commitment and legal sharpness."
  },
  {
    id: 6,
    name: "Md. Nayeem Ahsan",
    speciality: "Property Dispute Expert",
    experience: "8+ Years Experience",
    licenseNo: "BD 12845-194",
    image: "https://i.ibb.co.com/Df1YTzdK/Legal-Professional-Office-201712-002.jpg",
    fee: 2300,
    availability: ["Sunday","Monday", "Tuesday", "thursday", "Friday"],
    appointmentCount: 74,
    about: "Md. Nayeem Ahsan brings clarity to complex property disputes, ensuring rightful ownership and resolution."
  },
  {
    id: 7,
    name: "Shakil Mahmud",
    speciality: "Banking & Finance Law",
    experience: "10+ Years Experience",
    licenseNo: "BD 19845-294",
    image: "https://i.ibb.co.com/4RQswsNs/Businessman.webp",
    fee: 2850,
    availability: ["Sunday", "Wednesday", "Friday"],
    appointmentCount: 153,
    about: "Shakil Mahmud is a seasoned expert in financial regulations, helping clients navigate banking laws effortlessly."
  },
  {
    id: 8,
    name: "Tahmina Sultana",
    speciality: "Human Rights & Social Justice",
    experience: "6+ Years Experience",
    licenseNo: "BD 19345-134",
    image: "https://i.ibb.co.com/JRrgdbDR/istockphoto-1261636033-612x612.jpg",
    fee: 4000,
    availability: ["Saturday", "Monday", "Wednesday"],
    appointmentCount: 198,
    about: "Tahmina Sultana is a voice for the voiceless, defending human rights and ensuring social justice for all."
  },
  {
    id: 9,
    name: "Barrister Liyana Ahmed",
    speciality: "Intellectual Property Law",
    experience: "9+ Years Experience",
    licenseNo: "BD 12745-134",
    image: "https://i.ibb.co.com/zWTwqHXW/lovepik-female-lawyer-picture-500986209.jpg",
    fee: 4300,
    availability: ["Saturday", "Monday", "Wednesday"],
    appointmentCount: 212,
    about: "Barrister Liyana Ahmed protects creativity and innovation, helping clients secure their intellectual assets."
  },
  {
    id: 10,
    name: "Moinul Islam",
    speciality: "Taxation & Customs Law",
    experience: "7+ Years Experience",
    licenseNo: "BD 22845-234",
    image: "https://i.ibb.co.com/Tx8BPjcv/istockphoto-2180140242-612x612.jpg",
    fee: 3400,
    availability: ["Sunday", "Monday", "Friday"],
    appointmentCount: 253,
    about: "Moinul Islam simplifies tax complexities for individuals and businesses, ensuring compliance and peace of mind."
  },
  {
    id: 11,
    name: "Tariq Mahbub",
    speciality: "International Trade Law",
    experience: "5+ Years Experience",
    licenseNo: "BD 13845-234",
    image: "https://i.ibb.co.com/4kMvdsJ/istockphoto-1181406815-1024x1024.jpg",
    fee: 2600,
    availability: ["Sunday", "Monday", "Tuesday"],
    appointmentCount: 127,
    about: "Tariq Mahbub helps global businesses thrive by guiding them through international trade policies and regulations."
  },
  {
    id: 12,
    name: "Advocate Rehana Islam",
    speciality: "Immigration & Refugee Law",
    experience: "8+ Years Experience",
    licenseNo: "BD 12645-334",
    image: "https://i.ibb.co.com/YFBQzjkm/attractive-lawyer-office-business-woman-260nw-2205035963.webp",
    fee: 3500,
    availability: ["Sunday", "Tuesday", "Thursday"],
    appointmentCount: 176,
    about: "Rehana Islam supports clients through life-changing immigration journeys with empathy and deep legal knowledge."
  }
];

export default lawyersData;
