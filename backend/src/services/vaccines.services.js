const VaccinesController = require("../controllers/vaccines.controller");
const handleResponces = require('../utils/handleResponses')

const getAllVaccines = (req, res) => {
  VaccinesController
    .findAllVaccine()
    .then((data) => {
      handleResponces.success({
        res,
        status: 200,
        data: data,
        message: "the request was successful",
      });
    })
    .catch((err) => {
      handleResponces.error({
        res,
        status: 404,
        message: " something bad",
        data: err,
      });
    });
};
const getVaccineById = (req, res) => {
  const id = req.params.id;
  VaccinesController.findVaccineById(id)
    .then((data) => {
      if (data) {
        handleResponses.success({
          res,
          status: 200,
          message: "the request was successful",
          data: data,
        });
      } else {
        handleResponses.error({
          res,
          status: 404,
          message: "the id not found",
        });
      }
    })
    .catch((err) => {
      handleResponses.error( {
        res,
        status: 400,
        message: `error getting the vaccine by id: ${id}`,
        data: err
      })
      })
    };

  const postVaccine = (req, res) => {
    const newVaccine = {
      title: req.body.title
    }
    VaccinesController.createVaccines(newVaccine)
    .then((data) => {
      if (data) {
        handleResponses.success({
          res,
          status: 201,
          message: 'vaccine created successfully',
          data: data
        })
      } else {
        handleResponses.error({
          res, 
          status: 404,
          message: 'error creating vaccine' ,
          fields: {
            title: 'string'
          }
        })
      }
    }).catch((err) => {
      handleResponses.error({
        res, 
        status: 500,
        message: 'something bad',
        data: err
      })
    });
  }

  const deleteVaccine = (req, res) => {
    const id = req.params.id;
    VaccinesController
      .deleteVaccines(id)
      .then((data) => {
        if (data) {
          handleResponces.success({
            res,
            status: 204,
            message: `Vaccine with id: ${id} deleted successfully`,
          });
        } else {
          handleResponces.error({
            res,
            status: 404,
            message: `Vaccine with id: ${id} not found`,
          });
        }
      })
      .catch((err) => {
        handleResponces({
          res,
          status: 400,
          message: `Error occurred trying to delete Vaccine with id: ${id}}`,
          data: err,
        });
      });
  };

    module.exports = {
      getAllVaccines,
      getVaccineById,
      postVaccine,
      deleteVaccine
    }