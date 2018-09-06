const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');


  db.collection('Users').findOneAndDelete({_id:ObjectID("5b91a8f2f0e9239a647323c1")}).then((doc)=>{
    console.log(doc)
  })

});
