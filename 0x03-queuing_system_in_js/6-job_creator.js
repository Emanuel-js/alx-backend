import kue from 'kue'

const queue = kue.createQueue();

const data = {
  phoneNumber: 4153518780,
  message: 'This is the code to verify your account'
}

const q_obj = queue.create('push_notification_code', data).save(
  (error) => {
    if(!error) {
      console.log(`Notification job created: ${q_obj.id}`);
    }
});

q_obj.on('complete', () => {
  console.log('Notification job completed');
});

q_obj.on('failed', () => {
  console.log('Notification job failed');
});
