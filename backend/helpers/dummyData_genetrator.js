const currentDate = new Date()
const expiryDate = currentDate.setDate(currentDate.getDate()+30)
import mongoose from 'mongoose';
import job from '../models/job.js'; // Replace with the path to your Mongoose job model

mongoose.connect('mongodb://localhost:27017/jobeet', { useNewUrlParser: true, useUnifiedTopology: true });
const ObjectId = mongoose.Types.ObjectId
function generateRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

  
  function generateTechEmail(company) {
    const emailDomains = ['@example.com', '@mail.com', '@company.com'];
    const emailDomain = generateRandomElement(emailDomains);
    return `careers@${company.toLowerCase().replace(/\s+/g, '')}${emailDomain}`;
  }
  
async function createJobRecord(jobData) {
  const Job = new job(jobData);
  await Job.save();
}
const userIds = [ '65a505b7c90e96864a88797f', '65b6f1e5368a5e917f046b3a']; // Replace with your actual user IDs

function generateRandomUserId() {
  return userIds[Math.floor(Math.random() * userIds.length)];
}
async function generateAndSaveTechJobs() {
  const jobTypes = ['Full Time', 'Part Time', 'Contract'];
  const companies = ['InnoTech Solutions', 'CodeCrafters', 'Digital Frontier', 'CloudNet Dynamics', 'TechSavvy Inc.'];
  const positions = ['Software Developer', 'Web Developer', 'IT Support Specialist', 'Data Analyst', 'Cloud Engineer'];
  const locations = ['New York, NY', 'San Francisco, CA', 'Seattle, WA', 'Austin, TX', 'Boston, MA'];
  const descriptions = [
    'An exciting role for a tech enthusiast.',
    'Join our team for innovative development projects.',
    'Be a part of our dynamic support team.',
    'Help us analyze data for better insights.',
    'Work with cutting-edge cloud technologies.'
  ];

//   for (let i = 0; i < 20; i++) {
    const company = generateRandomElement(companies);
    const jobData = {
      type: generateRandomElement(jobTypes),
      company:company,
      userId: generateRandomUserId(),      
      url: `https://www.${generateRandomElement(companies).toLowerCase().replace(/\s/g, '')}.com`,
      position: generateRandomElement(positions),
      location: generateRandomElement(locations),
      description: generateRandomElement(descriptions),
      howToApply: `Email your resume to contact@${generateRandomElement(companies).toLowerCase().replace(/\s/g, '')}.com`,
      token: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      isPublic: Math.random() < 0.5,
      isActive: true,
      expiresAt: expiryDate,
      categoryId: new ObjectId("657ac43adcc04435c5585428"),
      email: generateTechEmail(company),
      
    };
     console.log(jobData)
    await createJobRecord(jobData);
//   }

  console.log('Jobs created successfully');
}

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

function generateMedicalEmail(company) {
  const emailDomains = ['@healthcare.com', '@medexample.com', '@clinic.com'];
  const emailDomain = generateRandomElement(emailDomains);
  return `careers@${company.toLowerCase().replace(/\s+/g, '')}${emailDomain}`;
}

// async function createJobRecord(jobData) {
//   const Job = new job(jobData);
//   await Job.save();
// }
// const userIds = [ '65a505b7c90e96864a88797f', '65a507c7c90e96864a887988', '65b6f1e5368a5e917f046b3a']; // Replace with your actual user IDs

// function generateRandomUserId() {
//   return userIds[Math.floor(Math.random() * userIds.length)];
// }
async function generateAndSaveMedicalJobs() {
  const jobTypes = ['Full Time', 'Part Time', 'Contract'];
  const companies = ['MediTech Solutions', 'HealthPulse', 'LifeCare Hospital', 'Wellness Clinic', 'Elixir Health'];
  const positions = ['Registered Nurse', 'Medical Assistant', 'Physician', 'Pharmacist', 'Healthcare Administrator'];
  const locations = ['Los Angeles, CA', 'Chicago, IL', 'Houston, TX', 'Philadelphia, PA', 'Phoenix, AZ'];
  const descriptions = [
    'Providing exceptional patient care and support.',
    'Assisting physicians in medical procedures and patient consultations.',
    'Delivering expert healthcare and treatment plans.',
    'Managing pharmacy operations and medication dispensing.',
    'Overseeing healthcare facility operations and administration.'
  ];

  const currentDate = new Date();
  const expiryDate = currentDate.setDate(currentDate.getDate() + 30);

//   for (let i = 0; i < 20; i++) {
    const company = generateRandomElement(companies);
    const jobData = {
         userId: generateRandomUserId(),      
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
      categoryId: new ObjectId("657ac6b5a0a13c00338b341a"), // Replace with actual ObjectId
      email: generateMedicalEmail(company)
    };
    console.log(jobData);
    await createJobRecord(jobData);
//   }

  console.log('Medical Jobs created successfully');
}

// generateAndSaveJobs()
//   .then(() => mongoose.disconnect())
//   .catch(err => console.error(err));

// import mongoose from 'mongoose';
// import job from '../models/job.js'; 

// mongoose.connect('mongodb://localhost:27017/jobeet', { useNewUrlParser: true, useUnifiedTopology: true });
// const ObjectId = mongoose.Types.ObjectId;

// function generateRandomElement(array) {
//   return array[Math.floor(Math.random() * array.length)];
// }
  function generateBusinessEmail(company) {
    const emailDomains = ['@example.com', '@mail.com', '@company.com'];
    const emailDomain = generateRandomElement(emailDomains);
    return `careers@${company.toLowerCase().replace(/\s+/g, '')}${emailDomain}`;
  }
  
// const userIds = [ '65a505b7c90e96864a88797f', '65a507c7c90e96864a887988', '65b6f1e5368a5e917f046b3a']; // Replace with your actual user IDs
// async function createJobRecord(jobData) {
//   const Job = new job(jobData);
//   await Job.save();
// }
// function generateRandomUserId() {
//   return userIds[Math.floor(Math.random() * userIds.length)];
// }
async function generateAndSaveBusinessJobs() {
    const jobTypes = ['Full Time', 'Part Time', 'Contract'];
    const companies = ['Business Solutions', 'MarketMakers', 'Enterprise Pioneers', 'InnovateLead', 'GlobalBiz Corp'];
    const positions = ['Business Analyst', 'Marketing Manager', 'Sales Executive', 'HR Specialist', 'Financial Advisor'];
    const locations = ['London, UK', 'Toronto, Canada', 'Sydney, Australia', 'Singapore', 'Berlin, Germany'];
    const descriptions = [
      'Seeking a detail-oriented and experienced business analyst.',
      'Drive our marketing efforts and strategize new campaigns.',
      'Be at the forefront of our sales team, driving growth.',
      'Join our HR team to manage and develop our workforce.',
      'Financial expertise needed to guide our fiscal decisions.'
    ];
  
  const currentDate = new Date();
  const expiryDate = currentDate.setDate(currentDate.getDate() + 30);
    // for (let i = 0; i < 20; i++) {
      const company = generateRandomElement(companies);
      const businessJobData = {
        userId: generateRandomUserId(),
        type: generateRandomElement(jobTypes),
        company: company,
        url: `https://www.${generateRandomElement(companies).toLowerCase().replace(/\s/g, '')}.com`,
        position: generateRandomElement(positions),
        location: generateRandomElement(locations),
        description: generateRandomElement(descriptions),
        howToApply: `Email your resume to contact@${generateRandomElement(companies).toLowerCase().replace(/\s/g, '')}.com`,
        token: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        isPublic: Math.random() < 0.5,
        isActive: true,
        expiresAt: expiryDate,
        categoryId: new ObjectId("658ba864a0a13c00338b344f"),
        email: generateBusinessEmail(company),
      };
      console.log(businessJobData);
      await createJobRecord(businessJobData);
    // }
  
    console.log('Business jobs created successfully');
  }
  













  for (let i = 0; i < 40; i++) {

    generateAndSaveTechJobs()
    .then(() => console.log('ok'))
    .catch(err => console.error(err)); 

     generateAndSaveMedicalJobs()
     .then(err => console.log('ok'))
    .catch(err => console.log('ok')); 

     generateAndSaveBusinessJobs()
    .then(err => console.log('ok'))
    .catch(err => console.log('ok'));
  }