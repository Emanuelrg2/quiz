  const URL = 'https://restcountries.eu/rest/v2/name/{name}';
  export const getAllCountries = async () => {
     try {
          const response = await fetch(URL);
         return await response.json();
      } 
      catch (error) {
          console.log('Error >>>', error);
      }
  };