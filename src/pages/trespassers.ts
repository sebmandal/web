import Route from "../core/route";
import Express from "express";

const script = (req: Express.Request, res: Express.Response) => {
	return res.render("trespassers", req.session);
};

export default class Trespassers extends Route {
	/**
	 * super()
	 * parameter 1: the URL path (/)
	 * parameter 2: the Express routing method (GET)
	 * parameter 3: the Express middleware/handler function (script)
	 **/
	constructor() {
		super("/trespassers", "get", script);
	}
}
