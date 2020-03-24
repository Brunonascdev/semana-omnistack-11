const express = require("express");

const ongController = require("./controllers/OngController");
const incidentController = require("./controllers/IncidentController");
const profileController = require("./controllers/ProfileController");
const sessionController = require("./controllers/SessionController");

const routes = express.Router();

/* Route Params (.params) - /:id 
       Query Params (.query) - /users?id=2
       Request Body (.body) - Corpo da Requisição 
    
   const queryParams = req.query;
   const routeParams = req.params;
   const requestBody = req.body;

   console.log(queryParams);
   console.log(routeParams);
   console.log(requestBody);
*/

routes.post("/sessions", sessionController.create);

routes.get("/ongs", ongController.index);
routes.post("/ongs", ongController.create);

routes.get("/profile", profileController.index);

routes.get("/incidents", incidentController.index);
routes.post("/incidents", incidentController.create);
routes.delete("/incidents/:id", incidentController.delete);

module.exports = routes;
