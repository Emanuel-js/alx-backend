import createPushNotificationsJobs from './8-jobs.js';
import kue from 'kue';


const queue = kue.createQueue();

const arr = [
  {
    phoneNumber: '345345435',
    message: 'This is the code 1234 to verify your account'
  }
];

before(() => queue.testMode.enter());
afterEach(() => queue.testMode.clear());
after(() => queue.testMode.exit());

it('test the job creation', () => {
  createPushNotificationsJobs(arr, queue);
  expect(queue.testMode.jobs.type).to.equal(Array);
});

