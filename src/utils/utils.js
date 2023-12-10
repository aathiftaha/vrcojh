export const calculateBMI = (weight, height) => {
    if (weight > 0 && height > 0) {
      const calculatedBMI = weight / (height * height);
      return calculatedBMI.toFixed(1);
    }
    return 'Invalid input';
  };