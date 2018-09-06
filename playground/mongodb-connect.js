//const MongoClient=require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

  /*db.collection('Todos').insertOne({
    text:'something',
    completed:false
  },(err,result)=>{
    if(err){
      return console.log('unable to insert todo',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });

  db.collection('Users').insert({

    name:'avi',
    age:25,
    location:'va'
  },(err,result)=>{
    if(err){
      return console.log('unable to insert to Users',err)
    }
    console.log(result)
  });
*/
  db.close();
});
