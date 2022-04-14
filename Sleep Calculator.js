const getSleepHours = day =>{


    switch(day){
      case 'monday':
      return 8
      break;
      case 'tuesday':
      return 7
      break;
      case 'wednesday':
      return 8
      break;
      case 'thursday':
      return 5
      break;
      case 'friday':
      return 8
      break;
      case 'saturday':
      return 7
      break;
      case 'sunday':
      return 8
      break;
      default:
      return "Error!"
    }
  }
  
  const getActualSleepHours = () =>{
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  }
  console.log(getSleepHours('monday'));
  console.log(getActualSleepHours());
  
  
  const getIdealSleepHours = () =>{
    let idealHours = 8;
    return idealHours * 7;
  
  }
  
  const calculateSleepDebt = () =>{
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if(actualSleepHours === idealSleepHours){
      console.log('perfect amount of sleep');
    }else if(actualSleepHours > idealSleepHours){
      console.log('you got ' + (idealSleepHours - actualSleepHours) + ' hours more sleep than needed');
  
    }else if(actualSleepHours < idealSleepHours){
      console.log('you should get more rest because you only slept ' + (idealSleepHours - actualSleepHours)+ ' hours this week');
  
    }else{
      console.log('Error');
    }
  }
  
  
  calculateSleepDebt();
  