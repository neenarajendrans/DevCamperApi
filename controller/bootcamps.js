const asyncHandler = require('../middleware/async');
const Bootcamp = require('../model/Bootcamp');


// @desc      Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
exports.getBootcamps = asyncHandler(async(req,res)=>{
    console.log(req.hello)
    const bootcamps = await Bootcamp.find();

    res.status(200).json({success:true, data:{bootcamps},hello:req.hello})// passing variables between middleware function


})
// @desc      Get  single bootcamps
// @route     GET /api/v1/bootcamps/:id
// @access    Public
exports.getBootcamp = asyncHandler(async(req,res)=>{
    console.log(req.params.Id);
    const bootcamp = await Bootcamp.findById(req.params.Id);

    res.status(200).json({success:true, data:{bootcamp}})


})
// @desc      create new bootcamp
// @route     POST /api/v1/bootcamps
// @access    Public
exports.createBootcamp = asyncHandler(async(req,res)=>{
    // console.log(req.body)
    // const bootcamp = await Bootcamp.create(req.body);

    res.status(200).json({success:true, data:{}})


})
// @desc      Update bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Public
exports.updateBootcamp = asyncHandler(async(req,res)=>{
    console.log(req.params.Id);
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.Id);// check the find method

    res.status(200).json({success:true, data:{bootcamp}})


})
// @desc      Delete bootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access    Public
exports.deleteBootcamp = asyncHandler(async(req,res)=>{
    console.log(req.params.Id);
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.Id);// check the find method

    res.status(200).json({success:true, data:{bootcamp}})


})


