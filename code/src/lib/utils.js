const sortOrder = ['west', 'north', 'south', 'east'];

// Function used to sort by direction of "sortOrder";
export const sortArrayByDirection = (a, b) => {
  // Get the index of the "current" element in the array
  const aIndex = sortOrder.findIndex(
    (direction) => direction === a.direction.toLowerCase()
  );
  // Get the index of the "next" element in the array
  const bIndex = sortOrder.findIndex(
    (direction) => direction === b.direction.toLowerCase()
  );

  return aIndex - bIndex;
};
