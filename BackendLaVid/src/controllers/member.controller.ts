import { Request, Response } from "express";
import Member, { IMember } from "../models/member.model";

export async function getMembers(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const members = await Member.find();
    return res.json(members);
  } catch (err: any) {
    return res.status(500).json({
      message: "Error al cargar los miembros",
      error: err["message"],
    });
  }
}

export async function createMember(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const newMember = req.body;
    const member = new Member(newMember);
    await member.save();
    return res.json({
      message: "member Saved Successfully",
      member,
    });
  } catch (err: any) {
    return res.status(500).json({
      message: "Error al guardar los miembros",
      error: err["message"],
    });
  }
}

export async function getMember(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const { id } = req.params;
    const member = await Member.findById(id);
    return res.json(member);
  } catch (err: any) {
    return res.status(500).json({
      message: "Error al cargar el miembro",
      error: err["message"],
    });
  }
}

export async function deleteMember(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const { id } = req.params;
    const member = (await Member.findByIdAndRemove(id)) as IMember;
    return res.json({ message: "Member Deleted" });
  } catch (err: any) {
    return res.status(500).json({
      message: "Error al eliminar el miembro",
      error: err["message"],
    });
  }
}

export async function updateMember(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const { id } = req.params;
    const data = req.body;
    await Member.findByIdAndUpdate(id, data);
    return res.json({
      message: "Successfully updated",
      updatedMember: data,
    });
  } catch (err: any) {
    return res.status(500).json({
      message: "Error al actualizar el miembro",
      error: err["message"],
    });
  }
}
