function PublicService() {
    this.rates = {
        hotWater: 7,
        coldWater: 1,
        gas: 0.3,
        electricity: 1.6,
      }
    this.meters = {};
}

PublicService.prototype.addMeterReadings = function(meterValue, meterName) {
    if (!this.rates.hasOwnProperty(meterName)) {
        throw new Error(`Service --${meterName}-- is unavailble.`); 
    }
    if (this.meters.hasOwnProperty(meterName)) {
        throw new Error(`Service --${meterName}-- is already included`); 
    }
    this.meters[meterName] = meterValue;
}

PublicService.prototype.deleteMeterReadings = function(meterName) {
    delete this.meters[meterName];
}

PublicService.prototype.getSum = function() {
    let sum = 0;
    for (let meterName in this.meters) {
        sum += this.meters[meterName] * this.rates[meterName];
    }
    return sum;
}

const service = new PublicService();

service.addMeterReadings(100, "hotWater");
service.addMeterReadings(200, "coldWater");
// service.addMeterReadings(300, "garbage");
service.deleteMeterReadings("coldWater");
service.addMeterReadings(300, "electricity");
// service.addMeterReadings(300, "electricity");
    console.log('service', service);

const res = service.getSum();
    console.log('res', res);