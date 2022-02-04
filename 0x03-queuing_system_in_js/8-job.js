function createPushNotificationsJobs(jobs, queue) {
  if (!Array.isArray(jobs)) {
    throw Error('Jobs is not an array');
  } else {
      jobs.forEach((job) => {
        const q_job = queue.create('push_notification_code_3', job).save(
          (error) => {
            if(!error) {
              console.log(`Notification job created: ${q_job.id}`);
            }
        });
        q_job.on('complete', () => {
          console.log(`Notification job ${q_job.id} completed`);
        });

        q_job.on('failed', () => {
          console.log(`Notification job ${q_job.id} failed: ${error}`);
        });

        q_job.on('progress', (prog) => {
          console.log(`Notification job ${q_job.id} ${prog}% complete`);
        });
      });
    }
}

module.exports = createPushNotificationsJobs;
