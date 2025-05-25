import Kafka from 'node-rdkafka';
 
 const stream = Kafka.Producer.createWriteStream({
   'metadata.broker.list': 'localhost:9092'},
 
   {},
    {topic: 'test'});
 
 function queueMessage() {
   const sucess = stream.write(Buffer.from('hi'));
   if  (sucess) {
 
     console.log('Message queued successfully');
   }
   else{
     console.log('something went wrong');
   }
 }
 setInterval(() => {
     queueMessage();
 
 },3000)