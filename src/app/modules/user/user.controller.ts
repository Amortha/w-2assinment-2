import { RequestHandler } from 'express';
// import { z } from 'zod'
import { UsersService } from './user.service';

const createUser: RequestHandler = async (req, res, next) => {
  try {
    const { user } = req.body;
    const result = await UsersService.createUser(user);
    res.status(200).json({
      success: true,
      message: 'user created succesfully!',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UsersController = {
  createUser,
};
