import express from "express";
import { EmployeeModel } from "../models/employee";

class EmployeeController{

    getAllEmployees = async (req: express.Request, resp: express.Response) => {
        try {
            const employees = await EmployeeModel.find();
            return resp.status(200).json({data: employees})
        } catch (error) {
            return resp.status(400)
        }
    }

    getEmployee = async (req: express.Request, resp: express.Response) => {
        try {
            const {id} = req.params;
            const employee = await EmployeeModel.findById(id);
            return resp.status(200).json({data: employee})
        } catch (error) {
            return resp.status(400)
        }
    }

    createEmployee = async (req: express.Request, resp: express.Response) => {
        try {
            const {name} = req.body;
            const employee = new EmployeeModel({
                name
            });
            await employee.save();
            return resp.status(200).json({data: "Created!"})
        } catch (error) {
            return resp.status(400)
        }
    }

    updateEmployee = async (req: express.Request, resp: express.Response) => {
        try {
            const {id} = req.params;
            const {name} = req.body;
            const employee = await EmployeeModel.findById(id);
            if (employee) {
                employee.name = name;
                await employee.save();
                return resp.status(200).json({data: "Updated!"});
            }
            return resp.status(400)
        } catch (error) {
            return resp.status(400)
        }
    }

    deleteEmployee = async (req: express.Request, resp: express.Response) => {
        try {
            const {id} = req.params;
            await EmployeeModel.findByIdAndDelete({_id: id});
            return resp.status(200).json({data: "Deleted!"})
        } catch (error) {
            return resp.status(400)
        }
    }

}

export default new EmployeeController();