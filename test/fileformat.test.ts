import { request, response } from "express";
import { fileFormat } from "./Middleware/fileFormat"

describe("Testing fileFormat middleware", () => {
    it("Should return call next function", () => {
        const req = request;
        const res = response;

        const mockNextFn = jest.fn();

        fileFormat(req, res, mockNextFn);

        expect(mockNextFn).toBeCalled();
    })
})