import { ISystemError } from "definition/SystemError";
import { Request, Response } from "express";
import { Cat, CatType } from "./cats.model";

// READ 고양이 전체 데이터 다 조회
export const readAllCat = (req: Request, res: Response) => {
  try {
    const cats = Cat;

    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error) {
    const err = error as ISystemError; // type assertion으로 error 타입을 확실하게 정해준다.

    // error logging
    res.status(400).send({
      success: false,
      error: err.message,
    });
  }
};

// READ 고양이 특정 데이터 다 조회
export const readPartialCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    console.log(params);

    const cats = Cat.find((cat) => {
      return cat.id === params.id;
    });

    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error) {
    const err = error as ISystemError; // type assertion으로 error 타입을 확실하게 정해준다.

    // error logging
    res.status(400).send({
      success: false,
      error: err.message,
    });
  }
};

// CREATE 새로운 고양이 추가 api
export const createCat = (req: Request, res: Response) => {
  try {
    const data = req.body;
    console.log(data);
    Cat.push(data);
    res.status(200).send({
      success: true,
      data: { data },
    });
  } catch (error) {
    const err = error as ISystemError; // type assertion으로 error 타입을 확실하게 정해준다.

    // error logging
    res.status(400).send({
      success: false,
      error: err.message,
    });
  }
};

// UPDATE 고양이 데이터 업데이트 -> PUT
export const updateAllCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;

    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = body;
        result = cat;
      }
    });

    console.log(params);

    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (error) {
    const err = error as ISystemError; // type assertion으로 error 타입을 확실하게 정해준다.

    // error logging
    res.status(400).send({
      success: false,
      error: err.message,
    });
  }
};

// UPDATE 고양이 데이터 부분적으로 업데이트 -> PATCH
export const updatePartialCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;

    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = { ...cat, ...body };
        result = cat;
      }
    });

    console.log(result);

    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (error) {
    const err = error as ISystemError; // type assertion으로 error 타입을 확실하게 정해준다.

    // error logging
    res.status(400).send({
      success: false,
      error: err.message,
    });
  }
};

// DELETE 고양이 데이터 삭제 -> DELETE
export const deleteCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const newCat = Cat.filter((cat) => cat.id !== params.id);

    res.status(200).send({
      success: true,
      data: {
        cat: newCat,
      },
    });
  } catch (error) {
    const err = error as ISystemError; // type assertion으로 error 타입을 확실하게 정해준다.

    // error logging
    res.status(400).send({
      success: false,
      error: err.message,
    });
  }
};
