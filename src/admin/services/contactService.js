// Data service abstraction for Contact Inquiries
// Stores inquiries in localStorage for persistence and dispatches custom events for real-time reactivity.

const STORAGE_KEY = 'rpcs_admin_contact_inquiries';
const LISTEN_EVENT = 'rpcs_contact_inquiries_updated';

const seedInquiries = [
  {
    id: 'INQ-2026-001',
    fullName: 'Rajesh Sharma',
    email: 'rajesh.sharma@tata-motors-partner.com',
    phone: '+91 98765 43210',
    company: 'AutoTech Solutions Ltd',
    subject: 'Automotive Chassis Structural Analysis',
    service: 'FEA Service',
    message: 'We require finite element analysis for an EV battery enclosure and chassis frame under crash and fatigue load cases. Please provide consultation estimate.',
    submittedAt: '2026-09-01T14:30:00.000Z',
    status: 'New'
  },
  {
    id: 'INQ-2026-002',
    fullName: 'Vikram Malhotra',
    email: 'v.malhotra@aerospace-dyn.com',
    phone: '+91 98111 22334',
    company: 'Aerospace Dynamics Corp',
    subject: 'Turbine Rotor Aerodynamic CFD',
    service: 'CFD Service',
    message: 'Looking for high-fidelity compressible flow CFD simulations for high-pressure turbine blade profiles. Need technical consultation.',
    submittedAt: '2026-08-30T10:15:00.000Z',
    status: 'Contacted'
  }
];

export function getInquiries() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seedInquiries));
      return seedInquiries;
    }
    return JSON.parse(data);
  } catch (e) {
    console.error('Error fetching contact inquiries:', e);
    return seedInquiries;
  }
}

export function addInquiry(inquiryData) {
  const inquiries = getInquiries();
  const newInquiry = {
    id: `INQ-2026-${String(inquiries.length + 1).padStart(3, '0')}`,
    fullName: inquiryData.fullName || inquiryData.name || '',
    email: inquiryData.email || '',
    phone: inquiryData.phone || '',
    company: inquiryData.company || inquiryData.companyName || 'Individual',
    subject: inquiryData.subject || inquiryData.topic || 'General Inquiry',
    service: inquiryData.service || inquiryData.serviceInterested || 'CAD / Engineering',
    message: inquiryData.message || '',
    submittedAt: new Date().toISOString(),
    status: 'New'
  };

  const updated = [newInquiry, ...inquiries];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event(LISTEN_EVENT));
  } catch (e) {
    console.error('Error saving contact inquiry:', e);
  }
  return newInquiry;
}

export function updateInquiryStatus(id, newStatus) {
  const inquiries = getInquiries();
  const updated = inquiries.map(item => 
    item.id === id ? { ...item, status: newStatus } : item
  );
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event(LISTEN_EVENT));
  } catch (e) {
    console.error('Error updating inquiry status:', e);
  }
  return updated;
}

export function deleteInquiry(id) {
  const inquiries = getInquiries();
  const updated = inquiries.filter(item => item.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event(LISTEN_EVENT));
  } catch (e) {
    console.error('Error deleting inquiry:', e);
  }
  return updated;
}

export function subscribeInquiries(callback) {
  const handler = () => callback(getInquiries());
  window.addEventListener(LISTEN_EVENT, handler);
  return () => window.removeEventListener(LISTEN_EVENT, handler);
}
