class EmployeeDetails {
   constructor(eData){
    this.ename=eData.ename;
    this.eage=eData.eage;
    this.edep=eData.edep;
    this.ebasicsalry=eData.ebasicsalry;
   }
   resetFields () {
    document.querySelector("#ename").value = '';
    document.querySelector("#edept").value = '';
    document.querySelector("#eAge").value = '';
    document.querySelector("#ebasicsalary").value = '';
}
   getpfAndhra(){
    this.totalsalary=0;
    this.pf = this.ebasicsalry * (12/100);
    this.hra = this.ebasicsalry * (24/100);
    this.totalsalary = this.pf + this.hra+this.ebasicsalry;
   }
   totaltax(){
    if (this.totalsalary>=500000){
        taxpercent = 10;
    } else if (this.ebasicsalry>=200000){
        taxpercent = 5;
    }
    this.Taxtobepaid = this.totalsalary *taxpercent / 100;
   }
  
}
   displayEmployeeDetails () {
    this.getpfAndhra();
    this.totaltax();
    this.resetFields();
    document.querySelector('#d_name').innerText=this.ename;
    document.querySelector('#d_age').innerText=this.eage;
    document.querySelector('#d_basicsalary').innerText=this.ebasicsalry;
    document.querySelector('#d_totalsalary').innerText=this.totalsalary;
    document.querySelector('#d_pf').innerText=this.pf;
    document.querySelector('#d_hra').innerText=this.hra;
    document.querySelector('#d_tax').innerText=this.Taxtobepaid;
   }


var generatepayslip = () =>{
    var data = {}
    data.ename = document.querySelector('#ename').value;
    data.edep = document.querySelector('#edept').value;
    data.eage = document.querySelector('#eage').value;
    data.ebasicsalry= parseInt (document.querySelector('#ebasicsalary').value);
 var employeeObj = new EmployeeDetails(data);
 employeeObj.displayEmployeeDetails();
}