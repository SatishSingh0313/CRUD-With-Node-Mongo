const dbConnect=require('./mongodb');

const deleteData= async ()=>{
    let data=await dbConnect();
    let result = await data.deleteOne({"name":'rahul'});

    console.log(result);

    if (result.acknowledged) {
        console.warn("data is deleted");
    }
}

deleteData();