function formattZabbixDate(date) {
    var months = {
      Jan: '01',
      Feb: '02',
      Mar: '03',
      Apr: '04',
      May: '05',
      Jun: '06',
      Jul: '07',
      Aug: '08',
      Sep: '09',
      Oct: '10',
      Nov: '11',
      Dec: '12',
  };
    
    var month = date.slice(0, 3).trim()
    var year = date.slice(15, 20).trim()
    var day = date.slice(4, 6).trim().length == 2 
        ? date.slice(4, 6).trim() 
      : '0' + date.slice(4, 6).trim()
      
      return year+months[month]+day
  }
  
  return formattZabbixDate(value)