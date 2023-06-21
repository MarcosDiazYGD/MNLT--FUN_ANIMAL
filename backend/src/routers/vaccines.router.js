const router = require('express').Router()
const vaccineServices = require('../services/vaccines.services')

router.route('/')
.get(vaccineServices.getAllVaccines)
.post(vaccineServices.postVaccine)

router.route('/:id')
  .get(vaccineServices.getVaccineById)
  .delete(vaccineServices.deleteVaccine)

 module.exports = router
