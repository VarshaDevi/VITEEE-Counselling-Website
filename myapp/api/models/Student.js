/**
* Student.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    entranceId:{
      type:"string", 
      required:true, 
      primaryKey:true
    },
 studentName:{ 
     type:"string", 
        required:true, 
        unique:true 
    },
  DOB:{
  type:"string",
  required:true 
},
    hsccutoffmark:{ 
     type:"string", 
        required:true
      
        
  },
  entrancecutoffmark:{ 
     type:"string", 
        required:true
      
        
},
  rank:{ 
     type:"string", 
        required:true, 
      unique:true
         
  }
  }
};


   
   