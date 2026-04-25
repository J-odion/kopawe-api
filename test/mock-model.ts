export const mockModel = {
  findOne: jest.fn().mockReturnThis(),
  findById: jest.fn().mockReturnThis(),
  find: jest.fn().mockReturnThis(),
  save: jest.fn().mockResolvedValue({}),
  updateOne: jest.fn().mockResolvedValue({}),
  exec: jest.fn().mockResolvedValue(null),
  populate: jest.fn().mockReturnThis(),
  sort: jest.fn().mockReturnThis(),
};
