/**
 * StudentController
 *
 * @description :: Server-side logic for managing students
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  findStudent:function(req, resp){
    Student.findOne({entranceId:req.param('id')}).exec(function(err, res){
      return resp.send(res);
    })
  }
};

