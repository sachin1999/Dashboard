const BASE_URL = import.meta.env.VITE_API_BASE_URL

const countryResponse = await fetch(`${BASE_URL}/country`);
export const fetchedCountries = await countryResponse.json();
// console.log(fetchedCountries);

const sectorResponse = await fetch(`${BASE_URL}/sectors`);
export const fetchedSectors = await sectorResponse.json();
//console.log(fetchedSectors);

const topicResponse = await fetch(`${BASE_URL}/topics`);
export const fetchedTopics = await topicResponse.json();
//console.log(fetchedTopics);

const intensityResponse = await fetch(`${BASE_URL}/intensity`);
export const fetchedIntensity = await intensityResponse.json();
//console.log(fetchedIntensity);

const relevanceResponse = await fetch(`${BASE_URL}/relevance`);
export const fetchedRelevance = await relevanceResponse.json();
//console.log(fetchedRelevance);

const likelihoodResponse = await fetch(`${BASE_URL}/likelihood`);
export const fetchedLikelihood = await likelihoodResponse.json();
//console.log(fetchedLikelihood);

const pestleResponse = await fetch(`${BASE_URL}/pestle`);
export const fetchedPestle = await pestleResponse.json();
//console.log(fetchedPestle);