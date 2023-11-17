import axios from "axios";
axios.defaults.baseURL= import.meta.env.VITE_API_BASE_URL;

const countryResponse = await axios.get(`/country`);
export const fetchedCountries = await countryResponse.data;
console.log(fetchedCountries);

const sectorResponse = await axios.get(`/sectors`);
export const fetchedSectors = await sectorResponse.data;
//console.log(fetchedSectors);

const topicResponse = await axios.get(`/topics`);
export const fetchedTopics = await topicResponse.data;
//console.log(fetchedTopics);

const intensityResponse = await axios.get(`/intensity`);
export const fetchedIntensity = await intensityResponse.data;
//console.log(fetchedIntensity);

const relevanceResponse = await axios.get(`/relevance`);
export const fetchedRelevance = await relevanceResponse.data;
//console.log(fetchedRelevance);

const likelihoodResponse = await axios.get(`/likelihood`);
export const fetchedLikelihood = await likelihoodResponse.data;
//console.log(fetchedLikelihood);

const pestleResponse = await axios.get(`/pestle`);
export const fetchedPestle = await pestleResponse.data;
//console.log(fetchedPestle);