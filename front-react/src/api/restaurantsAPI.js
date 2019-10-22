export const getAllRestaurants = async (quantity=1) => {
    const response = await fetch(`http://localhost:3000?limit=${quantity}`);
    const data = await response.json();

    return data;
};