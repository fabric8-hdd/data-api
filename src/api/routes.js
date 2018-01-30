var req_handlers = require("./handlers.js").request_handlers()

var appRouter = function (app, route_prefix) {
	app.get(route_prefix + "/hypothesis/:hypothesis_id/", function (req, res) {
		console.log("The request body is: ", req.params.hypothesis_id)
		req_handlers.get_hypothesis_res(req.params.hypothesis_id).then(function (result) {
			res.status(200)
			res.send(String(result))
		}).catch(function (err) {
			console.log("Error " + err.toString())
			// ToDo: Fix Http Status code to non 200
			res.status(400)
			res.send(err.toString())
		})
	}),

		app.get(route_prefix + "/readiness", function (req, res) {
			res.status(200);
			res.end();
		}),

		app.get(route_prefix + "/liveness", function (req, res) {
			res.status(200);
			res.end();
		})
}

module.exports = appRouter