// Dummy data for categories
// const categories = [
//     { id: 1, name: 'Programming' },
//     { id: 2, name: 'Design' },
//     { id: 3, name: 'Marketing' },
//   ];
  
//   // Dummy data for jobs under each category
//   const jobs = [
//     { id: 1, categoryId: 1, title: 'Software Engineer', company: 'ABC Inc.', location: 'City A' },
//     { id: 2, categoryId: 1, title: 'Frontend Developer', company: 'XYZ Corp.', location: 'City B' },
//     { id: 3, categoryId: 2, title: 'UI/UX Designer', company: '123 Designs', location: 'City C' },
//     { id: 4, categoryId: 3, title: 'Marketing Specialist', company: 'Marketing Pro', location: 'City D' },
//     // Add more job data as needed
//   ];
const jobsByCategories = [{
        "categoryId": "123",
        "categoryName": "Programming",
        "jobs": [
          {
            "id":1,
            "type": "Full Time",
            "company": "ABC Inc.",
            "logo": "company-logo-1.png",
            "url": "https://www.abcinc.com",
            "position": "Software Engineer",
            "location": "City A",
            "description": "We are looking for a skilled Software Engineer...",
            "howToApply": "Send your resume to careers@abcinc.com",
            "token": "job-token-1",
            "Public": true,
            "isActive": true,
            "email": "info@abcinc.com",
            "expiresAt": "2023-12-31T23:59:59.999Z"
          },
          {
            "id":2,
            "type": "Internship",
            "company": "XYZ Software",
            "logo": "company-logo-2.png",
            "url": "https://www.xyzsoftware.com",
            "position": "Software Developer Intern",
            "location": "City A",
            "description": "Exciting internship opportunity for aspiring software developers...",
            "howToApply": "Submit your application on our website.",
            "token": "job-token-2",
            "Public": true,
            "isActive": true,
            "email": "internships@xyzsoftware.com",
            "expiresAt": "2023-12-31T23:59:59.999Z"
          },
          {
            "id":3,
            "type": "Freelance",
            "company": "Freelance Code Masters",
            "logo": "company-logo-3.png",
            "url": "https://www.freelancecodemasters.com",
            "position": "Frontend Developer",
            "location": "City B",
            "description": "Join our team as a freelance frontend developer...",
            "howToApply": "Send your portfolio to hiring@freelancecodemasters.com",
            "token": "job-token-3",
            "Public": true,
            "isActive": true,
            "email": "hiring@freelancecodemasters.com",
            "expiresAt": "2023-12-31T23:59:59.999Z"
          }
          // Add more jobs as needed
        ]
      },
      {
        "categoryId": "124",
        "categoryName": "Design",
        "jobs": [
          {
            "id":1,
            "type": "Full Time",
            "company": "Design Innovators",
            "logo": "company-logo-4.png",
            "url": "https://www.designinnovators.com",
            "position": "Senior UX Designer",
            "location": "City C",
            "description": "Exciting opportunity for a Senior UX Designer to lead innovative design projects...",
            "howToApply": "Apply through our careers page.",
            "token": "job-token-4",
            "Public": true,
            "isActive": true,
            "email": "careers@designinnovators.com",
            "expiresAt": "2023-12-31T23:59:59.999Z"
          },
          {
            "id":2,
            "type": "Remote",
            "company": "Remote Designs",
            "logo": "company-logo-5.png",
            "url": "https://www.remotedesigns.com",
            "position": "Graphic Designer",
            "location": "Remote",
            "description": "Work from anywhere as a Graphic Designer in our remote-friendly team...",
            "howToApply": "Submit your resume and portfolio to apply@remotedesigns.com",
            "token": "job-token-5",
            "Public": true,
            "isActive": true,
            "email": "apply@remotedesigns.com",
            "expiresAt": "2023-12-31T23:59:59.999Z"
          }
          // Add more jobs as needed
        ]
      },
      {
        "categoryId": "125",
        "categoryName": "Marketing",
        "jobs": [
          {
            "id":1,
            "type": "Contract",
            "company": "Marketing Pros",
            "logo": "company-logo-6.png",
            "url": "https://www.marketingpros.com",
            "position": "Digital Marketing Specialist",
            "location": "City D",
            "description": "Join our dynamic marketing team as a Digital Marketing Specialist...",
            "howToApply": "Send your CV and cover letter to hr@marketingpros.com",
            "token": "job-token-6",
            "Public": true,
            "isActive": true,
            "email": "hr@marketingpros.com",
            "expiresAt": "2023-12-31T23:59:59.999Z"
          },
          {
            "id":2,
            "type": "Freelance",
            "company": "Freelance Marketing Gurus",
            "logo": "company-logo-7.png",
            "url": "https://www.freelancemarketinggurus.com",
            "position": "Social Media Manager",
            "location": "City E",
            "description": "Exciting freelance opportunity for a Social Media Manager...",
            "howToApply": "Apply by sending your portfolio to freelance@marketinggurus.com",
            "token": "job-token-7",
            "Public": true,
            "isActive": true,
            "email": "freelance@marketinggurus.com",
            "expiresAt": "2023-12-31T23:59:59.999Z"
          }
          // Add more jobs as needed
        ]
      }
      // Add more categories as needed
    ]
    const categories = [
      { id: 1, name: "Technology" },
      { id: 2, name: "Business" },
      { id: 3, name: "Education" },
      { id: 4, name: "Healthcare" },
      { id: 5, name: "Entertainment" }
    ];
  export {jobsByCategories , categories};