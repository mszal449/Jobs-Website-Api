// api controller

const getAllJobs = async (req, res) => {
    res.send('get all job')
}
const getJob = async (req, res) => {
    const id = req.params.id

    res.send(`get job with id ${id}`)
}
const createJob = async (req, res) => {
    res.send('create job')
}
const updateJob = async (req, res) => {
    res.send('update job')
}
const deleteJob = async (req, res) => {
    res.send('delete job')
}


module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}