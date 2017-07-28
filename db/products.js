/* jshint esversion:6 */

module.exports = {
  convertRequest : convertRequest,
  putIndex : putIndex,
  deleteIndex : deleteIndex,
};

function putIndex (product, dataReq){
  for (let prop in product[0]) {
    if (product[0][prop] !== dataReq[prop] && dataReq[prop] !== ''){
      product[0][prop] = dataReq[prop];
    }
  }
  return product;
}

function deleteIndex (dataObject){
  let dataIndex = productData.findIndex((data)=>{
    return dataObject.id === data.id;
  });
  console.log(dataIndex);
  if (dataIndex > -1){
    productData.splice(dataIndex, 1);
  }
  return dataIndex;
}

function convertRequest (request) {
  const data = {
    id : parseInt(request.params.id),
    name : request.body.name,
    price : parseFloat(request.body.price),
    inventory : parseInt(request.body.inventory)
  };
  return data;
}