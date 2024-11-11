// api.js

const BASE_URL = 'https://api.freshideasdining.com/v1/location/65b6be9ff3c61202b10b76c1/periods';
const MEAL_PERIOD_IDS = {
  breakfast: '6682f811f3c6120b2733fd10',
  lunch: '6682f811f3c6120b2733fd0f',
  dinner: '6682f811f3c6120b2733fd08',
};

/**
 * Fetch the menu data for a specific meal period (breakfast, lunch, dinner) for the given date.
 * @param {string} period - The meal period ('breakfast', 'lunch', or 'dinner').
 * @param {string} date - The date in the format 'YYYY-MM-DD'.
 * @returns {Promise<Object>} - The menu data response from the API.
 */
export const fetchMenuData = async (period, date) => {
  try {
    const periodId = MEAL_PERIOD_IDS[period];
    const response = await fetch(
      `${BASE_URL}?platform=0&date=${date}&id=${periodId}`
    );
    const data = await response.json();

    if (data.status === 'success' && data.menu && data.menu.periods.categories) {
      return data.menu.periods.categories;
    } else {
      throw new Error('Invalid menu data structure from API.');
    }
  } catch (error) {
    console.error('Error fetching menu data:', error);
    throw error;
  }
};
