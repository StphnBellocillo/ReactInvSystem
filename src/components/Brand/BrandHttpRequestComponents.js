import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/brand",
});

const fn = {};

fn.getAllBrands = async function () {
  return await api.get("/get").then((response) => {
    // console.log("response.data", response.data);
    return response.data;
  });
};

fn.saveBrand = async function (objBrandSave) {
  objBrandSave = await api.post("/post", objBrandSave);
  //  console.log("objBrandSave",objBrandSave);
  return objBrandSave;
};

fn.deleteBrand = async function(brandid){
  console.log("delete brand", brandid)
  let resultObj = await api.delete( "/"+ brandid + '/delete')
  return resultObj;
}
fn.lastItem = function (arr) {
  var { [Object.keys(arr).pop()]: lastItem } = arr;
  // console.info("lastitem", lastItem); //"carrot"
  return lastItem;
};

export default fn;
