import kue from 'kue'

const jobs = [
  {
    phoneNumber: '4153518780',
    message: 'This is the code 1234 to verify your account'
  },
  {
    phoneNumber: '4153518781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153518743',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4153538781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153118782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4153718781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4159518782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4158718781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153818782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4154318781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4151218782',
    message: 'This is the code 4321 to verify your account'
  }
];

const queue = kue.createQueue();

jobs.forEach((job) => {
  const q_job = queue.create('push_notification_code_2', job).save(
    (error) => {
      if(!error) {
        console.log(`Notification job created: ${q_job.id}`);
      }
  });

  q_job.on('complete', () => {
    console.log(`Notification job ${q_job.id} completed`);
  });
  q_job.on('failed', (error) => {
    console.log(`Notification job ${q_job.id} failed: ${error}`);
  });
  q_job.on('progress', (prog) => {
    console.log(`Notification job ${q_job.id} ${prog}% complete`);
  });
});
