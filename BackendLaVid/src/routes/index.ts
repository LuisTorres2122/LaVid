import { Router } from "express";
const router = Router();
import { authenticateUser, createUser } from "../controllers/user.controller";
import {
  createOffering,
  getOffering,
  getOfferings,
} from "../controllers/offering.controller";

import {
  createGeneralOffering,
  getGeneralOffering,
  getGeneralOfferings,
} from "../controllers/GeneralOffering.controller";

import {
  getMembers,
  createMember,
  deleteMember,
  getMember,
  updateMember,
} from "../controllers/member.controller";

router.route("/autenticate").post(authenticateUser);
router.route("/User").post(createUser);

router
  .route("/Generaloffering")
  .get(getGeneralOfferings)
  .post(createGeneralOffering);
router.route("/Generaloffering/:id").get(getGeneralOffering);

router.route("/offering").get(getOfferings).post(createOffering);

router.route("/offering/:id").get(getOffering);

router.route("/members").get(getMembers).post(createMember);

router
  .route("/members/:id")
  .get(getMember)
  .delete(deleteMember)
  .put(updateMember);

export default router;
