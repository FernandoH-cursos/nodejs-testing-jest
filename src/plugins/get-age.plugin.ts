

export const getAge = (birthdate: string) => {
  if (!birthdate) return new Error('birthdate is required');
  
  // console.log({ currentYear: new Date().getFullYear() });

  // return getAgePlugin(birthdate);
  return new Date().getFullYear() - new Date(birthdate).getFullYear();
}

