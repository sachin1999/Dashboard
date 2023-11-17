import data from "../models/data.js";
import { countryToAlpha3 } from "country-to-iso";

export const getData = async (req,res) => {
    try{
        const fetchedData = await data.find();
        res.status(200).json(fetchedData);
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

export const getCountry = async(req, res) => {
    try{
        const fetchedData = await data.find();
        const mappedData = fetchedData.reduce((acc, {country}) => {
            const countryISO3 = countryToAlpha3(country);
            if(!acc[countryISO3]){
                acc[countryISO3] = 0;
            }
            acc[countryISO3]++;
            return acc;
        }, {});

        const formattedLocations = Object.entries(mappedData).map(
            ([country, count]) => {
                return {id: country, value: count}
            }
        )
        res.status(200).json(formattedLocations);
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}

export const getSector = async(req, res) => {
    try{
        const responseData = await data.find();
        const sectorData = responseData.reduce((acc, {sector}) => {
            if(!acc[sector]){
                acc[sector] = 0;
            }
            acc[sector]++;
            return acc;
        }, {});

        const formattedSectors = Object.entries(sectorData).map(
            ([sector, count]) => {
                return {id: sector, value: count}
            }
        )
        res.status(200).json(formattedSectors);
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

export const getTopic = async(req, res) => {
    try{
        const responseData = await data.find();
        const topicData = responseData.reduce((acc, {topic}) => {
            if(!acc[topic]){
                acc[topic] = 0;
            }
            acc[topic]++;
            return acc;
        }, {});

        const formattedTopics = Object.entries(topicData).map(
            ([topic, count]) => {
                return {id: topic, value: count}
            }
        )
        res.status(200).json(formattedTopics);
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

export const getIntensity = async(req, res) => {
    try{
        const responseData = await data.find();
        const intensityData = responseData.reduce((acc, {intensity}) => {
            if(!acc[intensity]){
                acc[intensity] = 0;
            }
            acc[intensity]++;
            return acc;
        }, {});

        const formattedIntensity = Object.entries(intensityData).map(
            ([intensity, count]) => {
                return {"intensity": intensity, "count": count}
            }
        )
        res.status(200).json(formattedIntensity);
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

export const getRelevance = async(req, res) => {
    try{
        const responseData = await data.find();
        const relevanceData = responseData.reduce((acc, {relevance}) => {
            if(!acc[relevance]){
                acc[relevance] = 0;
            }
            acc[relevance]++;
            return acc;
        }, {});

        const formattedRelevance = Object.entries(relevanceData).map(
            ([relevance, count]) => {
                return {"Relevance": parseInt(relevance), "Count": count}
            }
        )
        res.status(200).json(formattedRelevance);
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

export const getLikelihood = async(req, res) => {
    try{
        const responseData = await data.find();
        const likelihoodData = responseData.reduce((acc, {likelihood}) => {
            if(!acc[likelihood]){
                acc[likelihood] = 0;
            }
            acc[likelihood]++;
            return acc;
        }, {});

        const formattedLikelihood = Object.entries(likelihoodData).map(
            ([likelihood, count]) => {
                return {"Likelihood": likelihood, "Count": count}
            }
        )
        res.status(200).json(formattedLikelihood);
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

export const getPestle = async(req, res) => {
    try{
        const responseData = await data.find();
        const pestleData = responseData.reduce((acc, {pestle}) => {
            if(!acc[pestle]){
                acc[pestle] = 0;
            }
            acc[pestle]++;
            return acc;
        }, {});

        const formattedPestle = Object.entries(pestleData).map(
            ([pestle, count]) => {
                return {id: pestle, value: count}
            }
        )
        res.status(200).json(formattedPestle);
    }catch(error){
        res.status(404).json({message: error.message})
    }
}