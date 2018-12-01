
const materials_to_sql = (search, first) => {
  if(first){
    return " WHERE materials LIKE '%"+search+"%'";
  }
  return " AND materials LIKE '%"+search+"%'";
}

const techniques_to_sql = (search, first) => {
  if(first){
    return " WHERE techniques LIKE '%"+search+"%'";
  }
  return " AND techniques LIKE '%"+search+"%'";
}

const drawing_type_to_sql = (search, first) => {
  if(first){
    return " WHERE drawing_type LIKE '%"+search+"%'";
  }
  return " AND drawing_type LIKE '%"+search+"%'";
}

const product_type_to_sql = (search, first) => {
  if(first){
    return " WHERE product_type LIKE '%"+search+"%'";
  }
  return " AND product_type LIKE '%"+search+"%'";
}

const product_materials_to_sql = (search, first) => {
  if(first){
    return " WHERE product_materials LIKE '%"+search+"%'";
  }
  return " AND product_materials LIKE '%"+search+"%'";
}

const categories = {
  "drawings":{
    "filters":{
      "materials":materials_to_sql,
      "techniques": techniques_to_sql,
      "drawing_type":drawing_type_to_sql
    }
  },
  "tapestry":{
    "filters":{
      "product_type": product_type_to_sql,
      "product_materials": product_materials_to_sql
    }
  }
}


module.exports = categories;