import { Request, Response } from "express";
import Offering, { IOffering } from "../models/offering.model";
import GeneralOffering, { IGeneralOffering } from "../models/GeneralOffering.model";
import GeneralOfferingModel from "../models/GeneralOffering.model";

export async function getOfferings(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const offering = await Offering.find();
    return res.json(offering);
  } catch (err: any) {
    return res.status(500).json({
      message: "Error al obtener las ofredas",
      error: err["message"],
    });
  }
}

export async function createOffering(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const newOffering = req.body;
    const offering = new Offering(newOffering);
    await offering.save();

    const {id, amount, date} = offering;
    const GeneralOffering = new GeneralOfferingModel();
    GeneralOffering.service = id;
    GeneralOffering.amount = amount;
    GeneralOffering.date = date;
    await GeneralOffering.save();

    return res.json({
      message: "Offering Saved Successfully",
      member: offering,
    });
  } catch (err: any) {
    return res.status(500).json({
      message: "Error al guardar la ofreda",
      error: err["message"],
    });
  }
}

export async function getOffering(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const { id } = req.params;
    const offering = await Offering.findById(id);
    return res.json(offering);
  } catch (err: any) {
    return res.status(500).json({
      message: "Error al obtener la ofreda",
      error: err["message"],
    });
  }
}


