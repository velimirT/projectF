
const materials_to_sql = (search, first) => {
  if(first){
    return " WHERE materials LIKE '%"+search+"%'";
  }
  return " AND materials LIKE '%"+search+"%'";
}


const categories = {
  "drawings":{
    "filters":{
      "materials":materials_to_sql
    }
  }
}


module.exports = categories;