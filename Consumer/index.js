import pkg from 'node-rdkafka';
 const { KafkaConsumer } = pkg;
 
 const consumer = new KafkaConsumer({
   'group.id': 'kafka-group',
   'metadata.broker.list': 'localhost:9092',
 }, {});
 
 consumer.connect();
 
 consumer
   .on('ready', () => {
     console.log('Consumer ready');
     consumer.subscribe(['test']);
     consumer.consume();
   })
   .on('data', (data) => {
     console.log('Received message: ${data.value.toString()}');
   });