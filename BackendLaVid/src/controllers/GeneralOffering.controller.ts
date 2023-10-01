import { Request, Response } from "express";
import GeneralOffering, { IGeneralOffering } from "../models/GeneralOffering.model";



export async function getGeneralOfferings(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const Generaloffering = await GeneralOffering.find();
    return res.json(Generaloffering);
  } catch (err: any) {
    return res.status(500).json({
      message: "Error al obtener las ofrendas de celulas",
      error: err["message"],
    });
  }
}

export async function createGeneralOffering(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const newGeneralOffering = req.body;
    const generalOffering = new GeneralOffering(newGeneralOffering);
    await generalOffering.save();

    return res.json({
      message: "GeneralOffering Saved Successfully",
      GeneralOffering: generalOffering,
    });
  } catch (err: any) {
    return res.status(500).json({
      message: "Error al crear la celula",
      error: err["message"],
    });
  }
}

export async function getGeneralOffering(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const { id } = req.params;
    const Generaloffering = await GeneralOffering.findById(id);
    return res.json(Generaloffering);
  } catch (err: any) {
    return res.status(500).json({
      message: "Error al obtener la celula",
      error: err["message"],
    });
  }
}

