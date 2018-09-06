const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');
/*
  db.collection('Todos').find().toArray().then((doc)=>{
    console.log(JSON.stringify(doc,undefined,2))
  },(err)=>{
    console.log('unable to fetch todos',err);
  })
*/

  db.collection('Users').find().count().then((doc)=>{
    console.log(doc)
  },(err)=>{
    console.log('err')
  })

});
