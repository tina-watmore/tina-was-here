const BASE_API_URL = 'http://localhost:5000/api';

export const fetchCommercialProjects = async () => {
  try {
    const response = await fetch(`${BASE_API_URL}/commercial-projects`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return [];
  }
};

export const fetchHobbieProjects = async () => {
  try {
    const response = await fetch(`${BASE_API_URL}/hobbie-projects`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return [];
  }
};