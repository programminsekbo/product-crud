async function onCreate(){
           
    let url="https://crud.teamrabbil.com/api/v1/CreateProduct";

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

       
    let rawData={
            "ProductName":"DemoAjax",
            "ProductCode":"1234567123123",
            "Img":"abcAjax",
            "UnitPrice":"12Ajax",
            "Qty":"1Ajax",
            "TotalPrice":"12Ajax"
        }

        let reqDetails={
            headers:myHeaders,
            method: "POST",
            body: JSON.stringify(rawData),
        }
        
        let data= await fetch(url,reqDetails)
        let JsonData=await data.json();
        console.log(JsonData);


}


async function onDelete(){
    let id="66649013a9e9e30ec38d4427"
    let url="https://crud.teamrabbil.com/api/v1/DeleteProduct/"+id    
    let data=await fetch(url);
    let JsonData=await data.json();
    console.log(JsonData);
}


async function onRead(){
    let url="https://crud.teamrabbil.com/api/v1/ReadProduct"
    let data=await fetch(url);
    let JsonData=await data.json();
    console.log(JsonData);
}


async function onUpdate(){
    let id="66649270a9e9e30ec38d4457"   
    let url="https://crud.teamrabbil.com/api/v1/UpdateProduct/"+id;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

       
    let rawData={
            "ProductName":"DemoAjax",
            "ProductCode":"abc123Ajax",
            "Img":"abcAjax",
            "UnitPrice":"12Ajax",
            "Qty":"1Ajax",
            "TotalPrice":"12Ajax"
        }

        let reqDetails={
            headers:myHeaders,
            method: "POST",
            body: JSON.stringify(rawData),
        }
        
        let data= await fetch(url,reqDetails)
        let JsonData=await data.json();
        console.log(JsonData);


}


onRead();