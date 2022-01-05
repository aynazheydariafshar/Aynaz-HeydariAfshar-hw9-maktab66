const timeToConvert = input => {
    const [time, modifier] = input.split(' ');
    let [hours, minutes] = time.split(':');
    
    if (hours === '12') {
        hours = '00';
    };
    if (modifier === 'p.m.') {
        hours = parseInt(hours, 10) + 12;
    };
    return [+hours,+minutes];
};

const timetoduration = input => {

    //check input is string
    if(typeof input !== "string"){
        throw "please enter string"
    }
    
    //convert time
    const res = timeToConvert(input);

    let houre = res[0]
    let minute = res[1]

    //check time with meal
    if(houre <7){
        houre = 6 - houre
    }else if(7 <= houre  && houre  < 12){
        houre = 12 - houre
    }else if(12 <= houre  && houre  < 19){
        houre = 19 - houre
    }else if(19 <= houre  && houre  <= 23){
        houre = houre - 12
        houre = 19 - houre
    }

    //if time is meal
    if((houre === 7 && minute === 00)|| (houre === 12 && minute === 00) || (houre === 19 && minute === 00)){
        houre = 0
    }

    //set min
    if(minute === 00){
        minute === 0;
    }else{
        minute = 60 - minute;
    }

    return [houre , minute];
}

console.log(timetoduration("2:00 p.m."));
console.log(timetoduration("5:50 a.m."));