// Data service abstraction for Career Applications
// Stores applications in localStorage for persistence and dispatches custom events for real-time reactivity.

const STORAGE_KEY = 'rpcs_admin_career_applications';
const LISTEN_EVENT = 'rpcs_career_applications_updated';

const seedApplications = [
  {
    id: 'APP-2026-001',
    fullName: 'Ananya Krishnan',
    email: 'ananya.k@eng-designs.com',
    phone: '+91 97654 32109',
    location: 'Bengaluru, Karnataka',
    position: 'Senior CAD / Mechanical Design Engineer',
    experience: '5+ Years',
    education: 'B.Tech Mechanical Engineering (NIT Trichy)',
    skills: 'CATIA V5, SolidWorks, GD&T, Surface Modeling, Plastic Component Design',
    coverLetter: 'I am passionate about precision engineering design and product development. With 5 years of experience in automotive body-in-white and plastic trim design, I look forward to contributing to RPCS.',
    resume: {
      fileName: 'Ananya_Krishnan_Resume_2026.pdf',
      fileSize: '1.4 MB',
      fileType: 'application/pdf',
      uploadedAt: '2026-09-01T16:20:00.000Z',
      dataUrl: null
    },
    portfolio: 'https://linkedin.com/in/ananya-krishnan-mech',
    submittedAt: '2026-09-01T16:20:00.000Z',
    status: 'New'
  },
  {
    id: 'APP-2026-002',
    fullName: 'Karthik Subramanian',
    email: 'karthik.fea@simulation-lab.org',
    phone: '+91 94433 11223',
    location: 'Chennai, Tamil Nadu',
    position: 'FEA / Structural Analysis Specialist',
    experience: '4 Years',
    education: 'M.Tech Structural Engineering (IIT Madras)',
    skills: 'ANSYS Mechanical, Abaqus, LS-DYNA, Non-linear FEA, Fatigue Analysis',
    coverLetter: 'Experienced in crash simulation and structural dynamics for industrial machinery and automotive components.',
    resume: {
      fileName: 'Karthik_FEA_Specialist.pdf',
      fileSize: '2.1 MB',
      fileType: 'application/pdf',
      uploadedAt: '2026-08-29T11:45:00.000Z',
      dataUrl: null
    },
    portfolio: 'https://linkedin.com/in/karthik-fea-specialist',
    submittedAt: '2026-08-29T11:45:00.000Z',
    status: 'Shortlisted'
  }
];

export function getApplications() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seedApplications));
      return seedApplications;
    }
    return JSON.parse(data);
  } catch (e) {
    console.error('Error fetching career applications:', e);
    return seedApplications;
  }
}

export function addApplication(appData) {
  const apps = getApplications();
  
  let resumeObj = null;
  if (appData.resumeFile) {
    resumeObj = {
      fileName: appData.resumeFile.name || appData.resumeFileName || 'Applicant_CV.pdf',
      fileSize: appData.resumeFile.size ? `${(appData.resumeFile.size / (1024 * 1024)).toFixed(2)} MB` : appData.resumeFileSize || '850 KB',
      fileType: appData.resumeFile.type || 'application/pdf',
      uploadedAt: new Date().toISOString(),
      dataUrl: appData.resumeDataUrl || null
    };
  } else if (appData.resume) {
    resumeObj = appData.resume;
  } else {
    resumeObj = {
      fileName: 'Submitted_Resume.pdf',
      fileSize: '500 KB',
      fileType: 'application/pdf',
      uploadedAt: new Date().toISOString(),
      dataUrl: null
    };
  }

  const newApp = {
    id: `APP-2026-${String(apps.length + 1).padStart(3, '0')}`,
    fullName: appData.fullName || appData.name || '',
    email: appData.email || '',
    phone: appData.phone || '',
    location: appData.location || 'India',
    position: appData.position || appData.appliedPosition || 'Engineering Consultancy Specialist',
    experience: appData.experience || '3+ Years',
    education: appData.education || 'Engineering Graduate',
    skills: appData.skills || '',
    coverLetter: appData.coverLetter || appData.message || '',
    resume: resumeObj,
    portfolio: appData.portfolio || appData.linkedin || '',
    submittedAt: new Date().toISOString(),
    status: 'New'
  };

  const updated = [newApp, ...apps];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event(LISTEN_EVENT));
  } catch (e) {
    console.error('Error saving career application:', e);
  }
  return newApp;
}

export function updateApplicationStatus(id, newStatus) {
  const apps = getApplications();
  const updated = apps.map(item => 
    item.id === id ? { ...item, status: newStatus } : item
  );
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event(LISTEN_EVENT));
  } catch (e) {
    console.error('Error updating career application status:', e);
  }
  return updated;
}

export function deleteApplication(id) {
  const apps = getApplications();
  const updated = apps.filter(item => item.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event(LISTEN_EVENT));
  } catch (e) {
    console.error('Error deleting career application:', e);
  }
  return updated;
}

export function subscribeApplications(callback) {
  const handler = () => callback(getApplications());
  window.addEventListener(LISTEN_EVENT, handler);
  return () => window.removeEventListener(LISTEN_EVENT, handler);
}
