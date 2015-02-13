/**
 * MyapiController
 *
 * @description :: Server-side logic for managing myapis
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = { 
    index: function (req, res) { 
    res.view(null, { 
        title: "My App" 
    }); 
  } 
}; 
