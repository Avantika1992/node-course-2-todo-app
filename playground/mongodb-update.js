const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');


  db.collection('Users').findOneAndUpdate({name:'avantikaaaa'},{$set:{name:'avan'},$inc:{age:-2}},{returnOriginal:false}).then((res)=>{
    console.log(res)
  })


});
