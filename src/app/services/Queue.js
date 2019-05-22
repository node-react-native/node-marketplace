const kue = require('kue')
const redisConfig = require('../../config/redis')
const jobs = require('../jobs')

const Queue = kue.createQueue({
  redis: redisConfig
})

Queue.process(jobs.PurchaseMail.getKey, jobs.PurchaseMail.handle)

module.exports = Queue
