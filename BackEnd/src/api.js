const BASE_URL = 'https://api.freshideasdining.com/v1/location/65b6be9ff3c61202b10b76c1/periods';
const MEAL_PERIOD_IDS = {
  breakfast: '6682f811f3c6120b2733fd10',
  lunch: '6682f811f3c6120b2733fd0f',
  dinner: '6682f811f3c6120b2733fd08',
};

export const fetchMenuData = async (period) => {
  try {
    const date = '2024-11-25'; //Set date for testing
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
