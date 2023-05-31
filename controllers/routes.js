import routesModel from "../models/routes.js";

//create route
const createRoute = async (req, res) => {
  const data = req.body;

  try {
    // const savedRoute = await routesModel.findOne({
    //   Destination: data.Destination,
    // });
    // if (savedRoute) {
    //   return res.status(409).json({
    //     message: "Route already exits",
    //   });
    // }
    //else

    const newRoute = new routesModel({
      Origin: data.Origin,
      Destination: data.Destination,
    });

    const response = await newRoute.save();
    return res.status(200).json({
      message: "Route created successfully",
      data: response,
      error: null,
    });

    // const newRoute = new routesModel({
    //   From: data.From,
    //   To: data.To,
    // });
    // const saved = await newRoute.save();

    // res.status(201).json({
    //   message: "route successfully",
    //   data: saved,
    //   error: null,
    // });
  } catch (error) {
    console.log("Error occured  ", error);
    res.status(500).json({
      message: "Error occured, failed to load data",
      error: error,
      data: null,
    });
  }
};

//delete route

// const deleteRoute = async (req, res) => {
//   const data = req.body;

//   try {
//     const savedRoute = await accountSchema.findOne({
//       From: data.From,
//       To: data.To,
//     });
//     if (savedRoute) {
//       return res.status(409).json({
//         message: "Route already exits",
//       });
//     }
//     const response = new routesModel({
//       From: data.From,
//       To: data.To,
//     });
//     const route = await response.save();
//     res.json({
//       message: "route successfully",

//       data: route,
//       error: null,
//     });
//   } catch (error) {
//     console.log("Error occured  ", error);
//     res.status(500).json({
//       message: "Error occured, failed to load data",
//       error: error,
//       data: null,
//     });
//   }
// };

// //update route
// const changeRoute = async (req, res) => {
//   const data = req.body;

//   try {
//     const savedRoute = await accountSchema.findOne({
//       From: data.From,
//       To: data.To,
//     });
//     if (savedRoute) {
//       return res.status(409).json({
//         message: "Route already exits",
//       });
//     }
//     const response = new routesModel({
//       From: data.From,
//       To: data.To,
//     });
//     const route = await response.save();
//     res.json({
//       message: "route successfully",

//       data: route,
//       error: null,
//     });
//   } catch (error) {
//     console.log("Error occured  ", error);
//     res.status(500).json({
//       message: "Error occured, failed to load data",
//       error: error,
//       data: null,
//     });
//   }
// };

export { createRoute };
