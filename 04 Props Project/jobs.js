const jobListings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    postedOn: "1 day ago",
    position: "Frontend Engineer",
    tag1: "Full-time",
    tag2: "Senior",
    packagePerHour: "$75",
    location: "Mountain View, CA"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    postedOn: "2 days ago",
    position: "React Developer",
    tag1: "Full-time",
    tag2: "Mid-level",
    packagePerHour: "$65",
    location: "Redmond, WA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    postedOn: "3 days ago",
    position: "Backend Engineer (Node.js)",
    tag1: "Full-time",
    tag2: "Junior",
    packagePerHour: "$55",
    location: "Seattle, WA"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    postedOn: "5 days ago",
    position: "Full Stack Developer",
    tag1: "Full-time",
    tag2: "Senior",
    packagePerHour: "$80",
    location: "Menlo Park, CA"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    postedOn: "1 week ago",
    position: "UI Engineer",
    tag1: "Contract",
    tag2: "Mid-level",
    packagePerHour: "$70",
    location: "Los Gatos, CA"
  },
  {
    brandLogo: "https://logo.clearbit.com/spotify.com",
    companyName: "Spotify",
    postedOn: "6 days ago",
    position: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior",
    packagePerHour: "$50",
    location: "Stockholm, Sweden"
  },
  {
    brandLogo: "https://logo.clearbit.com/stripe.com",
    companyName: "Stripe",
    postedOn: "2 weeks ago",
    position: "React Engineer",
    tag1: "Full-time",
    tag2: "Senior",
    packagePerHour: "$78",
    location: "San Francisco, CA"
  },
  {
    brandLogo: "https://logo.clearbit.com/airbnb.com",
    companyName: "Airbnb",
    postedOn: "4 days ago",
    position: "Frontend Developer",
    tag1: "Part-time",
    tag2: "Mid-level",
    packagePerHour: "$45",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    postedOn: "1 week ago",
    position: "JavaScript Engineer",
    tag1: "Full-time",
    tag2: "Senior",
    packagePerHour: "$70",
    location: "San Jose, CA"
  },
  {
    brandLogo: "https://logo.clearbit.com/ibm.com",
    companyName: "IBM",
    postedOn: "3 weeks ago",
    position: "MERN Stack Developer",
    tag1: "Full-time",
    tag2: "Mid-level",
    packagePerHour: "$60",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/zoho.com",
    companyName: "Zoho",
    postedOn: "2 days ago",
    position: "Frontend Engineer",
    tag1: "Full-time",
    tag2: "Junior",
    packagePerHour: "$40",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/atlassian.com",
    companyName: "Atlassian",
    postedOn: "2 weeks ago",
    position: "UI Developer",
    tag1: "Contract",
    tag2: "Mid-level",
    packagePerHour: "$58",
    location: "Sydney, Australia"
  },
  {
    brandLogo: "https://logo.clearbit.com/github.com",
    companyName: "GitHub",
    postedOn: "5 days ago",
    position: "Frontend Developer",
    tag1: "Remote",
    tag2: "Senior",
    packagePerHour: "$75",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/slack.com",
    companyName: "Slack",
    postedOn: "4 days ago",
    position: "React Native Developer",
    tag1: "Full-time",
    tag2: "Mid-level",
    packagePerHour: "$68",
    location: "New York, NY"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    postedOn: "1 week ago",
    position: "Frontend Web Engineer",
    tag1: "Full-time",
    tag2: "Senior",
    packagePerHour: "$72",
    location: "Austin, TX"
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    companyName: "OpenAI",
    postedOn: "1 day ago",
    position: "Full Stack Developer",
    tag1: "Full-time",
    tag2: "Senior",
    packagePerHour: "$90",
    location: "San Francisco, CA"
  },
  {
    brandLogo: "https://logo.clearbit.com/notion.so",
    companyName: "Notion",
    postedOn: "3 days ago",
    position: "Frontend Engineer",
    tag1: "Part-time",
    tag2: "Mid-level",
    packagePerHour: "$55",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/figma.com",
    companyName: "Figma",
    postedOn: "2 days ago",
    position: "Web Developer",
    tag1: "Full-time",
    tag2: "Mid-level",
    packagePerHour: "$60",
    location: "San Francisco, CA"
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    companyName: "Uber",
    postedOn: "6 days ago",
    position: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior",
    packagePerHour: "$50",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/reddit.com",
    companyName: "Reddit",
    postedOn: "2 weeks ago",
    position: "React Engineer",
    tag1: "Contract",
    tag2: "Senior",
    packagePerHour: "$65",
    location: "San Francisco, CA"
  }
];

export default jobListings