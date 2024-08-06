require('../models/database');
const Property = require('../models/properties');
const Password=require('../models/signup');

exports.homepage = async (req, res) => {
  res.render('index', { title: 'Rent-application' });
}
exports.aboutPage = async (req, res) => {
  res.render('about', { title: 'Rent-application-about' });
}
exports.SignUp= async(req, res) => {
  const infoErrorObj=req.flash('infoError');
  const infoSignObj=req.flash('infoSign');
  res.render('signup', { title: 'Rent Application - SignUp', infoErrorObj,infoSignObj } );
}
exports.SignUpPost= async(req,res)=>{
  try{
    const Signadd= new Password({
     name:req.body.name,
     email:req.body.email,
     password:req.body.password,
    });
    await Signadd.save();
    req.flash('infoSign', 'Sign in done.');
    res.redirect('signup');
  }catch(error)
  {
    console.log("Details not added");
    req.flash('infoError', 'Sign in process disturbed.');
    res.redirect('signup');
    
  }
 
}
exports.login = async (req, res) => {
  res.render('login', { title: 'Rent-application-login'});
}
exports.check=async (req,res)=>{
  const{ name , email, password}= req.body;
  const user= await Password.findOne({email:req.body.email}).then(user => {
    if(user.email===email && user.password===password)
      { 
        console.log("login successfully");
        res.redirect('submit');
      }
      else{
        res.send("login failed");
        console.log("failed");
      }
  });

 
}
exports.exploreProperty = async (req, res) => {
  try {
    const limitNumber = 20;
    const property = await Property.find({}).sort({ _id: -1 }).limit(limitNumber);
    res.render('property', { title: 'Rent Application - Explore', property });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
}

exports.exploreDetails = async(req, res) => {
  try {
    let propertyID = req.params.id;
    const rent= await Property.findById(propertyID);


    res.render('details', { title: 'Rent Application - Details', rent } );
  } catch (error) {
    res.status(700).send({message: error.message || "Error Occured" });
  }
} 
exports.submit= async(req, res) => {
  const infoErrorObj=req.flash('infoError');
  const infoSubmitObj=req.flash('infoSubmit');
    res.render('submit', { title: 'Rent Application - Submit',infoErrorObj,infoSubmitObj } );
  }


  exports.submitOnPost= async(req, res) => {
    try{
      let imageUploadFile;
      let uploadPath;
      let newImageName;
  
      if(!req.files || Object.keys(req.files).length === 0){
        console.log('No Files where uploaded.');
      } else {
  
        imageUploadFile = req.files.image;
        newImageName = Date.now() + imageUploadFile.name;
  
        uploadPath = require('path').resolve('./') + '/public/Uploads/' + newImageName;
  
        imageUploadFile.mv(uploadPath, function(err){
          if(err) return res.status(500).send(err);
        });
  
      }

    
      const newProperty = new Property({
        name: req.body.name,
        description: req.body.description,
        email: req.body.email,
        price:req.body.price,
        category: req.body.category,
        type:req.body.type,
        bed:req.body.bed,
        bath:req.body.bath,
        feet:req.body.feet,
        image: newImageName,
      });

      await newProperty.save();

      req.flash('infoSubmit', 'Property has been updated.');
      res.redirect('submit');
    }catch(error){
      console.log("property not added.");
      req.flash('infoError', 'Property has not been updated.');
      res.redirect('submit');
    }
 
  }
  exports.update= async(req, res) => {
    const infoErrorObj=req.flash('infoError');
    const infoUpdateObj=req.flash('infoUpdate');
    res.render('update', { title: 'Rent Application- Update',infoErrorObj,infoUpdateObj} );
  }

  exports.updateOnPatch = async (req, res) => {

    try {
      let imageUploadFile;
      let newImageName = null;
  
      if (req.files && req.files.image) {
        imageUploadFile = req.files.image;
        newImageName = Date.now() + path.basename(imageUploadFile.name);
        const uploadPath = path.resolve('./') + '/public/Uploads/' + newImageName;
        await imageUploadFile.mv(uploadPath);
      }
  
      const updatedProperty = new Property({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        type: req.body.type,
        bed: req.body.bed,
        bath: req.body.bath,
        feet: req.body.feet,
        image: newImageName || req.body.existingImage, 
      });
  
      await updatedProperty.save();
      req.flash('infoUpdate', 'Property has been updated.');
      res.redirect('update'); 
    } catch (error) {
      console.log("Property not updated: ", error.message);
      req.flash('infoError', 'Property has not been updated.');
      res.redirect('update'); 
    }
  };

  




// async function insertDymmyRentData() {
//   try {
//     await Pro.insertMany(
//       [
//         {
//           "name": "Park View Residences",
//           "description": "Park View Residences is a residential community located in Calgary, Alberta, Canada. It offers a variety of housing options including single-family homes, townhouses, and apartments. The community is known for its beautiful green spaces, parks, and playgrounds, providing residents with a peaceful and relaxing environment. It is also conveniently located near shopping centers, restaurants, schools, and public transportation.",
//           "email":"albert@gmail.com",
//           "price":"$65,0000",
//           "category":"House",
//           "type":"sale",
//           "bed":"6",
//           "bath":"2",
//           "feet":"200",
//           "image": "park-view.png"
//         },
//       ]
//     );
//   } catch (error) {
//     console.log(' err', + error)
//   }
// }


// insertDymmyRentData();

// async function insertDymmyInfoData() {
//     try {
//       await Password.insertMany(
//         [
//           {
//             "name": "Ruchi patil",
//             "email":"ruchi@gmail.com",
//             "password":"123"
//           },
//         ]
//       );
//     } catch (error) {
//       console.log(' err', + error)
//     }
//   }
  
  
//   insertDymmyInfoData();