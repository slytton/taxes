module.exports = {
  taxes: function(sale){
    var percentages = [0.1, 0.07, 0.05, 0.03];
    var taxes = 0;
    for (var i = 0; sale > 0 && i < percentages.length; i++) {
      if(sale <= 10 || i === (percentages.length - 1)){
        taxes += sale * percentages[i];
      }else{
        taxes += 10 * percentages[i];
      }
      sale -= 10;
    }
    return taxes;
  }
}
