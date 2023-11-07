class emp{
    firsName = "gautam";
    lastName = "rawat";
    constructor(salary,bonus)
    {
        this.salary = salary;
        this.bonus = bonus;
    }

    getDetails() {
        return "Name = "+this.firsName+" and salary is "+this.salary
    }

    getSalaryAfterTax = () => this.salary * 0.9;
    
}

let obj = new emp(1000,20);

console.log(obj.getDetails())
console.log(obj.getSalaryAfterTax())