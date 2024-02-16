import express from "express";
import EmployeeController from "../controllers/EmployeeController";

const router = express.Router();

router.get("/employees", EmployeeController.getAllEmployees);
router.get("/employee/:id", EmployeeController.getEmployee);
router.post("/employee", EmployeeController.createEmployee);
router.put("/employee/:id", EmployeeController.updateEmployee);
router.delete("/employee/:id", EmployeeController.deleteEmployee);

export default router;