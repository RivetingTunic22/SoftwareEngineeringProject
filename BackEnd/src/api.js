

const BASE_URL = 'https://api.freshideasdining.com/v1';

export const fetchMenu = async (locationId, platform, date) => {
    try {
        const response = await fetch(
            `${BASE_URL}/location/${locationId}/periods?platform=${platform}&date=${date}`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching menu:', error);
        throw error;
    }
};
