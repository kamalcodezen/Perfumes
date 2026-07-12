import { Request, Response } from "express";
import { database } from "../../db.js";
import { IPerfume } from "./perfume.interface.js";


const perfumeCollection = database.collection<IPerfume>("perfumes");

// Create Perfume
export const createPerfume = async (req: Request, res: Response) => {
  try {
    const perfumeData = req.body;

    const result = await perfumeCollection.insertOne(perfumeData);

    res.status(201).json({
      success: true,
      message: "Perfume added successfully",
      data: result,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to add perfume",
    });
  }
};

// Get All Perfumes
export const getPerfumes = async (req: Request, res: Response) => {
  try {
    const perfumes = await perfumeCollection.find().toArray();

    res.status(200).json({
      success: true,
      data: perfumes,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch perfumes",
    });
  }
};
