// const currentDate = new Date()
// const expiryDate = currentDate.setDate(currentDate.getDate()+30)
// import mongoose from 'mongoose';
// import job from '../models/job.js'; // Replace with the path to your Mongoose job model

// mongoose.connect('mongodb://localhost:27017/jobeet', { useNewUrlParser: true, useUnifiedTopology: true });
// const ObjectId = mongoose.Types.ObjectId
// function generateRandomElement(array) {
//   return array[Math.floor(Math.random() * array.length)];
// }

  
//   function generateEmail(company) {
//     const emailDomains = ['@example.com', '@mail.com', '@company.com'];
//     const emailDomain = generateRandomElement(emailDomains);
//     return `careers@${company.toLowerCase().replace(/\s+/g, '')}${emailDomain}`;
//   }
  
// async function createJobRecord(jobData) {
//   const Job = new job(jobData);
//   await Job.save();
// }

// async function generateAndSaveJobs() {
//   const jobTypes = ['Full Time', 'Part Time', 'Contract'];
//   const companies = ['InnoTech Solutions', 'CodeCrafters', 'Digital Frontier', 'CloudNet Dynamics', 'TechSavvy Inc.'];
//   const positions = ['Software Developer', 'Web Developer', 'IT Support Specialist', 'Data Analyst', 'Cloud Engineer'];
//   const locations = ['New York, NY', 'San Francisco, CA', 'Seattle, WA', 'Austin, TX', 'Boston, MA'];
//   const descriptions = [
//     'An exciting role for a tech enthusiast.',
//     'Join our team for innovative development projects.',
//     'Be a part of our dynamic support team.',
//     'Help us analyze data for better insights.',
//     'Work with cutting-edge cloud technologies.'
//   ];

//   for (let i = 0; i < 40; i++) {
//     const company = generateRandomElement(companies)
//     const jobData = {
//       type: generateRandomElement(jobTypes),
//       company: company,
//       url: `https://www.${generateRandomElement(companies).toLowerCase().replace(/\s/g, '')}.com`,
//       position: generateRandomElement(positions),
//       location: generateRandomElement(locations),
//       description: generateRandomElement(descriptions),
//       howToApply: `Email your resume to contact@${generateRandomElement(companies).toLowerCase().replace(/\s/g, '')}.com`,
//       token: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
//       isPublic: Math.random() < 0.5,
//       isActive: true,
//       expiresAt: expiryDate,
//       categoryId: new ObjectId("657ac43adcc04435c5585428"),
//       email: generateEmail(company),
      
//     };
//      console.log(jobData)
//     await createJobRecord(jobData);
//   }

//   console.log('Jobs created successfully');
// }

// generateAndSaveJobs()
//   .then(() => mongoose.disconnect())
//   .catch(err => console.error(err))

// import mongoose from 'mongoose';
// import job from '../models/job.js'; 

// mongoose.connect('mongodb://localhost:27017/jobeet', { useNewUrlParser: true, useUnifiedTopology: true });
// const ObjectId = mongoose.Types.ObjectId;

// function generateRandomElement(array) {
//   return array[Math.floor(Math.random() * array.length)];
// }

// function generateEmail(company) {
//   const emailDomains = ['@healthcare.com', '@medexample.com', '@clinic.com'];
//   const emailDomain = generateRandomElement(emailDomains);
//   return `careers@${company.toLowerCase().replace(/\s+/g, '')}${emailDomain}`;
// }

// async function createJobRecord(jobData) {
//   const Job = new job(jobData);
//   await Job.save();
// }

// async function generateAndSaveJobs() {
//   const jobTypes = ['Full Time', 'Part Time', 'Contract'];
//   const companies = ['MediTech Solutions', 'HealthPulse', 'LifeCare Hospital', 'Wellness Clinic', 'Elixir Health'];
//   const positions = ['Registered Nurse', 'Medical Assistant', 'Physician', 'Pharmacist', 'Healthcare Administrator'];
//   const locations = ['Los Angeles, CA', 'Chicago, IL', 'Houston, TX', 'Philadelphia, PA', 'Phoenix, AZ'];
//   const descriptions = [
//     'Providing exceptional patient care and support.',
//     'Assisting physicians in medical procedures and patient consultations.',
//     'Delivering expert healthcare and treatment plans.',
//     'Managing pharmacy operations and medication dispensing.',
//     'Overseeing healthcare facility operations and administration.'
//   ];

//   const currentDate = new Date();
//   const expiryDate = currentDate.setDate(currentDate.getDate() + 30);

//   for (let i = 0; i < 40; i++) {
//     const company = generateRandomElement(companies);
//     const jobData = {
//       type: generateRandomElement(jobTypes),
//       company: company,
//       url: `https://www.${company.toLowerCase().replace(/\s+/g, '')}.com`,
//       position: generateRandomElement(positions),
//       location: generateRandomElement(locations),
//       description: generateRandomElement(descriptions),
//       howToApply: `Email your resume to contact@${company.toLowerCase().replace(/\s+/g, '')}.com`,
//       token: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
//       isPublic: Math.random() < 0.5,
//       isActive: true,
//       expiresAt: expiryDate,
//       categoryId: new ObjectId("657ac6b5a0a13c00338b341a"), // Replace with actual ObjectId
//       email: generateEmail(company)
//     };
//     console.log(jobData);
//     await createJobRecord(jobData);
//   }

//   console.log('Medical Jobs created successfully');
// }

// generateAndSaveJobs()
//   .then(() => mongoose.disconnect())
//   .catch(err => console.error(err));
import mongoose from 'mongoose';
import job from '../models/job.js'; // Replace with the path to your Mongoose job model

mongoose.connect('mongodb://localhost:27017/jobeet', { useNewUrlParser: true, useUnifiedTopology: true });
const ObjectId = mongoose.Types.ObjectId;

function generateRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateEmail(company) {
  const emailDomains = ['@business.com', '@corporate.com', '@enterprise.com'];
  const emailDomain = generateRandomElement(emailDomains);
  return `careers@${company.toLowerCase().replace(/\s+/g, '')}${emailDomain}`;
}

async function createJobRecord(jobData) {
  const Job = new job(jobData);
  await Job.save();
}

async function generateAndSaveJobs() {
  const jobTypes = ['Full Time', 'Part Time', 'Contract'];
  const companies = ['GlobalBiz Solutions', 'EconoFinance', 'MarketTrendz', 'CorporatePulse', 'Strategic Ventures'];
  const positions = ['Business Analyst', 'Marketing Manager', 'Sales Representative', 'Financial Advisor', 'HR Manager'];
  const locations = ['New York, NY', 'San Francisco, CA', 'London, UK', 'Berlin, Germany', 'Toronto, Canada'];
  const descriptions = [
    'Analyzing business trends and advising on strategy.',
    'Leading and executing marketing initiatives.',
    'Driving sales and managing client relationships.',
    'Providing financial planning and investment advice.',
    'Managing HR operations and talent acquisition.'
  ];

  const currentDate = new Date();
  const expiryDate = currentDate.setDate(currentDate.getDate() + 30);

  for (let i = 0; i < 40; i++) {
    const company = generateRandomElement(companies);
    const jobData = {
      type: generateRandomElement(jobTypes),
      company: company,
      url: `https://www.${company.toLowerCase().replace(/\s+/g, '')}.com`,
      position: generateRandomElement(positions),
      location: generateRandomElement(locations),
      description: generateRandomElement(descriptions),
      howToApply: `Email your resume to contact@${company.toLowerCase().replace(/\s+/g, '')}.com`,
      token: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      isPublic: Math.random() < 0.5,
      isActive: true,
      expiresAt: expiryDate,
      categoryId: new ObjectId("658ba864a0a13c00338b344f"), // Replace with actual ObjectId
      email: generateEmail(company)
    };
    console.log(jobData);
    await createJobRecord(jobData);
  }

  console.log('Business Jobs created successfully');
}

generateAndSaveJobs()
  .then(() => mongoose.disconnect())
  .catch(err => console.error(err));
