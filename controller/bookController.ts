import { Request, Response } from "express";
// import { statusCode } from "../utils/statusCode";
import { client, db } from "../utils/dbConfig";
import { studentModel } from "../model/bookModel";
import { ObjectId } from "mongodb";

export const createStudent = async (req: Request, res: Response) => {
  try {
    await client.connect();

    const { name, age, grade } = req.body;

    const student = new studentModel(name, age, grade);

    const result = await db.insertOne(student);

    return res.status(201).json({
      message: "Student created",
      data: student,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error",
    });
  }
};

export const readStudents = async (req: Request, res: Response) => {
  try {
    await client.connect();
    const students = await db.find().toArray();

    return res.status(200).json({
      message: "Students found",
      data: students,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error",
    });
  }
};

export const readStudentByID = async (req: Request, res: Response) => {
  try {
    await client.connect();

    const { studentID } = req.params;

    const student = await db.findOne({ _id: new ObjectId(studentID) });

    return res.status(200).json({
      message: "Student found by ID",
      data: student,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error",
    });
  }
};

export const readStudentByName = async (req: Request, res: Response) => {
  try {
    await client.connect();

    const { name } = req.query;

    const students = await db.find({ name }).toArray();

    return res.status(200).json({
      message: "Students found by name",
      data: students,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error",
    });
  }
};

export const updateStudent = async (req: Request, res: Response) => {
  try {
    const { studentID } = req.params;
    const { name, age, grade } = req.body;

    const result = await db.updateOne(
      { _id: new ObjectId(studentID) },
      { $set: { name, age, grade } }
    );

    return res.status(201).json({
      message: "Student updated",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error",
    });
  }
};

export const deleteStudent = async (req: Request, res: Response) => {
  try {
    await client.connect();

    const { studentID } = req.params;

    await db.deleteOne({ _id: new ObjectId(studentID) });

    return res.status(201).json({
      message: "Student deleted",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error",
    });
  }
};
