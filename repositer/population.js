import axios from "axios";

const getPopulation = async ({ drilldown, measures }) => {
  let result = [];
  try {
    const response = await axios.get(
      `https://datausa.io/api/data?drilldowns=${drilldown}&measures=${measures}`
    );
    response.data.data.forEach((element) => {
      let myObject = {};
      myObject.nationId = element["ID Nation"];
      myObject.year = element["Year"];
      myObject.population = element["Population"];
      result.push(myObject);
    });
    return result;
  } catch (error) {
    throw error;
  }
};

export default { getPopulation };
