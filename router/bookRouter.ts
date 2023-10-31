import { Router } from "express";
import {
  createStudent,
  deleteStudent,
  readStudentByID,
  readStudentByName,
  readStudents,
  updateStudent,
} from "../controller/bookController";

const router: Router = Router();

router.route("/create-student").post(createStudent);
router.route("/read-students").get(readStudents);
router.route("/read-student-id/:studentID").get(readStudentByID);
router.route("/read-student-ByName").get(readStudentByName);
router.route("/update-student/:student").patch(updateStudent);
router.route("/delete-student/:studentName").delete(deleteStudent);

export default router;
