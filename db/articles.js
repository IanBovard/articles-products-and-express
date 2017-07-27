/* jshint esversion:6 */

module.exports = {
  getArticle : getArticle,
  postArticle : postArticle,
  getIndex : getIndex,
  validateInput : validateInput,
};
let articleData = [];

function getArticle () {
  return articleData;
}
function getIndex (dataObject) {
  let articleIndex = articleData.findIndex((data)=>{
    return dataObject.urlTitle === data.urlTitle;
  });
  return articleIndex;
}
function postArticle (dataObject) {
  articleData.push(dataObject);
  console.log(articleData);
  return true;
}
function validateInput (dataObject) {
  for (let prop in dataObject){
    if (dataObject[prop] === ''){
      return false;
    }else{
      return true;
    }
  }
}