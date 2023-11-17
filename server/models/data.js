import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
    {
        endyear: String,
        intensity: Number,
        sector: String,
        topic: String,
        insight: String,
        url: String,
        region: String,
        startyear: String,
        impact: String,
        added: String,
        published: String,
        country: String,
        relevance: Number,
        pestle: String,
        source: String,
        title: String,
        likelihood: Number,
    }
);

const data = mongoose.model("data", dataSchema);
export default data;